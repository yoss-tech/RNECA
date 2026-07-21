<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Municipio;

class MunicipioController extends Controller
{
     public function index()
    {
        $municipio=DB::table('municipio')
           ->select('id_municipio', 'nombre_munipio')
           ->get();
        return response()->json([
            'message'=>'Municipios obtenido correctamente',
            'status'=>200,
            'body'=>$municipio
        ],200);
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
}
