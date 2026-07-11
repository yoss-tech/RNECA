<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class memoria_foto extends Model
{
    protected $table = 'memoria_fotografica';
    public $incrementing = false;
    public $timestamps = false;
    protected $primaryKey = 'id_memoria';
    protected $keyType = 'string';

    protected static function booted()
    {
        static::creating(function ($memoria_foto) {
            if (empty($memoria_foto->id_memoria)) {
                $memoria_foto->id_memoria = 'MEM-' . strtoupper(Str::random(10));
            }
        });
    }
    
    // protected $appends = ['ruta_img'];

    protected $fillable = [
        'id_memoría',
        'descrip_gen',
        'id_claveEca'
    ];


    // public function getImagePathAttribute(){
    //     return $this -> imagen_path ? asset(Storage::url($this->imagen_path)) : null;
    // }
}
