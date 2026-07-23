<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (! Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();

        if ($user->id_rol === $role) {
            return $next($request);
        }

        $dashboardRoute = $this->dashboardRouteByRole($user->id_rol);

        if ($dashboardRoute && Route::has($dashboardRoute)) {
            return redirect()
                ->route($dashboardRoute)
                ->with('error', 'No tienes permiso para acceder a esa sección.');
        }

        abort(403, 'No tienes permiso para acceder a esta página.');
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
