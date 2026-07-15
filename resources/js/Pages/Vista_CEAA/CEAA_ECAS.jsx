import React from "react";

function CEAA_Ecas() {

  return (
  <div className="page-container">
    <h1 className="page-title">Información sobre ECAS.</h1>
    <h2 className="page-subtitle">Visualice toda la información completa sobre los Espacios de Cultura del Agua</h2>
    
    <div className="dashboard">
        <div className="dashboard-left">
              <div className="buscador">
                <input type="text" placeholder="Buscar..." className="buscador-control"/>
                <button className="buscador-button"><i className="bi bi-search"></i></button>
            </div>
        </div>
        
        <div className="btn-container-horizontal">
                <button className="btn-primario" >Crear un nuevo ECA</button>
        </div>
    </div>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Información Institucional</th>
          <th className="th-start">Mes</th>
          <th className="th-start">Observaciones</th>
          <th className="th-start">Fecha</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>
            <p className="td-title">Municipio</p>
            <p className="td-subtitle">Instancia operativa</p>
          </td>
          <td>Mes</td>
          <td>Observaciones</td>
          <td>Dia de Mes de Año</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default CEAA_Ecas;     