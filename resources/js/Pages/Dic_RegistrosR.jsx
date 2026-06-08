import React from "react";

function DICRegistros_Recibidos() {
  
  return (
  <div className="registro-container">
    <h1 className="registro-title">Informes pendientes de validación.</h1>
    <h2 className="registro-subtitle">Consulte los informes enviados por su municipio para descargar, revisar, firmar y sellar.</h2>
    
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
          <td className="btn-container">
            <button type="button" className="btn-neutral">Descargar PDF</button>
            <button type="button" className="btn-primario">Subir Firmado</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default DICRegistros_Recibidos;   