<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Traits\HasAutoFecha;
use Override;

class espacio extends Model
{
    protected $table = 'espaciocultura';
    protected $primaryKey = 'id_espacio';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string'; 


    protected static function booted()
    {
        static::creating(function ($espacio) {
            if (empty($espacio->id_espacio)) {
                $espacio->id_espacio = 'ESP-' . strtoupper(Str::random(10));
            }

        });
    }

    protected $fillable = [
        'id_espacio',
        'total_pobl',
        'comentarios',
        'clave_eca',
    ];
}
