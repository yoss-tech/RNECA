import React from "react";

function DIC_Validados() {

  return (
        <div className="registro-container">
      <h2 className="registro-title">Registros validados de Espacios de Cultura del Agua</h2>
      <h5 className="registro-subtitle">Consulta documentos aprobados y listos para firma.</h5>

        <table class="tabla-registros">
          <thead>
            <tr>
              <th>ECA</th>
              <th>Mes</th>
              <th>Fecha de Validación</th>
              <th>Acciones</th>
            </tr>
          </thead>

        <tbody>
            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Abril</td>
              <td>03 de Marzo del 2026</td>
              <td className="containerBtn"><button type="button" className="btn-space">Leer documento</button>
              <button type="button" className="btn-vista">Descargar PDF</button>
              <button type="button" className="btn-guardar">Subir Archivo</button></td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default  DIC_Validados;   
