import React from "react";
import SelectorImagen from "../Components/SelectorImagen.jsx";

function VECA_Memoria() {

  return (
  <div className="registro-container">
    <h1 className="registro-title">Evidencia visual de las actividades realizadas.</h1>
    <h2 className="registro-subtitle">Adjunte fotografías y complete la información correspondiente de las actividades efectuadas.</h2>
    
    <div className="form-registro">
      <div className="campo">
        <label>Descripción general de la memoria fotográfica</label>
        <textarea rows="3" placeholder="Ingresa la descripción general"></textarea>
      </div>
      
      <div className="campo">
        <p className="registro-text">Ingresa la información detallada de las actividades del mes.</p>
        <p className="color-label">Actividad 1</p>
        <label>Título</label>
        <input type="text"  placeholder="Ingresa el título de la actividad"/>
      </div>

      <div className="campo">
        <label>Descripción de la actividad</label>
        <div className="campo">  
          <textarea rows="3" placeholder="Ingresa la descripción de la actividad"></textarea>
        </div>
      </div>

      <div className="campo">
        <label>Subir fotográfias de la actividad:</label>
        <SelectorImagen/>
      </div>

      <div className="botones-registro">
        <button type="button" className="btn-primario">Guardar</button>
      </div>
    </div>
  </div>
  );
}

export default VECA_Memoria;   