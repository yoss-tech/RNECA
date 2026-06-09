import React from "react";

function Admi_DireMu() {
  
  return (
  <div className="registro-container">
    <h1 className="registro-title">Administración de usuarios directivos.</h1>
    <h2 className="registro-subtitle">Gestione las cuentas de los directores municipales responsables de la validación de informes.</h2>
    
    <button type="button" className="btn-primario">Crear un nuevo director municipal</button>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th>Director municipal</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
           <td>
            <div className="color-label">MUNICIPIO</div>
            <div className="card-title">INSTANCIA OPERATIVA</div>
            <div className="card-text">NOMBRE</div>
            </td>
          <td>CORREO</td>
          <td>CONTRASEÑA</td>
          <td>ACTIVO</td>
          <td>
            <button type="button" className="btn-neutral">Eliminar</button>
            <button type="button" className="btn-negativo">Modificar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Admi_DireMu;   