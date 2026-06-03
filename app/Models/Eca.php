<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eca extends Model
{
    /** @use HasFactory<\Database\Factories\EcaFactory> */
    use HasFactory;

    protected $table = 'eca';
    protected $primaryKey = 'claveEca';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';

    protected $fillable = [
        'claveEca',
        'nombre_Inst',
        'nombre_InstOpe',
        'poblacion_atend',
        'telefono_lada',
        'dias_hora_Aten',
        'equipo_movil',
        'equipo_electr',
        'material_didact',
        'fecha_apert',
        'fecha_forta',
        'fecha_cierre',
        'motivo_cierre',
        'comentarios',
        'id_usuario',
        'clave_estado',
        'id_direccion',
        'id_fecha',
    ];

    protected $hidden = [
        'claveEca',
        'id_usuario',
        'id_direccion',
        'id_fecha',
    ];
}
