import React from "react";

function DICRegistros_Recibidos() {

  return (
        <div className="registro-container">
      <h2 className="registro-title">Registros recibidos de Espacios de Cultura del Agua</h2>
      <h5 className="registro-subtitle">Consulta los registros enviados por los ECAs para revisión y validación.</h5>

        <table class="tabla-registros">
          <thead>
            <tr>
              <th>ECA</th>
              <th>Mes</th>
              <th>Fecha de envío</th>
              <th>Acciones</th>
            </tr>
          </thead>

        <tbody>
            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Abril</td>
              <td>03 de Marzo del 2026</td>
              <td><button type="button" className="btn-space">Revisar</button></td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default DICRegistros_Recibidos;   