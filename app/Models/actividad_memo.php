<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class actividad_memo extends Model
{
    protected $table = 'actividades_mem';
    protected $primaryKey = 'id_actividad';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';

    protected static function booted()
    {
        static::creating(function ($actividades_mem) {
            if (empty($actividades_mem->id_actividad)) {
                $actividades_mem->id_actividad = 'Acti-' . strtoupper(Str::random(10));
            }
        });
    }

    protected $fillable = [
        'id_actividad',
        'descripcion',
        'id_memoria',
        'id_program'
    ];
}
