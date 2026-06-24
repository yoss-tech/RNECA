<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\program;
use App\Models\Eca;

class ProgramController extends Controller
{
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        
        // 1. Obtener la información del ECA vinculada al usuario autenticado
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['message' => 'El usuario no tiene un ECA asignado'], 403);
        } 
        
        // 2. Crear el programa de cultura
        $validator = Validator::make($request->all(),[
            'municipio' => 'required',
            'localidad' => 'required',
            'tipo_platica' => 'required',
            'otras_activ' => 'required',
            'alumnos_Aten' => 'required',
            'pobl_ate' => 'required',
            'fecha_mes' => 'required',
            // 'id_fecha' => 'required',
        ]);

        if($validator->fails()){
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
            'tipo_platica' => $request-> tipo_platica,
            'otras_activ' => $request-> otras_activ,
            'alumnos_Aten' => $request-> alumnos_Aten,
            'pobl_ate' => $request-> pobl_ate,
            'fecha_mes' => $request-> fecha_mes,
            'clave_eca' => $eca->clave_eca, // Se asigna automáticamente
            // 'id_fecha' => $fecha-> id_fecha,
        ]);

        if(!$program){
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

    public function show()
    {
        //
    }
}
