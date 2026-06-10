import React from "react";

function Admi_ECAS() {
  
  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios ECA.</h1>
    <h2 className="page-subtitle">Consulte, actualice o elimine usuarios asignados a los Espacios de Cultura del Agua.</h2>
    
    <button type="button" className="btn-primario">Crear un nuevo ECA</button>

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
            <button type="button" className="btn-negativo">Modificar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Admi_ECAS;  