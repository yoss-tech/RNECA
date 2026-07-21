import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import { updateActividad } from "../../../Components/api/memoria.jsx";

function Mod_Memoria({ cerrarModal, actividad }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion_act, setDescripcion_act] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateActividad({
      otras_activ: titulo,
      descripcion: descripcion_act,
      id_program: actividad.id_program,
      id_actividad: actividad.id_actividad
    });
  };

  return (
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-head">
          <h4>Completa los siguientes datos</h4>
          <p className="text-white">Ingresa la información detallada de las actividades del mes.</p>
        </div>
        <div className="modal-body">
          <form className="form-registro" onSubmit={handleSubmit}>
            <div className="form-registro">
              <div className="form-campo">
                <label className="form-label">Título</label>
                <input
                  type="text"
                  placeholder="Ingresa el nuevo título de la actividad"
                  className="form-control"
                  id="titulo"
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>

              <div className="form-campo">
                <label className="form-label">Descripción de la actividad</label>
                <div className="form-campo">
                  <textarea
                    rows="3"
                    placeholder="Ingresa la nueva descripción de la actividad"
                    className="form-control"
                    id="descripcion_act"
                    onChange={(e) => setDescripcion_act(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </form >
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
          <button type="submit" className="btn-primario" onClick={handleSubmit}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default Mod_Memoria;