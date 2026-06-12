import React from "react";

function CEAA_Observaciones() {

  return (
  <div className="page-container">
    <h1 className="page-title">Informes devueltos para corrección.</h1>
    <h2 className="page-subtitle">Visualice los informes que fueron regresados por inconsistencias u observaciones detectadas durante la revisión.</h2>
    
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Información Institucional</th>
          <th className="th-start">Mes</th>
          <th className="th-start">Observaciones</th>
          <th className="th-start">Fecha</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>
            <p className="td-title">Municipio</p>
            <p className="td-subtitle">Instancia operativa</p>
          </td>
          <td>Mes</td>
          <td>Observaciones</td>
          <td>Dia de Mes de Año</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default CEAA_Observaciones;     