import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import CEAA_Pendientes from "./CEAA_Pendientes.jsx";
import CEAA_Observaciones from "./CEAA_Observaciones.jsx";
import CEAA_Validados from "./CEAA_Validados.jsx";
import CEAA_Solicitudes from "./CEAA_Solicitudes.jsx";
import CEAA_Historial from "./CEAA_Historial.jsx";

import { logoutUser } from "@/Components/api/auth.jsx";

function CEAA_Inicio() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [CerrarSesion, setCerrarSesion] = useState(false);

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
          <button className="icono">
            <i className="bi bi-envelope"></i>
          </button>

          <button className="icono">
            <i className="bi bi-bell"></i>
          </button>

          <div className="perfil">
            <button className="icono" onClick={() => setCerrarSesion(!CerrarSesion)} >
              <i className="bi bi-person-circle perfil-icono"></i> 
            </button>
            {CerrarSesion && (
              <div className="menu-perfil">
                <button className="btn-cerrar-sesion" onClick={submitLogout}>
                  Cerrar sesión
                </button>
              </div>)}
            </div>
        </div>
      </header>

      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="form-group p">
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
            className={vistaActual === "pendientes" ? "active" : ""}
            onClick={() => setVistaActual("pendientes")}
            style={{ cursor: "pointer" }} >
            <i className="bi bi-folder"></i>
            Registros pendientes
          </a>
        </div>

        <div className="form-group p">
          <a
            className={vistaActual === "observaciones" ? "active" : ""}
            onClick={() => setVistaActual("observaciones")}
            style={{ cursor: "pointer" }} >
            <i class="bi bi-pencil"></i>
            Registros con observaciones
          </a>
        </div>

        <div className="form-group p">
          <a
            className={vistaActual === "validados" ? "active" : ""}
            onClick={() => setVistaActual("validados")}
            style={{ cursor: "pointer" }} >
            <i class="bi bi-clipboard-check"></i>
            Registros validados
          </a>
        </div>

        <div className="form-group p">
          <a
            className={vistaActual === "solicitudes" ? "active" : ""}
            onClick={() => setVistaActual("solicitudes")}
            style={{ cursor: "pointer" }}>
            <i class="bi bi-files"></i>
            Solicitudes de registros fuera de plazo
          </a>
        </div>
        
        <div className="form-group p">
          <a
            className={vistaActual === "historial" ? "active" : ""}
            onClick={() => setVistaActual("historial")}
            style={{ cursor: "pointer" }}>
            <i class="bi bi-search"></i>
            Consulta de Registros
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="registro-container">
              <h1 className="registro-title">Seguimiento general de informes municipales.</h1>
            </div>

            <div className="form-group">
              <h2 className="registro-subtitle">Visualice los informes recientemente cargados y consulte el avance mensual mediante indicadores y gráficas de cumplimiento.</h2>
              
              <div className="dashboard">
                <div className="dashboard-left">
                  <div className="buscador">
                    <input type="text" placeholder="Buscar..."/>
                    <button><i className="bi bi-search border-radius"></i></button>
                  </div>
                  
                  <div className="cards">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <div class="card card-municipio">
                          <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Informes pedientes:</p>
                            <p class="card-text">Validados:</p>
                            <button className="btn btn-pendiente ">Ver detalles</button>
                          </div>
                        </div>
                      </div>
                      
                      <div class="col-md-6 mb-3">
                        <div class="card card-municipio">
                          <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Informes pedientes:</p>
                            <p class="card-text">Validados:</p>
                            <button className="btn btn-pendiente ">Ver detalles</button>
                          </div>
                        </div>
                      </div>
                      
                      <div class="col-md-6 mb-3">
                        <div class="card card-municipio">
                          <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Informes pedientes:</p>
                            <p class="card-text">Validados:</p>
                            <button className="btn btn-pendiente ">Ver detalles</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <div class="card card-municipio">
                          <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Informes pedientes:</p>
                            <p class="card-text">Validados:</p>
                            <button className="btn btn-pendiente ">Ver detalles</button>
                          </div>
                        </div>
                      </div>
                      
                      <div class="col-md-6 mb-3">
                        <div class="card card-municipio">
                          <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Informes pedientes:</p>
                            <p class="card-text">Validados:</p>
                            <button className="btn btn-pendiente ">Ver detalles</button>
                          </div>
                        </div>
                      </div>
                      
                      <div class="col-md-6 mb-3">
                        <div class="card card-municipio">
                          <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Informes pedientes:</p>
                            <p class="card-text">Validados:</p>
                            <button className="btn btn-pendiente ">Ver detalles</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              
              <div className="dashboard-right">
                <div className="card-grafico">
                  <h3 className="card-titulo">Cumplimiento de Entrega de Informes mensuales </h3>
                  <p className="card-text">Visualice el porcentaje de municipios que han cumplido con la entrega de su informe mensual y aquellos que se encuentran pendientes.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {vistaActual === "pendientes" && (
          <CEAA_Pendientes/>
        )}
        {vistaActual === "observaciones" && (
          <CEAA_Observaciones />
        )}
        {vistaActual === "validados" && (
          <CEAA_Validados/>
        )}
        {vistaActual === "solicitudes" && (
          <CEAA_Solicitudes/>
        )}
        {vistaActual === "historial" && (
          <CEAA_Historial />
        )}

      </div>
    </>
  );
}

export default CEAA_Inicio;