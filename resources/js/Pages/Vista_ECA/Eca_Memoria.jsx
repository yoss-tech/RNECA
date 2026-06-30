import React, { useState } from "react";
import SelectorImagen from "../../Components/SelectorImagen.jsx";
import { create_memoria } from "../../Components/api/memoria.jsx";


function VECA_Memoria({ onComplete }) {

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
    <div className="page-container">
      <h1 className="page-title">Evidencia visual de las actividades realizadas.</h1>
      <h2 className="page-subtitle">Adjunte fotografías y complete la información correspondiente de las actividades efectuadas.</h2>

      <form className="form-registro" onSubmit={handleSubmit}>
        <div className="form-registro">
          <div className="form-campo">
            <label className="form-label">Descripción general de la memoria fotográfica</label>
            <textarea
              id="descripcion"
              ows="3"
              placeholder="Ingresa la descripción general"
              className="form-control"
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>

          <p className="page-text">Ingresa la información detallada de las actividades del mes.</p>
          <div>
            <p className="form-subtitle">Actividad</p>
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

          <div className="page-botones">
            <button type="submit" className="btn-primario">Guardar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VECA_Memoria;   