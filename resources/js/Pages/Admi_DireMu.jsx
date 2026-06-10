import React from "react";

function Admi_DireMu() {
  
  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios directivos.</h1>
    <h2 className="page-subtitle">Gestione las cuentas de los directores municipales responsables de la validación de informes.</h2>
    
    <button type="button" className="btn-primario">Crear un nuevo director municipal</button>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Director municipal</th>
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
            <button type="button" className="btn-negativo">Modificar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Admi_DireMu;   