import React from "react";

function VECA_ConsultaReg() {

  return (
  <div className="page-container">
    <h1 className="page-title">Historial de informes mensuales enviados.</h1>
    <h2 className="page-subtitle">Consulte los informes registrados y enviados en periodos anteriores.</h2>
    
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Mes</th>
          <th className="th-start">Estado</th>
          <th className="th-start">Fecha de envío</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>Abril</td>
          <td class="estado revisado">Revisado</td>
          <td>DIA de MES del AÑO</td>
          <td className="btn-container">
            <button type="button" className="btn-neutral">Descargar PDF</button>
          </td>
        </tr>
        
        <tr>
          <td>Marzo</td>
          <td class="estado correcciones">Correcciones</td>
          <td>DIA de MES del AÑO</td>
          <td className="btn-container">
            <button type="button" className="btn-negativo">Corregir</button>
          </td>
        </tr>
        
        <tr>
          <td>Febrero</td>
          <td class="estado enviado">Enviado</td>
          <td>DIA de MES del AÑO</td>
          <td className="btn-container">
            <button type="button" className="btn-neutral">Leer documento</button>
          </td>
        </tr>

        <tr>
          <td>Enero</td>
          <td class="estado pendiente">Pendiente</td>
          <td>DIA de MES del AÑO</td>
          <td className="btn-container">
            <button type="button" className="btn-primario">Completar registro pendiente</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default VECA_ConsultaReg;   