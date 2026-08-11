<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notificacion extends Model
{
    protected $table = 'notificaciones';

    protected $fillable = [
        'id_usuario',
        'titulo',
        'mensaje',
        'tipo',
        'url',
        'leida',
    ];

    protected $casts = [
        'leida' => 'boolean',
    ];
}
