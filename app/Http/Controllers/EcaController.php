<?php
// AÚN NO SE LLAMARA EL CONTROLLER, QUEDARA PENDIENTE

namespace App\Http\Controllers;

use App\Models\Eca;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EcaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $eca = DB::table('eca')
        ->join('usuarios', 'eca.id_usuario', '=', 'usuarios.id_usuario')
        ->join('direccion', 'eca.id_direccion', '=', 'direccion.id_direccion')
        ->join('municipio', 'direccion.id_municipio', '=', 'municipio.id_municipio')
        ->leftJoin('usuarios as dicm', 'dicm.id_usuario', '=', 'usuarios.id_dicm') 
        ->select(
            'eca.id_usuario',
            'eca.nombre_Inst',
            'eca.nombre_InstOpe',
            'usuarios.nombre as nombre_Responsable',
            DB::raw("IFNULL(dicm.nombre, 'Sin asignar') as director"),
            'municipio.nombre_munipio as municipio'
        )
        ->where('eca.id_usuario', auth()->user()->id_usuario)
        ->first();

        if (!$eca) {
            return response()->json([
                'message' => 'No se encontró información del ECA para este usuario',
                'status' => 404,
                'body' => null
            ], 404);
        }

        return response()->json([
            'message' => 'Información del ECA obtenida correctamente',
            'status' => 200,
            'body' => $eca
        ], 200);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Eca $eca)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Eca $eca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Eca $eca)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Eca $eca)
    {
        //
    }
}
