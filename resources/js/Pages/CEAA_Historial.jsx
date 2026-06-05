import { Select } from "@headlessui/react";
import React, { useState } from "react";
function CEAA_Historial() {
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

    <div className="registro-container">
      <h1 className="registro-title">Validación de solicitudes extraordinarias.</h1>
      <h2 className="registro-subtitle">Revise los oficios enviados para solicitar la habilitación temporal de la plataforma para carga extemporánea de informes.</h2>
    
       <div className="dashboard">
            <div className="dashboard-left">
                <div className="buscador">
                     <h3 class="card-text">Municipio:</h3>
                       <select className="municipio-select">
                       <option value="">Selecciona una opción</option>
                       <option value="1">Toluca</option>
                       <option value="2">Metepec</option>
                       <option value="3">Lerma</option>
                       <option value="4">Atlacomulco</option>
                       <option value="5">Valle de Bravo</option>
                       </select>
                </div>

               <div className="cards cards-revision">
                <div className="card card-municipio card-historial">
                    <div className="card-header-municipio" onClick={() => toggleCard("card1")}>
                        <div>
                            <h3 className="card-titulo">Municipio</h3>
                            <h3 className="card-title">Institucion operativa</h3>
                            <p className="card-text">Director General</p>
                        </div>
                        <span className={`flecha ${abiertos.card1 ? "abierta" : ""}`}>▼</span>
                    </div>
                    {abiertos.card1 && ( 
                    <div className="card-body-municipio">
                        <p className="card-text">Informe #Número de Registro</p>
                        <p className="color card-titulo">Mes</p>
                        </div>
                    )}</div>
                    
                <div className="card card-municipio card-historial">
                    <div className="card-header-municipio" onClick={() => toggleCard("card2")}>
                        <div>
                            <h3 className="card-titulo">Municipio</h3>
                            <h3 className="card-title">Institucion operativa</h3>
                            <p className="card-text">Director General</p>
                        </div>
                        <span className={`flecha ${abiertos.card1 ? "abierta" : ""}`}>▼</span>
                    </div>
                    {abiertos.card2 && (
                         <div className="card-body-municipio">
                        <p className="card-text">Informe #Número de Registro</p>
                        <p className="color card-titulo">Mes</p>
                        </div>
                    )}</div>
                
                <div className="card card-municipio card-historial">
                    <div className="card-header-municipio" onClick={() => toggleCard("card3")}>
                        <div>
                            <h3 className="card-titulo">Municipio</h3>
                            <h3 className="card-title">Institucion operativa</h3>
                            <p className="card-text">Director General</p>
                        </div>
                        <span className={`flecha ${abiertos.card3 ? "abierta" : ""}`}>▼</span>
                    </div>
                    {abiertos.card3 && (
                         <div className="card-body-municipio">
                        <p className="card-text">Informe #Número de Registro</p>
                        <p className="color card-titulo">Mes</p>
                        </div>
                    )}</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CEAA_Historial;     