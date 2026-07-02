import React, { useState  } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from "@inertiajs/react";
import { create_program } from "../../Components/api/program.jsx";
import Crear_actividad from "../Modals/Crear_actividad";

function VECA_Actividades() {

  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="page-container">
      <h1 className="page-title">Registro de actividades realizadas durante el periodo.</h1>
      <h2 className="page-subtitle">Capture la información de las actividades efectuadas durante el mes correspondiente.</h2>

      <button className="btn-primario" onClick={() => setMostrarModal(true)}>
        Nueva actividad
      </button>
      {mostrarModal && (
        <Crear_actividad
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
          <td className="btn-container-vertical">
            <button type="button" className="btn-neutral">Eliminar</button>
            <button className="btn-negativo">Modificar</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div >
  );
}

export default VECA_Actividades;