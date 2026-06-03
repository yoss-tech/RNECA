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

        // IMPORTANTE: Regenerar la sesión para evitar fijación de sesiones
        $request->session()->regenerate();

        $user = Auth::user();

        // Si vas a usar sesiones (como indica tu config), no necesitas Tokens de Sanctum.
        // Pero si los necesitas para una App Móvil futura, puedes dejarlos.
        // Por ahora, priorizamos la sesión para React.
        
        // $credentials = $request->only('correo', 'password');

        return response()->json([
            'status' => 'success',
            'message' => 'Bienvenido',
            'user' => $user
        ], 200);
    }

    // CORRECCIÓN: Aquí debe ser Request normal, no LoginRequest
    public function logout(Request $request)
    {
        Auth::logout(); // Quita la autenticación del usuario

        $request->session()->invalidate(); // Equivale a borrar los datos de sesión (session_destroy)
        $request->session()->regenerateToken(); // Regenera el token CSRF por seguridad

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
