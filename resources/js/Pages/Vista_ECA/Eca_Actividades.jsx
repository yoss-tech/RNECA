import React from "react";

function VECA_Actividades({ onComplete }) {

  const handleSubmit = () => {
    try {
      //Post para bd
      onComplete();
    } catch(error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
  <div className="page-container">
    <h1 className="page-title">Registro de actividades realizadas durante el periodo.</h1>
    <h2 className="page-subtitle">Capture la información de las actividades efectuadas durante el mes correspondiente.</h2>
    
    <div className="form-registro">
      <p className="page-text">Ingresa la información de actividades del mes.</p>
      <button type="button" className="btn-primario">Nueva actividad</button>

      <div className="form-campo">
        <label className="form-label">Municipio</label>
        <input type="text" placeholder="Ingresa el municipio" className="form-control"/>
      </div>

      <div className="form-campo">
        <label className="form-label">Localidad</label>
        <input type="text" placeholder="Ingresa la localidad" className="form-control"/>
      </div>

      <div className="form-campo">
        <label className="form-label">Platica</label>
        <div className="radio-group">
          <label className="radio-item">
            <input type="radio" name="platica"/>
              Escolar
            </label>

          <label className="radio-item">
            <input type="radio" name="platica"/>
              Comunitaria
            </label>
        </div>
      </div>
      
      <div className="form-campo">
        <label className="form-label">Otras actividades</label>
        <textarea rows="3" placeholder="Ingresa las otras actividades" className="form-control"></textarea>
      </div>
      
      <div className="form-campo">
        <label className="form-label">Alumnos atendidos</label>
        <input type="number" placeholder="Ingresa el número de alumnos atendidos" className="form-control"/>
      </div>
      
      <div className="form-campo">
        <label className="form-label">Población atendida</label>
        <input type="number" placeholder="Ingresa la población atendida" className="form-control"/>
      </div>

      <div className="page-botones">
        <button type="button" className="btn-primario" onClick={handleSubmit}>Guardar</button>
      </div>
    </div>
  </div>
  );
}

export default VECA_Actividades;