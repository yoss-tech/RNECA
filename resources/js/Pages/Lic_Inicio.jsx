import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { logoutUser } from "@/Components/api/auth.jsx";

import Lic_Registros from "./Lic_Registros.jsx";
import Lic_ConsultaR from "./Lic_ConsultaR.jsx";

function Lic_Inicio() {

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
            className={vistaActual === "mensuales" ? "active" : ""}
            onClick={() => setVistaActual("mensuales")}
            style={{ cursor: "pointer" }} >
            <i className="bi bi-folder"></i>
            Registros mensuales
          </a>
        </div>

        <div className="form-group p">
          <a
            className={vistaActual === "consulta_registros" ? "active" : ""}
            onClick={() => setVistaActual("consulta_registros")}
            style={{ cursor: "pointer" }} >
            <i className="bi bi-search border-radius"></i>
            Consulta de Registros
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="registro-container">
              <h1 className="registro-title">Monitoreo general de informes municipales.</h1>
            </div>

            <div className="form-group">
              <h2 className="registro-subtitle">Visualice indicadores de cumplimiento, el estado de los informes mensuales y el avance de los municipios mediante gráficas y tarjetas informativas.</h2>
              
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

        {vistaActual === "mensuales" && (
          <Lic_Registros/>
        )}
        {vistaActual === "consulta_registros" && (
          <Lic_ConsultaR />
        )}
      </div>
    </>
  );
}

export default Lic_Inicio;