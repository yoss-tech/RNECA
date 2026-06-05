import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "bootstrap-icons/font/bootstrap-icons.css";

import DICRegistros_Recibidos from "./Dic_RegistrosR.jsx";
import DIC_Correcciones from "./Dic_Correcciones.jsx";
import DIC_Firmados from "./Dic_Firmados.jsx";




function DicM_Inicio() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [CerrarSesion, setCerrarSesion] = useState(false);
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
          <a onClick={() => setVistaActual("registros_recibidos")} style={{ cursor: "pointer" }} >
            <i className="bi bi-folder"></i>
             Registros recibidos
          </a>
        </div>

        <div className="form-group p">
           <a onClick={() => setVistaActual("correciones")} style={{ cursor: "pointer" }}>
            <i class="bi bi-pencil"></i>
            Registros con observaciones</a>
        </div>
        
        <div className="form-group p">
           <a onClick={() => setVistaActual("registros_firmados")} style={{ cursor: "pointer" }}>
          <i class="bi bi-check-circle"></i>
            Registros Firmados
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="form-group">
              <h1 className="registro-title">Seguimiento de informes pendientes. </h1>
            </div>

            <div className="form-group">
              <h2 className="registro-subtitle">Visualice los informes más recientes recibidos y el estado actual de cada registro.</h2>
            </div>

        <table class="tabla-registros">
          <thead>
            <tr>
              <th>ECA</th>
              <th>Mes</th>
              <th>Fecha validación</th>
              <th>Estado</th>
            </tr>
          </thead>

        <tbody>
            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Abril</td>
              <td>05 de Mayo del 2026</td>
              <td class="estado revisado">Pendiente</td>
            </tr>

            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Abril</td>
              <td>07 de Abril del 2026</td>
              <td class="estado revisado">Corrección enviada</td>
            </tr>

            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Marzo</td>
              <td>03 de Marzo del 2026</td>
              <td class="estado revisado">Validado</td>
            </tr>
          </tbody>
        </table>
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