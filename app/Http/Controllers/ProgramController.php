<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\program;
use App\Models\Eca;
use App\Models\actividad_memo;
use App\Models\foto_activ;
use App\Models\memoria_foto;


class ProgramController extends Controller
{
    public function index()
    {
        $programs = DB::table('eca')
            ->join('program_cult as pc', 'pc.clave_eca', '=', 'eca.clave_eca')
            ->select(
                'eca.clave_eca',
                'pc.municipio',
                'pc.localidad',
                'pc.tipo_platica',
                'pc.otras_activ',
                'pc.alumnos_Aten',
                'pc.pobl_ate',
                'pc.fecha_mes',
                'pc.id_program'
            )
            ->where('eca.id_usuario', auth()->user()->id_usuario)
            ->get();
        return response()->json($programs); // Devuelve un array de objetos.
    }

    public function store(Request $request)
    {

        // Obtener la información del ECA vinculada al usuario autenticado
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['message' => 'El usuario no tiene un ECA asignado'], 403);
        }

        // 2. Crear el programa de cultura
        $validator = Validator::make($request->all(), [
            'municipio' => 'required',
            'localidad' => 'required',
            'tipo_platica' => 'required',
            'otras_activ' => 'required',
            'descripcion_activ' => 'required',
            // 'alumnos_Aten' => 'required',
            // 'pobl_ate' => 'required',
            'fecha_mes' => 'required',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validación de datos',
                'status' => 400,
                'body' => $validator->errors()
            ];
            return response()->json($data, 400);
        }

        $program = program::create([
            'municipio' => $request->municipio,
            'localidad' => $request->localidad,
            'tipo_platica' => $request->tipo_platica,
            'otras_activ' => $request->otras_activ,
            'descripcion_activ' => $request->descripcion_activ,
            'alumnos_Aten' => $request->alumnos_Aten,
            'pobl_ate' => $request->pobl_ate,
            'fecha_mes' => $request->fecha_mes,
            'clave_eca' => $eca->clave_eca, // Se asigna automáticamente
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
                    'id_actividad' => $program->id_program,
                ]);
                $imagenesGuardadas[] = $foto;
            }
        }


        if (!$program) {
            $data = [
                'message' => 'Error al crear el programa de cultura',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $data = [
            'message' => 'Programa de cultura creado correctamente',
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function destroy($id)
    {
        $program = program::find($id);

        if (!$program) {
            $data = [
                'message' => 'Programa de cultura no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $program->delete();

        $data = [
            'message' => 'Programa de cultura eliminado correctamente',
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_program' => 'required',
            'municipio' => 'required',
            'localidad' => 'required',
            'tipo_platica' => 'required',
            'otras_activ' => 'required',
            'alumnos_Aten' => 'required',
            'pobl_ate' => 'required',
            'fecha_mes' => 'required',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validación de datos',
                'status' => 400,
                'body' => $validator->errors()
            ];
            return response()->json($data, 400);
        }

        $validatedData = $validator->validated();

        try {
            DB::transaction(function () use ($validatedData) {
                $Newprogram = program::findOrFail($validatedData['id_program']);
                $Newprogram->municipio = $validatedData['municipio'];
                $Newprogram->localidad = $validatedData['localidad'];
                $Newprogram->tipo_platica = $validatedData['tipo_platica'];
                $Newprogram->otras_activ = $validatedData['otras_activ'];
                $Newprogram->alumnos_Aten = $validatedData['alumnos_Aten'];
                $Newprogram->pobl_ate = $validatedData['pobl_ate'];
                $Newprogram->fecha_mes = $validatedData['fecha_mes'];
                $Newprogram->save();
            });

            $data = [
                'message' => 'Actualización realizada correctamente',
                'status' => 201,
            ];
            return response()->json($data, 201);
        } catch (\Exception $e) {
            $data = [
                'message' => 'Error en la actualización',
                'body' => $e->getMessage(),
                'status' => 500
            ];
            return response()->json($data, 500);
        }
    }
}
