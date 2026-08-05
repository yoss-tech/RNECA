import React, { useState, useMemo, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Toast from "../../Toast.jsx";
import Swal from "sweetalert2";
import { updatePoblacion, getDataEspacio } from "../../../Components/api/espacio_cult.jsx"
import { data } from "autoprefixer";

function Mod_Poblacion({ cerrarModal, espacioId }) {

    const [poblData, setPoblData] = useState(null);

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
            [name]: Math.max(0, Number(value)), // Asegura que el valor no sea negativo
        });
    };

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

    const validateForm = (paso) => {
        let newErrors = {};

        if (paso == 1) {
            const totalMaterial = Number(material.inedito) + Number(material.reproducido) + Number(material.adquirido);
            if (totalMaterial === 0) {
                newErrors.material = 'Al menos un tipo de material didáctico debe ser ingresado.';
            }
            if (total === 0) {
                newErrors.poblacion = 'Al menos un asistente debe ser ingresado.';
            }
        }

        if (paso == 2) {
            if (!nexo.evidencia_fotografica && !nexo.lista_asistencia && !nexo.nota_periodica) {
                newErrors.nexo = 'Al menos debes tener un anexo de la lista '
            }
        }
        if (paso == 3) {
            if (!comentarios.trim()) newErrors.comentarios = 'Los comentarios u observaciones son requeridos.';
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
                text: "Por favor, selecciona al menos un Anexo.",
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

    useEffect(() => {
        const getPobla = async () => {
            if (espacioId && espacioId.length > 0 && espacioId[0].id_espacio) {
                try {
                    const response = await getDataEspacio(espacioId[0].id_espacio);
                    setPoblData(response);
                    // Agrupar la información del array en uno solo
                    if (!response || response.length === 0) {
                        setPoblData(null);
                        return;
                    }

                    // La primera entrada de la respuesta contiene la información general (material, anexos, comentarios)
                    const baseData = response[0];

                    const newPoblacion = {
                        hombres13_17: 0, hombres18_30: 0, hombres30_40: 0, hombres40_50: 0, hombres50mas: 0,
                        mujeres13_17: 0, mujeres18_30: 0, mujeres30_40: 0, mujeres40_50: 0, mujeres50mas: 0,
                        ninos12: 0,
                    };

                    response.forEach(item => {
                        let key = "";
                        if (item.genero === 'Hombre') key += 'hombres';
                        else if (item.genero === 'Mujer') key += 'mujeres';
                        else if (item.genero === 'Niño/Niña') key += 'ninos';

                        let rango_edad_key = item.rango_edad;
                        if (rango_edad_key === '13-17') rango_edad_key = '13_17';
                        else if (rango_edad_key === '18-30') rango_edad_key = '18_30';
                        else if (rango_edad_key === '31-40') rango_edad_key = '30_40'; // Mapea 31-40 a 30_40 para la clave
                        else if (rango_edad_key === '41-50') rango_edad_key = '40_50';
                        else if (rango_edad_key === '50 o más') rango_edad_key = '50mas';
                        else if (rango_edad_key === 'Menor a 12') rango_edad_key = '12';

                        const fullKey = key + rango_edad_key;

                        if (newPoblacion.hasOwnProperty(fullKey)) {
                            newPoblacion[fullKey] = item.cantidad;
                        }
                    });
                    setPoblacion(newPoblacion);

                    //  Material
                    setMaterial({
                        inedito: baseData.inedito || 0,
                        adquirido: baseData.adquirido || 0,
                        reproducido: baseData.reproducido || 0
                    });

                    //  Anexos
                    setNexo({
                        lista_asistencia: baseData.list_asist === 'sí',
                        evidencia_fotografica: baseData.evi_foto === 'sí',
                        nota_periodica: baseData.nota_period === 'sí'
                    })

                    setComentarios({
                        
                    })
                }
                catch (error) {
                    console.error("Error al obtener datos de la población: ", error)
                }
            }
        }
        getPobla();
    }, [espacioId]);

    // console.log(espacioId && espacioId.length > 0 ? espacioId[0].id_espacio : 'espacioId no disponible');

    return (
        <>
            <Toast alerts={alerts} />
            <div className="overlay">
                <div className="modal-box">
                    <div className="modal-head">
                        <h3>Completa los siguientes datos</h3>
                        <p className="text-small text-white">
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
                                                <i className="bi bi-question-circle" title="Indicar el número de material didáctico que se distribuyó en el ECA según su modalidad"></i>
                                            </p>
                                            <div className="btn-container-horizontal">
                                                <div className="input-container-horizontal">
                                                    <label className="form-label">Inédito
                                                        <i className="bi bi-question-circle" title="Indicar si ha recibido algún material inedito"></i>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Ingresa el número de material didáctico según su modalidad"
                                                        className="form-control"
                                                        min="0"
                                                        id="inedito"
                                                        name="inedito"
                                                        value={material.inedito} // El valor se muestra tal cual está en el estado
                                                        onChange={(e) => setMaterial({ ...material, inedito: Math.max(0, Number(e.target.value)) })} // Asegura que el valor no sea negativo
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
                                                        value={material.reproducido} // El valor se muestra tal cual está en el estado
                                                        onChange={(e) => setMaterial({ ...material, reproducido: Math.max(0, Number(e.target.value)) })} // Asegura que el valor no sea negativo
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
                                                        value={material.adquirido} // El valor se muestra tal cual está en el estado
                                                        onChange={(e) => setMaterial({ ...material, adquirido: Math.max(0, Number(e.target.value)) })} // Asegura que el valor no sea negativo
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
                                                        value={poblacion.hombres13_17}
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 13 a 17"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="hombres18_30"
                                                        placeholder="De 18 a 30"
                                                        className="form-control"
                                                        min="0"
                                                        value={poblacion.hombres18_30}
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 18 a 30"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="hombres30_40"
                                                        placeholder=" De 30 a 40"
                                                        className="form-control"
                                                        min="0"
                                                        value={poblacion.hombres30_40}
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 30 a 40"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="hombres40_50"
                                                        placeholder=" De 40 a 50"
                                                        className="form-control"
                                                        min="0"
                                                        value={poblacion.hombres40_50}
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 40 a 50"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="hombres50mas"
                                                        placeholder="De 50 o  +"
                                                        className="form-control"
                                                        min="0"
                                                        value={poblacion.hombres50mas}
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
                                                        value={poblacion.mujeres13_17}
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 13 a 17"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="mujeres18_30"
                                                        placeholder="De 18 a 30"
                                                        className="form-control"
                                                        min="0"
                                                        value={poblacion.mujeres18_30}
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 18 a 30"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="mujeres30_40"
                                                        placeholder="De 30 a 40"
                                                        className="form-control"
                                                        min="0"
                                                        value={poblacion.mujeres30_40}
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 30 a 40"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="mujeres40_50"
                                                        placeholder="De 40 a 50"
                                                        className="form-control"
                                                        min="0"
                                                        value={poblacion.mujeres40_50}
                                                        onChange={handleChange}
                                                        title="Ingresa el número de asistentes de 40 a 50"
                                                    />

                                                    <input
                                                        type="number"
                                                        name="mujeres50mas"
                                                        placeholder="De 50 o  +"
                                                        className="form-control"
                                                        min="0"
                                                        value={poblacion.mujeres50mas}
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
                                                    value={poblacion.ninos12}
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

                                    <p className="form-subtitle">Comentarios
                                        <i class="bi bi-question-circle" title="Comentarios u observación"></i>
                                    </p>
                                    <div className="form-campo">
                                        <textarea rows="3"
                                            name='comentarios'
                                            id="comentarios"
                                            // value={comentarios}
                                            onChange={(e) => setComentarios(e.target.value)}
                                            placeholder="Ingresa algún comentario u observación"
                                            className="form-control">
                                        </textarea>
                                        {errors.comentarios && <p className="error">{errors.comentarios}</p>}
                                    </div>
                                </div>
                            )}
                            {paso === 4 && (
                                <div className="input-container-horizontal dashboard">
                                    <div className="dashboard">
                                        <div className="dashboard-left">
                                            <p className="form-subtitle">Por favor revisa que la información sea correcta
                                                <i class="bi bi-question-circle" title="Sumatoria de los asistentes"></i>
                                            </p>
                                            <p className="form-subtitle">Rango de edades</p>
                                            <p>Hombres de 13 a 17 años: {poblacion.hombres13_17}</p>
                                            <p>Hombres de 18 a 17 años: {poblacion.hombres18_30}</p>
                                            <p>Hombres de 13 a 17 años: {poblacion.hombres30_40}</p>
                                            <p>Hombres de 13 a 17 años: {poblacion.hombres40_50}</p>
                                            <p>Hombres de 13 a 17 años: {poblacion.hombres50mas}</p>
                                            <p>Mujeres de 13 a 17 años: {poblacion.mujeres13_17}</p>
                                            <p>Mujeres de 13 a 17 años: {poblacion.mujeres18_30}</p>
                                            <p>Mujeres de 13 a 17 años: {poblacion.mujeres30_40}</p>
                                            <p>Mujeres de 13 a 17 años: {poblacion.mujeres40_50}</p>
                                            <p>Mujeres de 13 a 17 años: {poblacion.mujeres50mas}</p>
                                            <p>Niños de 12 años o menos: {poblacion.ninos12}</p>
                                            <p className="form-subtitle">Total</p>
                                            <p>Total población atendida: {total}</p>
                                        </div>
                                        <div className="dashboard-right">
                                            <p className="form-subtitle">Material didactico</p>
                                            <p>Adquirido: {material.adquirido}</p>
                                            <p>Inedito: {material.inedito}</p>
                                            <p>Reproducido: {material.reproducido}</p>
                                            <p className="form-subtitle">Anexos</p>
                                            <label className="check-item">
                                                <input
                                                    type="checkbox"
                                                    name="lista_asistencia"
                                                    id="lista_asistencia"
                                                    checked={nexo.lista_asistencia}
                                                />Lista de asistencia
                                            </label>
                                            <label className="check-item">
                                                <input
                                                    type="checkbox"
                                                    id='nota_periodica'
                                                    name='nota_periodica'
                                                    checked={nexo.nota_periodica}
                                                />Nota periodística
                                            </label>
                                            <label className="check-item">
                                                <input
                                                    type="checkbox"
                                                    id='evidencia_fotografica'
                                                    name='evidencia_fotografica'
                                                    checked={nexo.evidencia_fotografica}
                                                />Evidencia fotográfica
                                            </label>
                                            <textarea rows="3"
                                                name='comentarios'
                                                id="comentarios"
                                                value={comentarios}
                                                placeholder="Ingresa algún comentario u observación"
                                                className="form-control">
                                            </textarea>
                                        </div>
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
                        {paso < 4 ? (
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