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
        Schema::create('espaciocultura', function (Blueprint $table) {
            $table->string('id_espacio', 20)->primary();
            $table->string('material_did', 100);
            $table->integer('total_pobl');
            $table->string('anexos', 150)->default('');
            $table->string('comentarios', 150)->default('');
            $table->integer('asistentes')->default(0);
            $table->string('clave_eca', 12);
            $table->string('id_fecha', 8);

            // Foreign Keys
            $table->foreign('clave_eca')->references('clave_eca')->on('eca');
            $table->foreign('id_fecha')->references('id_fecha')->on('fecha');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('espaciocultura');
    }
};
