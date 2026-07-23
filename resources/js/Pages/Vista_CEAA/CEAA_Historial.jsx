import { Select } from "@headlessui/react";
import React, { useState, useEffect} from "react";
import { get_municipios,buscarMunicipioSelect} from "@/Components/api/municipios";

function CEAA_Historial() {
  const [cardAbierta, setCardAbierta] = useState(null);
  const [listaMunicipios, setListaMunicipios] = useState([]);
  
  const toggleCard = (id) => {
  if (cardAbierta === id) {
    setCardAbierta(null);
  } else {
    setCardAbierta(id);
  }
};

  const [paginaActual, setPaginaActual] = useState(1);
  const [municipios, setMunicipios] = useState([]);
  useEffect(() => {
    cargarMunicipios();
  }, []);
  const cargarMunicipios = async () => {
    const response = await get_municipios();
    if(response && response.status==200){
      setMunicipios(response.body);
      setListaMunicipios(response.body);
      console.log(response);
    }
};
    
    const buscarPorSelect = async (e) => {
    const id = e.target.value;
    setMunicipioSeleccionado(id);
    if (id === "") {
      cargarMunicipios();
      return;
    }
    const response = await buscarMunicipioSelect(id);
    if (response && response.status === 200) {
      setMunicipios(response.body);
      setPaginaActual(1);
    }
    };

    const registrosPorPagina = 8;
    const numPaginas = Math.ceil(municipios.length / registrosPorPagina);
    const indiceUltimo = paginaActual * registrosPorPagina;
    const indicePrimero = indiceUltimo - registrosPorPagina;
    const municipiosPaginados = municipios.slice(indicePrimero, indiceUltimo);
    const irAPaginaSiguiente = () => {
      if (paginaActual < numPaginas) {
        setPaginaActual(paginaActual + 1);}
      };
    const irAPaginaAnterior = () => {
      if (paginaActual > 1) {
        setPaginaActual(paginaActual - 1);}
      };

    const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");

  return (
  <div className="page-container">
    <h1 className="page-title">Historial de informes mensuales.</h1>
    <h2 className="page-subtitle">Consulte los informes registrados y enviados en meses anteriores por cada municipio.</h2>
    
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="filtro">
          <p className="card-text">Municipio:</p>
          <select className="selector-control" value={municipioSeleccionado} onChange={buscarPorSelect}>
              <option value="">Todos los municipios</option>
               {listaMunicipios.map((municipio) => (
              <option key={municipio.id_municipio} value={municipio.id_municipio}>
                {municipio.nombre_munipio}
              </option>
            ))}
          </select>
        </div>
      
        <div className="container-municipios">
          <div className="container-paginacion">
            {numPaginas > 1 && (
              <div className="paginacion-controles">
                <button onClick={irAPaginaAnterior} disabled={paginaActual === 1} className="btn-blanco">
                  Anterior
                </button>
                <button onClick={irAPaginaSiguiente} disabled={paginaActual === numPaginas} className="btn-blanco">
                  Siguiente
                </button>
              </div>
            )}
          </div>

          <div className="cards-historial">
            {municipiosPaginados.map((municipio) => (
              <div className="card-municipio"  key={municipio.id_municipio}>
                <div className="card-header-municipio" onClick={() => toggleCard(municipio.id_municipio )}>
                  <div>
                    <h3 className="card-title">{municipio.nombre_munipio}</h3>
                    <h3 className="card-subtitle">Institucion operativa</h3>
                    <p className="card-text">Director General</p>
                  </div>
                  <span className={`flecha ${ cardAbierta === municipio.id_municipio ? "abierta" : ""}`}>▼</span>
                </div>
                {cardAbierta === municipio.id_municipio && (
                  <div className="card-body-municipio">
                    <p className="card-text">Informe #Número de Registro</p>
                    <p className="card-title">Mes</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  </div>
  );
}

export default CEAA_Historial;     