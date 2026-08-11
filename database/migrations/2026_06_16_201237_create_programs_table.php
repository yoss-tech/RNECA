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
        Schema::create('program_cult', function (Blueprint $table) {
            $table->char('id_program', 20)->primary();
            $table->string('municipio', 40)->default('');
            $table->string('localidad', 30);
            $table->string('tipo_platica', 50);
            $table->string('otras_activ', 100)->default('');
            $table->integer('alumnos_Aten')->nullable();
            $table->integer('pobl_ate')->nullable();
            $table->date('fecha_registro')->default(now());
            $table->string('fecha_mes', 15);
            $table->char('clave_eca', 12);

            // Foreign Keys
            $table->foreign('clave_eca')->references('clave_eca')->on('eca');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('program_cult');
    }
};
