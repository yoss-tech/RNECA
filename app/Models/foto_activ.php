<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class foto_activ extends Model
{
    protected $table = 'foto_activ';
    protected $primaryKey = 'id_foto';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';

    protected static function booted()
    {
        static::creating(function ($foto_activ) {
            if (empty($foto_activ->id_foto)) {
                $foto_activ->id_foto = 'img-' . strtoupper(Str::random(10));
            }
        });
    }

    protected $appends = ['imagenes'];

    protected $fillable = [
        'id_foto',
        'nombre',
        'ruta_img',
        'id_actividad'
    ];

    public function getImagenesAttribute(){
        return $this -> imagen_path ? asset(Storage::url($this->imagen_path)) : null;
    }
}
