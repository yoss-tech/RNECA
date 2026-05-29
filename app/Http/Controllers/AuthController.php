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
        $user = Users::where('correo', $request->correo)->first();

        // Simplificamos la lógica: Si no hay usuario O la contraseña no coincide
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Credenciales inválidas.',
                'errors'  => [
                    'correo' => ['El correo o la contraseña son incorrectos.']
                ]
            ], 422);
        }

        // Eliminar tokens antiguos para mantener la base de datos limpia (Opcional)
        $user->tokens()->delete();

        // Esto requiere que exista la tabla personal_access_tokens
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Bienvenido',
            'body' => [
                'user' => $user,
                'token' => $token
            ]
        ], 200);
    }
}
