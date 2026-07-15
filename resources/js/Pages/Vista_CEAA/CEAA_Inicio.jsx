import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import Perfil_CEAA from "../Modals/Perfiles/Perfil_CEAA.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import CEAA_Pendientes from "./CEAA_Pendientes.jsx";
import CEAA_Observaciones from "./CEAA_Observaciones.jsx";
import CEAA_Validados from "./CEAA_Validados.jsx";
import CEAA_Solicitudes from "./CEAA_Solicitudes.jsx";
import CEAA_Ecas from "./CEAA_ECAS.jsx";
import CEAA_Historial from "./CEAA_Historial.jsx";
import CumplimientoInformes from "@/Components/Graficas.jsx";
import { logoutUser } from "@/Components/api/auth.jsx";
import Notificaciones_CEAA from "../Modals/Notificaciones/Notificacion_CEAA.jsx";
import Avisos_CEAA from "../Modals/Avisos/Avisos_CEAA.jsx";

function CEAA_Inicio() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModal2, setMostrarModal2] = useState(false);
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
            <button className="icono"  onClick={() =>setMostrarModal(true)}>
              <i className="bi bi-envelope"></i>
                </button>
                {mostrarModal && (
                <Avisos_CEAA
                    cerrarModal={() => setMostrarModal(false)}
                />
            )}

            <button className="icono"  onClick={() =>setMostrarModal2(true)}>
             <i className="bi bi-bell"></i>
                </button>
                {mostrarModal2 && (
                <Notificaciones_CEAA
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
                <Perfil_CEAA
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
            className={vistaActual === "pendientes" ? "active" : ""}
            onClick={() => setVistaActual("pendientes")}
            style={{ cursor: "pointer" }} >
            <i className="bi bi-folder"></i>
            Registros pendientes
          </a>
        </div>

        <div className="form-group">
          <a
            className={vistaActual === "observaciones" ? "active" : ""}
            onClick={() => setVistaActual("observaciones")}
            style={{ cursor: "pointer" }} >
            <i class="bi bi-pencil"></i>
            Registros con observaciones
          </a>
        </div>

        <div className="form-group">
          <a
            className={vistaActual === "validados" ? "active" : ""}
            onClick={() => setVistaActual("validados")}
            style={{ cursor: "pointer" }} >
            <i class="bi bi-clipboard-check"></i>
            Registros validados
          </a>
        </div>

        <div className="form-group">
          <a
            className={vistaActual === "solicitudes" ? "active" : ""}
            onClick={() => setVistaActual("solicitudes")}
            style={{ cursor: "pointer" }}>
            <i class="bi bi-files"></i>
            Solicitudes de registros fuera de plazo
          </a>
        </div>
        
        <div className="form-group">
          <a
            className={vistaActual === "historial" ? "active" : ""}
            onClick={() => setVistaActual("historial")}
            style={{ cursor: "pointer" }}>
            <i class="bi bi-search"></i>
            Consulta de Registros
          </a>
        </div>

        <div className="form-group">
          <a
            className={vistaActual === "Ecas" ? "active" : ""}
            onClick={() => setVistaActual("Ecas")}
            style={{ cursor: "pointer" }}>
            <i class="bi bi-list-ul"></i>
             Listado de ECA´S
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="page-container">
              <h1 className="page-title">Seguimiento general de informes municipales.</h1>
              <h2 className="page-subtitle">Visualice los informes recientemente cargados y consulte el avance mensual mediante indicadores y gráficas de cumplimiento.</h2>
              
              <div className="dashboard">
                <div className="dashboard-left">
                  <div className="buscador">
                    <input type="text" placeholder="Buscar..." className="buscador-control"/>
                    <button className="buscador-button"><i className="bi bi-search"></i></button>
                  </div>
                  
                  <div className="cards-municipio">
                    <div className="card-municipio">
                      <div class="card-body">
                        <div className="card-titles">
                          <h3 className="card-title">Municipio</h3>
                          <h3 className="card-subtitle">Instancia Operativa</h3>
                          <p className="card-text">Informes pedientes:</p>
                          <p className="card-text">Validados:</p>
                        </div>
                        <div className="botones-cards">
                          <button className="btn-neutral">Ver detalles</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-right">
                  <div className="card-grafico">
                    <h3 className="card-title">Cumplimiento de Entrega de Informes mensuales </h3>
                    <p className="card-text">Visualice el porcentaje de municipios que han cumplido con la entrega de su informe mensual y aquellos que se encuentran pendientes.</p>
                    <CumplimientoInformes/>
                  </div>
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
        {vistaActual === "Ecas" && (
          <CEAA_Ecas/>
        )}

      </div>
    </>
  );
}

export default CEAA_Inicio;