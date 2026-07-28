import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Toast from "../../Toast.jsx";
import Swal from "sweetalert2";
import { updatePoblacion } from "../../../Components/api/espacio_cult.jsx"

function Mod_Poblacion({ cerrarModal, espacioId }) {

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

    console.log(espacioId)

    const [comentarios, setComentarios] = useState('');

    // Inicializamos los nexos con valores booleanos para mayor claridad.
    const [nexo, setNexo] = useState({
        lista_asistencia: false,
        evidencia_fotografica: false,
        nota_periodica: false,
    });

    const [material, setMaterial] = useState({
        inedito: 0,
        reproducido: 0,
        adquirido: 0,
    });

    const [alerts, setAlerts] = useState([]);
    const showAlert = (type, message) => {
        setAlerts([...alerts, { type, message }]);
        setTimeout(() => {
            setAlerts((prev) => prev.slice(1));
        }, 3000);
    };

    const [errors, setErrors] = useState({});

    const [paso, setPaso] = useState(1);

    const validateForm = (paso) => {
        let newErrors = {};

        if (paso == 1) {
            if (!material.inedito && !material.reproducido && !material.adquirido) {
                newErrors.material = 'Al menos un tipo de material didáctico debe ser ingresado.';
            }
        }
        if (paso == 2) {
            if (!poblacion.hombres13_17 && !poblacion.hombres18_30 && !poblacion.hombres30_40 && !poblacion.hombres40_50 && !poblacion.hombres50mas && !poblacion.mujeres13_17 && !poblacion.mujeres18_30 && !poblacion.mujeres30_40 && !poblacion.mujeres40_50 && !poblacion.mujeres50mas && !poblacion.ninos12) {
                newErrors.poblacion = 'Al menos un asistente debe ser ingresado.';
            }
        }
        if (paso == 3) {
            if (!comentarios.trim()) {
                newErrors.comentarios = 'Los comentarios u observaciones son requeridos';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const siguientePaso = () => {
        if (validateForm(paso)) {
            setPaso(paso + 1);
        }
    };

    const anteriorPaso = () => {
        if (paso > 1) {
            setPaso(paso - 1);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm(3)) {
            Swal.fire({
                title: "Información incompleta",
                text: "Por favor, completa todos los campos obligatorios antes de guardar.",
                icon: "warning",
                confirmButtonText: "Aceptar"
            });
            return;
        }

        if (!espacioId || espacioId.length === 0) {
            console.error("espacioId is missing or empty");
            Swal.fire({
                title: "Error de datos",
                text: "No se encontró la información a modificar.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            return;
        }

        const firstDetail = espacioId[0];

        try {
            const asistentes = Object.entries(poblacion)
                .filter(([, cantidad]) => cantidad > 0) // Solo enviamos los que tienen cantidad > 0
                .map(([key, cantidad]) => {
                    const [genero, rango_edad_raw] = key.startsWith('hombres')
                        ? ['Hombre', key.replace('hombres', '')]
                        : key.startsWith('mujeres')
                            ? ['Mujer', key.replace('mujeres', '')]
                            : ['Niño/Niña', key.replace('ninos', '')];

                    let rango_edad = rango_edad_raw.replace('_', '-');
                    if (rango_edad === '50mas') rango_edad = '50 o más';
                    if (rango_edad === '12') rango_edad = 'Menor a 12';

                    return {
                        genero: genero,
                        rango_edad: rango_edad,
                        cantidad: cantidad,
                    };
                });
            
            if (asistentes.length === 0) {
                if (!validateForm(2)) { // Re-validar el paso de población si no hay asistentes
                    Swal.fire({
                        title: "Información incompleta",
                        text: "Debes ingresar al menos un asistente.",
                        icon: "warning",
                        confirmButtonText: "Aceptar"
                    });
                    return
                }
            }
            
            // Construimos el objeto de datos final
            const dataToSend = {
                id_espacio: firstDetail.id_espacio,
                id_nexo: firstDetail.id_nexo,
                id_material: firstDetail.id_material,
                total_pobl: total,
                comentarios: comentarios,
                asistentes: asistentes,
                nexo: nexo,
                material: material,
            };
            
            await updatePoblacion(dataToSend);

            Swal.fire({
                title: "¡Actualizado!",
                text: "La información se actualizó correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            }).then(() => {
                cerrarModal();
            });

        } catch (error) {
            Swal.fire({
                title: "Error al actualizar",
                text: "Ocurrió un problema al guardar la información. Inténtalo nuevamente.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            console.error("Error al actualizar:", error);
        }
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
        <>
            <Toast alerts={alerts} />
            <div className="overlay">
                <div className="modal-box">
                    <div className="modal-head">
                        <h4>Completa los siguientes datos</h4>
                        <p className="text-white">
                            Paso {paso} de 3
                        </p>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} >
                            {paso === 1 && (
                                <>
                                    <div className="form-group">
                                        <div className="form-campo">
                                            <p className="form-subtitle">Material didáctico
                                                <i class="bi bi-question-circle" title="Indicar el número de material didáctico que se distribuyó en el ECA según su modalidad"></i>
                                            </p>
                                            <div className="btn-container-horizontal">
                                                <div className="input-container-horizontal">
                                                    <label className="form-label">Inédito
                                                        <i class="bi bi-question-circle" title="Indicar si ha recibido algún material inedito"></i>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Ingresa el número de material didáctico según su modalidad"
                                                        className="form-control"
                                                        min="0"
                                                        id="inedito"
                                                        name="inedito"
                                                        value={material.inedito}
                                                        onChange={(e) => setMaterial({ ...material, inedito: e.target.value })}
                                                    />
                                                </div>

                                                <div className="input-container-horizontal">
                                                    <label className="form-label">Reproducido
                                                        <i class="bi bi-question-circle" title="Indicar si han recibido KITS ahorradores, manuales, librillos, lapiceros, entre otros consumibles"></i>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Ingresa el número de material didáctico según su modalidad"
                                                        className="form-control"
                                                        min="0"
                                                        id="reproducido"
                                                        name="reproducido"
                                                        value={material.reproducido}
                                                        onChange={(e) => setMaterial({ ...material, reproducido: e.target.value })}
                                                    />
                                                </div>

                                                <div className="input-container-horizontal">
                                                    <label className="form-label">Adquirido
                                                        <i class="bi bi-question-circle" title="Indicar si el espacio cuenta con maquetas"></i>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Ingresa el número de material didáctico según su modalidad"
                                                        className="form-control"
                                                        min="0"
                                                        id="adquirido"
                                                        name="adquirido"
                                                        value={material.adquirido}
                                                        onChange={(e) => setMaterial({ ...material, adquirido: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {errors.material && <p className="error">{errors.material}</p>}
                                        </div>

                                        <div className="form-campo">
                                            <p className="form-subtitle">Asistentes
                                                <i class="bi bi-question-circle" title="Indicar el número de asistentes según el rango de edad, asi como si se trata de niños menores de 12 años"></i>
                                            </p>
                                            <p className="form-text">Hombres</p>
                                            <div className="form-campo">
                                                <label className="form-label">Rangos de edad</label>

                                                <div className="btn-container-horizontal">
                                                    <input
                                                        type="number"
                                                        name="hombres13_17"
                                                        placeholder="De 13 a 17"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 13 a 17"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="hombres18_30"
                                                        placeholder="De 18 a 30"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 18 a 30"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="hombres30_40"
                                                        placeholder=" De 30 a 40"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 30 a 40"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="hombres40_50"
                                                        placeholder=" De 40 a 50"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 40 a 50"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="hombres50mas"
                                                        placeholder="De 50 o  +"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 50 o más"
                                                    />
                                                </div>
                                            </div>

                                            <p className="form-text">Mujeres</p>
                                            <div className="form-campo">
                                                <label className="form-label">Rangos de edad</label>
                                                <div className="btn-container-horizontal">
                                                    <input
                                                        type="number"
                                                        name="mujeres13_17"
                                                        placeholder="De 13 a 17"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 13 a 17"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="mujeres18_30"
                                                        placeholder="De 18 a 30"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 18 a 30"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="mujeres30_40"
                                                        placeholder="De 30 a 40"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 30 a 40"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="mujeres40_50"
                                                        placeholder="De 40 a 50"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 40 a 50"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="mujeres50mas"
                                                        placeholder="De 50 o  +"
                                                        className="form-control"
                                                        min="0"
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 50 o más"
                                                    />
                                                </div>
                                            </div>

                                            <p className="form-text">Niños</p>
                                            <div className="form-campo">
                                                <label className="form-label">Rangos de edad</label>
                                                <input
                                                    type="number"
                                                    name="ninos12"
                                                    placeholder="Ingresa el número de asistentes menores de 12"
                                                    className="form-control"
                                                    min="0"
                                                    onChange={handleChange}
                                                    title="Ingresa el número de asistentes menores de 12"
                                                />
                                            </div>
                                            {errors.localidad && <p className="error">{errors.localidad}</p>}
                                        </div>
                                    </div>
                                </>
                            )}
                            {paso === 2 && (
                                <>
                                    <div className="btn-container-horizontal">
                                        <div className="input-container-horizontal">
                                            <p className="form-subtitle">Anexos
                                                <i class="bi bi-question-circle" title="Indicar los entregables con los que se cuenta como evidencia de la acción en cuestión (lista de asistencia, evidencia fotográfica o nota periodística). Estos deberán anexarse a este formato"></i>
                                            </p>

                                            <div className="check-group">
                                                <label className="check-item">
                                                    <input
                                                        type="checkbox"
                                                        name="lista_asistencia"
                                                        id="lista_asistencia"
                                                        checked={nexo.lista_asistencia}
                                                        onChange={(e) => setNexo({ ...nexo, lista_asistencia: e.target.checked })}
                                                    />Lista de asistencia
                                                </label>

                                                <label className="check-item">
                                                    <input
                                                        type="checkbox"
                                                        id='evidencia_fotografica'
                                                        name='evidencia_fotografica'
                                                        checked={nexo.evidencia_fotografica}
                                                        onChange={(e) => setNexo({ ...nexo, evidencia_fotografica: e.target.checked })}
                                                    />Evidencia fotográfica
                                                </label>

                                                <label className="check-item">
                                                    <input
                                                        type="checkbox"
                                                        id='nota_periodica'
                                                        name='nota_periodica'
                                                        checked={nexo.nota_periodica}
                                                        onChange={(e) => setNexo({ ...nexo, nota_periodica: e.target.checked })}
                                                    />Nota periodística
                                                </label>
                                            </div>
                                            {errors.nexo && <p className="error">{errors.nexo}</p>}
                                        </div>
                                    </div>
                                </>
                            )}
                            {paso === 3 && (
                                <div className="input-container-horizontal">
                                    <p className="form-subtitle">Total de la población atendida
                                        <i class="bi bi-question-circle" title="Sumatoria de los asistentes"></i>
                                    </p>

                                    <div className="form-campo">
                                        <input
                                            type="number"
                                            value={total}
                                            id="total_pobl"
                                            name="total_pobl"
                                            readOnly
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-campo">
                                        <textarea rows="3"
                                            name='comentarios'
                                            id="comentarios"
                                            onChange={(e) => setComentarios(e.target.value)}
                                            placeholder="Ingresa algún comentario u observación"
                                            className="form-control">
                                        </textarea>
                                        {errors.comentarios && <p className="error">{errors.comentarios}</p>}
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>


                    <div className="modal-foot">
                        <button type="button" className="btn-negativo" onClick={cerrarModal}>Cerrar</button>
                        {paso > 1 && (
                            <button type="button" className="btn-neutral" onClick={anteriorPaso}>Anterior</button>
                        )}
                        {paso < 3 ? (
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

export default Mod_Poblacion;