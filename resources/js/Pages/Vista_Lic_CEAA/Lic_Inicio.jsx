import React, { useState, useEffect } from "react";
import { getOficio, buscarOficios } from "@/Components/api/oficio";
import { logoutUser } from "@/Components/api/auth.jsx";
import { getInfoPerfil } from "@/Components/api/usuarios.jsx";
import CumplimientoInformes from "@/Components/Graficas.jsx";
import Lic_Registros from "./Lic_Registros.jsx";
import Perfil_LIC from "../Modals/Perfil.jsx";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "/resources/css/Style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Lic_Inicio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const [CerrarSesion, setCerrarSesion] = useState(false);
  const [totalInformes, setTotalInformes] = useState("");
  const [municipios, setMunicipios] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const registrosPorPagina = 6;
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

  const [loading, setLoading] = useState(true);
  const cargarMunicipios = async () => {
     const response = await getOficio();
     if(response && response.status==200){
       setMunicipios(response.body);
       setPaginaActual(1);
       console.log(response);
       setLoading(false);
     }
   };
   const [buscar, setBuscar] = useState("");
   const handleBuscar = async () => {
     if (!buscar.trim()) {
       cargarMunicipios();
       return;
     }
     const response = await buscarOficios(buscar.trim());
     if (response && response.status === 200) {
       setMunicipios(response.body);
       setPaginaActual(1);
     }
   };
   useEffect(() => {
     cargarMunicipios();
   }, []);

  const submitLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.status === 'success') {
        window.location.href = "/"; // Redirige al login después de cerrar sesión
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  return (
    <>
      <header className="header">
        <div className="logo"><img src={miImagen} alt="Logo RNECA"/></div>

        <div className="acciones-header">
            
          <div className="perfil">
            <button className="icono" onClick={() => setCerrarSesion(!CerrarSesion)}>
              <i className="bi bi-person-circle perfil-icono"></i>
            </button>
            {CerrarSesion && (
              <div className="menu-perfil">
                <button className="btn-cerrar-sesion"  onClick={() =>setMostrarPerfil(true)}>
                  Perfil
                </button>
                {mostrarPerfil && (
                  <Perfil_LIC
                    cerrarModal={() => setMostrarPerfil(false)}
                    obtenerPerfil={getInfoPerfil}
                    mostrarInformacion={false}
                  />
                )}
                <button className="btn-cerrar-sesion" onClick={submitLogout}>
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="form-group">
          <a
            className={vistaActual === "inicio" ? "active" : ""}
            onClick={() => setVistaActual("inicio")}
            style={{ cursor: "pointer" }} >
            <i className="bi bi-house"></i>
            Inicio
          </a>
        </div>

        <div className="form-group">
          <a
            className={vistaActual === "mensuales" ? "active" : ""}
            onClick={() => setVistaActual("mensuales")}
            style={{ cursor: "pointer" }} >
            <i className="bi bi-folder"></i>
            Registros mensuales
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="page-container">
              <h1 className="page-title">Monitoreo general de informes municipales.</h1>
              <h2 className="page-subtitle">Visualice indicadores de cumplimiento, el estado de los informes mensuales y el avance de los municipios mediante gráficas y tarjetas informativas.</h2>
              
              <div className="dashboard">
                <div className="dashboard-left">
                 <div className="buscador">
                    <input type="text" placeholder="Buscar..." className="buscador-control" 
                    title="Ingresa el municipio para realizar tu busqueda"
                    value={buscar}
                    onChange={(e) => setBuscar(e.target.value)}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleBuscar();}
                    }}
                  />
                  <button className="buscador-button"  onClick={handleBuscar}><i className="bi bi-search"></i></button>
                  </div>
                  
                  <div className="container-municipios">
                  {loading ? (
                    <p className="text-white">Cargando datos...</p> 
                  ) : oficios.length > 0 ? (
                    <div className="cards-municipio">
                    {oficios.map((oficio) => (
                        <div className="card-municipio" key={oficio.id_municipio}>
                          <div className="card-body">
                            <div className="card-titles">
                              <h3 className="text-title">{oficio.nombre_municipio}</h3>
                              <h3 className="text-subtitle">{oficio.nombre_inst_ope}</h3>
                              <p className="text-bold">Informes pendientes: {oficio.pendientes}</p>
                              <p className="text-bold">Validados: {oficio.validados}</p>
                            </div>
                          </div>
                        </div>
                    ))}
                    </div>
                  ) : (
                    <p className="text-white ">No existen informes.</p>
                  )}
                  
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
                  </div>
                </div>

                <div className="dashboard-right">
                  <div className="card-grafico">
                    <h3 className="card-title">Cumplimiento de Entrega de Informes mensuales </h3>
                    <p className="card-text">Visualice el porcentaje de municipios que han cumplido con la entrega de su informe mensual y aquellos que se encuentran pendientes.</p>
                    <p className="btn-container-horizontal text-bold">Total de Informes: {totalInformes}</p> 
                    <div className="container-grafico">
                      <CumplimientoInformes setTotalInformes={setTotalInformes} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {vistaActual === "mensuales" && (
          <Lic_Registros/>
        )}
      </div>
    </>
  );
}

export default Lic_Inicio;