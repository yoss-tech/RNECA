<?php

namespace App\Traits;

use App\Models\date;
use Carbon\Carbon;

trait HasAutoFecha
{
    protected static function bootHasAutoFecha()
    {
        static::creating(function ($model) {
            $now = Carbon::now();
            $id_fecha = $now->format('dmY'); // Formato 18052026

            // Verificar si el registro de fecha ya existe
            $fechaRecord = date::find($id_fecha);

            if (!$fechaRecord) {
                date::create([
                    'id_fecha'   => $id_fecha,
                    'fecha_comp' => $now->toDateString(),
                    'anio'        => $now->year,
                    'mes'        => $now->month,
                    'dia'        => $now->day,
                ]);
            }

            // Asignar automáticamente el ID al modelo que se está creando
            $model->id_fecha = $id_fecha;
        });
    }
}