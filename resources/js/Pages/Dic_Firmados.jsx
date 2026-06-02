import React from "react";

function DIC_Firmados() {

  return (
        <div className="registro-container">
        <h1 className="registro-title">Historial de informes completados.</h1>
      <h2 className="registro-subtitle">Consulte los informes firmados, sellados y cargados correctamente en el sistema.</h2>

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
              <td><p className="fondo_i">Descargar PDF</p> </td>
              <td>03 de Marzo del 2026</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default  DIC_Firmados;