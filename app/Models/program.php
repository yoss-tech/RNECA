<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Traits\HasAutoFecha;
use Override;

class program extends Model
{
    protected $table = 'program_cult';
    public $incrementing = false;
    public $timestamps = false;
    protected $primaryKey = 'id_program';
    protected $keyType = 'string';


    protected static function booted()
    {
        static::creating(function ($program) {
            if (empty($program->id_program)) {
                // Genera un ID como PROG-7A2B9C (ajustable a tus necesidades)
                $program->id_program = 'Activ-' . strtoupper(Str::random(10));
            }

        });
    }

    protected $fillable = [
        'id_program',
        'municipio',
        'localidad',
        'tipo_platica',
        'otras_activ',
        'descripcion_activ',
        'alumnos_Aten',
        'pobl_ate',
        'fecha_mes',
        'clave_eca',
    ];

}
