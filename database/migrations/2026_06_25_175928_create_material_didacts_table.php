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
        Schema::create('material_didact', function (Blueprint $table) {
            $table->string('id_material', 20)->primary();
            $table->integer('inedito');
            $table->integer('reproducido');
            $table->integer('adquirido');
            $table->string('id_espacio', 20);
            $table->timestamps();
            $table->foreign('id_espacio')->references('id_espacio')->on('espaciocultura')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('material_didact');
    }
};
