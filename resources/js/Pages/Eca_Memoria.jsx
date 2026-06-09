import React from "react";
import SelectorImagen from "../Components/SelectorImagen.jsx";

function VECA_Memoria() {

  return (
  <div className="page-container">
    <h1 className="page-title">Evidencia visual de las actividades realizadas.</h1>
    <h2 className="page-subtitle">Adjunte fotografías y complete la información correspondiente de las actividades efectuadas.</h2>
    
    <div className="form-registro">
      <div className="form-campo">
        <label className="form-label">Descripción general de la memoria fotográfica</label>
        <textarea rows="3" placeholder="Ingresa la descripción general" className="form-control"></textarea>
      </div>
      
      <div className="form-campo">
        <p className="page-text">Ingresa la información detallada de las actividades del mes.</p>
        <p className="form-subtitle">Actividad 1</p>
        <label className="form-label">Título</label>
        <input type="text"  placeholder="Ingresa el título de la actividad" className="form-control"/>
      </div>

      <div className="form-campo">
        <label className="form-label">Descripción de la actividad</label>
        <div className="form-campo">  
          <textarea rows="3" placeholder="Ingresa la descripción de la actividad" className="form-control"></textarea>
        </div>
      </div>

      <div className="form-campo">
        <label className="form-label">Subir fotográfias de la actividad:</label>
        <SelectorImagen/>
      </div>

      <div className="page-botones">
        <button type="button" className="btn-primario">Guardar</button>
      </div>
    </div>
  </div>
  );
}

export default VECA_Memoria;   