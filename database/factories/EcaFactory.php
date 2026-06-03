<?php

namespace Database\Factories;

use App\Models\Eca;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Eca>
 */
class EcaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'claveEca' => $this->faker->unique()->regexify('[A-Za-z0-9]{20}'),
            'nombre_Inst' => $this->faker->company(),
            'nombre_InstOpe' => $this->faker->company(),
            'poblacion_atend' => $this->faker->numberBetween(1, 1000),
            'telefono_lada' => substr($this->faker->phoneNumber(), 0, 10),
            'dias_hora_Aten' => $this->faker->sentence(),
            'equipo_movil' => $this->faker->boolean(),
            'equipo_electr' => $this->faker->boolean(),
            'material_didact' => $this->faker->boolean(),
            'fecha_apert' => $this->faker->date(),
            'fecha_forta' => $this->faker->date(),
            'fecha_cierre' => $this->faker->date(),
            'motivo_cierre' => $this->faker->sentence(),
            'comentarios' => $this->faker->paragraph(),
            'id_usuario' => \App\Models\Users::factory(), // Relación con Users
            'clave_estado' => substr($this->faker->stateAbbr(), 0, 20), // Asegura que no exceda los 20 caracteres
            // 'id_direccion' => \App\Models\Direccion::factory(), // Relación con Direccion
            // 'id_fecha' => \App\Models\Fecha::factory(), // Relación con Fecha
        ];
    }
}
