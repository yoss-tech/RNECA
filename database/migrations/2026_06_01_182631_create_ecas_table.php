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
            $table->text('nombre_inst')->nullable(false);
            $table->text('nombre_inst_ope')->nullable(false);
            $table->integer('poblacion_atend')->nullable(false);
            $table->date('fecha_apert')->nullable(false);
            $table->date('fecha_forta')->nullable(false);
            $table->string('fecha_cierre', 50)->nullable();
            $table->text('motivo_cierre')->nullable();
            $table->char('id_usuario', 20)->nullable(false);
            $table->char('id_estatus', 20)->nullable(false);
            $table->char('id_direccion', 20)->nullable(false);
            $table->date('fecha_registro')->default(now());
            $table->string('ruta_logo', 500)->nullable(false);

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
