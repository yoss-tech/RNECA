<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class date extends Model
{
    protected $table = 'fecha';
    protected $primaryKey = 'id_fecha';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'id_fecha',
        'fecha_comp',
        'anio',
        'mes',
        'dia'
    ];
}
