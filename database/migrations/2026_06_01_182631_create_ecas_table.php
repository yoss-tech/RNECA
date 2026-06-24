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
        Schema::create('ecas', function (Blueprint $table) {
            $table->string('clave_eca', 12)->primary();
            $table->text('nombre_inst');
            $table->text('nombre_inst_ope');
            $table->integer('poblacion_atend');
            $table->date('fecha_apert');
            $table->date('fecha_forta');
            $table->string('fecha_cierre', 50)->nullable();
            $table->text('motivo_cierre')->nullable();
            $table->string('id_usuario', 20);
            $table->string('id_estatus', 20);
            $table->string('id_direccion', 20);
            $table->string('id_fecha', 8);

            // Foreign Keys
            $table->foreign('id_usuario')->references('id_usuario')->on('usuarios');
            $table->foreign('id_estatus')->references('id_estatus')->on('tipo_estatus');
            $table->foreign('id_direccion')->references('id_direccion')->on('direccion');
            $table->foreign('id_fecha')->references('id_fecha')->on('fecha');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ecas');
    }
};
