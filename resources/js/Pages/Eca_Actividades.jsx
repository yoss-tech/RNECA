import React from "react";

function VECA_Actividades() {

  return (

    <div className="registro-container">
      <h2 className="registro-title"> Generación de registros</h2>
      <h5 className="registro-subtitle"> Informe mensual Cultura del Agua.</h5>

      <div className="form-registro">
        <div className="campo">
          <label>Numero de actividades realizadas en el mes</label>
          <input type="text"  placeholder="Ingresa el numero de actividades"/>
        </div>

      <p className="registro-text">Ingresa la información de actividades del mes.</p>
      <p className="color-label">Actividad 1</p>
        <div className="campo">
          <label>Municipio</label>
          <input type="text"  placeholder="Ingresa el municipio" />
        </div>

        <div className="campo">
          <label>Localidad</label>
          <input type="text" placeholder="Ingresa la localidad"/>
        </div>

        <div className="campo">
          <label>Platica</label>
          <div className="radio-group">
            <label className="radio-item">
              <input type="radio" name="platica" />
              Escolar
            </label>
            <label className="radio-item">
              <input type="radio" name="platica" />
              Comunitaria
            </label>
          </div>
        </div>

        <div className="campo">
          <label>Otras Actividades</label>
          <textarea rows="3" placeholder="Ingresa las otras actividades"></textarea>
        </div>

        <div className="campo">
          <label>Alumnos Atendidos</label>
          <input type="text"  placeholder="Ingresa el número de alumnos atendidos"/>
        </div>
        
        <div className="campo">
          <label>Población atendida</label>
           <textarea rows="3" placeholder="Ingresa la población atendida"></textarea>
        </div>

        <div className="botones-registro">
          <button type="button" className="btn-guardar" >Guardar </button>
        </div>
      </div>
    </div>
  );
}

export default VECA_Actividades;   