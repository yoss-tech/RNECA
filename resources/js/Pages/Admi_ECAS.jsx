import React from "react";

function Admi_ECAS() {
  
  return (
  <div className="registro-container">
    <h1 className="registro-title">Administración de usuarios ECA.</h1>
    <h2 className="registro-subtitle">Consulte, actualice o elimine usuarios asignados a los Espacios de Cultura del Agua.</h2>
    
    <button type="button" className="btn-primario">Crear un nuevo ECA</button>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th>ECA</th>
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
          <td >
            <button type="button" className="btn-neutral">Eliminar</button>
            <button type="button" className="btn-negativo">Modificar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Admi_ECAS;  