<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EcaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('eca')->insert([
            [
                'clave_eca' => '13-1-1-1',
                'nombre_inst' => 'Comisión Estatal del Agua y Alcantarillado de Hidalgo',
                'nombre_inst_ope' => 'Dirección de Agua Potable Municipal',
                'poblacion_atend' => 439,
                'fecha_apert' => '2004-12-13',
                'fecha_forta' => '2023-12-28',
                'fecha_cierre' => 'No Aplica',
                'motivo_cierre' => 'No Aplica',
                'ruta_logo' => '',
                'id_usuario' => 'USER-1',
                'id_estatus' => 'EST-1K2LMP4X',
                'id_direccion' => 'DIR-1',
                'fecha_registro' => '2026-07-22',
            ],
            [
                'clave_eca' => '13-2-1-1',
                'nombre_inst' => 'Comisión Estatal del Agua y Alcantarillado de Hidalgo',
                'nombre_inst_ope' => 'Dirección de Agua Potable Municipal',
                'poblacion_atend' => 250,
                'fecha_apert' => '2002-12-09',
                'fecha_forta' => '2024-09-23',
                'fecha_cierre' => 'No Aplica',
                'motivo_cierre' => 'No Aplica',
                'ruta_logo' => '',
                'id_usuario' => 'USER-2',
                'id_estatus' => 'EST-1K2LMP4X',
                'id_direccion' => 'DIR-2',
                'fecha_registro' => '2026-07-22',
            ]
        ]);
    }
}
