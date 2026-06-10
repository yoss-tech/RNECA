import { Select } from "@headlessui/react";
import React from "react";

function CEAA_Validados() {
    
  return (
  <div className="page-container">
    <h1 className="page-title">Informes revisados y aprobados.</h1>
    <h2 className="page-subtitle">Consulte los informes que fueron revisados y validados correctamente durante el periodo mensual.</h2>
    
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="filtro">
          <p className="card-text">Municipio:</p>
          <select className="municipio-select">
            <option value="">Selecciona una opción</option>
            <option value="1">Toluca</option>
            <option value="2">Metepec</option>
            <option value="3">Lerma</option>
            <option value="4">Atlacomulco</option>
            <option value="5">Valle de Bravo</option>
          </select>
        </div>
        
        <div className="cards-revision">
          <div className="card-municipio">
            <div className="card-body">
              <div className="card-titles">
                <h3 className="card-title">Municipio</h3>
                <h3 className="card-subtitle">Instancia Operativa</h3>
                <p className="card-text">Mes:</p>
                <p className="card-text">Fecha:</p>
              </div>
              <div className="botones-cards">
                <button className="btn-neutral">Leer documento</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CEAA_Validados;