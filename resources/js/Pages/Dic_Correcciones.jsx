import React from "react";

function DIC_Correcciones() {

  return (
  <div className="page-container">
    <h1 className="page-title">Informes en corrección.</h1>
    <h2 className="page-subtitle">Visualice los informes devueltos para corrección debido a observaciones detectadas durante la revisión.</h2>
    
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">ECA</th>
          <th className="th-start">Mes</th>
          <th className="th-start">Observaciones</th>
          <th className="th-start">Fecha</th>
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