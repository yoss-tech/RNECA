import React, { useState, useEffect } from "react";
import { getOficioValidado,buscarSelectValidado } from "@/Components/api/oficio";
import Ver_Informe from "../Modals/Ver_informe";

function CEAA_Validados() {
  const [oficioSelect, setOficioSeleccionado] = useState(null);
  const [mostrarVer, setMostrarVer] = useState(false);
  const [municipios, setMunicipios] = useState([]);

  const [paginaActual, setPaginaActual] = useState(1);
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

  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [listaMunicipios, setListaMunicipios] = useState([]);
  const [loading, setLoading] = useState(true);
 const cargarMunicipios = async () => {
    setLoading(true);
  const response = await getOficioValidado();
    console.log("Oficios validados:", response);
    if (response && response.status === 200) {
  const datos = response.body || [];
      setMunicipios(datos);
  const municipiosUnicos = datos.filter(
        (municipio, index, self) => index === self.findIndex((m) => m.id_municipio === municipio.id_municipio)
      );
      setListaMunicipios(municipiosUnicos);
    } else {
      setMunicipios([]);
      setListaMunicipios([]);
    }
    setLoading(false);
  };
   useEffect(() => {
    cargarMunicipios();
  }, []);

  const buscarPorSelect = async (e) => {
    const id = e.target.value;
    setMunicipioSeleccionado(id);
    if (id === "") {
      await cargarMunicipios();
      setPaginaActual(1);
      return;
    }
    setLoading(true);
    const response = await buscarSelectValidado(id);
    console.log("Oficios filtrados:", response);
    if (response && response.status === 200) {
      setMunicipios(response.body || []);
      setPaginaActual(1);
    } else {
      setMunicipios([]);
    }
    setLoading(false);
  };

  const handleVerOficio = (idOficio) => {
    setOficioSeleccionado(idOficio);
    setMostrarVer(true);
  }
    
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
            {listaMunicipios.map((municipio) => (
              <option key={municipio.id_municipio} value={municipio.id_municipio}>
                {municipio.nombre_municipio}
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
          {loading ? (
            <p className="text-white">Cargando datos...</p> 
          ) : oficios.length > 0 ? (
            <div className="cards-revision">
            {oficios.map((oficioVal) => (
                <div className="card-municipio" key={oficioVal.id_municipio}>
                  <div className="card-body">
                    <div className="card-titles">
                      <h3 className="text-title">{oficioVal.nombre_municipio}</h3>
                      <h3 className="text-subtitle">{oficioVal.nombre_inst_ope}</h3>
                      <p className="text-bold">Mes: {oficioVal.mes_oficio}</p>
                      <p className="text-bold">Fecha: {oficioVal.fecha_registro}</p>
                    </div>
                    
                    <div className="botones-cards">
                      <button className="btn-neutral" onClick={() => handleVerOficio(oficioVal.id_oficio)}>Leer documento</button>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          ) : (
          <p className="text-white ">No existen informes validados.</p>
          )}
          {mostrarVer && (
            <Ver_Informe
              cerrarModal={() => setMostrarVer(false)}
              idOficio={oficioSelect}
            />
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default CEAA_Validados;