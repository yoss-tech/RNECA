import React, { useState } from "react";
import Modificar_DireA from "../Modals/Modificar/Mod_DireA";
import Crear_DirectorArea from "../Modals/Crear/Crear_DireA";

function Admi_DireA() {
   const [mostrarModal, setMostrarModal] = useState(false);
   const [mostrarModal2, setMostrarModal2] = useState(false);
   
  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios supervisores.</h1>
    <h2 className="page-subtitle">Gestione las cuentas con acceso a la supervisión y consulta general de los informes.</h2>
    
    <button className="btn-primario"  onClick={() =>setMostrarModal2(true)}>
             Crear un nuevo director de área</button>
                {mostrarModal2 && (
                <Crear_DirectorArea
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
            <button type="button" className="btn-neutral">Eliminar</button>
            <button className="btn-negativo"  onClick={() =>setMostrarModal(true)}>
             Modificar</button>
                {mostrarModal && (
                <Modificar_DireA
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

export default Admi_DireA;   