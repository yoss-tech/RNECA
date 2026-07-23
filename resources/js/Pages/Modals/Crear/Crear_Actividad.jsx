import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import { create_program } from "../../../Components/api/program.jsx";
import { create_activ } from "../../../Components/api/memoria.jsx";
import Toast from "../../Toast.jsx";
import Swal from "sweetalert2";
import SelectorImagen from "../../../Components/SelectorImagen.jsx";
import { infoEca } from "../../../Components/api/infoEca.jsx"


function Crear_Actividad({ cerrarModal }) {

  const [municipio, setMunicipio] = useState('');

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const response = await infoEca();
        if (response && response.body) {
          setMunicipio(response.body.municipio || '');
        }
      }
      catch (error) {
        console.log("Error al cargar los datos del programa");
      }
    }
    loadInfo();
  }, []);


  const [formData, setFormData] = useState({
    municipio: '',
    localidad: '',
    tipo_platica: '',
    otras_activ: '',
    descripcion_activ: '',
    alumnos_Aten: '',
    pobl_ate: '',
    fecha_mes: '',
  });

  useEffect(() => {
    if (municipio) {
      setFormData(prevFormData => ({ ...prevFormData, municipio: municipio }));
    }
  }, [municipio]);

  const [imagenes, setImagenes] = useState([]);

  const [alerts, setAlerts] = useState([]);
  const showAlert = (type, message) => {
    setAlerts([...alerts, { type, message }]);
    setTimeout(() => {
      setAlerts((prev) => prev.slice(1));
    }, 3000);
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      programa: formData,
      imagenes: imagenes
    }

    if (!validateForm()) {
      showAlert('error', 'Por favor, completa todos los campos requeridos.');
      return;
    }
    try {
      await create_program(formDataToSend);
      Swal.fire({
        title: "¡Guardado!",
        text: "La información se guardó correctamente.",
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

  const handleImageChange = (event) => {
    if (event.target.files) {
      setImagenes(Array.from(event.target.files));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [paso, setPaso] = useState(1);

  const validateStep = (paso) => {
    let newErrors = {};
    if (paso == 1) {
      if (!formData.localidad.trim()) newErrors.localidad = 'La localidad es requerida.';
      if (!formData.tipo_platica) newErrors.tipo_platica = 'Selecciona el tipo de plática.';
      if (!formData.fecha_mes) newErrors.fecha_mes = 'La fecha de la actividad es requerida.';
    }
    if (paso == 2) {
      if (!formData.otras_activ.trim()) newErrors.otras_activ = 'Las otras actividades son requeridas.';
      if (formData.tipo_platica === 'escolar' && !formData.alumnos_Aten) newErrors.alumnos_Aten = 'El número de alumnos atendidos es requerido.';
      if (formData.tipo_platica === 'comunitaria' && !formData.pobl_ate) newErrors.pobl_ate = 'La población atendida es requerida.';
      if (!formData.descripcion_activ.trim()) newErrors.descripcion_activ = 'La descripción de la actividad es requerida.';
      if (imagenes.length === 0) newErrors.imagenes = 'Debes seleccionar al menos una imagen.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const siguientePaso = () => {
    if (validateStep(paso)) {
      setPaso(paso + 1);
    }
  };

  const anteriorPaso = () => {
    if (paso > 1) {
      setPaso(paso - 1);
    }
  };

  return (
    <>
      <Toast alerts={alerts} />
      <div className="overlay">
        <div className="modal-box">
          <div className="modal-head">
            <h4>Completa los siguientes datos</h4>
            <p className="text-white">
              Paso {paso} de 2
            </p>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {paso == 1 && (
                <>
                  <div className="form-group">
                    <div className="form-campo">
                      <label className="form-label">Municipio</label>
                      <input
                        type="text"
                        name="municipio"
                        id="municipio"
                        placeholder="Ingresa el municipio"
                        className="form-control"
                        value={formData.municipio}
                        readOnly
                        onChange={handleChange}
                        title="Ingresa el municipio"
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
                        value={formData.localidad}
                        onChange={handleChange}
                        title="Ingresa la localidad"
                      />
                      {errors.localidad && <p className="error">{errors.localidad}</p>}
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
                      {errors.tipo_platica && <p className="error">{errors.tipo_platica}</p>}
                    </div>

                    <div className="form-campo">
                      <label className="form-label">Fecha de la actividad</label>
                      <input
                        type="date"
                        name='fecha_mes'
                        id="fecha_mes"
                        placeholder="Ingresa la fecha de la actividad"
                        className="form-control"
                        value={formData.fecha_mes}
                        onChange={handleChange}
                      />
                      {errors.fecha_mes && <p className="error">{errors.fecha_mes}</p>}
                    </div>
                  </div>
                </>
              )}
              {paso == 2 && (
                <>
                  <div className="form-group">
                    <div className="form-campo">
                      <label className="form-label">Otras Actividades</label>
                      <textarea
                        rows="3"
                        name='otras_activ'
                        id="otras_activ"
                        placeholder="Ingresa las otras actividades"
                        className="form-control"
                        value={formData.otras_activ}
                        onChange={handleChange}
                        title="Ingresa las otras actividades"
                      >
                      </textarea>
                      {errors.otras_activ && <p className="error">{errors.otras_activ}</p>}
                    </div>

                    <div className="form-campo">
                      <label className="form-label">Alumnos Atendidos</label>
                      <input
                        type="number"
                        name='alumnos_Aten'
                        id="alumnos_Aten"
                        placeholder="Ingresa el número de alumnos atendidos"
                        className="form-control"
                        min="1"
                        value={formData.alumnos_Aten}
                        onChange={handleChange}
                      />
                      {errors.alumnos_Aten && <p className="error">{errors.alumnos_Aten}</p>}
                    </div>

                    <div className="form-campo">
                      <label className="form-label">Población atendida</label>
                      <input
                        type="number"
                        name='pobl_ate'
                        id="pobl_ate"
                        placeholder="Ingresa la población atendida"
                        className="form-control"
                        min="1"
                        value={formData.pobl_ate}
                        onChange={handleChange}
                      />
                      {errors.pobl_ate && <p className="error">{errors.pobl_ate}</p>}
                    </div>

                    <div className="form-campo">
                      <label className="form-label">Descripción de la actividad</label>
                      <textarea
                        rows="3"
                        name='descripcionActividad'
                        id="descripcionActividad"
                        placeholder="Ingresa la descripción detallada de la actividad"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.descripcion_activ}
                        title="Ingresa la descripción detallada de la actividad"
                      ></textarea>
                      {errors.descripcion_activ && <p className="error">{errors.descripcion_activ}</p>}
                    </div>

                    <div className="form-campo">
                      <label className="form-label">Subir fotográfias de la actividad:</label>
                      <SelectorImagen onChange={handleImageChange} multiple={true} />
                    </div>
                    {errors.imagenes && <p className="error">{errors.imagenes}</p>}
                  </div>
                </>
              )}
            </form>
          </div>
          <div className="modal-foot">
            <button type="button" className="btn-negativo" onClick={cerrarModal}>Cerrar</button>
            {paso > 1 && (
              <button type="button" className="btn-neutral" onClick={anteriorPaso}>Anterior</button>
            )}
            {paso < 2 ? (
              <button type="button" className="btn-primario" onClick={siguientePaso}>Siguiente</button>
            ) : (
              <button type="button" className="btn-primario" onClick={handleSubmit}>Guardar</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Crear_Actividad;