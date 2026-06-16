import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function VECA_Poblacion() {
  const [poblacion, setPoblacion] = useState({
    hombres13_17: 0,
    hombres18_30: 0,
    hombres30_40: 0,
    hombres40_50: 0,
    hombres50mas: 0,
    mujeres13_17: 0,
    mujeres18_30: 0,
    mujeres30_40: 0,
    mujeres40_50: 0,
    mujeres50mas: 0,
    ninos12: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPoblacion({
      ...poblacion,
      [name]: Number(value),
    });
  };

  const total = 
  poblacion.hombres13_17 +
  poblacion.hombres18_30 +
  poblacion.hombres30_40 +
  poblacion.hombres40_50 +
  poblacion.hombres50mas +
  poblacion.mujeres13_17 +
  poblacion.mujeres18_30 +
  poblacion.mujeres30_40 +
  poblacion.mujeres40_50 +
  poblacion.mujeres50mas +
  poblacion.ninos12;

  return (
  <div className="page-container">
    <h1 className="page-title">Registro de participantes y beneficiarios.</h1>
    <h2 className="page-subtitle">Ingrese la información relacionada con la población participante en las actividades realizadas.</h2>
    
    <div className="form-registro">
      <p className="page-text">Ingresa la información sobre la población beneficiaria del mes.</p>
      <p className="form-subtitle">Material didáctico
        <i class="bi bi-question-circle" title="Indicar el número de material didáctico que se distribuyó en el ECA según su modalidad"></i>
      </p>
      
      <div className="form-campo">
        <label className="form-label">Inédito
          <i class="bi bi-question-circle" title="Indicar si ha recibido algún material inedito"></i>
        </label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad" className="form-control"/>
      </div>

      <div className="form-campo">
        <label className="form-label">Reproducido
          <i class="bi bi-question-circle" title="Indicar si han recibido KITS ahorradores, manuales, librillos, lapiceros, entre otros consumibles"></i>
        </label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad" className="form-control"/>
      </div>
        
      <div className="form-campo">
        <label className="form-label">Adquirido
          <i class="bi bi-question-circle" title="Indicar si el espacio cuenta con maquetas"></i>
        </label>
        <input type="text" placeholder="Ingresa el número de material didáctico según su modalidad" className="form-control"/>
      </div>
      
      <p className="form-subtitle">Asistentes
        <i class="bi bi-question-circle" title="Indicar el número de asistentes según el rango de edad, asi como si se trata de niños menores de 12 años"></i>
      </p>
      <p className="form-text">Hombres</p>
      <div className="form-campo">
        <label className="form-label">Rangos de edad</label>
        <input
          type="number"
          name="hombres13_17"
          placeholder="Ingresa el número de asistentes de 13 a 17"
          className="form-control"
          onChange={handleChange}
        />
      </div>
        
      <div className="form-campo">
        <input
          type="number"
          name="hombres18_30"
          placeholder="Ingresa el número de asistentes de 18 a 30"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      
      <div className="form-campo">
        <input
          type="number"
          name="hombres30_40"
          placeholder="Ingresa el número de asistentes de 30 a 40"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      
      <div className="form-campo">
        <input
          type="number"
          name="hombres40_50"
          placeholder="Ingresa el número de asistentes de 40 a 50"
          className="form-control"
          onChange={handleChange}
        />
      </div>
    
      <div className="form-campo">
        <input
          type="number"
          name="hombres50mas"
          placeholder="Ingresa el número de asistentes de 50 o  +"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <p className="form-text">Mujeres</p>
      <div className="form-campo">
        <label className="form-label">Rangos de edad</label>
        <input
          type="number"
          name="mujeres13_17"
          placeholder="Ingresa el número de asistentes de 13 a 17"
          className="form-control"
          onChange={handleChange}
        />
      </div>
    
      <div className="form-campo">
        <input
          type="number"
          name="mujeres18_30"
          placeholder="Ingresa el número de asistentes de 18 a 30"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      
      <div className="form-campo">
        <input
          type="number"
          name="mujeres30_40"
          placeholder="Ingresa el número de asistentes de 30 a 40"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      
      <div className="form-campo">
        <input
          type="number"
          name="mujeres40_50"
          placeholder="Ingresa el número de asistentes de 40 a 50"
          className="form-control"
          onChange={handleChange}
        />
      </div>
        
      <div className="form-campo">
        <input
          type="number"
          name="mujeres50mas"
          placeholder="Ingresa el número de asistentes de 50 o  +"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <p className="form-text">Niños</p>
      <div className="form-campo">
        <label className="form-label">Rangos de edad</label>
        <input
          type="number"
          name="ninos12"
          placeholder="Ingresa el número de asistentes menores de 12"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <p className="form-subtitle">Total de la población atendida
        <i class="bi bi-question-circle" title="Sumatoria de los asistentes"></i>
      </p> 
      <div className="form-campo">
        <input
          type="number"
          value={total}
          readOnly
          className="form-control"
        />
      </div>

      <p className="form-subtitle">Anexos
        <i class="bi bi-question-circle" title="Indicar los entregables con los que se cuenta como evidencia de la acción en cuestión (lista de asistencia, evidencia fotográfica o nota periodística). Estos deberán anexarse a este formato"></i>
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
        <i class="bi bi-question-circle" title="Algún comentario u observaciones que se consideren relevantes y/o añadir listado general de las actividades en el mes"></i>
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