import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import { create_program } from "../../../Components/api/program.jsx";

function Crear_Memoria({ cerrarModal }) {
    const [descripcion, setDescripcion] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion_act, setDescripcion_act] = useState('');
    const [imagen, setImagen] = useState(null);
    
    const handleImageChange = (e) => {
      setImagen(e.target.files[0]);
    };
    
    console.log(imagen);
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      await create_memoria({
        titulo,
        descripcion,
        descripcion_act,
        imagen,
    });
    onComplete();
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
                  placeholder="Ingresa el título de la actividad"
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
                    placeholder="Ingresa la descripción de la actividad"
                    className="form-control"
                    id="descripcion_act"
                    onChange={(e) => setDescripcion_act(e.target.value)}
                  ></textarea>
                </div>
              </div>
              
              <div className="form-campo">
                <label className="form-label">Subir fotográfias de la actividad:</label>
                <input type="file" accept="image/*" id="imagen" onChange={handleImageChange}/>
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

export default Crear_Memoria;