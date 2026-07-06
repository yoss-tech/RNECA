import React, { useState } from "react";
import { create_memoria } from "../../Components/api/memoria.jsx";


function VECA_Memoria({ onComplete }) {

  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create_memoria({
      descripcion
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
          <div className="page-botones">
            <button type="submit" className="btn-primario">Guardar</button>
          </div>
        </div>
      </form>
      <table class="tabla-registros">
        <thead>
          <tr>
            <th className="th-start">Título</th>
            <th className="th-start">Descripción</th>
            <th className="th-start">Fotografías</th>
            <th>Acciones</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>TÍTULO</td>
            <td>DESCRIPCIÓN</td>
            <td>FOTOGRAFÍAS</td>
            <td className="btn-container-horizontal">
              <button type="button" className="btn-negativo">Modificar</button>
            </td>
          </tr>
        </tbody>
      </table>          
    </div>
  );
}

export default VECA_Memoria;   