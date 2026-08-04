import React, { useState, useEffect } from "react";
import { getTotalUser, getTotalUserECAS, getTotalUserInactivo, getInfoPerfil } from "../../Components/api/usuarios.jsx"
import { getTotalMunicipio } from "../../Components/api/municipios.jsx"
import { logoutUser } from "../../Components/api/auth.jsx";
import Admi_DireA from "./Admi_DireA.jsx";
import Admi_ECAS from "./Admi_ECAS.jsx";
import Admi_NumHab from "./Admi_NumHab.jsx";
import Admi_SupervisoresECAS from "./Admi_SEcas.jsx";
import Perfil_Admi from "../Modals/Perfiles/Perfil.jsx";
import Notificaciones_Admi from "../Modals/Notificaciones/Notificacion_Admi.jsx";
import Avisos_Admi from "../Modals/Avisos/Avisos_Admi.jsx";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "/resources/css/Style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Admi_Inicio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const [mostrarAvisos, setMostrarAvisos] = useState(false);
  const [CerrarSesion, setCerrarSesion] = useState(false);

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

  const [totalUser, setTotalUser] = useState(0);
  const cargarTotalUser = async () => {
    const response = await getTotalUser();
    if (response && response.status === 200) {
      setTotalUser(response.body);
    }
  };
  const [totalUserECAS, setTotalUserECAS] = useState(0);
  const cargarTotalUserECAS = async () => {
    const response = await getTotalUserECAS();
    if (response && response.status === 200) {
      setTotalUserECAS(response.body);
    }
  };
  const [totalUserInactivo, setTotalUserInactivo] = useState(0);
  const cargarTotalUserInactivo = async () => {
    const response = await getTotalUserInactivo();
    if (response && response.status === 200) {
      setTotalUserInactivo(response.body);
    }
  };
  const [totalMunicipio, setTotalMunicipio] = useState(0);
  const cargarTotalMunicipio = async () => {
    const response = await getTotalMunicipio();
    if (response && response.status === 200) {
      setTotalMunicipio(response.body);
    }
  };
  useEffect (() => {
    cargarTotalUser();
    cargarTotalUserECAS();
    cargarTotalUserInactivo();
    cargarTotalMunicipio();
  }, []);

  return (
    <>
      <header className="header">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} >
          <i className="bi bi-list"></i>
        </button>

        <div className="logo"><img src={miImagen} alt="Logo RNECA"/></div>

        <div className="acciones-header">
          <button className="icono"  onClick={() =>setMostrarAvisos(true)}>
            <i className="bi bi-envelope"></i>
          </button>
          {mostrarAvisos && (
            <Avisos_Admi
              cerrarModal={() => setMostrarAvisos(false)}
            />
          )}
          <button className="icono"  onClick={() =>setMostrarNoti(true)}>
            <i className="bi bi-bell"></i>
          </button>
          {mostrarNoti && (
            <Notificaciones_Admi
              cerrarModal={() => setMostrarNoti(false)}
            />
          )}

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
                  <Perfil_Admi
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
            style={{ cursor: "pointer" }}>
            <i className="bi bi-house"></i>
            Inicio
          </a>
        </div>

        <div className="form-group">
          <a
            className={vistaActual === "habitantes" ? "active" : ""}
            onClick={() => setVistaActual("habitantes")}
            style={{ cursor: "pointer" }}>
            <i className="bi bi-person-add"></i>
            Habitantes
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
              
              <div className="dashboard-cards">
                <div className="fila-cards">
                  <div className="card-number">
                    <div class="card-body">
                      <h3 className="card-subtitle">Espacios de cultura del agua</h3>
                      <h1 className="number">{totalUserECAS}</h1>
                    </div>
                  </div>
                  <div className="card-number">
                    <div className="card-body">
                      <h3 className="card-subtitle">Municipios</h3>
                      <h1 className="number">{totalMunicipio}</h1>
                    </div>
                  </div>
                </div>
                <div className="fila-cards">
                  <div className="card-number">
                    <div className="card-body">
                      <h3 className="card-subtitle">Total de usuarios</h3>
                      <h1 className="number">{totalUser}</h1>
                    </div>
                  </div>
                  <div className="card-number">
                    <div class="card-body">
                      <h3 className="card-subtitle">Usuarios inactivos</h3>
                      <h1 className="number">{totalUserInactivo}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {vistaActual === "habitantes" && (
          <Admi_NumHab />
        )}
        {vistaActual === "director" && (
          <Admi_DireA />
        )}
        {vistaActual === "supervisores_ecas" && (
          <Admi_SupervisoresECAS />
        )}
        {vistaActual === "ecas" && (
          <Admi_ECAS />
        )}
        {vistaActual === "diseñador" && (
          <Diseño_Formularios />
        )}

      </div>
    </>
  );
}

export default Admi_Inicio;