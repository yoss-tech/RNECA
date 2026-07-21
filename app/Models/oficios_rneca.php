<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Override;

class oficios_rneca extends Model
{
    protected $table = 'oficios_rneca';
    protected $primaryKey = 'id_oficio';
    public $incrementing = false;
    public $timestamps = false;

    protected static function booted()
    {
        static::creating(function ($oficio) {
            if (empty($oficio->id_oficio)) {
                // Genera un ID como PROG-7A2B9C (ajustable a tus necesidades)
                $oficio->id_oficio = 'OFIC-' . strtoupper(Str::random(5));
            }
        });
    }

    protected $appends = ['ruta_oficio'];

    protected $fillable = [
        'id_oficio',
        'mes_oficio',
        'ruta_oficio',
        'ruta_oficio_firm',
        'idClave_eca',
        'id_estatus'
    ];

    public function getPdfUrlAttribute()
    {
        return $this->pdf_path ? asset(Storage::url($this->pdf_path)) : null;
    }

}
