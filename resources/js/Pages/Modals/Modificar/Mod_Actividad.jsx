import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Mod_Actividad({ cerrarModal, actividad }) {
    
    return (
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-head">
          <h4>Completa los siguientes datos</h4>
        </div>
        <div className="modal-body">
          <form className="form-registro">
            <div className="form-registro">
              <div className="form-campo">
                <label className="form-label">Municipio</label>
                <input
                  type="text"
                  name="municipio"
                  id="municipio"
                  placeholder="Ingresa el municipio"
                  className="form-control"
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
                    />
                    Escolar
                  </label>
                  <label className="radio-item">
                    <input
                      type="radio"
                      name='tipo_platica'
                      id='platica_comunitaria'
                      value={'comunitaria'}
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
                  className="form-control">
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
                  />
                </div>
              
              
              <div className="form-campo" class="mb-0">
                <label className="form-label">Fecha de la actividad</label>
                <input
                  type="date"
                  name='fecha_mes'
                  id="fecha_mes"
                  placeholder="Ingresa la fecha de la actividad"
                  className="form-control"
                />
              </div>
            </div>
          </form >
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
          <button type="submit" className="btn-primario">Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default Mod_Actividad;