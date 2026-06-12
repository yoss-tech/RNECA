import React from "react";

function DIC_Firmados() {

  return (
  <div className="page-container">
    <h1 className="page-title">Historial de informes completados.</h1>
    <h2 className="page-subtitle">Consulte los informes firmados, sellados y cargados correctamente en el sistema.</h2>
    
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">ECA</th>
          <th className="th-start">Mes</th>
          <th className="th-start">Fecha subida</th>
          <th>Archivo</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>Lic. Luis Garcia Contreras</td>
          <td>Abril</td>
          <td>03 de Marzo del 2026</td>
          <td className="btn-container-horizontal">
            <button type="button" className="btn-neutral">Descargar PDF</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default  DIC_Firmados;