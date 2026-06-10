import React from "react";

function DICRegistros_Recibidos() {
  
  return (
  <div className="page-container">
    <h1 className="page-title">Informes pendientes de validación.</h1>
    <h2 className="page-subtitle">Consulte los informes enviados por su municipio para descargar, revisar, firmar y sellar.</h2>
    
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">ECA</th>
          <th className="th-start">Mes</th>
          <th className="th-start">Fecha de envío</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>Lic. Luis Garcia Contreras</td>
          <td>Abril</td>
          <td>03 de Marzo del 2026</td>
          <td className="btn-container-horizontal">
            <button type="button" className="btn-neutral">Descargar PDF</button>
            <button type="button" className="btn-primario">Subir Firmado</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default DICRegistros_Recibidos;   