<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoEstatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tipo_estatus')->insert([
            ['id_estatus' => 'EST-1K2LMP4X', 'nombre_tipo' => 'En operación'],
            ['id_estatus' => 'EST-4HJVB2C9', 'nombre_tipo' => 'Pendiente'],
            ['id_estatus' => 'EST-8HCVW2C7', 'nombre_tipo' => 'Correcciones'],
            ['id_estatus' => 'EST-A9ZSN5W2', 'nombre_tipo' => 'Activo'],
            ['id_estatus' => 'EST-C731KSDA', 'nombre_tipo' => 'Cerrado'],
            ['id_estatus' => 'EST-IYU9DADF', 'nombre_tipo' => 'Inactivo'],
            ['id_estatus' => 'EST-R4M8TP1L', 'nombre_tipo' => 'Firmado'],
            ['id_estatus' => 'EST-V7WQ3N8Z', 'nombre_tipo' => 'Validado'],
        ]);
    }
}
