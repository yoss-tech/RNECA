<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Users;


class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        // Usamos el método authenticate() definido en tu LoginRequest.php
        $request->authenticate();

        // Regenerar la sesión para evitar fijación de sesiones
        $request->session()->regenerate();

        $user = Auth::user();

        // En lugar de consultar a todos, validamos el campo 'id_rol' del usuario autenticado
        // Asumiendo que los valores en tu base de datos coinciden con estos strings
        return response()->json([
            'status' => 'success',
            'message' => 'Bienvenido ' . $user->nombre,
            'user' => $user,
            'rol' => $user->id_rol // Enviamos el rol real que tiene el usuario
        ], 200);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'status' => 'success',
            'message' => 'Sesión cerrada'
        ]);
    }

    public function checkAuth(): JsonResponse
    {
        if (Auth::check()) {
            return response()->json([
                'authenticated' => true,
                'user' => Auth::user()
            ]);
        } else {
            return response()->json(['authenticated' => false]);
        }
    }
}
