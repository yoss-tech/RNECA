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
        Schema::create('detalle_eca', function (Blueprint $table) {
            $table->string('id_detalle_eca', 20)->primary();
            $table->string('telefonos', 130);
            $table->string('dias_hora_aten', 50);
            $table->string('equipo_movil', 150);
            $table->string('equipo_electr', 150);
            $table->string('material_didact', 150);
            $table->string('comentarios', 300)->default('');
            $table->string('id_estatus', 20);
            $table->string('clave_eca', 12);

            $table->foreign('id_estatus')->references('id_estatus')->on('tipo_estatus');
            $table->foreign('clave_eca')->references('clave_eca')->on('eca');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detalle_eca');
    }
};
