import React, { useState } from "react";
import Modificar_ECAS from "../Modals/Modificar/Mod_ECAS";
import Crear_ECAS from "../Modals/Crear/Crear_ECAS";

function Admi_ECAS() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModal2, setMostrarModal2] = useState(false);
    
  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios ECA.</h1>
    <h2 className="page-subtitle">Consulte, actualice o elimine usuarios asignados a los Espacios de Cultura del Agua.</h2>
    
    <button className="btn-primario"  onClick={() =>setMostrarModal2(true)}>
             Crear un nuevo ECA</button>
                {mostrarModal2 && (
                <Crear_ECAS
                    cerrarModal={() => setMostrarModal2(false)}
                />
                )}

 
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">ECA</th>
          <th className="th-start">Correo</th>
          <th className="th-start">Contraseña</th>
          <th className="th-start">Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>
            <p className="form-subtitle">MUNICIPIO</p>
            <p className="card-subtitle">INSTANCIA OPERATIVA</p>
            <p className="card-text">NOMBRE</p>
          </td>
          <td>CORREO</td>
          <td>CONTRASEÑA</td>
          <td>ACTIVO</td>
          <td className="btn-container-vertical">
            <button type="button" className="btn-neutral">Eliminar</button>
            <button className="btn-negativo"  onClick={() =>setMostrarModal(true)}>
             Modificar</button>
                {mostrarModal && (
                <Modificar_ECAS
                    cerrarModal={() => setMostrarModal(false)}
                />
                )}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Admi_ECAS;  