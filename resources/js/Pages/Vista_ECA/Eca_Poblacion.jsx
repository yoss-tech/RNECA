import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function VECA_Poblacion() {

  return (
  <div className="page-container">
    <h1 className="page-title">Registro de participantes y beneficiarios.</h1>
    <h2 className="page-subtitle">Ingrese la información relacionada con la población participante en las actividades realizadas.</h2>
    
    <div className="form-registro">
      <p className="page-text">Ingresa la información sobre la población beneficiaria del mes.</p>
      <p className="form-subtitle">Material didáctico
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p>
      
      <div className="form-campo">
        <label className="form-label">Inédito</label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad" className="form-control"/>
      </div>

      <div className="form-campo">
        <label className="form-label">Reproducido</label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad" className="form-control"/>
      </div>
        
      <div className="form-campo">
        <label className="form-label">Adquirido</label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad" className="form-control"/>
      </div>
      
      <p className="form-subtitle">Asistentes
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p>
      <p className="form-text">Hombres</p>
      <div className="form-campo">
        <label className="form-label">Rangos de edad</label>
        <input type="text" placeholder="Ingresa el número de asistentes de 13 a 17" className="form-control"/>
      </div>
        
      <div className="form-campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 18 a 30" className="form-control"/>
      </div>
      
      <div className="form-campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 30 a 40" className="form-control"/>
      </div>
      
      <div className="form-campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 40 a 50" className="form-control"/>
      </div>
    
      <div className="form-campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 50 o  +" className="form-control"/>
      </div>

      <p className="form-text">Mujeres</p>
      <div className="form-campo">
        <label className="form-label">Rangos de edad</label>
        <input type="text" placeholder="Ingresa el número de asistentes de 13 a 17" className="form-control"/>
      </div>
    
      <div className="form-campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 18 a 30" className="form-control"/>
      </div>
      
      <div className="form-campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 30 a 40" className="form-control"/>
      </div>
      
      <div className="form-campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 40 a 50" className="form-control"/>
      </div>
        
      <div className="form-campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 50 o  +" className="form-control"/>
      </div>

      <p className="form-text">Niños</p>
      <div className="form-campo">
        <label className="form-label">Rangos de edad</label>
        <input type="text" placeholder="Ingresa el número de asistentes menores de 12" className="form-control"/>
      </div>

      <p className="form-subtitle">Total de la población atendida
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p> 
      <div className="form-campo">
        <input type="text" placeholder="Sumatoria de los asistentes" className="form-control"/>
      </div>

      <p className="form-subtitle">Anexos
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p> 
      <div className="check-group">
        <label className="check-item">
          <input type="checkbox"/>Lista de asistencia
        </label>
            
        <label className="check-item">
          <input type="checkbox"/>Evidencia fotográfica
        </label>
            
        <label className="check-item">
          <input type="checkbox"/>Nota periodística
        </label>
      </div>

      <p className="form-subtitle">Comentarios/Observaciones
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p>

      <div className="form-campo">  
        <textarea rows="3" placeholder="Ingresa algún comentario u observación" className="form-control"></textarea>
      </div>

      <div className="page-botones">
        <button type="button" className="btn-primario">Guardar</button>
      </div>
    </div>
  </div>
  );
}

export default VECA_Poblacion;   