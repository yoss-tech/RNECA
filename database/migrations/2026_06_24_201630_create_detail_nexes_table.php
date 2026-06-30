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
        Schema::create('detail_nex', function (Blueprint $table) {
            $table->string('id_nexo', 20)->primary();
            $table->string('list_asist', 2);
            $table->string('evi_foto', 2);
            $table->string('nota_period', 2);
            $table->string('id_espacio', 20);
            $table->foreign('id_espacio')->references('id_espacio')->on('espacio');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_nex');
    }
};
