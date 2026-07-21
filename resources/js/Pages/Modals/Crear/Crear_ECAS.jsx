import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Swal from "sweetalert2";
import Toast from "../../Toast.jsx";
import { createEca } from "../../../Components/api/usuario_eca.jsx"
import { getMunicipios } from "../../../Components/api/usuario_eca.jsx"

function Crear_ECAS({ cerrarModal, actualizarLista }) {
    const [formData, setFormData] = useState({
        nombre_inst: "",
        clave_eca: "",
        nombre_inst_ope: "",
        tipo_instancia: "",
        poblacion_atend: "",
        calle_av: "",
        num_direccion: "",
        colonia: "",
        id_municipio: "",
        cod_postal: "",
        localidad: "",
        telefonos: "",
        dias_hora_aten: "",
        nombre: "",
        correo: "",
        equipo_movil: "",
        equipo_electr: "",
        material_didact: "",
        id_estatus: "",
        fecha_apert: "",
        fecha_forta: "",
        fecha_cierre: "",
        motivo_cierre: "",
        comentarios: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [alerts, setAlerts] = useState([]);
    const showAlert = (type, message) => {
        setAlerts([...alerts, { type, message }]);
        setTimeout(() => {
          setAlerts((prev) => prev.slice(1));
        }, 3000);
    };

    const handleSubmit = async () => {
        try {
            const response = await createEca(formData);
            const passwordTemporal = response.password_temporal;
            const usuario = response.usuario;

            await actualizarLista();
            cerrarModal();
            Swal.fire({
                title: "¡Guardado!",
                html:
                `<p>La información se guardó correctamente.</p>
                <p>Usuario (correo):</p>
                <p>${usuario}</p>
                <button id="copyUserBtn" class="swal2-confirm swal2-styled" style="background-color:#3085d6;">
                    Copiar usuario
                </button>
                <p>Contraseña temporal:</p>
                <p>${passwordTemporal}</p>
                <button id="copyPassBtn" class="swal2-confirm swal2-styled" style="background-color:#3085d6;">
                    Copiar contraseña
                </button>`,
                icon: "success",
                showConfirmButton: true,
                confirmButtonText: "Aceptar",
                didOpen: () => {
                    const copyUserBtn = document.getElementById("copyUserBtn");
                    const copyPassBtn = document.getElementById("copyPassBtn");
                    if (copyUserBtn) {
                        copyUserBtn.addEventListener("click", async () => {
                            await navigator.clipboard.writeText(usuario);

                            copyUserBtn.textContent = "¡Copiado! ✅"
                            copyUserBtn.disabled = true;
                            
                            setTimeout(() => {
                                copyUserBtn.textContent = "Copiar usuario"
                                copyUserBtn.disabled = false;
                            }, 2000);
                        });
                    }
                    if (copyPassBtn) {
                        copyPassBtn.addEventListener("click", async () => {
                            await navigator.clipboard.writeText(passwordTemporal);

                            copyPassBtn.textContent = "¡Copiado! ✅"
                            copyPassBtn.disabled = true;
                            
                            setTimeout(() => {
                                copyPassBtn.textContent = "Copiar contraseña"
                                copyPassBtn.disabled = false;
                            }, 2000);
                        });
                    }
                }
            });
        }
        catch (error) {
            if (error.response && error.response?.data?.errors) {
                showAlert('error', error.response.data.errors.correo[0]);
                return;
            } else {
                Swal.fire({
                    title: "Error al guardar",
                    text: "Ocurrió un problema al guardar la información. Inténtalo nuevamente.",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                });
            }
        }
    }

    const [paso, setPaso] = useState(1);
    const [errors, setErrors] = useState({});

    const validateStep = (paso) => {
        let newErrors = {};

        if (paso === 1) {
            if (!formData.nombre_inst.trim()) newErrors.nombre_inst = 'La instancia ejecutora es requerida.';
            if (!formData.clave_eca.trim()) newErrors.clave_eca = 'La clave del eca es requerida.';
            if (!formData.nombre_inst_ope.trim()) newErrors.nombre_inst_ope = 'La instancia operativa es requerida.';
            if (!formData.tipo_instancia.trim()) newErrors.tipo_instancia = 'El tipo de instancia es requerida.';
        }

        if (paso === 2) {
            if (!formData.poblacion_atend || Number(formData.poblacion_atend) <= 0) newErrors.poblacion_atend = 'El número de población no es valida.';
        }
        
        if (paso === 3) {
            if (!formData.id_municipio) newErrors.id_municipio = 'El municipio es requerido.';
            if (!formData.localidad.trim()) newErrors.localidad = 'La localidad es requerida.';
            if (!formData.colonia.trim()) newErrors.colonia = 'La colonia es requerida.';
            if (!formData.calle_av.trim()) newErrors.calle_av = 'La calle/avenida es requerida.';
            if (!formData.num_direccion.trim()) newErrors.num_direccion = 'El número es requerido.';
            if (!formData.cod_postal || !/^\d{5}$/.test(formData.cod_postal)) newErrors.cod_postal = 'El código postal debe tener exactamente 5 dígitos.';
            if (!formData.telefonos) newErrors.telefonos = 'Debe ingresar al menos un teléfono.';
        }

        if (paso === 4) {
            if (!formData.dias_hora_aten.trim()) newErrors.dias_hora_aten = 'El horario es requerido.';
            if (!formData.nombre.trim()) newErrors.nombre = 'El responsable es requerido.';
            if (!formData.correo.trim()) {
                newErrors.correo = 'El correo es requerido.';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
                newErrors.correo = "El correo no tiene un formato válido.";
            }
        }

        if (paso === 5) {
            if (!formData.equipo_movil.trim()) newErrors.equipo_movil = 'El equipo mobiliario es requerido.';
            if (!formData.equipo_electr.trim()) newErrors.equipo_electr = 'El equipo de cómputo es requerido.';
            if (!formData.material_didact.trim()) newErrors.material_didact = 'El material didactico es requerido.';
        }

        if (paso === 6) {
            if (!formData.fecha_apert) newErrors.fecha_apert = 'La fecha de apertura es requerida.';
            if (!formData.fecha_forta) newErrors.fecha_forta = 'La fecha de fortalecimiento es requerida.';
        }

        if (paso === 7) {
            if (!formData.comentarios) newErrors.comentarios = 'Los comentarios son requeridos.';
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

    const [municipios, setMunicipios] = useState([]);
    const cargarMunicipios = async () => {
        const response = await getMunicipios();
        console.log(response.body);
    
        if (response && response.status === 200) {
          setMunicipios(response.body);
        }
    };
    
    useEffect (() => {
        cargarMunicipios();
    }, []);

    return (
        <>
        <Toast alerts={alerts} />
        <div className="overlay">
            <div className="modal-box">
                <div className="modal-head">
                    <h4>Completa los siguientes datos</h4>
                    <p className="text-white">
                        Paso {paso} de 7
                    </p>
                </div>

                <div className="modal-body">
                    {paso === 1 && (
                        <>
                        <p className="td-title">Datos generales</p>
                        <div className="form-group">
                            <label className="card-subtitle">Nombre de la Instancia Ejecutora:
                                <i class="bi bi-question-circle" title="Poner el nombre de la Instancia Ejecutora que aportó la contraparte del presupuesto para la instalación del ECA."></i>
                            </label>
                            <textarea
                                type="text"
                                name="nombre_inst"
                                className="form-control"
                                placeholder="Ingresa el nombre de la Instancia Ejecutora"
                                title="Ingresa el nombre de la Instancia Ejecutora"
                                value={formData.nombre_inst}
                                onChange={handleChange}
                            />
                            {errors.nombre_inst && <p className="error">{errors.nombre_inst}</p>}
                        </div>
                        <div className="form-group">
                            <label className="card-subtitle">Clave de ECA:
                                <i class="bi bi-question-circle" title="Indicar la clave del ECA que se compone de lo siguiente: Clave de Entidad-Clave de Municipio-Clave de localidad-Consecutivo del ECA en ese municipio (las claves son asignadas por el INEGI)."></i>
                            </label>
                            <input
                                type="text"
                                name="clave_eca"
                                className="form-control"
                                placeholder="Ingresa la clave de ECA"
                                title="Ingresa la clave de ECA"
                                value={formData.clave_eca}
                                onChange={handleChange}
                            />
                            {errors.clave_eca && <p className="error">{errors.clave_eca}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Nombre de la instancia operativa:
                                <i class="bi bi-question-circle" title="Indicar el nombre de la Instancia Operativa que se encarga de la operación del ECA."></i>
                            </label>
                            <textarea
                                type="text"
                                name="nombre_inst_ope"
                                className="form-control"
                                placeholder="Ingresa la instancia operativa"
                                title="Ingresa la instancia operativa"
                                value={formData.nombre_inst_ope}
                                onChange={handleChange}
                            />
                            {errors.nombre_inst_ope && <p className="error">{errors.nombre_inst_ope}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Tipo de instancia operativa:
                                <i class="bi bi-question-circle" title="Que tipo de instancia operativa es. (Museo, parque, instalaciones del Organismo Operador, de la Instancia Ejecutora, de Conagua local, entre otros)."></i>
                            </label>
                            <input
                                type="text"
                                name="tipo_instancia"
                                className="form-control"
                                placeholder="Ingresa el tipo de instancia operativa"
                                title="Ingresa el tipo de instancia operativa"
                                value={formData.tipo_instancia}
                                onChange={handleChange}
                            />
                            {errors.tipo_instancia && <p className="error">{errors.tipo_instancia}</p>}
                        </div>
                        </>
                    )}
                    {paso === 2 && (
                        <>
                        <p className="td-title">Población potencial</p>
                        <div className="form-group">
                            <label className="card-subtitle">Población atendida:
                                <i class="bi bi-question-circle" title="Número de personas que han sido atendidas durante la operación de ese ECA."></i>
                            </label>
                            <input
                                type="number"
                                min="0"
                                name="poblacion_atend"
                                className="form-control"
                                placeholder="Ingresa el número de la poclación atendida"
                                title="Ingresa el número de la población atendida"
                                value={formData.poblacion_atend}
                                onChange={handleChange}
                            />
                            {errors.poblacion_atend && <p className="error">{errors.poblacion_atend}</p>}
                        </div>
                        </>
                    )}
                    {paso === 3 && (
                        <>
                        <p className="td-title">Ubicación</p>
                        <div className="form-group">
                            <label className="card-subtitle">Municipio:
                                <i class="bi bi-question-circle" title="Municipio en el que se ubica el ECA."></i>
                            </label>
                            <select
                                className="municipio-select"
                                name="id_municipio"
                                value={formData.id_municipio}
                                onChange={handleChange}
                            >
                                <option value="">Selecciona una opción</option>
                                {municipios.map((municipio)=>(
                                    <option
                                        key={municipio.id_municipio}
                                        value={municipio.id_municipio}
                                    >
                                        {municipio.nombre_munipio}
                                    </option>
                                ))}
                            </select>
                            {errors.id_municipio && <p className="error">{errors.id_municipio}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Localidad:
                                <i class="bi bi-question-circle" title="Localidad en la que se ubica el ECA."></i>
                            </label>
                            <input
                                type="text"
                                name="localidad"
                                className="form-control"
                                placeholder="Ingresa la localidad"
                                title="Ingresa la localidad"
                                value={formData.localidad}
                                onChange={handleChange}
                            />
                            {errors.localidad && <p className="error">{errors.localidad}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Colonia:
                                <i class="bi bi-question-circle" title="Colonia donde esté ubicado el ECA."></i>
                            </label>
                            <input
                                type="text"
                                name="colonia"
                                className="form-control"
                                placeholder="Ingresa la colonia"
                                title="Ingresa la colonia"
                                value={formData.colonia}
                                onChange={handleChange}
                            />
                            {errors.colonia && <p className="error">{errors.colonia}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Calle / Avenida:
                                <i class="bi bi-question-circle" title="Calle o avenida en donde esté el ECA."></i>
                            </label>
                            <input
                                type="text"
                                name="calle_av"
                                className="form-control"
                                placeholder="Ingresa la calle o avenida"
                                title="Ingresa la calle o avenida"
                                value={formData.calle_av}
                                onChange={handleChange}
                            />
                            {errors.calle_av && <p className="error">{errors.calle_av}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Número de dirección:
                                <i class="bi bi-question-circle" title="Número interior y/o exterior del ECA."></i>
                            </label>
                            <input
                                type="text"
                                name="num_direccion"
                                className="form-control"
                                placeholder="Ingresa el número de dirección"
                                title="Ingresa el número de dirección"
                                value={formData.num_direccion}
                                onChange={handleChange}
                            />
                            {errors.num_direccion && <p className="error">{errors.num_direccion}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Código Postal:
                                <i class="bi bi-question-circle" title="Código Postal de la ubicación del ECA. (de 5 caracteres)"></i>
                            </label>
                            <input
                                type="number"
                                pattern="\d{5}"
                                maxLength={5}
                                name="cod_postal"
                                className="form-control"
                                placeholder="Ingresa el código postal"
                                title="Ingresa el código postal"
                                value={formData.cod_postal}
                                onChange={handleChange}
                            />
                            {errors.cod_postal && <p className="error">{errors.cod_postal}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Teléfono(lada):
                                <i class="bi bi-question-circle" title="Número de teléfono o de contacto para el ECA. Indicar la lada."></i>
                            </label>
                            <input
                                type="text"
                                name="telefonos"
                                className="form-control"
                                placeholder="Ingresa el número de teléfono"
                                title="Ingresa el número del teléfono"
                                value={formData.telefonos}
                                onChange={handleChange}
                            />
                            {errors.telefonos && <p className="error">{errors.telefonos}</p>}
                        </div>
                        </>
                    )}
                    {paso === 4 && (
                        <>
                        <p className="td-title">Atención</p>
                        <div className="form-group">
                            <label className="card-subtitle">Dias y horario de atención:
                                <i class="bi bi-question-circle" title="Dias y horarios en los que se brinda atención."></i>
                            </label>
                            <textarea
                                type="text"
                                name="dias_hora_aten"
                                className="form-control"
                                placeholder="Ingresa los dias y horario"
                                title="Ingresa los dias y horario"
                                value={formData.dias_hora_aten}
                                onChange={handleChange}
                            />
                            {errors.dias_hora_aten && <p className="error">{errors.dias_hora_aten}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Nombre del responsable:
                                <i class="bi bi-question-circle" title="Nombre del responsable del ECA."></i>
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Ingresa el responsable"
                                title="Ingresa el responsable"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                            {errors.nombre && <p className="error">{errors.nombre}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Correo electrónico:
                                <i class="bi bi-question-circle" title="Correo electrónico del ECA o de su responsable (Anotar un solo correo)."></i>
                            </label>
                            <input
                                type="email"
                                name="correo"
                                className="form-control"
                                placeholder="Ingresa el correo electrónico"
                                title="Ingresa el correo electrónico"
                                value={formData.correo}
                                onChange={handleChange}
                            />
                            {errors.correo && <p className="error">{errors.correo}</p>}
                        </div>
                        </>
                    )}
                    {paso === 5 && (
                        <>
                        <p className="td-title">Equipamiento</p>
                        <div className="form-group">
                            <label className="card-subtitle">Equipo mobiliario:
                                <i class="bi bi-question-circle" title="Indicar el mobiliario con el que cuenta el ECA."></i>
                            </label>
                            <textarea
                                type="text"
                                name="equipo_movil"
                                className="form-control"
                                placeholder="Ingresa el equipo mobiliario"
                                title="Ingresa el equipo mobiliario"
                                value={formData.equipo_movil}
                                onChange={handleChange}
                            />
                            {errors.equipo_movil && <p className="error">{errors.equipo_movil}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Equipo de cómputo y equipo electrónico:
                                <i class="bi bi-question-circle" title="Indicar el equipo de cómputo y electrónico con el que cuenta el ECA (cámaras, cañón, pantallas de proyección, entre otros)."></i>
                            </label>
                            <textarea
                                type="text"
                                name="equipo_electr"
                                className="form-control"
                                placeholder="Ingresa el equipo de cómputo o electrónico"
                                title="Ingresa el equipo de cómputo o electrónico"
                                value={formData.equipo_electr}
                                onChange={handleChange}
                            />
                            {errors.equipo_electr && <p className="error">{errors.equipo_electr}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Material didáctico:
                                <i class="bi bi-question-circle" title="Enlistar el material didáctico con el que cuenta el ECA."></i>
                            </label>
                            <textarea
                                type="text"
                                name="material_didact"
                                className="form-control"
                                placeholder="Ingresa el material didáctico"
                                title="Ingresa el material didáctico"
                                value={formData.material_didact}
                                onChange={handleChange}
                            />
                            {errors.material_didact && <p className="error">{errors.material_didact}</p>}
                        </div>
                        </>
                    )}
                    {paso === 6 && (
                        <>
                        <p className="td-title">Operación</p>
                        <div className="form-group">
                            <label className="card-subtitle">Fecha de apertura:
                                <i class="bi bi-question-circle" title="Indicar la fecha de apertura del ECA."></i>
                            </label>
                            <input
                                type="date"
                                name="fecha_apert"
                                className="form-control"
                                placeholder="Ingresa la fecha de apertura"
                                title="Ingresa la fecha de apertura"
                                value={formData.fecha_apert}
                                onChange={handleChange}
                            />
                            {errors.fecha_apert && <p className="error">{errors.fecha_apert}</p>}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Fecha de último fortalecimiento:
                                <i class="bi bi-question-circle" title="Indicar sólo la última fecha de fortalecimiento del ECA."></i>
                            </label>
                            <input
                                type="date"
                                name="fecha_forta"
                                className="form-control"
                                placeholder="Ingresa la fecha del último fortalecimiento"
                                title="Ingresa la fecha del último fortalecimiento"
                                value={formData.fecha_forta}
                                onChange={handleChange}
                            />
                            {errors.fecha_forta && <p className="error">{errors.fecha_forta}</p>}
                        </div>
                        </>
                    )}
                    {paso === 7 && (
                        <>
                        <p className="td-title">Comentarios generales</p>
                        <div className="form-group">
                            <label className="card-subtitle">Comentarios generales:
                                <i class="bi bi-question-circle" title="Poner comentarios generales o algún austo de relevancia para el ECA en cuestión."></i>
                            </label>
                            <textarea
                                type="text"
                                name="comentarios"
                                className="form-control"
                                placeholder="Ingresa comentarios generales"
                                title="Ingresa comentarios generales"
                                value={formData.comentarios}
                                onChange={handleChange}
                            />
                            {errors.comentarios && <p className="error">{errors.comentarios}</p>}
                        </div>
                        </>
                    )}
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-negativo" onClick={cerrarModal}>Cerrar</button>
                    {paso > 1 && (
                        <button type="button" className="btn-neutral" onClick={anteriorPaso}>Anterior</button>
                    )}
                    {paso < 7 ? (
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

export default Crear_ECAS;