<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;


class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        // Usamos el método authenticate() definido en tu LoginRequest.php
        $request->authenticate();

        // Regenerar la sesión para evitar fijación de sesiones
        $request->session()->regenerate();

        $user = Auth::user();
        $dashboardRoute = $this->dashboardRouteByRole($user->id_rol);

        if (! $dashboardRoute) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return response()->json([
                'status' => 'error',
                'message' => 'No hay un dashboard configurado para este rol.'
            ], 403);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Bienvenido ' . $user->nombre,
            'user' => $user,
            'rol' => $user->id_rol,
            'redirect_to' => route($dashboardRoute, absolute: false),
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
            $user = Auth::user();
            return response()->json([
                'authenticated' => true,
                'user' => $user,
                'redirect_to' => ($dashboardRoute = $this->dashboardRouteByRole($user->id_rol))
                    ? route($dashboardRoute, absolute: false)
                    : null,
            ]);
        } else {
            return response()->json(['authenticated' => false]);
        }
    }

    private function dashboardRouteByRole(?string $role): ?string
    {
        return match ($role) {
            'rol1' => 'inicio_eca',
            'rol2' => 'inicio_dicm',
            'rol3' => 'inicio_lic',
            'rol4' => 'inicio_ceaa',
            'rol5' => 'inicio_admin',
            default => null,
        };
    }
}
