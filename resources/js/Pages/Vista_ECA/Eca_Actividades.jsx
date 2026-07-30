import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Crear_Actividad from "../Modals/Crear/Crear_Actividad.jsx";
import { getProgramData, delete_program } from "../../Components/api/program.jsx"
import Mod_Actividad from "../../Pages/Modals/Modificar/Mod_Actividad.jsx";
import Mostrar_Imagenes from "../Modals/MostrarImagen.jsx"
import ImageGallery from "../Modals/prueba.jsx"
import Swal from "sweetalert2";

function VECA_Actividades() {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModalMod, setMostrarModalMod] = useState(false);
  const [mostrar_Imagenes, setMostrar_Imagenes] = useState(false);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const [opcionesAbiertas, setOpcionesAbiertas] = useState(null);

  const [actvidades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarActividades();
  }, []);

  const cargarActividades = async () => {
    try {
      const response = await getProgramData();
      setActividades(response || []);
      setCargando(false);
    }
    catch (error) {
      console.log("Error al cargar los datos del programa")
    }
  }

  const toggleOpciones = (index) => {
    setOpcionesAbiertas(opcionesAbiertas === index ? null : index);
  };

  const handleVerImagenes = (actividad) => {
    setActividadSeleccionada(actividad);
    setMostrar_Imagenes(true);
  }

  const handleModificarActividad = (actividad) => {
    setActividadSeleccionada(actividad);
    setMostrarModalMod(true);
  };

  const handleDelete = async (id_program) => {
    const result = Swal.fire({
      title: 'Advertencia!',
      text: '¿Estas seguro de que deseas eimininar la actividad y todos sus elementos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    })

    if ((await result).isConfirmed)
      try {
        const response = await delete_program(id_program);
        if (response) {
          setActividades(actvidades.filter(act => act.id_program !== id_program));
        }
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Ops, ocurrio un error inesperado!',
          icon: 'error',
          timer: 5000,
          timerProgressBar: true,
        })
      }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Registro de actividades realizadas durante el periodo.</h1>
      <h2 className="page-subtitle">Capture la información de las actividades efectuadas durante el mes correspondiente.</h2>

      <button className="btn-primario" onClick={() => setMostrarModal(true)}>
        Nueva actividad
      </button>
      {mostrarModal && (
        <Crear_Actividad
          cerrarModal={() => setMostrarModal(false)}
          actividades={cargarActividades}
        />
      )}
      {mostrarModalMod && (
        <Mod_Actividad
          cerrarModal={() => setMostrarModalMod(false)}
          actividad={actividadSeleccionada}
          actualizarActiv={cargarActividades}
        />
      )}
      {mostrar_Imagenes && (
        <Mostrar_Imagenes
          actividad={actividadSeleccionada}
          cerrarModal={() => setMostrar_Imagenes(false)}
        />
      )}

      <table className="tabla-registros">
        <thead>
          <tr>
            <th className="th-start">Dirección</th>
            <th className="th-start">Platica</th>
            <th className="th-start">Otras actividades</th>
            <th className="th-start">Habitantes atendidos</th>
            <th className="th-start">Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {cargando ? (
            <p>Cargando actividades...</p>
          ) : actvidades && actvidades.length > 0 ? (
            actvidades.map((item, index) => (
              <tr key={index}>
                <td>
                  <p className="form-subtitle">{item.municipio}</p>
                  <p className="card-text">{item.localidad}</p>
                </td>
                <td>{item.tipo_platica}</td>
                <td>{item.otras_activ}</td>
                <td>{item.pobl_ate}</td>
                <td>{new Date(item.fecha_mes).toLocaleDateString()}</td>
                <td style={{ position: 'relative' }}>
                  <div>
                    <button className="btn-acciones" onClick={() => toggleOpciones(index)}>
                      <i className="bi bi-gear"></i>
                    </button>
                    {opcionesAbiertas === index && (
                      <div className="menu-perfil" style={{ position: 'absolute', right: 0, top: '100%', zIndex: 10 }}>
                        <button className="btn-ver" onClick={() => handleVerImagenes(item)}>
                          Ver fotografias
                        </button>
                        <button className="btn-modificar" onClick={() => handleModificarActividad(item)}>
                          Modificar
                        </button>
                        <button className="btn-eliminar" onClick={() => handleDelete(item.id_program)}>
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <p>No hay actividades registradas</p>
          )}
        </tbody>
      </table>
    </div >
  );
}

export default VECA_Actividades;