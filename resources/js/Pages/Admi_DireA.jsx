import React from "react";

function Admi_DireA() {
  
  return (
  <div className="registro-container">
    <h1 className="registro-title">Administración de usuarios supervisores.</h1>
    <h2 className="registro-subtitle">Gestione las cuentas con acceso a la supervisión y consulta general de los informes.</h2>
    
    <button type="button" className="btn-primario">Crear un nuevo director de área</button>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>NOMBRE</td>
          <td>CORREO</td>
          <td>CONTRASEÑA</td>
          <td>ACTIVO</td>
          <td className="btn-container">
            <button type="button" className="btn-neutral">Eliminar</button>
            <button type="button" className="btn-negativo">Modificar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Admi_DireA;   