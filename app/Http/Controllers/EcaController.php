<?php
namespace App\Http\Controllers;

use App\Models\Eca;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

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
            'eca.nombre_inst',
            'eca.nombre_inst_ope',
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

    public function estatus()
    {
        $estatu = DB::table('tipo_estatus')
            ->select(
                'tipo_estatus.id_estatus',
                'tipo_estatus.nombre_tipo'
            )
            ->get();

        return response()->json([
            'message' => 'Estatus obtenidos correctamente',
            'status' => 200,
            'body' => $estatu
        ], 200);
    }

    public function generarId($tabla, $campo, $prefijo)
    {
        $ultimoRegistro = DB::table($tabla)
            ->where($campo,'like', $prefijo .'-%')
            ->orderByRaw("CAST(SUBSTRING($campo, " . (strlen($prefijo) + 2) . ") AS UNSIGNED) DESC")
            ->first();

        if ($ultimoRegistro) {
            $numero = (int) str_replace($prefijo . '-', '', $ultimoRegistro->$campo);
            return $prefijo . '-' . ($numero + 1);
        }
        
        return $prefijo . '-1';
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->validate([
            'clave_eca' => 'required',
            'nombre_inst' => 'required',
            'nombre_inst_ope' => 'required',

            'nombre' => 'required',
            'correo' => 'required|email|unique:usuarios,correo',

            'id_municipio' =>'required',

            'calle_av' => 'required',
            'num_direccion' => 'required',
            'colonia' => 'required',
            'localidad' => 'required',
            'cod_postal' => 'required'
        ], [
            'correo.unique' => 'Este correo ya está registrado en otro ECA.'
        ]);

        // Generación de IDs
        $idUsuario = $this->generarId(
            'usuarios',
            'id_usuario',
            'USER'
        );

        $idDireccion = $this->generarId(
            'direccion',
            'id_direccion',
            'DIR'
        );

        $idDetalle = $this->generarId(
            'detalle_eca',
            'id_detalle_eca',
            'DET-ECA'
        );
        
        DB::beginTransaction();
        
        try {

            $existeEca = DB::table('eca')
                ->where('clave_eca', $request->clave_eca)
                ->exists();
            
            if ($existeEca) {
                return response()->json([
                    'status' => 400,
                    'message' => 'Ya existe un ECA registrado con esa clave.'
                ], 400);
            }
            
            $passwordTemporal = Str::random(10);
         
            // Insertar dirección
            DB::table('direccion')->insert([
                'id_direccion' => $idDireccion,
                'cod_postal' => $request->cod_postal,
                'localidad' => $request->localidad,
                'colonia' => $request->colonia,
                'calle_av' => $request->calle_av,
                'num_direccion' => $request->num_direccion,
                'tipo_instancia' => $request->tipo_instancia,
                'id_municipio' => $request->id_municipio
            ]);

            
            // Insertar Usuario
            DB::table('usuarios')->insert([
                'id_usuario' => $idUsuario,
                'nombre' => $request->nombre,
                'correo' => $request->correo,
                'password' => Hash::make($passwordTemporal),
                'fecha_registro' => now(),
                'correoExtra' => null,
                'id_rol' => 'rol1',
                'id_dicm' => null,
                'cambiar_password' => 1
            ]);

            // Insertar ECA
            DB::table('eca')->insert([
                'clave_eca' => $request->clave_eca,
                'nombre_inst' => $request->nombre_inst,
                'nombre_inst_ope' => $request->nombre_inst_ope,
                'poblacion_atend' => $request->poblacion_atend,
                'fecha_apert' => $request->fecha_apert,
                'fecha_forta' => $request->fecha_forta,
                'fecha_cierre' => null,
                'motivo_cierre' => null,
                'id_usuario' => $idUsuario,
                'id_estatus' => 'EST-1K2LMP4X',
                'id_direccion' => $idDireccion
            ]);

            // Insertar detalle ECA
            DB::table('detalle_eca')->insert([
                'id_detalle_eca' => $idDetalle,
                'telefonos' => $request->telefonos,
                'dias_hora_aten' => $request->dias_hora_aten,
                'equipo_movil' => $request->equipo_movil,
                'equipo_electr' => $request->equipo_electr,
                'material_didact' => $request->material_didact,
                'comentarios' => $request->comentarios,
                'id_estatus' => 'EST-1K2LMP4X',
                'clave_eca' => $request->clave_eca
            ]);
            
            DB::commit();
                
            return response()->json([
                'status' => 200,
                'message' => 'ECA creado correctamente',
                'usuario' => $request->correo,
                'password_temporal' => $passwordTemporal
            ]);

        } catch(\Exception $e) {

            DB::rollBack();

            return response()->json([
                'status' => 500,
                'message' => $e->getMessage()
            ],500);
        }
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
    public function show()
    {
        $eca = DB::table('eca')
            ->join('detalle_eca', 'eca.clave_eca', '=', 'detalle_eca.clave_eca')
            ->join('direccion', 'eca.id_direccion', '=', 'direccion.id_direccion')
            ->join('municipio', 'direccion.id_municipio', '=', 'municipio.id_municipio')
            ->join('usuarios', 'eca.id_usuario', '=', 'usuarios.id_usuario')
            ->join('rol', 'usuarios.id_rol', '=', 'rol.id_rol')
            ->join('tipo_estatus', 'eca.id_estatus', '=', 'tipo_estatus.id_estatus')
            ->orderBy('tipo_estatus.nombre_tipo', 'desc')
            ->orderBy('municipio.nombre_munipio', 'asc')
            ->select(
                'direccion.id_direccion',
                'usuarios.id_usuario',
                'detalle_eca.id_detalle_eca',
                'municipio.id_municipio',
                'tipo_estatus.id_estatus',
                'eca.nombre_inst',
                'eca.clave_eca',
                'eca.nombre_inst_ope',
                'direccion.tipo_instancia',
                'municipio.num_habitan',
                'eca.poblacion_atend',
                'direccion.calle_av',
                'direccion.num_direccion',
                'direccion.colonia',
                'municipio.nombre_munipio',
                'direccion.localidad',
                'direccion.cod_postal',
                'detalle_eca.telefonos',
                'detalle_eca.dias_hora_aten',
                'usuarios.nombre',
                'usuarios.correo',
                'detalle_eca.equipo_movil',
                'detalle_eca.equipo_electr',
                'detalle_eca.material_didact',
                'tipo_estatus.nombre_tipo',
                'eca.fecha_apert',
                'eca.fecha_forta',
                'eca.fecha_cierre',
                'eca.motivo_cierre',
                'detalle_eca.comentarios'
            )
            ->where('rol.id_rol', 'rol1')
            ->get();
        
        return response()->json([
            'message' => 'Usuarios ECA obtenidos correctamente',
            'status' => 200,
            'body' => $eca
        ], 200);
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
    public function update(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            DB::table('usuarios')
                ->where('id_usuario', $id)
                ->update([
                    'nombre' => $request->nombre,
                    'correo' => $request->correo
                ]);

            $datosEca = [
                'poblacion_atend' => $request->poblacion_atend,
                'id_estatus' => $request->id_estatus,
                'fecha_apert' => $request->fecha_apert,
                'fecha_forta' => $request->fecha_forta,
                'fecha_cierre' => $request->fecha_cierre,
                'motivo_cierre' => $request->motivo_cierre
            ];

            if ($request->id_estatus == 'EST-1K2LMP4X') {
                $datosEca['fecha_cierre'] = null;
                $datosEca['motivo_cierre'] = null;
            }

            DB::table('eca')
                ->where('clave_eca', $request->clave_eca)
                ->update([
                    'poblacion_atend' => $request->poblacion_atend,
                    'id_estatus' => $request->id_estatus,
                    'fecha_apert' => $request->fecha_apert,
                    'fecha_forta' => $request->fecha_forta,
                    'fecha_cierre' => $request->fecha_cierre,
                    'motivo_cierre' => $request->motivo_cierre
                ]);

            DB::table('detalle_eca')
                ->where('clave_eca', $request->clave_eca)
                ->update([
                    'telefonos' => $request->telefonos,
                    'dias_hora_aten' => $request->dias_hora_aten,
                    'equipo_movil' => $request->equipo_movil,
                    'equipo_electr' => $request->equipo_electr,
                    'material_didact' => $request->material_didact,
                    'comentarios' => $request->comentarios
                ]);

            DB::commit();
            return response()->json([
                'message' => 'ECA actualizado correctamente',
                'status' => 200
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Eca $eca)
    {
        //
    }
}
