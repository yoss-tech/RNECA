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
}
