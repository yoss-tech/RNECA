import { Select } from "@headlessui/react";
import React, { useState, useEffect} from "react";
import { get_municipios } from "@/Components/api/municipios";
function Lic_Registros() {
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
    <h1 className="page-title">Informes entregados del periodo actual.</h1>
    <h2 className="page-subtitle">Consulte los informes correspondientes al mes en curso que han sido enviados por los municipios.</h2>
    
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="filtro">
          <p class="card-text">Municipio:</p>
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
                <h3 class="card-titulo">Municipio</h3>
                <h3 class="card-title">Instancia Operativa</h3>
                <p class="card-text">Mes:</p>
                <p class="card-text">Fecha:</p>
              </div>
              <div className="botones-cards">
                <button className="btn-primario">Revisar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Lic_Registros;     