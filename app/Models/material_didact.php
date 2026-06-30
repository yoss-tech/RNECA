<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class material_didact extends Model
{
    protected $table = 'material_didact';
    public $incrementing = false;
    public $timestamps = false;
    protected $primaryKey = 'id_material';
    protected $keyType = 'string';


    protected static function booted()
    {
        static::creating(function ($material_didact) {
            if (empty($material_didact->id_material)) {
                $material_didact->id_material = 'MAT-' . strtoupper(Str::random(10));
            }
        });
    }

    protected $fillable = [
        'id_material',
        'inedito',
        'reproducido',
        'adquirido',
        'id_espacio'
    ];
}
