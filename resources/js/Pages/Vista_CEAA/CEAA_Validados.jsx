import { Select } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { buscarMunicipioSelect } from "@/Components/api/municipios";
import { getOficioValidado } from "@/Components/api/oficio";

function CEAA_Validados() {
  
  const [paginaActual, setPaginaActual] = useState(1);
  const [listaMunicipios, setListaMunicipios] = useState([]);

  const [municipios, setMunicipios] = useState([]);
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");

  useEffect(() => {
    cargarMunicipios();
  }, []);

  const cargarMunicipios = async () => {
    const response = await getOficioValidado();
    if (response && response.status==200){
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

  const registrosPorPagina = 9;
  const numPaginas = Math.ceil(municipios.length / registrosPorPagina);
  const indiceUltimo = paginaActual * registrosPorPagina;
  const indicePrimero = indiceUltimo - registrosPorPagina;
  const oficios = municipios.slice(indicePrimero, indiceUltimo);
  const irAPaginaSiguiente = () => {
    if (paginaActual < numPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };
  const irAPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };
  
    
  return (
  <div className="page-container">
    <h1 className="page-title">Informes revisados y aprobados.</h1>
    <h2 className="page-subtitle">Consulte los informes que fueron revisados y validados correctamente durante el periodo mensual.</h2>
    
    <div className="dashboard">
      <div className="dashboard-left">
         <div className="filtro">
          <p className="card-text">Municipio:</p>
          <select className="selector-control" value={municipioSeleccionado} onChange={buscarPorSelect}>
            <option value="">Todos los municipios</option>
            {listaMunicipios.map((oficioVal) => (
              <option key={oficioVal.id_municipio} value={oficioVal.id_municipio}>
                {oficioVal.nombre_munipio}
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
          
          {oficios.length > 0 ? (
            oficios.map((oficioVal) => (
              <div className="cards-revision">
                <div className="card-municipio" key={oficioVal.id_municipio}>
                  <div className="card-body">
                    <div className="card-titles">
                      <h3 className="card-title">{oficioVal.nombre_munipio}</h3>
                      <h3 className="card-subtitle">{oficioVal.nombre_inst_ope}</h3>
                      <p className="card-text">Mes: {oficioVal.mes_oficio}</p>
                      <p className="card-text">Fecha: {oficioVal.fecha_registro}</p>
                    </div>
                    
                    <div className="botones-cards">
                      <button className="btn-neutral">Leer documento</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
          <p className="text-white ">No existen informes validados.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default CEAA_Validados;