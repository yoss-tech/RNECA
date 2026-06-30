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
        Schema::create('detail_asists', function (Blueprint $table) {
            $table->string('id_detalle', 20)->primary();
            $table->string('genero', 10);
            $table->string('rango_edad', 10);
            $table->integer('cantidad',20);
            $table->string('id_espacio', 20);
            $table->foreign('id_espacio')->references('id_espacio')->on('espaciocultura');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_asists');
    }
};
