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
            $table->string('id_program', 20)->primary();
            $table->string('municipio', 40)->default('');
            $table->string('localidad', 30);
            $table->string('tipo_platica', 50);
            $table->string('otras_activ', 100)->default('');
            $table->string('alumnos_Aten',250);
            $table->integer('pobl_ate')->default(0);
            $table->string('fecha_mes', 15);
            $table->string('clave_eca', 12);
            $table->string('id_fecha', 8);

            // Foreign Keys
            $table->foreign('clave_eca')->references('clave_eca')->on('eca');
            $table->foreign('id_fecha')->references('id_fecha')->on('fecha');
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
