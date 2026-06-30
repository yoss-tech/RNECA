<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class detail_nex extends Model
{
    protected $table = 'detalle_nexo';
    public $incrementing = false;
    public $timestamps = false;
    protected $primaryKey = 'id_nexo';
    protected $keyType = 'string';

    protected static function booted()
    {
        static::creating(function ($detail_nex) {
            if (empty($detail_nex->id_nexo)) {
                // Genera un ID como PROG-7A2B9C (ajustable a tus necesidades)
                $detail_nex->id_nexo = 'NEX-' . strtoupper(Str::random(10));
            }
        });
    }

    protected $fillable =[
        'id_nexo',
        'list_asist',
        'evi_foto',
        'nota_period',
        'id_espacio'
    ];

}
