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
    // Traer la lista de oficios pendientes
    public function index()
    {
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
            ->whereIn('te.nombre_tipo', ['Pendiente'])
            ->get();

        return response()->json($oficios);
    }

    // Traer la lista de oficios con correcciones
    public function oficiosCorrecciones()
    {
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
                'eca.clave_eca',
                'ofr.observacion'
            )
            ->where('u.id_dicm', auth()->user()->id_usuario)
            ->whereIn('te.nombre_tipo', ['Correcciones'])
            ->get();

        return response()->json($oficios);
    }

    // Traer la lista completa de oficios
    public function oficiosCompletos()
    {
        $oficios = DB::table('oficios_rneca as ofr')
            ->join('eca', 'ofr.idClave_eca', '=', 'eca.clave_eca')
            ->join('usuarios as u', 'eca.id_usuario', '=', 'u.id_usuario')
            ->join('tipo_estatus as te', 'ofr.id_estatus', '=', 'te.id_estatus')
            ->select(
                'u.nombre as nombre_eca',
                'ofr.id_oficio',
                'ofr.mes_oficio',
                'te.nombre_tipo',
                'ofr.fecha_registro',
            )
            ->where('u.id_dicm', auth()->user()->id_usuario)
            ->whereIn('te.nombre_tipo', ['Validado', 'Pendiente', 'Correciones'])
            ->get();

        return response()->json($oficios);
    }

    // Lista de oficios firmados por eca
    public function oficiosFirmados()
    {
        // $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        $oficios = DB::table('oficios_rneca as ofr')
            ->join('eca', 'ofr.clave_eca', '=', 'eca.clave_eca')
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
            ->whereIn('te.nombre_tipo', ['Firmado', 'Validado'])

            ->get();

        return response()->json($oficios);
    }


    // Lista de oficios registrados por el eca
    public function OficioRneca()
    {
        $oficios = DB::table('oficios_rneca as ofr')
            ->join('eca', 'ofr.clave_eca', '=', 'eca.clave_eca')
            ->join('usuarios as u', 'eca.id_usuario', '=', 'u.id_usuario')
            ->join('tipo_estatus as te', 'ofr.id_estatus', '=', 'te.id_estatus')
            ->select(
                'u.nombre as nombre_eca',
                'ofr.id_oficio',
                'ofr.mes_oficio',
                'te.nombre_tipo',
                'ofr.fecha_registro',
                'eca.clave_eca',
                'ofr.observacion'
            )
            ->where('eca.id_usuario', auth()->user()->id_usuario)
            ->get();

        return response()->json($oficios);
    }

    // Traer el último oficio registrado
    public function ultimoOficio()
    {
        $id = DB::table('oficios_rneca')->latest()->first();

        $oficio = oficios_rneca::findOrFail($id);
        $rutaBD = $oficio->ruta_pdf;
        $rutaInterna = 'app/public/' . $rutaBD;
        $rutaAbsoluta = storage_path($rutaBD);
        $rutaAbsoluta = str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $rutaAbsoluta);
        $rutaInterna = str_replace('documents', 'app\public\documents', $oficio->ruta_oficio);
        $rutaAbsoluta = storage_path($rutaInterna);
        if (file_exists($rutaAbsoluta)) {
            return response()->download($rutaAbsoluta, "oficio_{$id}.pdf");
        }

        return response()->json([
            'error' => 'Archivo no encontrado físicamente',
            'ruta_buscada_final' => $rutaAbsoluta, 
            '¿existe?' => 'NO'
        ], 404);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    // Registrar un nuevo oficio para el ECA
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

        // Guardamos el PDF en una carpeta llamada 'documents' dentro del disco público
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
        $rutaInterna = str_replace('documents', 'app\public\documents', $oficio->ruta_oficio);
        $rutaAbsoluta = storage_path($rutaInterna);
        if (file_exists($rutaAbsoluta)) {
            return response()->download($rutaAbsoluta, "oficio_{$id}.pdf");
        }

        // ESTA LÍNEA ES PARA DEBUG:
        //  return response()->json([
        //    'ruta_en_base_datos' => $oficio->ruta_oficio,
        //     'ruta_interna_generada' => $rutaInterna,
        //    'ruta_absoluta_buscada' => $rutaAbsoluta,
        //     'existe_fisicamente' => file_exists($rutaAbsoluta) ? 'SÍ' : 'NO'
        // ]);

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

    // Actualizar un oficio existente con un nuevo PDF firmado y cambiar su estatus a "Firmado"
    public function update(Request $request)
    {
        // Validación de los datos recibidos en la petición.
        // Se asegura que el 'id_oficio' exista en la tabla 'oficios_rneca',
        // que 'fecha_firma' sea una fecha válida, y que 'ruta_oficio_firm' sea un archivo PDF no mayor a 5MB.
        $validator = Validator::make($request->all(), [
            'id_oficio' => 'required|string|exists:oficios_rneca,id_oficio',
            'fecha_firma' => 'required|date',
            'ruta_oficio' => 'required|file|mimes:pdf|max:5000' // 5000 KB = 5 MB
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación de datos',
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        // Busca el oficio por su ID. Si no se encuentra, Laravel arrojará una excepción ModelNotFoundException.
        $oficio = oficios_rneca::findOrFail($request->input('id_oficio'));

        // Si ya existe un archivo firmado, lo eliminamos antes de guardar el nuevo.
        if ($oficio->ruta_oficio) {
            Storage::disk('public')->delete($oficio->ruta_oficio);
        }

        // Guarda el nuevo archivo PDF firmado en el almacenamiento público.
        $rutaPdf = $request->file('ruta_oficio')->store('documents', 'public');

        // Actualiza los campos del oficio con la nueva información.
        $oficio->ruta_oficio = $rutaPdf;
        $oficio->fecha_firma = $request->input('fecha_firma');
        $oficio->id_estatus = 'EST-R4M8TP1L'; // estatus "Firmado" 
        $oficio->save();

        return response()->json([
            'message' => 'El oficio firmado se subió correctamente',
            'status' => 200
        ], 200);
    }

    // Permite visualizar un oficio en el navegador, en lugar de descargarlo.
    public function view($id)
    {
        // Busca el oficio por su ID.
        $oficio = oficios_rneca::findOrFail($id);

        // Obtiene la ruta del archivo del oficio original.
        $path = $oficio->ruta_oficio;

        // Verifica si la ruta del archivo existe en la base de datos y si el archivo existe físicamente.
        if (!$path || !Storage::disk('public')->exists($path)) {
            abort(404, 'Archivo no encontrado.');
        }

        // Obtiene la ruta completa al archivo en el sistema de archivos.
        $fullPath = Storage::disk('public')->path($path);

        // Devuelve el archivo como una respuesta para ser mostrada en el navegador.
        // El navegador lo mostrará en línea si es un tipo de archivo que soporta (como PDF).
        return response()->file($fullPath);
    }

    // Permite verificar si el ECA ya ha registrado un oficio en el mes correaspondiente
    public function checkRegistroOficio(Request $request)
    {
        $eca = Eca::where('id_usuario', auth()->user()->id_usuario)->first();

        if (!$eca) {
            return response()->json(['data' => null, 'message' => 'El usuario no tiene un ECA asignado'], 403);
        }

        $currentMonth = date('m');
        $currentYear = date('Y');

        $oficio = DB::table('oficios_rneca as of')
            ->where('of.clave_eca', $eca->clave_eca)
            ->whereMonth('of.fecha_registro', $currentMonth)
            ->whereYear('of.fecha_registro', $currentYear)
            // ->where('of.id_estatus', '=', 'EST-R4M8TP1L')
            // ->where('of.id_estatus', '=', 'EST-4HJVB2C9')
            ->exists();

        return response()->json(['registro_existente' => $oficio]);
    }

    //Registrar observaciones de los oficios y cambiar su estatus a "Correcciones"
    public function observaOficios(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_oficio' => 'required|string|exists:oficios_rneca,id_oficio',
            'observacion' => 'required|string',
            'fecha_obser' => 'required|date',
            'id_estatus' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación de datos',
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $oficio = oficios_rneca::findOrFail($request->input('id_oficio'));

        $oficio->observacion = $request->input('observacion');
        $oficio->fecha_obser = $request->input('fecha_obser');
        $oficio->id_estatus = $request->input('id_estatus');
        $oficio->save();

        return response()->json([
            'message' => 'El oficio revisado correctamente',
            'status' => 200
        ], 200);
    }
 
    // lista de estatus para los oficios que pueden ser asignados a un oficio
    public function estatusOficios(Request $request)
    {
        $estatusOfic = DB::table('tipo_estatus')
            ->select('id_estatus', 'nombre_tipo')
            ->whereIn('nombre_tipo', ['Correcciones', 'Validado', 'Rechazado'])
            ->get();
        return response()->json($estatusOfic);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(oficios_rneca $oficios_rneca)
    {
        //
    }

    // Traer oficios
    public function oficios()
    {
        $oficio = DB::table('oficios_rneca')
            ->join('eca', 'eca.clave_eca', '=', 'oficios_rneca.clave_eca')
            ->join('direccion', 'direccion.id_direccion', '=', 'eca.id_direccion')
            ->join('municipio', 'municipio.id_municipio', '=', 'direccion.id_municipio')
            ->select(
                'municipio.id_municipio',
                'municipio.nombre_municipio',
                'eca.nombre_inst_ope',
                DB::raw("
                    COUNT(
                        CASE
                            WHEN oficios_rneca.id_estatus = 'EST-4HJVB2C9'
                            THEN 1
                        END
                    ) as pendientes
                "),
                DB::raw("
                    COUNT(
                        CASE
                            WHEN oficios_rneca.id_estatus = 'EST-V7WQ3N8Z'
                            THEN 1
                        END
                    ) as validados
                ")
            )
            ->groupBy(
                'municipio.id_municipio',
                'municipio.nombre_municipio',
                'eca.nombre_inst_ope'
            )
            ->orderBy('municipio.nombre_municipio')
            ->get();

        return response()->json([
            'message' => 'Oficios obtenidos correctamente',
            'status' => 200,
            'body' => $oficio
        ], 200);
    }

    // Traer oficios pendientes
    public function oficiosPendientes()
    {
        $oficioPen = DB::table('oficios_rneca')
            ->join('eca', 'eca.clave_eca', '=', 'oficios_rneca.clave_eca')
            ->join('direccion', 'direccion.id_direccion', '=', 'eca.id_direccion')
            ->join('municipio', 'municipio.id_municipio', '=', 'direccion.id_municipio')
            ->select(
                'oficios_rneca.id_oficio',
                'municipio.id_municipio',
                'municipio.nombre_municipio',
                'eca.nombre_inst_ope',
                DB::raw('COUNT(*) as pendientes')
            )
            ->where('oficios_rneca.id_estatus', 'EST-4HJVB2C9')
            ->groupBy(
                'oficios_rneca.id_oficio',
                'municipio.id_municipio',
                'municipio.nombre_municipio',
                'eca.nombre_inst_ope'
            )
            ->orderBy('municipio.nombre_municipio')
            ->get();

        return response()->json([
            'message' => 'Oficios pendientes obtenidos correctamente',
            'status' => 200,
            'body' => $oficioPen
        ], 200);
    }

    // Traer oficios pendientes
    public function cumplimientoOficios()
    {
        $pendientes = DB::table('oficios_rneca')
            ->where('id_estatus', 'EST-4HJVB2C9')
            ->whereMonth('fecha_registro', now()->month)
            ->whereYear('fecha_registro', now()->year)
            ->count();

        $validados = DB::table('oficios_rneca')
            ->where('id_estatus', 'EST-V7WQ3N8Z')
            ->whereMonth('fecha_registro', now()->month)
            ->whereYear('fecha_registro', now()->year)
            ->count();

        $noEntregados = DB::table('eca')
            ->whereNotExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('oficios_rneca')
                    ->whereColumn(
                        'oficios_rneca.clave_eca',
                        'eca.clave_eca'
                    )
                    ->whereMonth('fecha_registro', now()->month)
                    ->whereYear('fecha_registro', now()->year);
            })
            ->count();

        return response()->json([
            'status' => 200,
            'body' => [
                'validados' => $validados,
                'pendientes' => $pendientes,
                'noEntregados' => $noEntregados
            ]
        ]);
    }

    // Traer oficios con correciones
    public function oficiosCorreccion()
    {
        $oficioCor = DB::table('oficios_rneca')
            ->join('eca', 'eca.clave_eca', '=', 'oficios_rneca.clave_eca')
            ->join('direccion', 'direccion.id_direccion', '=', 'eca.id_direccion')
            ->join('municipio', 'municipio.id_municipio', '=', 'direccion.id_municipio')
            ->select(
                'municipio.nombre_municipio',
                'eca.nombre_inst_ope',
                'oficios_rneca.id_oficio',
                'oficios_rneca.mes_oficio',
                'oficios_rneca.fecha_registro',
                'oficios_rneca.observacion'
            )
            ->where('oficios_rneca.id_estatus', 'EST-8HCVW2C7')
            ->orderBy('municipio.nombre_municipio')
            ->get();

        return response()->json([
            'message' => 'Oficios con correcciones obtenidos correctamente',
            'status' => 200,
            'body' => $oficioCor
        ], 200);
    }

    // Traer oficios validados
    public function oficiosValidados()
    {
        $oficioVal = DB::table('oficios_rneca')
            ->join('eca', 'eca.clave_eca', '=', 'oficios_rneca.clave_eca')
            ->join('direccion', 'direccion.id_direccion', '=', 'eca.id_direccion')
            ->join('municipio', 'municipio.id_municipio', '=', 'direccion.id_municipio')
            ->select(
                'municipio.id_municipio',
                'municipio.nombre_municipio',
                'eca.nombre_inst_ope',
                'oficios_rneca.id_oficio',
                'oficios_rneca.mes_oficio',
                'oficios_rneca.fecha_registro'
            )
            ->where('oficios_rneca.id_estatus', 'EST-V7WQ3N8Z')
            // ->whereMonth('oficios_rneca.fecha_registro', now()->subMonth()->month)
            // ->whereYear('oficios_rneca.fecha_registro', now()->subMonth()->year)
            ->orderBy('municipio.nombre_municipio')
            ->get();

        return response()->json([
            'message' => 'Oficios validados obtenidos correctamente',
            'status' => 200,
            'body' => $oficioVal
        ], 200);
    }
}
