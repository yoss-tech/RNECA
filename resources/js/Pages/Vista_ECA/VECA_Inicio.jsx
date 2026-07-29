import React, { useState, useEffect } from "react";
import { mostrarSoloMes, dateLimit } from "../../Components/functions.jsx";
import { logoutUser } from "../../Components/api/auth.jsx";
import { checkEspacioRegistro } from "../../Components/api/espacio.jsx";
import { getInfoEca } from "@/Components/api/usuarios.jsx";
import VECA_VistaP from "./Eca_VistaPrevia.jsx";
import VECA_Actividades from "./Eca_Actividades.jsx";
import VECA_Poblacion from "./Eca_Poblacion.jsx";
import VECA_Memoria from "./Eca_Memoria.jsx";
import VECA_ConsultaReg from "./Eca_ConsultaRegistros.jsx";
import PanelDocumento from "./PanelDocumento.jsx";
import Notificaciones_Eca from "../Modals/Notificaciones/NoticacionECA.jsx";
import PerfilECA from "../Modals/Perfiles/Perfil.jsx";
import Avisos_eca from "../Modals/Avisos/AvisosECA.jsx";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "/resources/css/Style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function VECA_Inicio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const [mostrarAvisos, setMostrarAvisos] = useState(false);
  const [CerrarSesion, setCerrarSesion] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const checkRegistro = async () => {
      const data = await checkEspacioRegistro();
      if (data.registro_existente) {
        setCurrentStep(4);
      }
    };
    checkRegistro();
  }, []);

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
          <button className="icono" onClick={() => setMostrarAvisos(true)}>
            <i className="bi bi-envelope"></i>
          </button>
          {mostrarAvisos && (
            <Avisos_eca
              cerrarModal={() => setMostrarAvisos(false)}
            />
          )}
          <button className="icono" onClick={() => setMostrarNoti(true)}>
            <i className="bi bi-bell"></i>
          </button>
          {mostrarNoti && (
            <Notificaciones_Eca
              cerrarModal={() => setMostrarNoti(false)}
            />
          )}

          <div className="perfil">
            <button className="icono" onClick={() => setCerrarSesion(!CerrarSesion)}>
              <i className="bi bi-person-circle perfil-icono"></i>
            </button>
            {CerrarSesion && (
              <div className="menu-perfil">
                <button className="btn-cerrar-sesion" onClick={() => setMostrarPerfil(true)}>
                  Perfil
                </button>
                {mostrarPerfil && (
                  <PerfilECA
                    cerrarModal={() => setMostrarPerfil(false)}
                    obtenerPerfil={getInfoEca}
                    mostrarInformacion={true}
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
                    className={vistaActual === "actividades" ? "active" : ""}
                    onClick={() => setVistaActual("actividades")}
                    style={{ cursor: "pointer" }}>
                    <i className="bi bi-clock"></i>
                    Actividades del mes</a>
                </div>
              </li>

              <li>
                {/* <div className="submenu-item">
                  <a
                    className={vistaActual === "memoria" ? "active" : ""}
                    onClick={() => setVistaActual("memoria")}
                    style={{ cursor: "pointer" }}>
                    <i className="bi bi-clock"></i>
                    Memoria Fotográfica</a>
                </div> */}
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

        {vistaActual === "poblacion" && currentStep >= 1 && (
          <VECA_Poblacion
            onComplete={() => {
              setCurrentStep(2);
            }}
          />
        )}
        {vistaActual === "actividades" && currentStep >= 2 && (
          <VECA_Actividades
            onComplete={() => {
              setCurrentStep(3);
            }}
          />
        )}
        {vistaActual === "memoria" && currentStep >= 3 && (
          <VECA_Memoria
          />
        )}
        {vistaActual === "vista_previa" && (
           //<VECA_VistaP />
          <PanelDocumento />
        )}
        {vistaActual === "consulta_registros" && (
          <VECA_ConsultaReg />
        )}

      </div>
    </>
  );
}

export default VECA_Inicio;