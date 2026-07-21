<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
// use App\Http\resource\UserResource;
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

    public function showUserDicMun()
    {
        $dicMun = DB::table('usuarios')
            ->join('rol', 'usuarios.id_rol', '=', 'rol.id_rol')
            //->join('director', 'usuarios.id_usuario', '=', 'director .id_usuario')
            //->join('direccion', 'director.id_direccion', '=', 'direccion.id_direccion')
            //->join('municipio', 'direccion.id_municipio', '=', 'municipio.id_municipio')
            //->join('tipo_estatus', 'director.id_estatus', '=', 'tipo_estatus.id_estatus')
            //->orderBy('municipio.nombre_munipio', 'asc')
            ->orderBy('usuarios.nombre', 'asc')
            ->select(
                'usuarios.id_usuario',
                //'director.nombre_inst_ope',
                //'municipio.nombre_munipio',
                'usuarios.nombre', 
                'usuarios.correo',
                //'tipo_estatus.nombre_tipo as estatus',
                'rol.nombre_rol as rol'
            )
            ->where('rol.id_rol', 'rol2')
            ->get();
        
        return response()->json([
            'message' => 'Usuarios directores obtenidos correctamente',
            'status' => 200,
            'body' => $dicMun
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
            'correo' => $request->correo
        ];

        if ($request->password) {
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario = Users::findOrFail($id);
        $usuario->delete();

        return response()->json([
            'message' => 'Usuario eliminado correctamente',
            'status' => 200
        ], 200);
    }
}
