<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\actividad_memo;
use App\Models\Eca;
use App\Models\foto_activ;
use App\Models\memoria_foto;
use App\Models\program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ActividadMemoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        $actividad_memo = DB::table('program_cult as pc')
            ->select(
                'pc.descripcion_activ',
                'pc.otras_activ',
                'pc.id_program',
                'pc.clave_eca'
            )
            ->where('pc.clave_eca', $eca->clave_eca)
            ->distinct()
            ->get();

        return response()->json($actividad_memo);
    }

    public function actividadById($id)
    {
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();


        $actividadById = DB::table('program_cult as pc')
            ->join('foto_activ as fa', 'pc.id_program', '=', 'fa.id_actividad')
            ->select(
                'pc.descripcion_activ',
                'pc.otras_activ',
                'pc.id_program',
                'pc.clave_eca'
            )
            ->where('pc.clave_eca', $eca->clave_eca)
            ->where('pc.id_program', $id)
            ->distinct()
            ->get();
    

        return response()->json($actividadById);
    }

    public function store(Request $request)
    {
        // dd($request->all(), $request->files->all());

        // 1. Validar los datos de entrada, incluyendo las imágenes.
        $validator = Validator::make($request->all(), [
            'descripcion' => 'required|string',
            'id_program'  => 'required|string|exists:program_cult,id_program',
            'imagenes'    => 'required|array',
            'imagenes.*'  => 'required|image|mimes:png,jpg|max:5000', // Cada imagen en el array es requerida y debe ser un archivo de imagen válido.
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación de datos',
                'body'    => $validator->errors(),
            ], 400);
        }

        // 2. Obtener el ECA del usuario autenticado.
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        // 3. Obtener la memoria fotográfica más reciente asociada a ese ECA.
        $memoria = memoria_foto::where('id_claveEca', $eca->clave_eca)
            ->latest('id_memoria') // Forma más limpia de ordenar por el más reciente si usas timestamps o IDs secuenciales.
            ->first();

        // 4. Crear el registro de la actividad.
        $actividad = actividad_memo::create([
            'descripcion' => $request->descripcion,
            'id_memoria'  => $memoria->id_memoria,
            'id_program'  => $request->id_program,
        ]);

        $imagenesGuardadas = [];
        // 5. Procesar y guardar cada imagen.
        if ($request->hasFile('imagenes')) {
            foreach ($request->file('imagenes') as $archivoImagen) {
                // Guardar el archivo y obtener la ruta.
                $path = $archivoImagen->store('uploads', 'public');

                // Crear un registro por cada imagen en la tabla 'foto_activ'.
                $foto = foto_activ::create([
                    'nombre'       => $archivoImagen->getClientOriginalName(),
                    'ruta_img'     => $path,
                    'id_actividad' => $actividad->id_actividad,
                ]);
                $imagenesGuardadas[] = $foto;
            }
        }

        // 6. Devolver una respuesta exitosa.
        return response()->json([
            'message'   => 'Actividad y fotos creadas correctamente',
            'actividad' => $actividad,
            'imagenes'  => $imagenesGuardadas,
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_program' => 'required|string',
            'id_actividad' => 'required|string',
            'otras_activ' => 'required|string',
            'descripcion' => 'required|string'
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación de datos',
                'body'    => $validator->errors(),
            ], 400);
        }

        $memoria = $request->validate([
            'id_program' => 'required|string',
            'id_actividad' => 'required|string',
            // 'otras_activ' => 'string',
            'descripcion' => 'required|string'
        ]);

        $validatedData = $validator->validated();
 
        try{
            DB::transaction(function () use ($validatedData){
                $programa = program::findOrFail($validatedData['id_program']);
                $programa->otras_activ = $validatedData['otras_activ'];
                $programa->save();  
                
                $actividad = actividad_memo::findOrFail($validatedData['id_actividad']);
                $actividad->descripcion = $validatedData['descripcion'];
                $actividad->save();
            });

            return response()->json([
                'message' => 'Actividad y programa actualizados correctamente',
                'status' => 'succes',
            ], 201);

        }catch(\Exception $e){
            return response()->json([
                'message' => 'Error',
                'body' => $e->getMessage(),
                'status' => 400], 
                400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(actividad_memo $actividad_memo)
    {
        //
    }
}
