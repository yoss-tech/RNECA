<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
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

        static::deleting(function ($actividad_memo) {
            // Eliminar fotos asociadas
            foreach ($actividad_memo->fotos as $foto) {
                // Eliminar archivo de imagen del almacenamiento
                if (Storage::disk('public')->exists($foto->ruta_img)) {
                    Storage::disk('public')->delete($foto->ruta_img);
                }
                // Eliminar registro de la foto de la base de datos
                $foto->delete();
            }
        });
    }

    protected $fillable = [
        'id_actividad',
        'descripcion',
        'id_memoria',
        'id_program'
    ];

    /**
     * Get all of the fotos for the actividad_memo
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function fotos()
    {
        return $this->hasMany(foto_activ::class, 'id_actividad', 'id_actividad');
    }
}
