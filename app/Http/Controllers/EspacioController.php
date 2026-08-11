<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\espacio;
use App\Models\Eca;
use App\Models\detail_asist;
use App\Models\detail_nex;
use App\Models\material_didact;


class EspacioController extends Controller
{
    // Obtener todos los espacios de cultura asociados al usuario autenticado en base a la fecha
    public function index()
    {
        $currentMonth = date('m');
        $currentYear = date('Y');

        $espacio = DB::table('eca')
            ->join('espaciocultura as esp', 'eca.clave_eca', '=', 'esp.clave_eca')
            ->join('detalle_asistente as da', 'esp.id_espacio', '=', 'da.id_espacio')
            ->join('detalle_nexo as dn', 'esp.id_espacio', '=', 'dn.id_espacio')
            ->join('material_didact as md', 'esp.id_espacio', '=', 'md.id_espacio')
            ->select(
                'eca.clave_eca',
                'md.inedito',
                'md.reproducido',
                'md.adquirido',
                'da.genero',
                'da.rango_edad',
                'da.cantidad',
                'esp.total_pobl',
                'dn.list_asist',
                'dn.evi_foto',
                'dn.nota_period',
                'esp.comentarios',
                'eca.fecha_apert',
                'eca.fecha_forta'
            )
            ->where('eca.id_usuario', auth()->user()->id_usuario)
            ->whereMonth('esp.fecha_registro', $currentMonth)
            ->whereYear('esp.fecha_registro', $currentYear)
            ->get();
        return response()->json($espacio);
    }

    // Revisar si ya existe un registro de espacio de cultura para el ECA del usuario autenticado en el mes y año actual
    public function checkRegistroActual(Request $request)
    {
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['data' => null, 'message' => 'El usuario no tiene un ECA asignado'], 403);
        }

        $currentMonth = date('m');
        $currentYear = date('Y');

        $espacio = DB::table('espaciocultura as esp')
            ->where('esp.clave_eca', $eca->clave_eca)
            ->whereMonth('esp.fecha_registro', $currentMonth)
            ->whereYear('esp.fecha_registro', $currentYear)
            ->exists();

        return response()->json(['registro_existente' => $espacio]);
    }

    // Crear un nuevo espacio de cultura y sus detalles asociados
    public function store(Request $request)
    {
        // Obtener la información del ECA vinculada al usuario autenticado
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['message' => 'El usuario no tiene un ECA asignado'], 403);
        }

        $validator = Validator::make($request->all(), [
            'total_pobl' => 'required',
            'comentarios' => 'required',
            'asistentes' => 'required|array',
            'nexo' => 'required|array',
            'material' => 'required|array'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validación de datos',
                'status' => 400,
                'body' => $validator->errors()
            ];
            return response()->json($data, 400);
        }

        $espacio = espacio::create([
            'total_pobl' => $request->total_pobl,
            'comentarios' => $request->comentarios,
            'clave_eca' => $eca->clave_eca
        ]);

        if (!$espacio) {
            $data = [
                'message' => 'Error al crear el espacio de cultura',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $idEspacio = $espacio->id_espacio;

        // Dtalles de los asistentes
        if ($request->has('asistentes')) {
            foreach ($request->asistentes as $asistente) {
                detail_asist::create([
                    'genero' => $asistente['genero'],
                    'rango_edad' => $asistente['rango_edad'],
                    'cantidad' => $asistente['cantidad'],
                    'id_espacio' => $idEspacio, // Aquí usamos el ID del espacio recién creado.
                ]);
            }
        }

        // Para los nexos
        if ($request->has('nexo')) {
            $nexoData = $request->nexo;
            detail_nex::create([
                'list_asist' => $nexoData['lista_asistencia'] ? 'sí' : 'no',
                'evi_foto' => $nexoData['evidencia_fotografica'] ? 'sí' : 'no',
                'nota_period' => $nexoData['nota_periodica'] ? 'sí' : 'no',
                'id_espacio' => $idEspacio
            ]);
        }

        // Para registrar el material didactico
        if ($request->has('material')) {
            $materialData = $request->material;
            material_didact::create([
                'inedito' => $materialData['inedito'],
                'reproducido' => $materialData['reproducido'],
                'adquirido' => $materialData['adquirido'],
                'id_espacio' => $idEspacio
            ]);
        }

        $data = [
            'message' => 'Espacio de cultura y sus detalles creados correctamente',
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    // Obtener el ID del espacio de cultura para el ECA
    public function getIdEspacio(Request $request)
    {

        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        $currentMonth = date('m');
        $currentYear = date('Y');

        $idEspacio = DB::table('espaciocultura as ec')
            ->join('eca', 'eca.clave_eca', '=', 'ec.clave_eca')
            ->join('detalle_asistente as da', 'ec.id_espacio', '=', 'da.id_espacio')
            ->join('detalle_nexo as dn', 'ec.id_espacio', '=', 'dn.id_espacio')
            ->join('material_didact as mat', 'ec.id_espacio', '=', 'mat.id_espacio')
            ->select(
                'ec.id_espacio',
                'dn.id_nexo',
                'mat.id_material'
            )
            ->whereMonth('ec.fecha_registro', $currentMonth)
            ->whereYear('ec.fecha_registro', $currentYear)
            ->where('ec.clave_eca', $eca->clave_eca)
            ->distinct()
            ->get();

        return response()->json($idEspacio);
    }

    // Actualizar un espacio de cultura y sus detalles
    public function update(Request $request)
    {
        // dd($request->all(), $request->files->all());

        $validator = Validator::make($request->all(), [
            'id_espacio' => 'required|exists:espaciocultura,id_espacio',
            'id_nexo' => 'required|exists:detalle_nexo,id_nexo',
            'id_material' => 'required|exists:material_didact,id_material',
            'total_pobl' => 'required|integer',
            'comentarios' => 'required|string',
            'asistentes' => 'required|array',
            'asistentes.*.genero' => 'required|string',
            'asistentes.*.rango_edad' => 'required|string',
            'asistentes.*.cantidad' => 'required|integer',
            'nexo' => 'required|array',
            'nexo.lista_asistencia' => 'required|boolean',
            'nexo.evidencia_fotografica' => 'required|boolean',
            'nexo.nota_periodica' => 'required|boolean',
            'material' => 'required|array',
            'material.inedito' => 'required',
            'material.reproducido' => 'required',
            'material.adquirido' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación de datos',
                'errors' => $validator->errors()
            ], 422);
        }

        $validatedData = $validator->validated();

        try {
            DB::transaction(function () use ($validatedData) {
                // 1. Update espacio
                $espacio = espacio::findOrFail($validatedData['id_espacio']);
                $espacio->total_pobl = $validatedData['total_pobl'];
                $espacio->comentarios = $validatedData['comentarios'];
                $espacio->save();

                // 2. Update nexo
                $nexoData = $validatedData['nexo'];
                $nexo = detail_nex::findOrFail($validatedData['id_nexo']);
                $nexo->list_asist = $nexoData['lista_asistencia'] ? 'sí' : 'no';
                $nexo->evi_foto = $nexoData['evidencia_fotografica'] ? 'sí' : 'no';
                $nexo->nota_period = $nexoData['nota_periodica'] ? 'sí' : 'no';
                $nexo->save();

                // 3. Update material
                $materialData = $validatedData['material'];
                $material = material_didact::findOrFail($validatedData['id_material']);
                $material->inedito = $materialData['inedito'];
                $material->reproducido = $materialData['reproducido'];
                $material->adquirido = $materialData['adquirido'];
                $material->save();

                // 4. Delete old asistentes and create new ones
                detail_asist::where('id_espacio', $validatedData['id_espacio'])->delete();

                foreach ($validatedData['asistentes'] as $asistente) {
                    detail_asist::create([
                        'genero' => $asistente['genero'],
                        'rango_edad' => $asistente['rango_edad'],
                        'cantidad' => $asistente['cantidad'],
                        'id_espacio' => $validatedData['id_espacio'],
                    ]);
                }
            });

            return response()->json(['message' => 'Espacio de cultura actualizado correctamente'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al actualizar el espacio de cultura',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Obtener información detallada de un espacio de cultura específico
    public function show(Request $request, $id)
    {
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        $actividad = DB::table('espaciocultura as esp')
            ->join('detalle_nexo as dn', 'dn.id_espacio', '=', 'esp.id_espacio')
            ->join('material_didact as md', 'md.id_espacio', '=', 'esp.id_espacio')
            ->join('detalle_asistente as da', 'da.id_espacio', '=', 'esp.id_espacio')
            ->select(
                'esp.clave_eca',
                'esp.total_pobl',
                'esp.comentarios',
                'md.inedito',
                'md.reproducido',
                'md.adquirido',
                'da.genero',
                'da.rango_edad',
                'da.cantidad',
                'dn.list_asist',
                'dn.evi_foto',
                'dn.nota_period',
            )
            ->where('esp.id_espacio', $id)
            ->where('esp.clave_eca', $eca->clave_eca)
            ->get();
        return response()->json($actividad);
    }


    public function getEspacios()
    {
        $currentYear = date('Y');

        $espacio = DB::table('eca')
            ->join('espaciocultura as esp', 'eca.clave_eca', '=', 'esp.clave_eca')
            ->join('detalle_asistente as da', 'esp.id_espacio', '=', 'da.id_espacio')
            ->join('detalle_nexo as dn', 'esp.id_espacio', '=', 'dn.id_espacio')
            ->join('material_didact as md', 'esp.id_espacio', '=', 'md.id_espacio')
            ->select(
                'eca.clave_eca',
                'eca.nombre_inst_ope',
                'md.inedito',
                'md.reproducido',
                'md.adquirido',
                'da.genero',
                'da.rango_edad',
                'da.cantidad',
                'esp.total_pobl',
                'dn.list_asist',
                'dn.evi_foto',
                'dn.nota_period',
                'esp.comentarios',
                'eca.fecha_apert',
                'eca.fecha_forta',
                'esp.fecha_registro'
            )
            ->whereYear('esp.fecha_registro', $currentYear)
            ->get();
        return response()->json($espacio);
    }
}
