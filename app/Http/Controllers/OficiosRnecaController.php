<?php

namespace App\Http\Controllers;

use App\Models\oficios_rneca;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Eca;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;

class OficiosRnecaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        $oficios = DB::table('oficios_rneca as ofr')
            ->join('eca', 'ofr.idClave_eca', '=', 'eca.clave_eca')
            ->join('usuarios as u', 'eca.id_usuario', '=', 'u.id_usuario')
            ->join('tipo_estatus as te', 'ofr.id_estatus', '=', 'te.id_estatus')
            ->select(
                'u.nombre as nombre_eca',
                'ofr.id_oficio',
                'ofr.mes_oficio',
                'ofr.ruta_oficio',
                'te.nombre_tipo',
                'ofr.fecha_registro',
                'eca.clave_eca'
            )
            ->where('u.id_dicm', auth()->user()->id_usuario)
            ->where('te.nombre_tipo', 'Pendiente')
            ->get();

        return response()->json($oficios);
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

    public function download($id)
    {

        $oficio = oficios_rneca::findOrFail($id);
        
        $rutaBD = $oficio->ruta_pdf; // ej: "documents/Ix0470A00YgNMFukH...pdf"

        $rutaInterna = 'app/public/' . $rutaBD;

        $rutaAbsoluta = storage_path($rutaBD);

        $rutaAbsoluta = str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $rutaAbsoluta);


        // $rutaInterna = str_replace('documents', 'public\documents', $oficio->ruta_oficio);

        $rutaAbsoluta = storage_path($rutaInterna);

        // if (file_exists($rutaAbsoluta)) {
        //     return response()->download($rutaAbsoluta, "oficio_{$id}.pdf");
        // }

        // ESTA LÍNEA ES PARA DEBUG:
         return response()->json([
           'ruta_en_base_datos' => $oficio->ruta_oficio,
            'ruta_interna_generada' => $rutaInterna,
           'ruta_absoluta_buscada' => $rutaAbsoluta,
            'existe_fisicamente' => file_exists($rutaAbsoluta) ? 'SÍ' : 'NO'
        ]);

        // En caso de que siga sin existir, te devolverá un JSON detallado
        return response()->json([
            'error' => 'Archivo no encontrado físicamente',
            'ruta_buscada_final' => $rutaAbsoluta,
            '¿existe?' => 'NO'
        ], 404);
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
