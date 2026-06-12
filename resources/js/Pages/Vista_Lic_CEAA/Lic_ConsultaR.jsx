import { Select } from "@headlessui/react";
import React, { useState } from "react";

function Lic_ConsultaR() {
  const [abiertos, setAbiertos] = useState({
    card1: false,
    card2: false,
    card3: false
});

const toggleCard = (card) => {
  setAbiertos({
    ...abiertos,
    [card]: !abiertos[card]
  });
};

  return (
  <div className="page-container">
    <h1 className="page-title">Historial de informes municipales.</h1>
    <h2 className="page-subtitle">Visualice los informes registrados por cada municipio y consulte la información de periodos anteriores.</h2>
    
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
        
        <div className="cards-historial">
          <div className="card-municipio">
            <div className="card-header-municipio" onClick={() => toggleCard("card1")}>
              <div>
                <h3 className="card-title">Municipio</h3>
                <h3 className="card-subtitle">Institucion operativa</h3>
                <p className="card-text">Director General</p>
              </div>
              <span className={`flecha ${abiertos.card1 ? "abierta" : ""}`}>▼</span>
            </div>
            {abiertos.card1 && ( 
              <div className="card-body-municipio">
                <p className="card-text">Informe #Número de Registro</p>
                <p className="card-title">Mes</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Lic_ConsultaR;     