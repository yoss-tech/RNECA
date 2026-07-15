import { Select } from "@headlessui/react";
import React, { useState, useEffect} from "react";
import { get_municipios } from "@/Components/api/municipios";

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

 const [municipios, setMunicipios] = useState([]);
      useEffect(() => {
        cargarMunicipios();
      }, []);
      const cargarMunicipios = async () => {
        const response = await get_municipios();
        if(response && response.status==200){
          setMunicipios(response.body);
          console.log(response);
        }
    };

  return (
  <div className="page-container">
    <h1 className="page-title">Validación de solicitudes extraordinarias.</h1>
    <h2 className="page-subtitle">Revise los oficios enviados para solicitar la habilitación temporal de la plataforma para carga extemporánea de informes.</h2>
    
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="filtro">
          <p className="card-text">Municipio:</p>
            <select className="municipio-select">
              <option value="">Selecciona una opción</option>
            <option value="">Selecciona una opción</option>
            {municipios.map((municipio)=>(
            <option>{municipio.nombre_munipio}</option>
            ))}
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

export default CEAA_Historial;     