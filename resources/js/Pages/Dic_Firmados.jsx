import React from "react";

function DIC_Firmados() {

  return (
        <div className="registro-container">
        <h2 className="registro-title">Registros firmados de Espacios de Cultura del Agua</h2>
      <h5 className="registro-subtitle">Administra, consulta y da seguimiento a los registros mensuales de actividades.</h5>

        <table class="tabla-registros">
          <thead>
            <tr>
              <th>ECA</th>
              <th>Mes</th>
              <th>Archivo</th>
              <th>Fecha subida</th>
            </tr>
          </thead>
          
        <tbody>
            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Abril</td>
              <td><i class="bi bi-file-earmark-pdf fondo_i"></i></td>
              <td>03 de Marzo del 2026</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default  DIC_Firmados;