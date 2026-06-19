import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Head } from "@inertiajs/react";
import { mostrarSoloMes, dateLimit } from "../../Components/functions.jsx";
import { logoutUser, checkAuth } from "../../Components/api/auth.jsx";
import Perfil_Admi from "../Modals/Perfiles/Perfil_Admi.jsx";
import Admi_DireA from "./Admi_DireA.jsx";
import Admi_SupervisoresECAS from "./Admi_SEcas.jsx";
import Admi_DireMu from "./Admi_DireMu.jsx";
import Admi_ECAS from "./Admi_ECAS.jsx";
import Notificaciones_Admi from "../Modals/Notificaciones/Notificacion_Admi.jsx";
import Avisos_Admi from "../Modals/Avisos/Avisos_Admi.jsx";


function Admi_Inicio() {
  const [CerrarSesion, setCerrarSesion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModal2, setMostrarModal2] = useState(false);
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

        <div className="logo"><img src={miImagen} alt="Logo RNECA"/></div>

        <div className="acciones-header">
          <button className="icono"  onClick={() =>setMostrarModal(true)}>
              <i className="bi bi-envelope"></i>
                </button>
                {mostrarModal && (
                <Avisos_Admi
                    cerrarModal={() => setMostrarModal(false)}
                />
            )}

            <button className="icono"  onClick={() =>setMostrarModal2(true)}>
             <i className="bi bi-bell"></i>
                </button>
                {mostrarModal2 && (
                <Notificaciones_Admi
                    cerrarModal={() => setMostrarModal2(false)}
                />
                )}

          <div className="perfil">
            <button className="icono" onClick={() => setCerrarSesion(!CerrarSesion)}>
              <i className="bi bi-person-circle perfil-icono"></i>
            </button>
            {CerrarSesion && (
              <div className="menu-perfil">
                <button className="btn-cerrar-sesion"  onClick={() =>setMostrarModal(true)}>
                  Perfil
                </button>
                 {mostrarModal && (
                <Perfil_Admi
                    cerrarModal={() => setMostrarModal(false)}
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
            style={{ cursor: "pointer" }}>
            <i className="bi bi-house"></i>
            Inicio
          </a>
        </div>

        <div className="form-group">
          <a onClick={() => setSubmenuOpen(!submenuOpen)} style={{ cursor: "pointer" }}>
            <i class="bi bi-gear"></i>
            Control de Usuarios
          </a>

          {submenuOpen && (
            <ul className="submenu">
              <li>
                <div className="submenu-item">
                  <a
                    className={vistaActual === "director" ? "active" : ""}
                    onClick={() => setVistaActual("director")}
                    style={{ cursor: "pointer" }}>
                    <i class="bi bi-person"></i>
                    Director de Área
                  </a>
                </div>
              </li>

              <li>
                <div className="submenu-item">
                  <a
                    className={vistaActual === "supervisores_ecas" ? "active" : ""}
                    onClick={() => setVistaActual("supervisores_ecas")}
                    style={{ cursor: "pointer" }}>
                    <i class="bi bi-person"></i>
                    Supervisor de informes de los ECAs</a>
                </div>
              </li>

              <li>
                <div className="submenu-item">
                  <a
                    className={vistaActual === "director_municipal" ? "active" : ""}
                    onClick={() => setVistaActual("director_municipal")}
                    style={{ cursor: "pointer" }}>
                    <i class="bi bi-person"></i>
                    Directores municipales</a>
                </div>
              </li>

              <li>
                <div className="submenu-item">
                  <a
                    className={vistaActual === "ecas" ? "active" : ""}
                    onClick={() => setVistaActual("ecas")}
                    style={{ cursor: "pointer" }}>
                    <i class="bi bi-person"></i>
                    ECAs</a>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="page-container">
              <h1 className="page-title">Administración general de usuarios.</h1>
              <h2 className="page-subtitle">Consulte información general sobre los usuarios registrados y gestione el acceso a la plataforma.</h2>
              
              <div className="dashboard">
                <div className="card-number">
                  <div class="card-body">
                    <h3 className="card-subtitle">Total de usuarios</h3>
                    <h1 className="number">Numero</h1>
                  </div>
                </div>
                <div className="card-number">
                  <div class="card-body">
                    <h3 className="card-subtitle">Total de municipios</h3>
                    <h1 className="number">Numero</h1>
                  </div>
                </div>
                <div className="card-number">
                  <div class="card-body">
                    <h3 className="card-subtitle">Total de usuarios inactivos</h3>
                    <h1 className="number">Numero</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {vistaActual === "director" && (
          <Admi_DireA />
        )}
        {vistaActual === "supervisores_ecas" && (
          <Admi_SupervisoresECAS />
        )}
        {vistaActual === "director_municipal" && (
          <Admi_DireMu />
        )}
        {vistaActual === "ecas" && (
          <Admi_ECAS />
        )}

      </div>
    </>
  );
}

export default Admi_Inicio;