<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Controllers\Controller;
// use App\Http\resource\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class UsersController extends Controller
{
    
    // GET /api/users
    public function index()
    {
        $users  = Users::all();

        $data = [
            'message' => 'Usuarios obtenidos correctamente',
            'status' => 200,
            'body' => $users
        ];

        if($users->isEmpty()){
            $data = [
                'message' => 'No se encontraron usuarios',
                'status' => 200
            ];
            return response()->json($data, 404);
        }

        return response()->json($data, 200);
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
        //Crear validación de datos para el login
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);
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
    public function update(Request $request, Users $users)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Users $users)
    {
        //
    }
}
