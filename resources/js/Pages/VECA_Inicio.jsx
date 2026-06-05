import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import VECA_VistaP from "./Eca_VistaPrevia.jsx";
import VECA_Presente from "./Eca_Presente.jsx";
import VECA_Actividades from "./Eca_Actividades.jsx";
import VECA_Poblacion from "./Eca_Poblacion.jsx";
import VECA_Memoria from "./Eca_Memoria.jsx";
import VECA_ConsultaReg from "./Eca_ConsultaRegistros.jsx";



function VECA_Inicio() {
  
  const [CerrarSesion, setCerrarSesion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");

  return (
    <>
      <header className="header">

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} >
          <i className="bi bi-list"></i>
        </button>

        <div className="logo"><img src={miImagen} alt="Logo RNECA" /></div>
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
                <button className="btn-cerrar-sesion">Cerrar sesión</button>
              </div>)}
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
          <a onClick={() => setSubmenuOpen(!submenuOpen)} style={{ cursor: "pointer" }}>
            <i className="bi bi-clipboard2"></i>
             Generación de registros
          </a>

          {submenuOpen && (
            <ul className="submenu">
              <li>
                <div className="submenu-item">
                  <i className="bi bi-check-circle"></i>
                  <a onClick={() => setVistaActual("presente")} style={{ cursor: "pointer" }} >
                    Presente
                  </a>
                </div>
              </li>
              <li>

                <div className="submenu-item">
                  <i className="bi bi-clock"></i>
                  <a onClick={() => setVistaActual("actividades")} style={{ cursor: "pointer" }}>
                      Actividades del mes</a>
                </div>
              </li>

              <li>
                <div className="submenu-item">
                  <i className="bi bi-clock"></i>
                  <a onClick={() => setVistaActual("poblacion")} style={{ cursor: "pointer" }}>Población Beneficiaria</a>
                </div>
              </li>

              <li>
                <div className="submenu-item">
                  <i className="bi bi-clock"></i>
                 <a onClick={() => setVistaActual("memoria")} style={{ cursor: "pointer" }}>Memoria Fotográfica</a>
                </div>
              </li>
            </ul>
          )}
        </div>

        <div className="form-group p">
           <a onClick={() => setVistaActual("vista_previa")} style={{ cursor: "pointer" }}>
            <i className="bi bi-clipboard2-check"></i>
            Vista previa
          </a>
        </div>

        <div className="form-group p">
           <a onClick={() => setVistaActual("consulta_registros")} style={{ cursor: "pointer" }}>
           <i className="bi bi-folder"></i>
            Consulta de registros
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="form-group">
              <h1 className="registro-title">Seguimiento y control de informes mensuales. </h1>
            </div>

            <div className="form-group">
              <h2 className="registro-subtitle">Administra, consulta y da seguimiento a los registros mensuales de actividades.</h2>
            </div>
            <br />

          <p className="color-label">Registro del Mes</p>
            <div className="card-conten">
              <p className="card-header color">Informe del mes de Mayo </p>

              <div className="card-body">
                <div className="fecha-row">
                  <p className="card-title">Fecha límite:</p>
                  <p className="card-title">7 Marzo 2026</p>
                </div>

                <div className="fecha-row">
                  <p className="card-text">Estado:</p>
                  <p className="card-text">Pendiente</p>
                </div>
                <button type="button" className="btn-pendiente"> Completar registro pendiente </button>
              </div>
            </div>
            <br/>

            <p className="color-label">Último Registro</p>
            <div className="card-conten">
              <p className="card-header color">Informe del mes de Mayo</p>

              <div className="card-body">
                <div className="fecha-row">
                  <p className="card-text">Estado:</p>
                  <p className="card-text">Validada</p>
                </div>
                <button type="button" className="btn-secondary-pendiente"> Descargar </button>
              </div>
            </div>
          </>
        )}

        {vistaActual === "presente" && (
          <VECA_Presente />
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

export default VECA_Inicio;