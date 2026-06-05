<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if(Auth::check() && Auth::user()->id_rol === $role) {
            return $next($request);
        } else {
            return redirect('/') ->with('error', 'No tienes permiso para acceder a esta página.');
        }
    }
}
