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
            $table->string('localidad', 30)->nullable(false);
            $table->string('tipo_platica', 50)->nullable(false);
            $table->string('otras_activ', 100)->default('');
            $table->string('descripcion_activ', 500)->nullable();
            $table->string('alumnos_Aten',250)->nullable();
            $table->integer('pobl_ate')->default(0);
            $table->date('fecha_registro')->default(now());
            $table->string('fecha_mes', 15)->nullable(false);
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
