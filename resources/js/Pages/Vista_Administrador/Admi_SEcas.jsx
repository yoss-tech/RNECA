import React, { useState, useEffect } from "react";
import { getUserCeaa } from "../../Components/api/usuarios.jsx"
import Modificar_UserCeaa from "../Modals/Modificar/Mod_User";
import Crear_SupervisorECAS from "../Modals/Crear/Crear_SEcas";

function Admi_SupervisoresECAS() {
  const [mostrarModificar, setMostrarModificar] = useState(false);
  const [mostrarCrear, setMostrarCrear] = useState(false);

  const [ceaas, setCeaas] = useState([]);
  const cargarUserCeaa = async () => {
    const response = await getUserCeaa();
    console.log(response);

    if (response && response.status === 200) {
      setCeaas(response.body);
    }
  };

  useEffect (() => {
    cargarUserCeaa();
  }, []);

  const [ceaaSeleccionado, setCeaaSeleccionado] = useState(null);
  const abrirModalModificar = (ceaa) => {
    setCeaaSeleccionado(ceaa);
    setMostrarModificar(true);
  };

  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios revisores.</h1>
    <h2 className="page-subtitle">Administre las cuentas encargadas de la revisión y validación de los informes municipales.</h2>
    
    <button className="btn-primario"  onClick={() =>setMostrarCrear(true)}>
      Crear un nuevo supervisor
    </button>
    {mostrarCrear && (
      <Crear_SupervisorECAS
        cerrarModal={() => setMostrarCrear(false)}
        actualizarLista={cargarUserCeaa}
      />
    )}
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Nombre</th>
          <th className="th-start">Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {ceaas.map((ceaa) => (
          <tr key={ceaa.id_usuario}>
            <td>{ceaa.nombre}</td>
            <td>{ceaa.correo}</td>
            <td>
              <button className="btn-negativo" onClick={() =>abrirModalModificar(ceaa)}>
                Modificar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {mostrarModificar && (
      <Modificar_UserCeaa
      usuario={ceaaSeleccionado}
      cerrarModal={() => setMostrarModificar(false)}
      actualizarLista={cargarUserCeaa}
      />
    )}
  </div>
  );
}

export default Admi_SupervisoresECAS;   