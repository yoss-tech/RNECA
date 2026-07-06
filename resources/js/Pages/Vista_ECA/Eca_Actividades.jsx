import React, { useState  } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Crear_Actividad from "../Modals/Crear/Crear_Actividad.jsx";
import Opciones from "../Modals/Opciones.jsx";

function VECA_Actividades() {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

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
        />
      )}
      <table class="tabla-registros">
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
        <tr>
          <td>
            <p className="form-subtitle">MUNICIPIO</p>
            <p className="card-text">LOCALIDAD</p>
          </td>
          <td>ESCOLAR/COMUNITARIA</td>
          <td>ACTIVIDADES</td>
          <td>HABITANTES</td>
          <td>FECHA</td>
          <td>
            <button className="btn-acciones" onClick={() => setMostrarOpciones(true)}>
              <i class="bi bi-gear"></i>
            </button>
            {mostrarOpciones && (
              <Opciones
                cerrarModal={() => setMostrarOpciones(false)}
              />
            )}
          </td>
        </tr>
      </tbody>
    </table>
    </div >
  );
}

export default VECA_Actividades;