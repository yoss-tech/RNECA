<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('usuarios')->insert([
            [
                'id_usuario' => 'USER-1',
                'nombre' => 'Alberto Islas Lópe',
                'correo' => 'agua.potable@acatlanhidalgo.gob.mx',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-07-06',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ],
            [
                'id_usuario' => 'USER-2',
                'nombre' => 'C.Citlali Ortíz Esteban',
                'correo' => 'ECA.presidencia.acaxochitlan@gmail.com',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-07-07',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ],
            [
                'id_usuario' => '2',
                'nombre' => 'Alec Dario',
                'correo' => 'alec1@gmail.com',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-06-16',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ],
            [
                'id_usuario' => '3',
                'nombre' => 'Pedrito',
                'correo' => 'pedrito@gmail.com',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-06-05',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ],
            [
                'id_usuario' => '5',
                'nombre' => 'Victor',
                'correo' => 'vic@gmail.com',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-06-05',
                'id_rol' => 'rol5',
                'nombre_jefe' => '',
            ],
            // New users
            [
                'id_usuario' => 'USER-3',
                'nombre' => 'Lic.José Adrián Chávez C',
                'correo' => 'enlaceh2o.actopan@gmail.com',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-07-08',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ],
            [
                'id_usuario' => 'USER-4',
                'nombre' => 'Raúl Santos Muñoz',
                'correo' => 'aguapotable@aguablanca.gob.mx',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-07-09',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ],
            [
                'id_usuario' => 'USER-5',
                'nombre' => 'Lic. Sandra Ethel Arciniega López',
                'correo' => 'culturadelagua.ajacuba@gmail.com',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-07-10',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ],
            [
                'id_usuario' => 'USER-6',
                'nombre' => 'Ing. Jimena Zamudio Sanchez',
                'correo' => 'caamah.culturadelagua24@gmail.com',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-07-11',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ],
            [
                'id_usuario' => 'USER-7',
                'nombre' => 'L.A. Jahtziri Campos Lozada',
                'correo' => 'comisiondeaguaalmoloya24.27@gimail.com',
                'password' => Hash::make('password'),
                'cambiar_password' => 1,
                'fecha_registro' => '2026-07-12',
                'id_rol' => 'rol1',
                'nombre_jefe' => '',
            ]
        ]);
    }
}
