import React from "react";

function Admi_DireA() {
  
  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios supervisores.</h1>
    <h2 className="page-subtitle">Gestione las cuentas con acceso a la supervisión y consulta general de los informes.</h2>
    
    <button type="button" className="btn-primario">Crear un nuevo director de área</button>

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
            <button type="button" className="btn-negativo">Modificar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Admi_DireA;   