<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
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

        if ((int) $user->cambiar_password === 1) {
            return response()->json([
                'status' => 'success',
                'message' => 'Debe actualizar sus datos antes de continuar.',
                'user' => $user,
                'rol' => $user->id_rol,
                //Indica que se debe realizar la actualización de datos
                'requiere_actualizacion' => true,
                //Ruta para acyualizar datos
                'redirect_to' => '/actualizar'
            ], 200);
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

            if ((int) $user->cambiar_password === 1) {
                return response()->json([
                    'authenticated' => true,
                    'user' => $user,
                    //Indica que se debe realizar la actualización de datos
                    'requiere_actualizacion' => true,
                    //Ruta para acyualizar datos
                    'redirect_to' => '/actualizar'
                ]);
            }
            
            $dashboardRoute = $this->dashboardRouteByRole($user->id_rol);

            return response()->json([
                'authenticated' => true,
                'user' => $user,
                'redirect_to' => $dashboardRoute
                    ? route($dashboardRoute, absolute: false)
                    : null,
            ]);
        }
        
        return response()->json(['authenticated' => false]);
    }

    private function dashboardRouteByRole(?string $role): ?string
    {
        return match ($role) {
            'rol1' => 'inicio_eca',
            'rol3' => 'inicio_lic',
            'rol4' => 'inicio_ceaa',
            'rol5' => 'inicio_admin',
            default => null,
        };
    }

    public function updatePrimerAcceso(Request $request)
    {
        $user = Auth::user();
        $rol_eca = 'rol1';

        $reglas = [
            'nombre' => 'required|string|max:255',
            'correo' => 'required|email|max:100|unique:usuarios,correo,' . $user->id_usuario . ',id_usuario',
            'password' => 'required|string|min:8|confirmed'
        ];

        if ($user->id_rol === $rol_eca) {
            $reglas['nombre_inst_ope'] = 'required|string|max:1000';
            $reglas['nombre_jefe'] = 'required|string|max:200';
        }

        $request->validate($reglas, [
            'nombre.required' => 'El nombre es obligatorio.',
            'nombre_inst_ope.required' => 'El nombre de la institución operadora es obligatorio.',
            'nombre_jefe.required' => 'El nombre y cargo del jefe inmediato es obligatorio.',
            'correo.required' => 'El correo es obligatorio.',
            'correo.email' => 'Ingresa un correo electronico válido.',
            'correo.unique' => 'El correo ya esta registrado.',
            'password.required' => 'La contraseña es obligatoria.',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres.',
            'password.confirmed' => 'Las contraseñas no coinciden.'
        ]);

        $user->update([
            'nombre' => $request->nombre,
            'correo' => $request->correo,
            'password' => Hash::make($request->password),
            'cambiar_password' => 0,
        ]);

        if ($user->id_rol === $rol_eca) {
            DB::table('eca')
                ->join('usuarios', 'eca.id_usuario', '=', 'usuarios.id_usuario')
                ->where('usuarios.id_usuario', $user->id_usuario)
                ->update([
                    'eca.nombre_inst_ope' => $request->nombre_inst_ope,
                    'usuarios.nombre_jefe' => $request->nombre_jefe,
                ]);
        }

        $dashboardRoute = $this->dashboardRouteByRole($user->id_rol);

        return response()->json([
            'status' => 200,
            'message' => 'Datos actualizados correctamente.',
            'redirect_to' => $dashboardRoute
                ? route($dashboardRoute, absolute: false)
                : '/inicio',
        ]);
    }
}
