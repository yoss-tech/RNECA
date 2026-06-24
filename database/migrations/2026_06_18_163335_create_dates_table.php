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
        Schema::create('fecha', function (Blueprint $table) {
            $table->string('id_fecha', 8)->primary();
            $table->date('fecha_comp');
            $table->integer('anio');
            $table->integer('mes');
            $table->integer('dia');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fecha');
    }
};
