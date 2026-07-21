import React, { useState, useEffect } from "react";
import Modificar_DireMunicipal from "../Modals/Modificar/Mod_DireMu";
import Crear_DirectorMunicipal from "../Modals/Crear/Crear_DireMu";
import EliminarElemento from "../Modals/Eliminar_Elemento";

function Admi_DireMu() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModal2, setMostrarModal2] = useState(false);
  const [mostrarModal3, setMostrarModal3] = useState(false);

  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios directivos.</h1>
    <h2 className="page-subtitle">Gestione las cuentas de los directores municipales responsables de la validación de informes.</h2>
  
    <button className="btn-primario"  onClick={() =>setMostrarModal2(true)}>
             Crear un nuevo director municipal</button>
                {mostrarModal2 && (
                <Crear_DirectorMunicipal
                    cerrarModal={() => setMostrarModal2(false)}
                />
                )}

    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Director municipal</th>
          <th className="th-start">Municipio</th>
          <th className="th-start">Correo</th>
          <th className="th-start">Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>Nombre</td>
          <td>
            <p className="form-subtitle">MUNICIPIO</p>
            <p className="card-subtitle">INSTANCIA OPERATIVA</p>
          </td>
          <td>CORREO</td>
          <td>ACTIVO</td>
          <td className="btn-container-vertical">
            <button className="btn-negativo"  onClick={() =>setMostrarModal(true)}>
            Modificar</button>
            {mostrarModal && (
              <Modificar_DireMunicipal
                cerrarModal={() => setMostrarModal(false)}
              />
            )}
            <button className="btn-neutral"  onClick={() =>setMostrarModal3(true)}>
            Eliminar</button>
            {mostrarModal3 && (
              <EliminarElemento
                cerrarModal={() => setMostrarModal3(false)}
              />
            )}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Admi_DireMu;