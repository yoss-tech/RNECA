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
import { Head } from "@inertiajs/react";
import { mostrarSoloMes, dateLimit } from "../Components/functions.jsx";
import { logoutUser, checkAuth } from "../Components/api/auth.jsx";

function VECA_Inicio() {
  const [CerrarSesion, setCerrarSesion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");

  const menuItems = document.querySelectorAll('.sidebar .form-group a');

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

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('active');
      setMenuOpen(false);
    });
  });

  document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.menu-toggle');

    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove('active');
      setMenuOpen(false);
    }
  });


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
            <button className="icono" onClick={() => setCerrarSesion(!CerrarSesion)}>
              <i className="bi bi-person-circle perfil-icono"></i>
            </button>
            {CerrarSesion && (
              <div className="menu-perfil">
                <button className="btn-cerrar-sesion" onClick={submitLogout}>
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="form-group p">
          <a
            className={vistaActual === "inicio" ? "active" : ""}
            onClick={() => setVistaActual("inicio")}
            style={{ cursor: "pointer" }}>
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
                  <a
                    className={vistaActual === "presente" ? "active" : ""}
                    onClick={() => setVistaActual("presente")}
                    style={{ cursor: "pointer" }}>
                    <i className="bi bi-check-circle"></i>
                    Presente
                  </a>
                </div>
              </li>

              <li>
                <div className="submenu-item">
                  <a
                    className={vistaActual === "actividades" ? "active" : ""}
                    onClick={() => setVistaActual("actividades")}
                    style={{ cursor: "pointer" }}>
                    <i className="bi bi-clock"></i>
                    Actividades del mes</a>
                </div>
              </li>

              <li>
                <div className="submenu-item">
                  <a
                    className={vistaActual === "poblacion" ? "active" : ""}
                    onClick={() => setVistaActual("poblacion")}
                    style={{ cursor: "pointer" }}>
                    <i className="bi bi-clock"></i>
                    Población Beneficiaria</a>
                </div>
              </li>

              <li>
                <div className="submenu-item">
                  <a
                    className={vistaActual === "memoria" ? "active" : ""}
                    onClick={() => setVistaActual("memoria")}
                    style={{ cursor: "pointer" }}>
                    <i className="bi bi-clock"></i>
                    Memoria Fotográfica</a>
                </div>
              </li>
            </ul>
          )}
        </div>

        <div className="form-group p">
          <a
            className={vistaActual === "vista_previa" ? "active" : ""}
            onClick={() => setVistaActual("vista_previa")}
            style={{ cursor: "pointer" }}>
            <i className="bi bi-clipboard2-check"></i>
            Vista previa
          </a>
        </div>

        <div className="form-group p">
          <a
            className={vistaActual === "consulta_registros" ? "active" : ""}
            onClick={() => setVistaActual("consulta_registros")}
            style={{ cursor: "pointer" }}>
            <i className="bi bi-folder"></i>
            Consulta de registros
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="page-container">
              <h1 className="page-title">Seguimiento y control de informes mensuales. </h1>
              <h2 className="page-subtitle">Administra, consulta y da seguimiento a los registros mensuales de actividades.</h2>
              
              <h3 className="form-subtitle">Registro del Mes</h3>
              <div className="card-contenedor">
                <p className="card-header">Informe del mes de {mostrarSoloMes(new Date())}</p>

                <div className="card-body">
                  <div className="fecha-row">
                    <p className="card-subtitle">Fecha límite:</p>
                    <p className="card-text">{dateLimit()}</p>
                  </div>

                  <div className="fecha-row">
                    <p className="card-subtitle">Estado:</p>
                    <p className="card-text">ESTADO</p>
                  </div>

                  <div className="botones-cards">
                    <button type="button" className="btn-primario">Completar registro pendiente</button>
                  </div>
                </div>
              </div>

              <h3 className="form-subtitle">Último Registro</h3>
              <div className="card-contenedor">
                <p className="card-header">Informe del mes de MES</p>
                
                <div className="card-body">
                  <div className="fecha-row">
                    <p className="card-subtitle">Estado:</p>
                    <p className="card-text">ESTADO</p>
                  </div>
                  <div className="botones-cards">
                    <button type="button" className="btn-neutral">Descargar PDF</button>
                  </div>
                </div>
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