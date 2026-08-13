import React, { useState, useEffect } from "react";
import { getOficioPendiente,buscarMunicipioSelect } from "@/Components/api/oficio";
import Revisar_Informe from "../Modals/Revisar_Informe";

function CEAA_Pendientes() {

  const [mostrarRevisar, setMostrarRevisar] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const [listaMunicipios, setListaMunicipios] = useState([]);

  const [municipios, setMunicipios] = useState([]);
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");

  const [oficioSelect, setOficioSeleccionado] = useState(null);

  const [cargando, setCargando] = useState(true);

  const handleVerOficio = (idOficio) => {
    setOficioSeleccionado(idOficio);
    setMostrarRevisar(true);
  }

  useEffect(() => {
    cargarMunicipios();
  }, []);

  const cargarMunicipios = async () => {
    const response = await getOficioPendiente();
    setCargando(false);
    if (response && response.status == 200) {
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
        setPaginaActual(1);
        return;
    }
    setCargando(true)
    const response = await buscarMunicipioSelect(id);
    if (response && response.status === 200) {
        setMunicipios(response.body);
        setPaginaActual(1);
    }
    setCargando(false);
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
      <h1 className="page-title">Informes en espera de revisión.</h1>
      <h2 className="page-subtitle">Consulte los informes enviados por cada municipio que se encuentran pendientes de validación.</h2>

      <div className="dashboard">
        <div className="dashboard-left">
          <div className="filtro">
            <p className="card-text">Municipio:</p>
            <select className="selector-control" value={municipioSeleccionado} onChange={buscarPorSelect}>
              <option value="">Todos los municipios</option>
              {listaMunicipios.map((oficioPen) => (
                <option key={oficioPen.id_municipio} value={oficioPen.id_municipio}>
                  {oficioPen.nombre_municipio}
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
            {cargando ? (
              <p className="text-white">Cargando datos...</p>
            ) : oficios.length > 0 ? (
              <div className="cards-revision">
              {oficios.map((oficioPen) => (
                  <div className="card-municipio" key={oficioPen.id_municipio}>
                    <div className="card-body">
                      <div className="card-titles">
                        <h3 className="text-title">{oficioPen.nombre_municipio}</h3>
                        <h3 className="text-subtitle">{oficioPen.nombre_inst_ope}</h3>
                        <p>Informes pendientes:{oficioPen.pendientes}</p>
                      </div>

                      <div className="botones-cards">
                        <button className="btn-primario" onClick={() => handleVerOficio(oficioPen.id_oficio)}>
                          Revisar
                        </button>
                      </div>
                    </div>
                  </div>
              ))}
              </div>
            ) : (
              <p className="text-white ">No existen informes pendientes de revisión.</p>
            )}
            {mostrarRevisar && (
              <Revisar_Informe
                cerrarModal={() => setMostrarRevisar(false)}
                idOficio={oficioSelect}
                cargarLista={cargarMunicipios}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CEAA_Pendientes;     