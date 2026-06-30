<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class detail_asist extends Model
{
    protected $table = 'detalle_asistente';
    public $incrementing = false;
    public $timestamps = false;
    protected $primaryKey = 'id_detalle';
    protected $keyType = 'string';

    protected static function booted()
    {
        static::creating(function ($detail_asist) {
            if (empty($detail_asist->id_detalle)) {
                // Genera un ID como PROG-7A2B9C (ajustable a tus necesidades)
                $detail_asist->id_detalle = 'DETL-' . strtoupper(Str::random(10));
            }
        });
    }

    protected $fillable = [
        'id_detalle',
        'genero',
        'rango_edad',
        'cantidad',
        'id_espacio'
    ];
}
