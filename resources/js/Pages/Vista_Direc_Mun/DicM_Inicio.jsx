import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import Perfil_DirectorM from "../Modals/Perfiles/Perfil_DM.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import DICRegistros_Recibidos from "./Dic_RegistrosR.jsx";
import DIC_Correcciones from "./Dic_Correcciones.jsx";
import DIC_Firmados from "./Dic_Firmados.jsx";

import { Head } from "@inertiajs/react";
import { logoutUser, checkAuth } from "../../Components/api/auth.jsx";
import Notificaciones_DireMunicipal from "../Modals/Notificaciones/Notificacion_DM.jsx";
import Avisos_DireMunicipal from "../Modals/Avisos/Avisos_DM.jsx";

function DicM_Inicio() {
  const [CerrarSesion, setCerrarSesion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModal2, setMostrarModal2] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");

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
           <button className="icono"  onClick={() =>setMostrarModal(true)}>
              <i className="bi bi-envelope"></i>
                </button>
                {mostrarModal && (
                <Avisos_DireMunicipal
                    cerrarModal={() => setMostrarModal(false)}
                />
            )}

            <button className="icono"  onClick={() =>setMostrarModal2(true)}>
             <i className="bi bi-bell"></i>
                </button>
                {mostrarModal2 && (
                <Notificaciones_DireMunicipal
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
                <Perfil_DirectorM
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
            style={{ cursor: "pointer" }} >
            <i className="bi bi-house"></i>
            Inicio
          </a>
        </div>

        <div className="form-group">
          <a
            className={vistaActual === "registros_recibidos" ? "active" : ""}
            onClick={() => setVistaActual("registros_recibidos")}
            style={{ cursor: "pointer" }} >
            <i className="bi bi-folder"></i>
            Registros recibidos
          </a>
        </div>

        <div className="form-group">
           <a
            className={vistaActual === "correciones" ? "active" : ""}
            onClick={() => setVistaActual("correciones")}
            style={{ cursor: "pointer" }}>
            <i class="bi bi-pencil"></i>
            Registros con observaciones</a>
        </div>
        
        <div className="form-group">
           <a
            className={vistaActual === "registros_firmados" ? "active" : ""}
            onClick={() => setVistaActual("registros_firmados")}
            style={{ cursor: "pointer" }}>
            <i class="bi bi-check-circle"></i>
            Registros Firmados
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="page-container">
              <h1 className="page-title">Seguimiento de informes pendientes. </h1>
              <h2 className="page-subtitle">Visualice los informes más recientes recibidos y el estado actual de cada registro.</h2>
              
              <table class="tabla-registros">
                <thead>
                  <tr>
                    <th className="th-start">ECA</th>
                    <th className="th-start">Mes</th>
                    <th className="th-start">Fecha validación</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td>Lic. Luis Garcia Contreras</td>
                    <td>Abril</td>
                    <td>05 de Mayo del 2026</td>
                    <td className="td-center">Pendiente</td>
                  </tr>
                  
                  <tr>
                    <td>Lic. Luis Garcia Contreras</td>
                    <td>Abril</td>
                    <td>07 de Abril del 2026</td>
                    <td className="td-center">Correcciones</td>
                  </tr>
                  
                  <tr>
                    <td>Lic. Luis Garcia Contreras</td>
                    <td>Marzo</td>
                    <td>03 de Marzo del 2026</td>
                    <td className="td-center">Validado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {vistaActual === "registros_recibidos" && (
          <DICRegistros_Recibidos />
        )}
        {vistaActual === "correciones" && (
          <DIC_Correcciones />
        )}
        {vistaActual === "registros_firmados" && (
          <DIC_Firmados />
        )}

      </div>
    </>
  );
}

export default DicM_Inicio;