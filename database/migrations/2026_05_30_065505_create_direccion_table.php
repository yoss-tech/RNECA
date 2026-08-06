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
        Schema::create('direccion', function (Blueprint $table) {
            $table->char('id_direccion', 20)->primary();
            $table->string('cod_postal', 5)->nullable(false);
            $table->string('localidad', 50)->nullable(false);
            $table->string('colonia', 50)->nullable(false);
            $table->string('calle_av', 50)->nullable(false);
            $table->string('num_direccion', 20)->nullable(false);
            $table->string('tipo_instancia', 100)->nullable(false);
            $table->char('id_municipio', 20)->nullable(false);

            $table->foreign('id_municipio')->references('id_municipio')->on('municipio');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('direccion');
    }
};
