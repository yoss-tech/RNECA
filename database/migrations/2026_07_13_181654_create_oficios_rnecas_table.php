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
        Schema::create('oficios_rneca', function (Blueprint $table) {
            $table->char('id_oficio', 20)->primary();
            $table->string('mes_oficio', 20);
            $table->string('ruta_oficio', 255);
            $table->text('observacion')->default('Sin observaciones');
            $table->date('fecha_registro')->default(now());
            $table->date('fecha_firma')->default(now());
            $table->date('fecha_obser')->default(now());
            $table->char('clave_eca', 12);
            $table->char('id_estatus', 20)->default('EST-R4M8TP1L');
            $table->timestamps();

            $table->foreign('clave_eca')->references('clave_eca')->on('eca');
            $table->foreign('id_estatus')->references('id_estatus')->on('tipo_estatus');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oficios_rneca');
    }
};
