import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Crear_Memoria from "../Modals/Crear/Crear_Memoria.jsx";
import Mod_Actividad from "../Modals/Modificar/Mod_Actividad.jsx";
import Eliminar_Elemento from "../Modals/Eliminar_Elemento.jsx";

function Opciones({ cerrarModal }) {

    const [mostrarMemoria, setMostrarMemoria] = useState(false);
    const [mostrarModificar, setMostrarModificar] = useState(false);
    const [mostrarEliminar, setMostrarEliminar] = useState(false);
    
    return (
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-head">
          <h4>Selecciona una opción</h4>
        </div>
        <div className="modal-body">
          <div className="btn-container-horizontal">
            <button className="btn-primario" onClick={() => setMostrarMemoria(true)}>
              Agregar evidencia
            </button>
            {mostrarMemoria && (
              <Crear_Memoria
                cerrarModal={() => setMostrarMemoria(false)}
              />
            )}
            <button className="btn-negativo" onClick={() => setMostrarModificar(true)}>
              Modificar
            </button>
            {mostrarModificar && (
              <Mod_Actividad
                cerrarModal={() => setMostrarModificar(false)}
              />
            )}
            <button className="btn-neutral" onClick={() => setMostrarEliminar(true)}>
              Eliminar
            </button>
            {mostrarEliminar && (
              <Eliminar_Elemento
                cerrarModal={() => setMostrarEliminar(false)}
              />
            )}
          </div>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default Opciones;