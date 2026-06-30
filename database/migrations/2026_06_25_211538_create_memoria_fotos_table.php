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
        Schema::create('memoria_foto', function (Blueprint $table) {
            $table->string('id_memoria', 20)->primary();
            $table->text('descripcion');
            $table->string('titulo', 100);
            $table->text('descripcion_act');
            $table->string('ruta_img', 250);
            $table->string('id_claveEca', 12);
            $table->timestamps('fecha');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memoria_fotos');
    }
};
