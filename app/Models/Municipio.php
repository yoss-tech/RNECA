<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    protected $table='municipio';
    protected $primaryKey = 'id_munipio';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'id_municipio',
        'nombre_municipio',
        'num_habitan',
        'estado'
    ];
}