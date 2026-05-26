import React from "react";

function VECA_Poblacion() {

  return (

    <div className="registro-container">
      <h2 className="registro-title"> Generación de registros</h2>
      <h5 className="registro-subtitle">Información sobre la población beneficiaria con las acciones de Cultura del Agua.</h5>

      <div className="form-registro">
      <p className="registro-text">Ingresa la información sobre la población beneficiaria del mes.</p>
      <p className="labelColor">Material didáctico
      <button type="button" title="Tooltip on right"> <i class="bi bi-question-circle"></i></button>
      </p> 

        <div className="campo">
          <label>Inédito</label>
          <input type="text"  placeholder="Ingresa el número de material didactico según su modalidad" />
        </div>

        <div className="campo">
          <label>Reproducido</label>
          <input type="text" placeholder="Ingresa el número de material didactico según su modalidad"/>
        </div>
        
        <div className="campo">
          <label>Adquirido</label>
          <input type="text"  placeholder="Ingresa el número de alumnos atendidosIngresa el número de material didactico según su modalidad"/>
        </div>
        
        <p className="color-label">Asistentes
            <button type="button" title="Tooltip on right"> <i class="bi bi-question-circle"></i></button>
        </p> 
        <p className="registro-text">Hombres
        <div className="campo">
          <label>Rangos de edad</label>
          <input type="text"  placeholder="Ingresa el número de asistentes de 13 a 17"/>
        </div>
        <div className="campo">
          <input type="text"  placeholder="Ingresa el número de asistentes de 18 a 30"/>
        </div>
        <div className="campo">
          <input type="text"  placeholder="Ingresa el número de asistentes de 30 a 40"/>
        </div>
        <div className="campo">
          <input type="text"  placeholder="Ingresa el número de asistentes de 40 a 50"/>
        </div>
        <div className="campo">
          <input type="text"  placeholder="Ingresa el número de asistentes de 50 o  +"/>
        </div>
        </p>

        <p className="registro-text">Mujeres
        <div className="campo">
          <label>Rangos de edad</label>
          <input type="text"  placeholder="Ingresa el número de asistentes de 13 a 17"/>
        </div>
        <div className="campo">
          <input type="text"  placeholder="Ingresa el número de asistentes de 18 a 30"/>
        </div>
        <div className="campo">
          <input type="text"  placeholder="Ingresa el número de asistentes de 30 a 40"/>
        </div>
        <div className="campo">
          <input type="text"  placeholder="Ingresa el número de asistentes de 40 a 50"/>
        </div>
        <div className="campo">
          <input type="text"  placeholder="Ingresa el número de asistentes de 50 o  +"/>
        </div>
        </p>

        <p className="registro-text">Niños
        <div className="campo">
          <label>Rangos de edad</label>
          <input type="text"  placeholder="Ingresa el número de asistentes menores de 12"/>
        </div>
        </p>

        <p className="color-label">Total de la población atendida
            <button type="button" title="Tooltip on right"> <i class="bi bi-question-circle"></i></button>
        </p> 
        <div className="campo">
          <input type="text"  placeholder="Sumatoria de los asistentes" />
        </div>

        <p className="color-label">Anexos
             <button type="button" title="Tooltip on right"> <i class="bi bi-question-circle"></i></button>
        </p> 
        <div className="check-group">
            <label className="check-item">
                <input type="checkbox" />Lista de asistencia
            </label>
            
            <label className="check-item">
                <input type="checkbox" />Evidencia fotográfica
            </label>
            
            <label className="check-item">
                <input type="checkbox" />Nota periodística
            </label>
        </div><br />

        <p className="color-label">Comentarios/Observaciones
             <button type="button" title="Tooltip on right"> <i class="bi bi-question-circle"></i></button>
        </p> 
        <div className="campo">  
          <textarea rows="3" placeholder="Ingresa algún comentario u observación"></textarea>
        </div>

        <div className="botones-registro">
          <button type="button" className="btn-guardar" >Guardar </button>
        </div>
      </div>
    </div>
  );
}

export default VECA_Poblacion;   