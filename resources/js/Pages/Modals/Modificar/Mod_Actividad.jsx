import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import { update_program } from "../../../Components/api/program.jsx";
import Toast from "../../Toast.jsx";
import Swal from "sweetalert2";

function Mod_Actividad({ cerrarModal, actividad }) {

  const [formData, setFormData] = useState({
    id_program: actividad.id_program,
    municipio: actividad.municipio,
    localidad: '',
    tipo_platica: '',
    otras_activ: '',
    alumnos_Aten: '',
    pobl_ate: '',
    fecha_mes: '',
    // id_fecha:'18052026'
  });

  const [alerts, setAlerts] = useState([]);
  const showAlert = (type, message) => {
    setAlerts([...alerts, { type, message }]);
    setTimeout(() => {
      setAlerts((prev) => prev.slice(1));
    }, 3000);
  };

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    if (!formData.localidad.trim()) newErrors.localidad = 'La localidad es requerida.';
    if (!formData.tipo_platica) newErrors.tipo_platica = 'Selecciona el tipo de plática.';
    if (!formData.fecha_mes) newErrors.fecha_mes = 'La fecha de la actividad es requerida.';
    if (!formData.otras_activ.trim()) newErrors.otras_activ = 'Las otras actividades son requeridas.';
    if (formData.tipo_platica === 'escolar' && !formData.alumnos_Aten) newErrors.alumnos_Aten = 'El número de alumnos atendidos es requerido.';
    if (formData.tipo_platica === 'comunitaria' && !formData.pobl_ate) newErrors.pobl_ate = 'La población atendida es requerida.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showAlert('error', 'Por favor, completa todos los campos requeridos.');
      return;
    }
    try {
      await update_program(formData);
      Swal.fire({
        title: "¡Guardado!",
        text: "La información se actualizo correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar"
      });
      console.log(formData)
      cerrarModal();
    }
    catch (error) {
      Swal.fire({
        title: "Error al guardar",
        text: "Ocurrió un problema al guardar la información. Inténtalo nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar"
      });
    }
  };

  return (
    <>
      <Toast alerts={alerts} />
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
                    value={actividad.municipio}
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
                    onChange={(e) => setFormData({ ...formData, otras_activ: e.target.value })}
                  >
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
            <button type="submit" className="btn-primario" onClick={handleSubmit}>Guardar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mod_Actividad;