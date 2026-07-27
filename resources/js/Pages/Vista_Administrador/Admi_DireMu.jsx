import React, { useState, useEffect } from "react";
import { getUserDic } from "../../Components/api/usuarios.jsx"
import Modificar_UserDic from "../Modals/Modificar/Mod_User";

function Admi_DireMu() {
  const [mostrarModificar, setMostrarModificar] = useState(false);
  
  const [directores, setDirectores] = useState([]);

  useEffect (() => {
    cargarUserDic();
  }, []);

  const cargarUserDic = async () => {
    const response = await getUserDic();
    console.log(response);

    if (response && response.status === 200) {
      setDirectores(response.body);
    }
  };

  const [directorSeleccionado, setDirectorSeleccionado] = useState(null);

  const abrirModalModificar = (director) => {
    setDirectorSeleccionado(director);
    setMostrarModificar(true);
  };

  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios directivos.</h1>
    <h2 className="page-subtitle">Gestione las cuentas de los directores municipales responsables de la validación de informes.</h2>

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
        {directores.map((director) => (
          <tr key={director.id_usuario}>
            <td>{director.nombre}</td>
            <td>
              <p className="text-subtitle">{director.nombre_munipio}</p>
              <p className="text-bold">{director.nombre_inst_ope}</p>
            </td>
            <td>{director.correo}</td>
            <td>{director.estatus}</td>
            <td>
              <button className="btn-negativo" onClick={() =>abrirModalModificar(director)}>Modificar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {mostrarModificar && (
      <Modificar_UserDic
      usuario={directorSeleccionado}
      cerrarModal={() => setMostrarModificar(false)}
      actualizarLista={cargarUserDic}
      />
    )}
  </div>
  );
}

export default Admi_DireMu;