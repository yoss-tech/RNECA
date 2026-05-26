import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "bootstrap-icons/font/bootstrap-icons.css";

import DICRegistros_Recibidos from "./Dic_RegistrosR.jsx";
import DIC_Correcciones from "./Dic_Correcciones.jsx";
import DIC_Validados from "./Dic_Validados.jsx";
import DIC_Firmados from "./Dic_Firmados.jsx";




function DicM_Inicio() {

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
            <a href="/">
              <i className="bi bi-person-circle perfil-icono"></i>
            </a>
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
            Correciones
          </a>
        </div>


        <div className="form-group p">
           <a onClick={() => setVistaActual("validados")} style={{ cursor: "pointer" }}>
           <i class="bi bi-clipboard-check"></i>
            Registros Validados
          </a>
        </div>
        
        <div className="form-group p">
           <a onClick={() => setVistaActual("registros_firmados")} style={{ cursor: "pointer" }}>
           <i class="bi bi-upload"></i>
            Registros Firmados
          </a>
        </div>
      </div>

      <div className="content">
        {vistaActual === "inicio" && (
          <>
            <div className="form-group">
              <h4>Bienvenido a el Registro Nacional de Espacios de Cultura del Agua (RNECA) </h4>
            </div>

            <div className="form-group">
              <h5>Administra, consulta y da seguimiento a los registros mensuales de actividades.</h5>
            </div>
            <br />

          <p className="labelColor">Registros Pendientes</p><br />           
        <table class="tabla-registros">
          <thead>
            <tr>
              <th>ECA</th>
              <th>Mes</th>
              <th>Fecha de envío</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

        <tbody>
            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Abril</td>
              <td>05 de Mayo del 2026</td>
              <td class="estado revisado">Pendiente</td>
              <td><button type="button" className="btn-space">Revisar</button></td>
            </tr>

            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Abril</td>
              <td>07 de Abril del 2026</td>
              <td class="estado revisado">Corrección enviada</td>
              <td><button type="button" className="btn-vista">Esperando</button></td>
            </tr>

            <tr>
              <td>Lic. Luis Garcia Contreras</td>
              <td>Marzo</td>
              <td>03 de Marzo del 2026</td>
              <td class="estado revisado">Validado</td>
              <td><button type="button" className="btn-guardar">Subir Archivo</button></td>
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
        {vistaActual === "validados" && (
          <DIC_Validados />
        )}
        {vistaActual === "registros_firmados" && (
          <DIC_Firmados />
        )}

      </div>

    </>
  );
}

export default DicM_Inicio;