import React, { useState, useEffect} from "react";
import { get_municipios } from "@/Components/api/municipios";
import Revisar_Informe from "../Modals/Revisar_Informe";
import { Select } from "@headlessui/react";

function CEAA_Pendientes() {
    const [mostrarModal, setMostrarModal] = useState(false);
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
    <h1 className="page-title">Informes en espera de revisión.</h1>
    <h2 className="page-subtitle">Consulte los informes enviados por cada municipio que se encuentran pendientes de validación.</h2>
    
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="filtro">
          <p className="card-text">Municipio:</p>
          <select className="municipio-select">
             <option value="">Selecciona una opción</option>
            {municipios.map((municipio)=>(
            <option>{municipio.nombre_munipio}</option>
            ))}
          </select>
        </div>
        
        <div className="cards-revision">
          <div className="card-municipio">
            <div class="card-body">
              <div className="card-titles">
                <h3 className="card-title">Municipio</h3>
                <h3 className="card-subtitle">Instancia Operativa</h3>
                <p className="card-text">Mes:</p>
                <p className="card-text">Fecha:</p>
              </div>
              <div className="botones-cards">
                <button className="btn-primario"  onClick={() =>setMostrarModal(true)}>
                  Revisar
                </button>
                 {mostrarModal && (
                <Revisar_Informe
                    cerrarModal={() => setMostrarModal(false)}
                />
            )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CEAA_Pendientes;     