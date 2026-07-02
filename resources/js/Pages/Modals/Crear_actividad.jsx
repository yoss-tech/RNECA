import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import { create_program } from "../../Components/api/program.jsx";
import { useForm } from "@inertiajs/react";

function Crear_actividad({ cerrarModal }) {

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
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-head">
          <h4>Completa los siguientes datos</h4>
        </div>
        <div className="modal-body">
          <form className="form-registro" onSubmit={handleSubmit}>
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
              
              {formData.tipo_platica === "escolar" && (
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
              )}
              
              {formData.tipo_platica === "comunitaria" && (
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
              )}
              
              <div className="form-campo" class="mb-0">
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

export default Crear_actividad;