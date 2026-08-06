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
            $table->char('id_espacio', 20)->primary();
            $table->integer('total_pobl')->nullable(false);
            $table->string('comentarios', 450)->nullable(false);
            $table->date('fecha_registro')->default(now());
            $table->char('clave_eca', 12)->nullable(false);

            // Foreign Keys
            $table->foreign('clave_eca')->references('clave_eca')->on('eca');
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
