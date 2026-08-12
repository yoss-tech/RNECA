import React, { useState, useEffect } from "react";
import { mostrarSoloMes, dateLimit } from "../../Components/functions.jsx";
import { logoutUser } from "../../Components/api/auth.jsx";
import { checkEspacioRegistro } from "../../Components/api/espacio.jsx";
import { getInfoEca } from "@/Components/api/usuarios.jsx";
import { checkActividadesRegistro } from "../../Components/api/program.jsx"
import { checkOficio } from "../../Components/api/oficio.jsx";
import { getLastOficio } from "../../Components/api/dowload_ofice.js";
import { getContadorNotificaciones } from "@/Components/api/notificaciones.jsx";
import VECA_Actividades from "./Eca_Actividades.jsx";
import VECA_Poblacion from "./Eca_Poblacion.jsx";
import VECA_ConsultaReg from "./Eca_ConsultaRegistros.jsx";
import PanelDocumento from "./PanelDocumento.jsx";
import Swal from "sweetalert2";
import Notificaciones_Eca from "../Modals/Notificaciones.jsx";
import PerfilECA from "../Modals/Perfil.jsx";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import "/resources/css/Style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function VECA_Inicio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [mostrarNoti, setMostrarNoti] = useState(false);
  const [CerrarSesion, setCerrarSesion] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [hasPoblacionRegistration, setHasPoblacionRegistration] = useState(null);
  const [hasActivitiesRegistration, setHasActivitiesRegistration] = useState(null);
  const [hasOficioSent, setHasOficioSent] = useState(null);
  const [contador, setContador] = useState(0);
  const menuItems = document.querySelectorAll('.sidebar .form-group a');

  useEffect(() => {
    const fetchRegistrationStatus = async () => {
      try {
        const [poblacionData, actividadesData, oficioData] = await Promise.all([
          checkEspacioRegistro(),
          checkActividadesRegistro(),
          checkOficio()
        ]);

        const hasActividades = actividadesData.registro_existente;
        const hasPoblacion = poblacionData.registro_existente;
        const hasOficio = oficioData.registro_existente;

        setHasActivitiesRegistration(hasActividades);
        setHasPoblacionRegistration(hasPoblacion);
        setHasOficioSent(hasOficio);

        if (!hasActividades) {
          setCurrentStep(1);
        } else if (!hasPoblacion) {
          setCurrentStep(2);
        } else if (!hasOficio) {
          setCurrentStep(3);
        } else {
          setCurrentStep(4);
        }
      } catch (error) {
        console.error("Error al verificar el estado de registro:", error);
        setHasPoblacionRegistration(false);
        setHasActivitiesRegistration(false);
        setHasOficioSent(false);
        setCurrentStep(1);
      }
    };

    fetchRegistrationStatus();
  }, []);


  const downloadLastOficio = async () => {
    try {
      const pdfBlob = await getLastOficio();
      const blobUrl = window.URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', `oficio_ultimo.pdf`);
      document.body.appendChild(link);

      link.click();

      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    }
    catch (error) {
      console.log(error);
    }
  };


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

    if (sidebar && toggleButton && !sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove('active');
      setMenuOpen(false);
    }
  });

  const handleCompletePending = () => {
    if (hasActivitiesRegistration === null || hasPoblacionRegistration === null || hasOficioSent === null) {
      return;
    }

    if (!hasActivitiesRegistration) {
      setVistaActual("actividades");
      setCurrentStep(1);
    } else if (!hasPoblacionRegistration) {
      setVistaActual("poblacion");
      setCurrentStep(2);
    } else if (!hasOficioSent) {
      setVistaActual("vista_previa");
      setCurrentStep(3);
    } else {
      Swal.fire({
        title: 'Registro del mes completado',
        text: 'Ya has completado todos los pasos para el registro de este mes.',
        icon: 'success',
        confirmButtonText: 'Entendido',
      });
    }
  };

  const onCompleteActivity = () => {
    setHasActivitiesRegistration(true);
    setCurrentStep(2);
    setVistaActual("poblacion");
  };

  const onCompletePopulation = () => {
    setHasPoblacionRegistration(true);
    setCurrentStep(3);
    setVistaActual("vista_previa");
  };

  const cargarContador = async () => {
    const response = await getContadorNotificaciones();
    console.log('Contador:', response);
    if (response && response.status === 200) {
      setContador(response.body);
    }
  };

  const disminuirContador = () => {
    setContador((prev) => Math.max(0, prev - 1));
  };

  useEffect(() => {
    cargarContador();
  }, []);

  return (
    <>
      <header className="header">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} >
          <i className="bi bi-list"></i>
        </button>

        <div className="logo"><img src={miImagen} alt="Logo RNECA" /></div>
        <div className="acciones-header">
          <button className="icono" onClick={() => setMostrarNoti(true)}>
            <i className="bi bi-bell-fill"></i>
            {contador > 0 && (
              <span>{contador}</span>
            )}
          </button>
          {mostrarNoti && (
            <Notificaciones_Eca
              cerrarModal={() => setMostrarNoti(false)}
              disminuirContador={disminuirContador}
              cambiarVista={setVistaActual}
            />
          )}

          <div className="perfil">
            <button className="icono" onClick={() => setCerrarSesion(!CerrarSesion)}>
              <i className="bi bi-person-fill"></i>
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
                    {(() => {
                      let text = 'Cargando estado...';
                      if (hasActivitiesRegistration !== null && hasPoblacionRegistration !== null && hasOficioSent !== null) {
                        if (!hasActivitiesRegistration) {
                          text = 'Aún no has hecho ningun registro.';
                        } else if (!hasPoblacionRegistration) {
                          text = 'Registrar la población beneficiaria.';
                        } else if (!hasOficioSent) {
                          text = 'Enviar el oficio a revisión.';
                        } else {
                          text = 'Registro del mes completado, revisa el estado del oficio en el apartado de Consultas.';
                        }
                      }
                      return <p className="card-text">{text}</p>;
                    })()}
                  </div>

                  {(() => {
                    let buttonText = 'Completar registro pendiente';
                    let isDisabled = true;

                    if (hasActivitiesRegistration !== null && hasPoblacionRegistration !== null && hasOficioSent !== null) {
                      // Logic reordered to match the new flow
                      if (!hasActivitiesRegistration) {
                        buttonText = 'Completar Actividades del mes';
                        isDisabled = false;
                      } else if (!hasPoblacionRegistration) {
                        buttonText = 'Completar Población Beneficiaria';
                        isDisabled = false;
                      } else if (!hasOficioSent) {
                        buttonText = 'Enviar Oficio a revisión';
                        isDisabled = false;
                      } else {
                        buttonText = 'Registro del mes completado';
                        isDisabled = true;
                      }
                    }
                    return (
                      <div className="botones-cards">
                        <button type="button" className="btn-primario" onClick={handleCompletePending} disabled={isDisabled}>
                          {buttonText}
                        </button>
                      </div>
                    );
                  })()}
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
                    <button type="button" className="btn-neutral" onClick={downloadLastOficio}>
                      Descargar PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {vistaActual === "actividades" && currentStep >= 1 && (
          <VECA_Actividades
            onComplete={hasActivitiesRegistration ? () => { } : onCompleteActivity}
          />
        )}
        {vistaActual === "poblacion" && (
          currentStep >= 2 ? (
          <VECA_Poblacion
            onComplete={hasPoblacionRegistration ? () => { } : onCompletePopulation}
          />
        ) : (
          <div className="page-container">
            <h1 className="page-title">Acceso denegado</h1>
            <h2 className="page-subtitle">Debes completar el registro de actividades antes de poder registrar la población beneficiaria.</h2>
          </div>
        ))}
        {vistaActual === "vista_previa" && (
          currentStep >= 3 ? (
          <PanelDocumento
            onComplete={hasOficioSent ? () => { } : () => {
              setHasOficioSent(true);
              setCurrentStep(4);
            }}
          />
        ) : (
          <div className="page-container">
            <h1 className="page-title">Acceso denegado</h1>
            <h2 className="page-subtitle">Debes completar el registro de población beneficiaria antes de poder acceder a la vista previa.</h2>
          </div>
        ))}
        {vistaActual === "consulta_registros" && (
          <VECA_ConsultaReg />
        )}
      </div>
    </>
  );
}

export default VECA_Inicio;