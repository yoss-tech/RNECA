import React, { useState, useEffect } from "react";
import { getEcas } from "../../Components/api/usuarios.jsx";
import Ver_ECA from "../Modals/Ver_ECA";
import Crear_ECAS from "../Modals/Crear/Crear_ECAS";
import Modificar_ECAS from "../Modals/Modificar/Mod_ECAS";

function CEAA_Ecas() {
  const[mostrarEcas, setMostrarEcas] = useState(false);
  const[mostrarCrear, setMostrarCrear] = useState(false);
  const[mostrarModificar, setMostrarModificar] = useState(false);

  const[ecas, setEcas] = useState([]);
  const [loading, setLoading] = useState(true);
  const cargarEcas = async () => {
    const response = await getEcas();
    console.log(response);
    if (response && response.status === 200) {
      setEcas(response.body);
      setLoading(false);
    }
  };
  useEffect (() => {
    cargarEcas();
  }, []);

  const [ecaSeleccionado, setEcaSeleccionado] = useState(null);
  const abrirVerEcas = (eca) => {
    setEcaSeleccionado(eca);
    setMostrarEcas(true);
    setMostrarModificar(false);
  };
  const abrirModalModificar = (eca) => {
    setEcaSeleccionado(eca);
    setMostrarModificar(true);
    setMostrarEcas(false);
  };

  return (
  <div className="page-container">
    <h1 className="page-title">Información sobre ECAs.</h1>
    <h2 className="page-subtitle">Visualice toda la información completa sobre los Espacios de Cultura del Agua</h2>
    
    <div className="dashboard">
        <div className="dashboard-left">
            <div className="buscador">
              <input type="text" placeholder="Buscar..." className="buscador-control"/>
              <button className="buscador-button"><i className="bi bi-search"></i></button>
            </div>
        </div>
        
        <div className="btn-container-horizontal">
          <button className="btn-primario" onClick={() => setMostrarCrear(true)}>
            Crear un nuevo ECA
          </button>
          {mostrarCrear && (
            <Crear_ECAS
              cerrarModal={() => setMostrarCrear(false)}
              actualizarLista={cargarEcas}
            />
          )}
        </div>
    </div>

    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Clave de ECA</th>
          <th className="th-start">Municipio</th>
          <th className="th-start">Instancia Operativa</th>
          <th className="th-start">Responsable</th>
          <th className="th-start">Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      <tbody>
        {loading ? (
          <tr>
            <td colSpan="6">
              <p className="text-bold">Cargando datos...</p> 
            </td>
          </tr>
        ) : ecas.length > 0 ? (
          ecas.map((eca) => (
            <tr key={eca.clave_eca}>
              <td>
                <p>{eca.clave_eca}</p>
              </td>
              <td>
                <p className="text-title">{eca.nombre_munipio}</p>
              </td>
              <td>
                <p className="text-subtitle">{eca.nombre_inst_ope}</p>
                <p className="text-bold">{eca.tipo_instancia}</p>
              </td>
              <td>
                <p>{eca.nombre}</p>
              </td>
              <td>
                <p>{eca.nombre_tipo}</p>
              </td>
              <td>
                <button className="btn-neutral" onClick={() => abrirVerEcas(eca)}>Detalles</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">
              <p className="text-bold">No existen Espacios de Cultura del Agua creados.</p> 
            </td>
          </tr>
        )}
      </tbody>
    </table>
    {mostrarEcas && (
      <Ver_ECA
      eca={ecaSeleccionado}
      cerrarModal={() => setMostrarEcas(false)}
      abrirModalModificar={abrirModalModificar}
      />
    )}
    {mostrarModificar && (
      <Modificar_ECAS
      eca={ecaSeleccionado}
      cerrarModal={() => setMostrarModificar(false)}
      actualizarLista={cargarEcas}
      />
    )}
  </div>
  );
}

export default CEAA_Ecas;