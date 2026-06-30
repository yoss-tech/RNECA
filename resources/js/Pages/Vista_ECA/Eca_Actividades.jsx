import React, { useState  } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from "@inertiajs/react";
import { create_program } from "../../Components/api/program.jsx";

function VECA_Actividades({ onComplete }) {

  const [formData, setFormData] = useState({
    municipio: '',
    localidad: '',
    tipo_platica: '',
    otras_activ: '',
    alumnos_Aten: '',
    pobl_ate: '',
    fecha_mes: '',
    // id_fecha:'18052026'
  });

  const handleSubmit = async (e) => {
    //Post para bd
    e.preventDefault();
    console.log(formData)
    await create_program(formData);
  };


  return (
    <div className="page-container">
      <h1 className="page-title">Registro de actividades realizadas durante el periodo.</h1>
      <h2 className="page-subtitle">Capture la información de las actividades efectuadas durante el mes correspondiente.</h2>

      <form classname="form-registro" onSubmit={handleSubmit}>
        <div className="form-registro">

          <div className="form-campo">
            <label className="form-label">Municipio</label>
            <input
              type="text"
              name="municipio"
              id="municipio"
              placeholder="Ingresa el municipio"
              className="form-control"
              onChange={(e) => setFormData({ ...formData, municipio: e.target.value })}
            />
          </div>

          <div className="form-campo">
            <label className="form-label">Localidad</label>
            <input
              type="text"
              name='localidad'
              id="localidad"
              placeholder="Ingresa la localidad"
              className="form-control"
              onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}
            />
          </div>

          <div className="form-campo">
            <label className="form-label">Platica</label>
            <div className="radio-group">
              <label className="radio-item">
                <input
                  type="radio"
                  name='tipo_platica'
                  id='platica_escolar'
                  value={'escolar'}
                  onChange={(e) => setFormData({ ...formData, tipo_platica: e.target.value })}
                />
                Escolar
              </label>
              <label className="radio-item">
                <input
                  type="radio"
                  name='tipo_platica'
                  id='platica_comunitaria'
                  value={'comunitaria'}
                  onChange={(e) => setFormData({ ...formData, tipo_platica: e.target.value })}
                />
                Comunitaria
              </label>
            </div>
          </div>

          <div className="form-campo">
            <label className="form-label">Otras Actividades</label>
            <textarea
              rows="3"
              name='otras_activ'
              id="otras_activ"
              placeholder="Ingresa las otras actividades"
              className="form-control"
              onChange={(e) => setFormData({ ...formData, otras_activ: e.target.value })}>
            </textarea>
          </div>

          <div className="form-campo">
            <label className="form-label">Alumnos Atendidos</label>
            <input
              type="number"
              name='alumnos_Aten'
              id="alumnos_Aten"
              placeholder="Ingresa el número de alumnos atendidos"
              className="form-control"
              onChange={(e) => setFormData({ ...formData, alumnos_Aten: e.target.value })}
            />
          </div>

          <div className="form-campo">
            <label className="form-label">Población atendida</label>
            <input
              type="number"
              name='pobl_ate'
              id="pobl_ate"
              placeholder="Ingresa la población atendida"
              className="form-control"
              onChange={(e) => setFormData({ ...formData, pobl_ate: e.target.value })}
            />
          </div>

          <div className="form-campo">
            <label className="form-label">Fecha de la actividad</label>
            <input
              type="date"
              name='fecha_mes'
              id="fecha_mes"
              placeholder="Ingresa la fecha de la actividad"
              className="form-control"
              onChange={(e) => setFormData({ ...formData, fecha_mes: e.target.value })}
            />
          </div>
        </div>
        <div className="page-botones">
          <button type="submit" className="btn-primario">Guardar</button>
        </div>
      </form >
    </div >

  );
}

export default VECA_Actividades;