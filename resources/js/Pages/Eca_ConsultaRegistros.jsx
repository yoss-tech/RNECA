import React from "react";

function VECA_ConsultaReg() {

  return (
        <div className="registro-container">
      <h1 className="registro-title">Historial de informes mensuales enviados.</h1>
      <h2 className="registro-subtitle">Consulte los informes registrados y enviados en periodos anteriores.</h2>

        <table class="tabla-registros">
          <thead>
            <tr>
              <th>Mes</th>
              <th>Estado</th>
              <th>Fecha de envío</th>
              <th>Acciones</th>
            </tr>
          </thead>

        <tbody>
            <tr>
              <td>Abril</td>
              <td class="estado revisado">Revisado</td>
              <td>05 de Mayo del 2026</td>
              <td><button type="button" className="btn-vista">Descargar</button></td>
            </tr>

            <tr>
              <td>Marzo</td>
              <td class="estado correcciones">Correcciones</td>
              <td>07 de Abril del 2026</td>
              <td><button type="button" className="btn-space">Corregir</button></td>
            </tr>

            <tr>
              <td>Febrero</td>
              <td class="estado enviado">Enviado</td>
              <td>03 de Marzo del 2026</td>
              <td><button type="button" className="btn-vista">Leer documento</button></td>
            </tr>

            <tr>
              <td>Enero</td>
              <td class="estado pendiente">Pendiente</td>
              <td>04 de Febrero del 2026</td>
              <td><button type="button" className="btn-space">Completar registro pendiente</button></td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default VECA_ConsultaReg;   