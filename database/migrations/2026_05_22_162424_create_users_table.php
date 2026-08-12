<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->char('id_usuario', 20)->primary();
            $table->string('nombre', 80);
            $table->string('correo')->unique();
            $table->string('correoExtra')->nullable();
            $table->string('password');
            $table->boolean('cambiar_password');
            $table->date('fecha_registro')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->char('id_rol', 20);
            $table->string('nombre_jefe', 200)->default('Sin jefe inmediato')->nullable();

            // Definición de llaves foráneas
            $table->foreign('id_rol')->references('id_rol')->on('rol');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
