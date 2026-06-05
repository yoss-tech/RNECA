import React from "react";

function CEAA_Observaciones() {

  return (

    <div className="registro-container">
      <h1 className="registro-title">Informes devueltos para corrección.</h1>
      <h2 className="registro-subtitle">Visualice los informes que fueron regresados por inconsistencias u observaciones detectadas durante la revisión.</h2>
    
       <table class="tabla-registros">
          <thead>
            <tr>
              <th>Información Institucional</th>
              <th>Mes</th>
              <th>Observaciones</th>
              <th>Fecha</th>
            </tr>
          </thead>

        <tbody>
            <tr>
             <td><div className="card-titulo">Municipio</div> <div className="card-text">Instancia operativa</div> </td>
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