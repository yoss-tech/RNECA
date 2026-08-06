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
        Schema::create('foto_activ', function (Blueprint $table) {
            $table->char('id_foto', 20)->primary();
            $table->string('nombre', 100);
            $table->string('ruta_img', 500);
            $table->char('id_actividad', 20);
            $table->timestamps();

            $table->foreign('id_actividad')->references('id_program')->on('program_cult')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foto_activ');
    }
};
