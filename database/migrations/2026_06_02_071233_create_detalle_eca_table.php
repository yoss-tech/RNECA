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
            $table->string('telefonos', 150);
            $table->string('dias_hora_aten', 150);
            $table->text('equipo_movil');
            $table->text('equipo_electr');
            $table->text('material_didact');
            $table->text('comentarios');
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
