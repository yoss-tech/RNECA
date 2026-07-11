<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\actividad_memo;
use App\Models\Eca;
use App\Models\foto_activ;
use App\Models\memoria_foto;
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

        $actividad_memo = DB::table('actividades_mem as am')
            ->join('program_cult as pc', 'am.id_program', '=', 'pc.id_program')
            ->join('memoria_fotografica as mf', 'am.id_memoria', '=', 'mf.id_memoria')
            ->join('foto_activ as fa', 'am.id_actividad', '=', 'fa.id_actividad')
            ->select(
                'mf.descrip_gen',
                'am.descripcion',
                'fa.ruta_img',
                'am.id_actividad',
                'am.id_memoria',
                'am.id_program',
                'id_claveEca'
               )
            ->where('id_claveEca', $eca->id_claveEca)
        ->get();

        return response()->json($actividad_memo);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all(), $request->files->all());

        // 1. Validar los datos de entrada, incluyendo las imágenes.
        $validator = Validator::make($request->all(), [
            'descripcion' => 'required|string',
            'id_program'  => 'required|string|exists:program_cult,id_program',
            'imagenes'    => 'required|array',
            'imagenes.*'  => 'required|image|mimes:jpeg,png,jpg,gif|max:5000', // Cada imagen en el array es requerida y debe ser un archivo de imagen válido.
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
     * Display the specified resource.
     */
    public function show(actividad_memo $actividad_memo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(actividad_memo $actividad_memo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, actividad_memo $actividad_memo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(actividad_memo $actividad_memo)
    {
        //
    }
}
