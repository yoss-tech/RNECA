<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\memoria_foto;
use App\Models\Eca;

class MemoriaFotoController extends Controller
{
    public function index() {}

    public function store(Request $request)
    {

        // dd($request->all(), $request->files->all());

        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['message' => 'El usuario no tiene un ECA asignado'], 403);
        }

        $validator = Validator::make($request->all(), [
            'descrip_gen' => 'required|string'
            // 'titulo' => 'required|string',
            // 'descripcion_act' => 'required|string',
            // 'ruta_img' => 'required|image|mimes:png,jpg|max:5000'
        ]);

        // 1. Validar primero
        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validación de datos',
                'status' => 400,
                'body' => $validator->errors()
            ];
            return response()->json($data, 400);
        }

        // $path = $request->file('ruta_img')->store('uploads', 'public');

        $memoria_foto = memoria_foto::create([
            'descrip_gen' => $request->descrip_gen,
            // 'titulo' => $request->titulo,
            // 'descripcion_act' => $request->descripcion_act,
            // 'ruta_img' => $path,
            'id_claveEca' => $eca->clave_eca, // Se asigna automáticamente
        ]);

        if (!$memoria_foto) {
            $data = [
                'message' => 'Error al crear la memoria',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $data = [
            'message' => 'Memoria creada correctamente',
            'status' => 201
        ];

        return response()->json($data, 201);
    }
}
