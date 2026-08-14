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
        Schema::create('eca', function (Blueprint $table) {
            $table->char('clave_eca', 12)->primary();
            $table->text('nombre_inst');
            $table->text('nombre_inst_ope');
            $table->integer('poblacion_atend');
            $table->date('fecha_apert');
            $table->date('fecha_forta');
            $table->date('fecha_cierre')->nullable();
            $table->text('motivo_cierre')->nullable();
            $table->string('ruta_logo', 500)->nullable();
            $table->char('id_usuario', 20);
            $table->char('id_estatus', 20);
            $table->char('id_direccion', 20);
            $table->date('fecha_registro')->default(now());


            // Foreign Keys
            $table->foreign('id_usuario')->references('id_usuario')->on('usuarios');
            $table->foreign('id_estatus')->references('id_estatus')->on('tipo_estatus');
            $table->foreign('id_direccion')->references('id_direccion')->on('direccion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eca');
    }
};
