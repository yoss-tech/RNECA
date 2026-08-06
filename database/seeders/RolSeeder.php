<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rol')->insert([
            ['id_rol' => 'rol1', 'nombre_rol' => 'ECA'],
            ['id_rol' => 'rol3', 'nombre_rol' => 'Licenciado'],
            ['id_rol' => 'rol4', 'nombre_rol' => 'CEAA'],
            ['id_rol' => 'rol5', 'nombre_rol' => 'Admin'],
        ]);
    }
}
