import React, { useState, useEffect } from "react";
import { getUserLic } from "../../Components/api/usuarios.jsx"
import Modificar_DireA from "../Modals/Modificar/Mod_User";

function Admi_DireA() {
  const [mostrarModificar, setMostrarModificar] = useState(false);

  const [licenciado, setLicenciado] = useState([]);
  const cargarUserLic = async () => {
    const response = await getUserLic();
    console.log(response);

    if (response && response.status === 200) {
      setLicenciado(response.body);
    }
  };

  useEffect (() => {
    cargarUserLic();
  }, []);

  const [licSeleccionado, setLicSeleccionado] = useState(null);
  const abrirModalModificar = (lic) => {
    setLicSeleccionado(lic);
    setMostrarModificar(true);
  };
   
  return (
  <div className="page-container">
    <h1 className="page-title">Administración de usuarios supervisores.</h1>
    <h2 className="page-subtitle">Gestione las cuentas con acceso a la supervisión.</h2>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Nombre</th>
          <th className="th-start">Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        {licenciado.map((lic) => (
          <tr key={lic.id_usuario}>
            <td>{lic.nombre}</td>
            <td>{lic.correo}</td>
            <td>
              <button className="btn-negativo"  onClick={() => abrirModalModificar(lic)}>Modificar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {mostrarModificar && (
      <Modificar_DireA
      usuario={licSeleccionado}
      cerrarModal={() => setMostrarModificar(false)}
      actualizarLista={cargarUserLic}
      />
    )}
  </div>
  );
}

export default Admi_DireA;   