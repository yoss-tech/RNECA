import React, { useState, useEffect } from "react";
import { getMunicipios } from "../../Components/api/municipios.jsx"
import Modificar_NumHab from "../Modals/Modificar/Mod_NumHab";

function Admi_NumHab() {
  const [mostrarModificar, setMostrarModificar] = useState(false);

  const [municipios, setMunicipios] = useState([]);

  useEffect (() => {
    cargarMunicipios();
  }, []);

  const cargarMunicipios = async () => {
    const response = await getMunicipios();
    console.log(response);

    if (response && response.status === 200) {
      setMunicipios(response.body);
    }
  };

  const [municipioSeleccionado, setMunicipioSeleccionado] = useState(null);

  const abrirModalModificar = (municipio) => {
    setMunicipioSeleccionado(municipio);
    setMostrarModificar(true);
  };

  return (
  <div className="page-container">
    <h1 className="page-title">Población por municipio.</h1>
    <h2 className="page-subtitle">Consulte y actualice el número total de habitantes de un municipio específico.</h2>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Municipio</th>
          <th className="th-start">Número de habitantes</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        {municipios.map((municipio) => (
          <tr key={municipio.id_municipio}>
            <td>{municipio.nombre_municipio}</td>
            <td><p className="text-title">{municipio.num_habitan}</p></td>
            <td>
              <button className="btn-negativo" onClick={() => abrirModalModificar(municipio)}>Modificar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {mostrarModificar && (
      <Modificar_NumHab
      municipio={municipioSeleccionado}
      cerrarModal={() => setMostrarModificar(false)}
      actualizarLista={cargarMunicipios}
      />
    )}
  </div>
  );
}

export default Admi_NumHab;