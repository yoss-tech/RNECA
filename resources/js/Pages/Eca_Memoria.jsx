import React from "react";
import SelectorImagen from "../Components/SelectorImagen.jsx";

function VECA_Memoria() {

  return (

    <div className="registro-container">
      <h2 className="registro-title"> Generación de registros</h2>
      <h5 className="registro-subtitle">Memoria fotográfica</h5>

      <div className="form-registro">
        <div className="campo">
          <label>Descripción general de la memoria fotográfica</label>
          <div className="campo">  
          <textarea rows="3" placeholder="Ingresa la descripción general"></textarea>
        </div>
        </div>

        <p className="registro-text">Ingresa la información detallada de las actividades del mes.</p>
      
        <p className="labelColor">Actividad 1</p>

        <div className="campo">
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
          <SelectorImagen />
          </div>


        <div className="botones-registro">
          <button type="button" className="btn-guardar" >Guardar </button>
        </div>
      </div>
    </div>
  );
}

export default VECA_Memoria;   