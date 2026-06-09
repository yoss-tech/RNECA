import React from "react";

function Admi_SupervisoresECAS() {
  
  return (
  <div className="registro-container">
    <h1 className="registro-title">Administración de usuarios revisores.</h1>
    <h2 className="registro-subtitle">Administre las cuentas encargadas de la revisión y validación de los informes municipales.</h2>
    
    <button type="button" className="btn-primario">Crear un nuevo supervisor</button>

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

export default Admi_SupervisoresECAS;   