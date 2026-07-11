import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import SelectorImagen from "../../../Components/SelectorImagen.jsx";
import { create_activ } from "../../../Components/api/memoria.jsx";

function Crear_Memoria({ cerrarModal, actividad }) {
  // Estado para la descripción de la actividad fotográfica
  const [descripcion, setDescripcion] = useState('');
  // Estado para guardar la lista de archivos de imagen seleccionados
  const [imagenes, setImagenes] = useState([]); // Este estado guardará los archivos (File objects)

  const handleImageChange = (e) => {
    // e.target.files es una lista de archivos, la convertimos a un array
    if (e.target.files) {
      setImagenes(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Llamamos a la función de la API con todos los datos que el backend necesita
    await create_activ({
      descripcion: descripcion,
      id_program: actividad.id_program, // El ID viene de la actividad seleccionada
      imagenes: imagenes, // El array de archivos de imagen
    });
    cerrarModal(); // Cerramos el modal después de guardar
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
                <label className="form-label">Actividad (Título)</label>
                <input
                  type="text"
                  placeholder="Ingresa el título de la actividad"
                  className="form-control"
                  id="titulo"
                  value={actividad?.otras_activ || 'Cargando...'} // Usamos el título de la actividad
                  readOnly // Hacemos el campo de solo lectura
                />
              </div>

              <div className="form-campo">
                <label className="form-label">Descripción de la actividad</label>
                <textarea
                  rows="3"
                  placeholder="Ingresa la descripción de la evidencia fotográfica"
                  className="form-control"
                  id="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>
              </div>

              <div className="form-campo">
                <label className="form-label">Subir fotográfias de la actividad:</label>
                {/* Asegúrate que SelectorImagen pase el 'multiple' al input real */}
                <SelectorImagen onChange={handleImageChange} multiple={true} />
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