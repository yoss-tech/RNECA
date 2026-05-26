import React from "react";

function DIC_Correcciones() {

  return (
        <div className="registro-container">
      <h2 className="registro-title">Registros con correcciones de Espacios de Cultura del Agua</h2>
      <h5 className="registro-subtitle">Administra documentos devueltos para modificación o actualización.</h5>

        <table class="tabla-registros">
          <thead>
            <tr>
              <th>ECA</th>
              <th>Mes</th>
              <th>Motivo</th>
              <th>Fecha de envío de envíones</th>
            </tr>
          </thead>

        <tbody>
            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Abril</td>
              <td>Favor de agregar actividades faltantes del día 15</td>
              <td>03 de Marzo del 2026</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default  DIC_Correcciones;   