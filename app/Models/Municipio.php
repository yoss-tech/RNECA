<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    protected $table = 'nombre_munipio';
    protected $primaryKey = 'id_munipio';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;
    
    protected $fillable = [
        'id_municipio',
        'nombre_munipio',
    ];
}
