import React, { useState } from "react";
import Modificar_SupervisorEcas from "../Modals/Modificar/Mod_SEcas";
import Crear_SupervisorECAS from "../Modals/Crear/Crear_SEcas";
import EliminarElemento from "../Modals/Eliminar_Elemento";

function Admi_SupervisoresECAS() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModal2, setMostrarModal2] = useState(false);
  const [mostrarModal3, setMostrarModal3] = useState(false);

  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios revisores.</h1>
    <h2 className="page-subtitle">Administre las cuentas encargadas de la revisión y validación de los informes municipales.</h2>
    
    <button className="btn-primario"  onClick={() =>setMostrarModal2(true)}>
             Crear un nuevo supervisor</button>
                {mostrarModal2 && (
                <Crear_SupervisorECAS
                    cerrarModal={() => setMostrarModal2(false)}
                />
                )}
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Nombre</th>
          <th className="th-start">Correo</th>
          <th className="th-start">Contraseña</th>
          <th className="th-start">Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>NOMBRE</td>
          <td>CORREO</td>
          <td>CONTRASEÑA</td>
          <td>ACTIVO</td>
          <td className="btn-container-horizontal">
             <button className="btn-neutral"  onClick={() =>setMostrarModal3(true)}>
             Eliminar</button>
                {mostrarModal3 && (
                <EliminarElemento
                    cerrarModal={() => setMostrarModal3(false)}
                />
                )}
            <button className="btn-negativo"  onClick={() =>setMostrarModal(true)}>
             Modificar</button>
                {mostrarModal && (
                <Modificar_SupervisorEcas
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

export default Admi_SupervisoresECAS;   