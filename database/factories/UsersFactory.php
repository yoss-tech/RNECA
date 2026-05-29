<?php

namespace Database\Factories;

use App\Models\Users;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Users>
 */
class UsersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_usuario'=> Str::random(20),
            'nombre'=>$this->faker->name(),
            'correo'=>$this->faker->email(),
            'telefono'=> substr($this->faker->phoneNumber(), 0, 10),
            'password'=> bcrypt('password'),
            'id_rol' => 'rol1', // Debe coincidir con el tipo char(20) de tu SQL
        ];
    }
}
