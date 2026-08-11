<?php

namespace App\Http\Controllers;

use App\Models\Notificacion;
use Illuminate\Http\Request;
use Iluminate\Support\Facades\Auth;

class NotificacionController extends Controller
{
    public function index()
    {
        $usuario = Auth::user();
        $notificaciones = Notificacion::where(
            'id_usuario',
            $usuario->id
        )->orderBy('created_at', 'desc')->get();

        return response()->json([
            'status' => 200,
            'body' => $notificaciones
        ]);
    }

    public function contador()
    {
        $usuario = Auth::user();
        $contador = Notificacion::where(
            'id_usuario',
            $usuario->id
        )
        ->where('leida', false)
        ->count();

        return response()->json([
            'status' => 200,
            'body' => $contador
        ]);
    }

    public function marcarLeida($id)
    {
        $usuario = Auth::user();
        $notificacion = Notificacion::where('id', $id)
        ->where('id_usuario', $usuario->id)
        ->firstOrFail();

        $notificacion->update([
            'leida' => true
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Notificación marcada como leída'
        ]);
    }
}
