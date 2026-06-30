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
        Schema::create('material_didacts', function (Blueprint $table) {
            $table->string('id_material', 20)->primary();
            $table->integer('inedito',11);
            $table->integer('reproducido',11);
            $table->integer('adquirido',11);
            $table->string('id_espacio', 20);
            $table->timestamps('material_Timestamp');
            $table->foreign('id_espacio')->references('id_espacio')->on('espaciocultura');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('material_didacts');
    }
};
