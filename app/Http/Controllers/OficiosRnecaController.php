<?php

namespace App\Http\Controllers;

use App\Models\oficios_rneca;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Eca;


class OficiosRnecaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['message' => 'El usuario no tiene un ECA asignado'], 403);
        }

        $validator = Validator::make($request->all(), [
            'mes_oficio' => 'required',
            'ruta_oficio' => 'required|file|mimes:pdf|max:5000000'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validación de datos',
                'status' => 400,
                'body' => $validator->errors()
            ];
            return response()->json($data, 400);
        }

        // Guardamos el PDF en una carpeta llamada 'documentos' dentro del disco público
        $rutaPdf = $request->file('ruta_oficio')->store('documents', 'public');

        $oficio = oficios_rneca::create([
            'mes_oficio' => $request->mes_oficio,
            'ruta_oficio' => $rutaPdf,
            'idClave_eca' => $eca->clave_eca
        ]);

        if (!$oficio) {
            $data = [
                'message' => 'Error al crear el oficio',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $data = [
            'message' => 'Oficio creado correctamente',
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(oficios_rneca $oficios_rneca)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(oficios_rneca $oficios_rneca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, oficios_rneca $oficios_rneca)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(oficios_rneca $oficios_rneca)
    {
        //
    }
}
