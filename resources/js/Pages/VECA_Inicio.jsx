import React, { useState } from "react";
import "/resources/css/Style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function VECA_Inicio() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <body>
      <header className="header">

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="logo">
          <img src={miImagen} alt="Logo RNECA" />
        </div>

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
          <a href="">
            <i className="bi bi-house"></i>
            Inicio
          </a>
        </div>

        {/* SUBMENÚ */}
        <div className="form-group p">

          <a
            onClick={() => setSubmenuOpen(!submenuOpen)}
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-clipboard2"></i>
            Generación de registros
          </a>
          {submenuOpen && (
            <ul className="submenu">
              <li>
                <i class="bi bi-check-circle"></i><a href="">Presente</a>
              </li>
              <li>
                <a href="">Actividades del mes</a>
              </li>
              <li>
                <a href="">Población Beneficiaria</a>
              </li>
              <li>
                <a href="">Memoria Fotográfica</a>
              </li>
            </ul>
          )}

        </div>

        <div className="form-group p">
          <a href="">
            <i className="bi bi-clipboard2-check"></i>
            Vista previa
          </a>
        </div>

        <div className="form-group p">
          <a href="">
            <i className="bi bi-folder"></i>
            Consulta de registros
          </a>
        </div>

      </div>

      <div className="content">
        <div className="form-group">
          <h4>
            Bienvenido a el Registro Nacional de Espacios de Cultura del Agua (RNECA)
          </h4>
        </div>

        <div className="form-group">
          <h5>
            Administra, consulta y da seguimiento a los registros mensuales de actividades.
          </h5>
        </div>

        <br />

        <p className="labelColor">Registro del Mes</p>

        <div className="card-conten">
          <h5 className="card-header p color">
            Informe del mes de Mayo
          </h5>

          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title">Fecha límite:</h5>
              </div>

              <div className="col">
                <h5 className="card-title">7 Marzo 2026</h5>
              </div>
            </div>

            <p className="card-text">
              Completa tu registro mensual pendiente.
            </p>

            <button
              type="button"
              className="btn btn-outline-dark"
            >
              Completar registro pendiente
            </button>
          </div>
        </div>

        <br />

        <p className="labelColor">Último Registro</p>

        <div className="card-conten">
          <h5 className="card-header p color">
            Informe del mes de Mayo
          </h5>

          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title">Fecha límite:</h5>
              </div>

              <div className="col">
                <h5 className="card-title">7 Marzo 2026</h5>
              </div>
            </div>

            <p className="card-text">
              Completa tu registro mensual pendiente.
            </p>

            <button
              type="button"
              className="btn btn-outline-dark"
            >
              Completar registro pendiente
            </button>
          </div>
        </div>

      </div>
    </body>
  );
}

export default VECA_Inicio;