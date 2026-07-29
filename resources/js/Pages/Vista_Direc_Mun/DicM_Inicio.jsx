import React, { useEffect, useState } from "react";
import { logoutUser } from "../../Components/api/auth.jsx";
import { get_ofice } from "@/Components/api/oficio.jsx";
import { getInfoDic } from "@/Components/api/usuarios.jsx";
import DIC_Correcciones from "./Dic_Correcciones.jsx";
import DIC_Firmados from "./Dic_Firmados.jsx";
import DICRegistros_Recibidos from "./Dic_RegistrosR.jsx";
import Perfil_DirectorM from "../Modals/Perfiles/Perfil.jsx";
import Notificaciones_DireMunicipal from "../Modals/Notificaciones/Notificacion_DM.jsx";
import Avisos_DireMunicipal from "../Modals/Avisos/Avisos_DM.jsx";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "/resources/css/Style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function DicM_Inicio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const [mostrarAvisos, setMostrarAvisos] = useState(false);
  const [CerrarSesion, setCerrarSesion] = useState(false);

  const [ofice, setOfice] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadInfo = async () => {
      try {
        const response = await get_ofice();
        console.log(response);
        setOfice(response || []);
        setLoading(false);
      }
      catch (error) {
        console.log("Error al cargar los datos del programa");
        setLoading(false);
      }
    }
    loadInfo();
  }, []);

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
        <div className="logo"><img src={miImagen} alt="Logo RNECA" /></div>

        <div className="acciones-header">
          <button className="icono" onClick={() => setMostrarAvisos(true)}>
            <i className="bi bi-envelope"></i>
          </button>
          {mostrarAvisos && (
            <Avisos_DireMunicipal
              cerrarModal={() => setMostrarAvisos(false)}
            />
          )}
          <button className="icono" onClick={() => setMostrarNoti(true)}>
            <i className="bi bi-bell"></i>
          </button>
          {mostrarNoti && (
            <Notificaciones_DireMunicipal
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
                  <Perfil_DirectorM
                    cerrarModal={() => setMostrarPerfil(false)}
                    obtenerPerfil={getInfoDic}
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
                {loading ? (
                  <tr>
                    <td colSpan="4">
                      <p className="text-bold">Cargando datos...</p> 
                    </td>
                  </tr>
                ) : ofice.length > 0 ? (
                  ofice.map((item, index) => (
                    <tr key={index.id_oficio}>
                      <td>{item.nombre_eca}</td>
                      <td>{item.mes_oficio}</td>
                      <td>{item.fecha_registro}</td>
                      {/* <td className="td-center">Correcciones</td> */}
                      <td className="td-center">{item.nombre_tipo}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">
                      <p className="text-bold">No existen informes recibidos.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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
  )
}
export default DicM_Inicio;