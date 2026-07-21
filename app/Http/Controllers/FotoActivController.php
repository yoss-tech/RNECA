<?php

namespace App\Http\Controllers;

use App\Models\foto_activ;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;


class FotoActivController extends Controller
{

    public function getImagenes($id_actividad)
    {
        $fotos = DB::table('actividades_mem as am')
            ->join('foto_activ as fa', 'fa.id_actividad', '=', 'am.id_actividad')
            ->select('fa.id_foto', 'fa.id_actividad', 'fa.ruta_img') // Traemos ruta_imagen también
            ->where('am.id_actividad', $id_actividad)
            ->get();

        return response()->json($fotos);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_actividad'  => 'required|string|exists:actividades_mem,id_actividad',
            'imagenes'    => 'required|array',
            'imagenes.*'  => 'required|image|mimes:jpeg,png,jpg,gif|max:5000',
        ]);

        if($validator->fails()){
            $data = [
                'message' => 'Error en la validación de datos',
                'status' => 400,
                'body' => $validator->errors()
            ];
            return response()->json($data, 400);
        }

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
                    'id_actividad' => $request->id_actividad,
                ]);
                $imagenesGuardadas[] = $foto;
            }
        }

        $data = [
            'message' => 'Imagenes guardadas correctamente',
            'status' => 201,
            'body' => $imagenesGuardadas
        ];

        return response()->json($data, 201);
    }

    // Sirve el binario físico de la imagen usando el ID de la foto
    public function ServirImg($id_foto)
    {
        // Buscamos el registro de la foto
        $foto = DB::table('foto_activ')->where('id_foto', $id_foto)->first();

        if (!$foto) {
            return response()->json(['message' => 'Registro de foto no encontrado'], 404);
        }

        $rutaAbsoluta = storage_path('app/public/' . $foto->ruta_img);
        $rutaAbsoluta = str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $rutaAbsoluta);

        if (file_exists($rutaAbsoluta)) {
            if (ob_get_level()) {
                ob_end_clean();
            }
            $mimeType = mime_content_type($rutaAbsoluta);

            return response()->file($rutaAbsoluta, [
                'Content-Type' => $mimeType,
                'Content-Disposition' => 'inline'
            ]);
        }

        return response()->json(['message' => 'Archivo físico no encontrado',
        'ruta_final' => $rutaAbsoluta,
        ], 404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(foto_activ $foto_activ)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $foto = foto_activ::findOrFail($id);

            // Eliminar el archivo del almacenamiento
            if (Storage::disk('public')->exists($foto->ruta_img)) {
                Storage::disk('public')->delete($foto->ruta_img);
            }
            $foto->delete();
            return response()->json(['message' => 'Imagen eliminada correctamente'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al eliminar la imagen', 'error' => $e->getMessage()], 500);
        }
    }
}
