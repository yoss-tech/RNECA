import React, { useState, useEffect } from "react";
import { getUserEcas } from "../../Components/api/usuario_eca.jsx"
import Modificar_UserECA from "../Modals/Modificar/Mod_UserECAS";

function Admi_ECAS() {
  const [mostrarModificar, setMostrarModificar] = useState(false);

  const [ecas, setEcas] = useState([]);

  useEffect (() => {
    cargarUserEcas();
  }, []);

  const cargarUserEcas = async () => {
    const response = await getUserEcas();
    console.log(response);

    if (response && response.status === 200) {
      setEcas(response.body);
    }
  };

  const [ecaSeleccionado, setEcaSeleccionado] = useState(null);

  const abrirModalModificar = (eca) => {
    setEcaSeleccionado(eca);
    setMostrarModificar(true);
  };

  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios ECA.</h1>
    <h2 className="page-subtitle">Consulte, actualice o elimine usuarios asignados a los Espacios de Cultura del Agua.</h2>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">ECA</th>
          <th className="th-start">Municipio</th>
          <th className="th-start">Correo</th>
          <th className="th-start">Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        {ecas.map((eca) => (
          <tr key={eca.id_usuario}>
            <td>{eca.nombre}</td>
            <td>
              <p className="form-subtitle">{eca.nombre_munipio}</p>
              <p className="card-subtitle">{eca.nombre_inst_ope}</p>
            </td>
            <td>{eca.correo}</td>
            <td>{eca.estatus}</td>
            <td>
              <button className="btn-negativo" onClick={() => abrirModalModificar(eca)}>Modificar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {mostrarModificar && (
      <Modificar_UserECA
      usuario={ecaSeleccionado}
      cerrarModal={() => setMostrarModificar(false)}
      actualizarLista={cargarUserEcas}
      />
    )}
  </div>
  );
}

export default Admi_ECAS;