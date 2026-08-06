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
        Schema::create('detalle_asistente', function (Blueprint $table) {
            $table->char('id_detalle', 20);
            $table->string('genero', 10);
            $table->string('rango_edad', 10);
            $table->integer('cantidad');
            $table->char('id_espacio', 20);
            $table->foreign('id_espacio')->references('id_espacio')->on('espaciocultura')->onDelete('cascade');

            $table->primary('id_detalle');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detalle_asistente');
    }
};
