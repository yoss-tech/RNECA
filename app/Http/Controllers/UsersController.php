<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
// use App\Http\resource\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class UsersController extends Controller
{
    // GET /api/users
    public function index()
    {
        
    }

    public function showUserEcas()
    {
        $ecas = DB::table('usuarios')
            ->join('rol', 'usuarios.id_rol', '=', 'rol.id_rol')
            ->join('eca', 'usuarios.id_usuario', '=', 'eca.id_usuario')
            ->join('direccion', 'eca.id_direccion', '=', 'direccion.id_direccion')
            ->join('municipio', 'direccion.id_municipio', '=', 'municipio.id_municipio')
            ->join('tipo_estatus', 'eca.id_estatus', '=', 'tipo_estatus.id_estatus')
            ->orderBy('municipio.nombre_munipio', 'asc')
            ->orderBy('usuarios.nombre', 'asc')
            ->select(
                'usuarios.id_usuario',
                'eca.nombre_inst_ope',
                'municipio.nombre_munipio',
                'usuarios.nombre', 
                'usuarios.correo',
                'tipo_estatus.nombre_tipo as estatus',
                'rol.nombre_rol as rol'
            )
            ->where('rol.id_rol', 'rol1')
            ->get();
        
        return response()->json([
            'message' => 'Usuarios ECA obtenidos correctamente',
            'status' => 200,
            'body' => $ecas
        ], 200);
    }

    public function showUserCeaa()
    {
        $ceaas = DB::table('usuarios')
            ->select(
                'usuarios.id_usuario',
                'usuarios.nombre', 
                'usuarios.correo',
                'usuarios.id_rol'
            )
            ->where('usuarios.id_rol', 'rol4')
            ->get();
        
        return response()->json([
            'message' => 'Usuarios del ceaa obtenidos correctamente',
            'status' => 200,
            'body' => $ceaas
        ], 200);
    }

    public function showUserLic()
    {
        $licenciado = DB::table('usuarios')
            ->select(
                'usuarios.id_usuario',
                'usuarios.nombre', 
                'usuarios.correo',
                'usuarios.id_rol'
            )
            ->where('usuarios.id_rol', 'rol3')
            ->get();
        
        return response()->json([
            'message' => 'Usuario del licenciado obtenido correctamente',
            'status' => 200,
            'body' => $licenciado
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
            'nombre' => 'required',
            'correo' => 'required|email|unique:usuarios,correo',
            'password' => 'required',
        ]);

        $idUsuario = $this->generarId(
            'usuarios',
            'id_usuario',
            'USER'
        );

        DB::beginTransaction();

        try {
            //$passwordTemporal = Str::random(10);
            $passwordTemporal = 'RNECA2026';

            DB::table('usuarios')->insert([
                'id_usuario' => $idUsuario,
                'nombre' => $request->nombre,
                'correo' => $request->correo,
                'password' => Hash::make($request->password),
                'fecha_registro' => now(),
                'id_rol' => 'rol4',
                'id_dicm' => null,
                'cambiar_password' => 1
            ]);

            DB::commit();

            return response()->json([
                'status' => 200,
                'message' => 'Usuario creado correctamente',
                'usuario' => $request->correo,
                'password_temporal' => $request->password
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
    public function show(Users $user) : JsonResponse
    {
        return response()->json([
            'message' => 'Usuarios obtenidos correctamente',
            'status' => 200,
            'body' => $user
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Users $users)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $usuario = DB::table('usuarios')
            ->where('id_usuario', $id)
            ->first();
        
        if (!$usuario) {
            return response()->json([
                'message' => 'Usuario no encontrado',
                'status' => 404
            ], 404);
        }

        $datos = [
            'nombre' => $request->nombre,
            'correo' => $request->correo
        ];

        if ($request->filled('password')) {
            $datos['password'] = Hash::make($request->password);
        }
        
        DB::table('usuarios')
            ->where('id_usuario', $id)
            ->update($datos);

        return response()->json([
            'message' => 'Usuario actualizado correctamente',
            'status' => 200
        ]);
    }

    public function updatePerfil(Request $request)
    {
        $user = Auth::user();
        $datos = [
            'nombre' => $request->nombre,
            'correo' => $request->correo
        ];

        if ($request->filled('password')) {
            $datos['password'] = Hash::make($request->password);
        }
        
        DB::table('usuarios')
            ->where('id_usuario', $user->id_usuario)
            ->update($datos);

        return response()->json([
            'message' => 'Usuario actualizado correctamente',
            'status' => 200
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }

    public function infoEca()
    {
        $user = Auth::user();
        $datos = DB::table('usuarios')
            ->join('eca', 'eca.id_usuario', '=', 'usuarios.id_usuario')
            ->join('direccion', 'eca.id_direccion', '=', 'direccion.id_direccion')
            ->join('municipio', 'direccion.id_municipio', '=', 'municipio.id_municipio')
            ->where('usuarios.id_usuario', $user->id_usuario)
            ->select(
                'usuarios.nombre',
                'usuarios.correo',
                'municipio.nombre_munipio',
                'eca.nombre_inst_ope'
            )
            ->first();
        
        return response()->json([
            'status' => 200,
            'body' => $datos
        ]);
    }

    public function infoPerfil()
    {
        $user = Auth::user();
        $datos = DB::table('usuarios')
            ->where('usuarios.id_usuario', $user->id_usuario)
            ->select(
                'usuarios.nombre',
                'usuarios.correo'
            )
            ->first();
        
        return response()->json([
            'status' => 200,
            'body' => $datos
        ]);
    }

    public function totalUser()
    {
        $totalUsuarios = DB::table('usuarios')->count();

        return response()->json([
            'status' => 200,
            'body' => $totalUsuarios
        ]);
    }

    public function totalUserInactivo()
    {
        $totalUsuariosInactivos = DB::table('usuarios')
            ->join('eca', 'eca.id_usuario', '=', 'usuarios.id_usuario')
            ->join('tipo_estatus', 'tipo_estatus.id_estatus', '=', 'eca.id_estatus')
            ->where('eca.id_estatus', 'EST-C731KSDA')
            ->count();

        return response()->json([
            'status' => 200,
            'body' => $totalUsuariosInactivos
        ]);
    }

    public function totalUserECAS()
    {
        $totalUsuariosECAS = DB::table('usuarios')
            ->where('usuarios.id_rol', 'rol1')
            ->count();

        return response()->json([
            'status' => 200,
            'body' => $totalUsuariosECAS
        ]);
    }
}
