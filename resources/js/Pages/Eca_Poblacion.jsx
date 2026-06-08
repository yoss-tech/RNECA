import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function VECA_Poblacion() {

  return (
  <div className="registro-container">
    <h1 className="registro-title">Registro de participantes y beneficiarios.</h1>
    <h2 className="registro-subtitle">Ingrese la información relacionada con la población participante en las actividades realizadas.</h2>
    
    <div className="form-registro">
      <p className="registro-text">Ingresa la información sobre la población beneficiaria del mes.</p>
      <p className="color-label">Material didáctico
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p>
      
      <div className="campo">
        <label>Inédito</label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad"/>
      </div>

      <div className="campo">
        <label>Reproducido</label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad"/>
      </div>
        
      <div className="campo">
        <label>Adquirido</label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad"/>
      </div>
      
      <p className="color-label">Asistentes
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p>
      <p className="registro-text">Hombres</p>
      <div className="campo">
        <label>Rangos de edad</label>
        <input type="text" placeholder="Ingresa el número de asistentes de 13 a 17"/>
      </div>
        
      <div className="campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 18 a 30"/>
      </div>
      
      <div className="campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 30 a 40"/>
      </div>
      
      <div className="campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 40 a 50"/>
      </div>
    
      <div className="campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 50 o  +"/>
      </div>

      <p className="registro-text">Mujeres</p>
      <div className="campo">
        <label>Rangos de edad</label>
        <input type="text" placeholder="Ingresa el número de asistentes de 13 a 17"/>
      </div>
    
      <div className="campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 18 a 30"/>
      </div>
      
      <div className="campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 30 a 40"/>
      </div>
      
      <div className="campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 40 a 50"/>
      </div>
        
      <div className="campo">
        <input type="text" placeholder="Ingresa el número de asistentes de 50 o  +"/>
      </div>
      
      <p className="registro-text">Niños</p>
      <div className="campo">
        <label>Rangos de edad</label>
        <input type="text" placeholder="Ingresa el número de asistentes menores de 12"/>
      </div>

      <p className="color-label">Total de la población atendida
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p> 
      <div className="campo">
        <input type="text" placeholder="Sumatoria de los asistentes"/>
      </div>

      <p className="color-label">Anexos
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
      
      <p className="color-label">Comentarios/Observaciones
        <i class="bi bi-question-circle" title="Tooltip on right"></i>
      </p> 
      <div className="campo">  
        <textarea rows="3" placeholder="Ingresa algún comentario u observación"></textarea>
      </div>

      <div className="botones-registro">
        <button type="button" className="btn-primario">Guardar</button>
      </div>
    </div>
  </div>
  );
}

export default VECA_Poblacion;   