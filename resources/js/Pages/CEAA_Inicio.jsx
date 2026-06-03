import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "bootstrap-icons/font/bootstrap-icons.css";


import CEAA_Pendientes from "./CEAA_Pendientes.jsx";

function CEAA_Inicio() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");

  return (
    <>
      <header className="header">
        <div className="logo"><img src={miImagen} alt="Logo RNECA" /></div>

        <div className="acciones-header">
          <button className="icono">
            <i className="bi bi-envelope"></i>
          </button>

          <button className="icono">
            <i className="bi bi-bell"></i>
          </button>

          <div className="perfil">    
          <button className="icono">
              <i className="bi bi-person-circle perfil-icono"></i>
            </button>
          </div>
        </div>
      </header>

      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="form-group p">
          <a onClick={() => setVistaActual("inicio")} style={{ cursor: "pointer" }} >
            <i className="bi bi-house"></i>
            Inicio
          </a>
        </div>

        <div className="form-group">
          <a onClick={() => setVistaActual("pendientes")} style={{ cursor: "pointer" }} >
            <i className="bi bi-folder"></i>
             Registros pendientes
          </a>
        </div>

        <div className="form-group p">
           <a onClick={() => setVistaActual("correciones")} style={{ cursor: "pointer" }}>
            <i class="bi bi-pencil"></i>
            Registros con observaciones</a>
        </div>

        <div className="form-group p">
           <a onClick={() => setVistaActual("correciones")} style={{ cursor: "pointer" }}>
            <i class="bi bi-clipboard-check"></i>
            Registros validados</a>
        </div>

        <div className="form-group p">
           <a onClick={() => setVistaActual("correciones")} style={{ cursor: "pointer" }}>
            <i class="bi bi-files"></i>
            Solicitudes de registros fuera de plazo</a>
        </div>
        
        <div className="form-group p">
           <a onClick={() => setVistaActual("registros_firmados")} style={{ cursor: "pointer" }}>
            <i class="bi bi-search"></i>
            Consulta de Registros
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="form-group">
              <h1 className="registro-title">Seguimiento general de informes municipales.</h1>
            </div>

            <div className="form-group">
              <h2 className="registro-subtitle">Visualice los informes recientemente cargados y consulte el avance mensual mediante indicadores y gráficas de cumplimiento.</h2>
            </div>
            <br />
           
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
        {vistaActual === "actividades" && (
          <VECA_Actividades />
        )}
        {vistaActual === "poblacion" && (
          <VECA_Poblacion />
        )}
        {vistaActual === "memoria" && (
          <VECA_Memoria />
        )}
        {vistaActual === "vista_previa" && (
          <VECA_VistaP />
        )}
        {vistaActual === "consulta_registros" && (
          <VECA_ConsultaReg />
        )}

      </div>    

    </>
  );
}

export default CEAA_Inicio;