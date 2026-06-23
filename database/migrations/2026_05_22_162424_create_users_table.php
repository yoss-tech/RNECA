<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->string('id_usuario', 20)->primary();
            $table->string('nombre', 60);
            $table->string('correo')->unique();
            $table->string('telefono', 14);
            $table->string('password');
            $table->string('id_rol', 20);
            $table->string('id_dicm', 20)->nullable(); // La FK puede ser nula
            $table->timestamps();

            // Definición de llaves foráneas
            $table->foreign('id_rol')->references('id_rol')->on('rol');
            $table->foreign('id_dicm')->references('id_usuario')->on('usuarios');
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
