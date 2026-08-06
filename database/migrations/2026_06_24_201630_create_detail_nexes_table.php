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
        Schema::create('detalle_nexo', function (Blueprint $table) {
            $table->char('id_nexo', 20)->primary();
            $table->char('list_asist', 2)->nullable();
            $table->char('evi_foto', 2)->nullable();
            $table->char('nota_period', 2)->nullable();
            $table->char('id_espacio', 20)->nullable(false);
            $table->foreign('id_espacio')->references('id_espacio')->on('espaciocultura')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detalle_nexo');
    }
};
