import React, {useState} from "react";

function Form_Actividad({ index, handleChange }) {
  return (
  <div className="form-registro">
    <h3 className="form-subtitle">Actividad {index + 1}</h3>
      
    <div className="form-campo">
      <label className="form-label">Municipio</label>
      <input
        type="text"
        name={`municipio-${index}`}
        placeholder="Ingresa el municipio"
        className="form-control"
        onChange={handleChange}
      />
    </div>

    <div className="form-campo">
      <label className="form-label">Localidad</label>
      <input
        type="text"
        name={`localidad-${index}`}
        placeholder="Ingresa la localidad"
        className="form-control"
        onChange={handleChange}
      />
    </div>

    <div className="form-campo">
      <label className="form-label">Platica</label>
      <div className="radio-group">
        <label className="radio-item">
          <input
            type="radio"
            name={`platica-${index}`}
            value="Escolar"
            onChange={handleChange}
          />
          Escolar
        </label>
        <label className="radio-item">
          <input
            type="radio"
            name={`platica-${index}`}
            value="Comunitaria"
            onChange={handleChange}
          />
          Comunitaria
        </label>
      </div>
    </div>
      
    <div className="form-campo">
      <label className="form-label">Otras Actividades</label>
      <textarea
        rows="3"
        name={`otras-${index}`}
        placeholder="Ingresa las otras actividades"
        className="form-control"
        onChange={handleChange}>
      </textarea>
    </div>
      
    <div className="form-campo">
      <label className="form-label">Alumnos Atendidos</label>
      <input
        type="number"
        name={`alumnos-${index}`}
        placeholder="Ingresa el número de alumnos atendidos"
        className="form-control"
        onChange={handleChange}
      />
    </div>
      
    <div className="form-campo">
      <label className="form-label">Población atendida</label>
      <input
        type="number"
        name={`poblacion-${index}`}
        placeholder="Ingresa la población atendida"
        className="form-control"
        onChange={handleChange}
      />
    </div>

    <div className="form-campo">
      <label className="form-label">Fecha de la actividad</label>
      <input
        type="date"
        name={`fecha-${index}`}
        className="form-control"
        onChange={handleChange}
      />
    </div>
  </div>
  );
}

export default function VECA_Actividades({ numActividades, setNumActividades }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    //Post para bd
  };

  return (
  <div className="page-container">
    <h1 className="page-title">Registro de actividades realizadas durante el periodo.</h1>
    <h2 className="page-subtitle">Capture la información de las actividades efectuadas durante el mes correspondiente.</h2>
    
    <div className="form-registro">
      <div className="form-campo">
        <label className="form-label">Numero de actividades realizadas en el mes</label>
        <input
          type="number"
          placeholder="Ingresa el numero de actividades"
          className="form-control"
          onChange={(e) => setNumActividades(Number(e.target.value))}
        />
      </div>

      {numActividades > 0 && (
        <p className="page-text">Ingresa la información de actividades del mes.</p>
      )}
      
      {[...Array(numActividades)].map((_, index) => (
        <Form_Actividad key={index} index={index} handleChange={handleChange}/>
      ))}
      
      {numActividades > 0 && (
        <div className="page-botones">
          <button type="button" className="btn-primario">Guardar</button>
        </div>
      )}
    </div>
  </div>
  );
}
