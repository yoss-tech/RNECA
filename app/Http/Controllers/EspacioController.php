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
    public function index()
    {
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
            ->get();
        return response()->json($espacio);
    }

    public function checkRegistroActual(Request $request)
    {
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['data' => null, 'message' => 'El usuario no tiene un ECA asignado'], 403);
        }

        $currentMonth = date('m');
        $currentYear = date('Y');

        $espacio = DB::table('espaciocultura as esp')
            ->join('fecha', 'esp.id_fecha', '=', 'fecha.id_fecha')
            ->where('esp.clave_eca', $eca->clave_eca)
            ->where('fecha.mes', $currentMonth)
            ->where('fecha.anio', $currentYear)
            ->exists(); // We just need to know if it exists.

        return response()->json(['registro_existente' => $espacio]);
    }

    public function store(Request $request){
        // Obtener la información del ECA vinculada al usuario autenticado
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['message' => 'El usuario no tiene un ECA asignado'], 403);
        }

        $validator = Validator::make($request->all(), [
            'total_pobl' => 'required',
            'comentarios' => 'required',
            'asistentes' => 'required|array', // 'asistentes' debe ser un arreglo.
            'nexo' => 'required|array', // En el frontend es un objeto, Laravel lo trata como array asociativo.
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
            'clave_eca' => $eca->clave_eca, // Se asigna automáticamente
        ]);

        if (!$espacio) {
            $data = [
                'message' => 'Error al crear el espacio de cultura',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        // Una vez creado el espacio de cultura, obtenemos su ID para los detalles.
        $idEspacio = $espacio->id_espacio;

        // Ahora, registramos los detalles de los asistentes si existen en la petición.
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

        // Para los nexos, ya no es un bucle. Recibimos un solo objeto.
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
}
