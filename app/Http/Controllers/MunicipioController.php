<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Municipio;

class MunicipioController extends Controller
{
    public function update(Request $request, $id)
    {
        $municipio = DB::table('municipio')
            ->where('id_municipio', $id)
            ->first();

        if (!$municipio) {
            return response()->json([
                'message' => 'Municipio no encontrado',
                'status' => 404
            ], 404);
        }

        $datos = [
            'num_habitan' => $request->num_habitan
        ];

        DB::table('municipio')
            ->where('id_municipio', $id)
            ->update($datos);
        
        return response()->json([
            'message' => 'Municipio actualizado correctamente',
            'status' => 200
        ]);
    }

    public function municipios()
    {
        $municipio = DB::table('municipio')
            ->orderBy('municipio.nombre_munipio', 'asc')
            ->select(
                'municipio.id_municipio',
                'municipio.nombre_munipio',
                'municipio.num_habitan'
            )
            ->get();

        return response()->json([
            'message' => 'Municipios obtenidos correctamente',
            'status' => 200,
            'body' => $municipio
        ], 200);
    }

    public function buscar(Request $request)
    {
        $buscar = $request->buscar;
        $municipio = Municipio::where('nombre_munipio', 'like', '%' . $buscar . '%')
        ->get();
        return response()->json([
        'status' => 200,
        'body' => $municipio
        ]);
    }

    public function buscarSelect(Request $request)
    {
        $id = $request->id_municipio;
        $municipio = Municipio::where('id_municipio', $id)
        ->get();
        return response()->json([
        'status' => 200,
        'body' => $municipio
        ]);
    }

    public function totalMunicipio()
    {
        $totalMunicipios = DB::table('municipio')->count();

        return response()->json([
            'status' => 200,
            'body' => $totalMunicipios
        ]);
    }
}
