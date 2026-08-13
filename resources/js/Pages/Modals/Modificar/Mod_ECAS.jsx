import React, { useState, useEffect } from "react";
import { updateEca, getEstatus } from "../../../Components/api/usuarios.jsx"
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Swal from "sweetalert2";
import Toast from "../../Toast.jsx";

function Mod_ECAS({ eca, cerrarModal, actualizarLista }) {
    const [formData, setFormData] = useState({
        id_usuario: "",
        id_detalle_eca: "",
        poblacion_atend: "",
        telefonos: "",
        dias_hora_aten: "",
        nombre: "",
        correo: "",
        correoExtra: "",
        equipo_movil: "",
        equipo_electr: "",
        material_didact: "",
        id_estatus: "",
        fecha_forta: "",
        fecha_cierre: "",
        motivo_cierre: "",
        comentarios: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => {
            const nuevoFormData = {
                ...prev,
                [name]: value
            };

            if (name === "id_estatus" && value === "EST-1K2LMP4X") {
                nuevoFormData.fecha_cierre = "";
                nuevoFormData.motivo_cierre = "";
            }
            
            return nuevoFormData;
        });
    };

    const [alerts, setAlerts] = useState([]);
    const showAlert = (type, message) => {
        setAlerts([...alerts, { type, message }]);
        setTimeout(() => {
          setAlerts((prev) => prev.slice(1));
        }, 3000);
    };

    const campoPorPaso = {
        1: [
            'poblacion_atend',
        ],
        2: [
            'dias_hora_aten',
            'nombre',
            'correo',
            'correoExtra',
            'telefonos',
        ],
        3: [
            'equipo_movil',
            'equipo_electr',
            'material_didact'
        ],
        4: [
            'fecha_forta',
            'fecha_cierre',
            'motivo_cierre',
        ],
        5: [
            'comentarios'
        ]
    };

    const obtenerPasoCampo = (campo) => {
        const pasoEncontrado = Object.entries(
            campoPorPaso
        ).find(([numeroPaso, campos]) =>
            campos.includes(campo)
        );

        return pasoEncontrado
            ? Number(pasoEncontrado[0])
            : 1;
    };

    const handleSubmit = async () => {
        setErrors({});
        try {
            await updateEca(
                formData.id_usuario,
                formData
            );
            await actualizarLista();
            cerrarModal();
            Swal.fire({
                title: "¡Actualizado!",
                text: "La información se actualizo correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        }
        catch (error) {
            if (error.response && error.response.status === 422) {
                const erroresBack = error.response.data.errors;
                setErrors(erroresBack);

                const primerCampoError = Object.keys(erroresBack)[0];
                const pasoConError = obtenerPasoCampo(primerCampoError);
                setPaso(pasoConError);
                showAlert('error', 'Revisa los campos marcados.');
            } else {
                showAlert('error', error.response?.data?.message || 'No fue posible guardar los datos.');
            }
        }
    };

    const [paso, setPaso] = useState(1);
    const [errors, setErrors] = useState({});

    const validateStep = (paso) => {
        let newErrors = {};

        if (paso === 1) {
            if (!formData.poblacion_atend) newErrors.poblacion_atend = ['El número de población es requerido.'];
        }

        if (paso === 2) {
            if (!formData.dias_hora_aten.trim()) newErrors.dias_hora_aten = ['El horario es requerido.'];
            if (!formData.nombre.trim()) newErrors.nombre = ['El responsable es requerido.'];
            if (!formData.correo.trim()) newErrors.correo = ['El correo es requerido.'];
            if (!formData.telefonos) newErrors.telefonos = ['Debe ingresar al menos un teléfono.'];
        }

        if (paso === 3) {
            if (!formData.equipo_movil.trim()) newErrors.equipo_movil = ['El equipo mobiliario es requerido.'];
            if (!formData.equipo_electr.trim()) newErrors.equipo_electr = ['El equipo de cómputo es requerido.'];
            if (!formData.material_didact.trim()) newErrors.material_didact = ['El material didactico es requerido.'];
        }

        if (paso === 4) {
            if (!formData.fecha_forta) newErrors.fecha_forta = ['La fecha de fortalecimiento es requerida.'];
            if (!formData.fecha_forta) newErrors.fecha_forta = 'La fecha es requerida.';
            if (formData.id_estatus === 'EST-C731KSDA' && !formData.fecha_cierre) newErrors.fecha_cierre = ['La fecha de cierre es requerida.'];
            if (formData.id_estatus === 'EST-C731KSDA' && !formData.motivo_cierre?.trim()) newErrors.motivo_cierre = ['El motivo de cierre es requerido.'];
        }

        if (paso === 5) {
            if (!formData.comentarios) newErrors.comentarios = ['Los comentarios son requeridos.'];
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

    const [estatus, setEstatus] = useState([]);
    const cargarEstatus = async () => {
        const response = await getEstatus();
        console.log(response.body);
    
        if (response && response.status === 200) {
          setEstatus(response.body);
        }
    };
    
    useEffect (() => {
        cargarEstatus();
        if (eca) {
            setFormData(eca);
        }
    }, [eca]);

    return (
        <>
        <Toast alerts={alerts} />
        <div className="overlay">
            <div className="modal-box">
                <div className="modal-head">
                    <h3>Completa los siguientes datos</h3>
                    <p className="text-small text-white">
                        Paso {paso} de 5
                    </p>
                </div>

                <div className="modal-body">
                    {paso === 1 && (
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
                                placeholder="Ingresa el número de la población atendida"
                                title="Ingresa el número de la población atendida"
                                value={formData.poblacion_atend}
                                onChange={handleChange}
                            />
                            {errors.poblacion_atend && (<p className="error">{errors.poblacion_atend[0]}</p>)}
                        </div>
                        </>
                    )}
                    {paso === 2 && (
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
                            {errors.dias_hora_aten && (<p className="error">{errors.dias_hora_aten[0]}</p>)}
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
                            {errors.nombre && (<p className="error">{errors.nombre[0]}</p>)}
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
                                onChange={(handleChange)}
                            />
                            {errors.correo && (<p className="error">{errors.correo[0]}</p>)}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Correo extra (opcional):
                                <i class="bi bi-question-circle" title="Correo electrónico extra del ECA o de su responsable."></i>
                            </label>
                            <input
                                type="email"
                                name="correoExtra"
                                className="form-control"
                                placeholder="Ingresa el correo electrónico"
                                title="Ingresa el correo electrónico"
                                value={formData.correoExtra}
                                onChange={handleChange}
                            />
                            {errors.correoExtra && (<p className="error">{errors.correoExtra[0]}</p>)}
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
                            {errors.telefonos && (<p className="error">{errors.telefonos[0]}</p>)}
                        </div>
                        </>
                    )}
                    {paso === 3 && (
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
                            {errors.equipo_movil && (<p className="error">{errors.equipo_movil[0]}</p>)}
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
                            {errors.equipo_electr && (<p className="error">{errors.equipo_electr[0]}</p>)}
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
                            {errors.material_didact && (<p className="error">{errors.material_didact[0]}</p>)}
                        </div>
                        </>
                    )}
                    {paso === 4 && (
                        <>
                        <p className="td-title">Operación</p>
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
                            {errors.fecha_forta && (<p className="error">{errors.fecha_forta[0]}</p>)}
                        </div>

                        <div className="form-group">
                            <label className="card-subtitle">Estatus:
                                <i class="bi bi-question-circle" title="En que estatus se encuentra el ECA."></i>
                            </label>
                            <select
                                className="selector-control"
                                name="id_estatus"
                                value={formData.id_estatus}
                                onChange={handleChange}
                            >
                                {estatus.map((estatu)=>(
                                    <option
                                        key={estatu.id_estatus}
                                        value={estatu.id_estatus}
                                    >
                                        {estatu.nombre_tipo}
                                    </option>
                                ))}
                            </select>
                            {errors.id_estatus && (<p className="error">{errors.id_estatus[0]}</p>)}
                        </div>

                        {formData.id_estatus === "EST-C731KSDA" && (
                            <>
                            <div className="form-group">
                                <label className="card-subtitle">Fecha de cierre:
                                    <i class="bi bi-question-circle" title="Indicar la fecha de cierre del ECA."></i>
                                </label>
                                <input
                                    type="date"
                                    name="fecha_cierre"
                                    className="form-control"
                                    placeholder="Ingresa la fecha de cierre"
                                    title="Ingresa la fecha de cierre"
                                    value={formData.fecha_cierre}
                                    onChange={handleChange}
                                />
                                {errors.fecha_cierre && (<p className="error">{errors.fecha_cierre[0]}</p>)}
                            </div>

                            <div className="form-group">
                                <label className="card-subtitle">Motivos del cierre:
                                    <i class="bi bi-question-circle" title="Mencionar el motivo(s) del cierre de dicho ECA."></i>
                                </label>
                                <textarea
                                    type="text"
                                    name="motivo_cierre"
                                    className="form-control"
                                    placeholder="Ingresa el motivo de cierre"
                                    title="Ingresa el motivo de cierre"
                                    value={formData.motivo_cierre}
                                    onChange={handleChange}
                                />
                                {errors.motivo_cierre && (<p className="error">{errors.motivo_cierre[0]}</p>)}
                            </div>
                            </>
                        )}
                        </>
                    )}
                    {paso === 5 && (
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
                            {errors.comentarios && (<p className="error">{errors.comentarios[0]}</p>)}
                        </div>
                        </>
                    )}
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-negativo" onClick={cerrarModal}>Cerrar</button>
                    {paso > 1 && (
                        <button type="button" className="btn-neutral" onClick={anteriorPaso}>Anterior</button>
                    )}
                    {paso < 5 ? (
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

export default Mod_ECAS;