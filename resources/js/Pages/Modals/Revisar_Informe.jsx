import { useState, useEffect } from "react";
import { observacionOficio, viewOficio, getEstatus } from "@/Components/api/oficio";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Swal from "sweetalert2";
import Toast from "../Toast.jsx";

function Revisar_Informe({ cerrarModal, idOficio, cargarLista }) {
    const [showPdf, setShowPdf] = useState(false);
    const [pdfSrc, setPdfSrc] = useState(null);
    const [loadingPdf, setLoadingPdf] = useState(false);
    const [formData, setFormData] = useState({
        observacion: '',
        id_estatus: ''
    });

    const estatusValidado = 'EST-V7WQ3N8Z'
    const estatusObservaciones = 'EST-8HCVW2C7'

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            if (name === 'id_estatus' && value === estatusValidado) {
                return {
                    ...prev,
                    id_estatus: value,
                    observacion: "NA"
                };
            }

            if (name === 'id_estatus' && value === estatusObservaciones) {
                return {
                    ...prev,
                    id_estatus: value,
                    observacion: ""
                };
            }

            return {
                ...prev,
                [name]: value,
            };
        });
    };

    useEffect(() => {
        return () => {
            if (pdfSrc) {
                URL.revokeObjectURL(pdfSrc);
            }
        };
    }, [pdfSrc]);

    const [errors, setErrors] = useState({});
    const [alerts, setAlerts] = useState([]);
    const showAlert = (type, message) => {
        setAlerts([...alerts, { type, message }]);
        setTimeout(() => {
          setAlerts((prev) => prev.slice(1));
        }, 3000);
    };

    const hableSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        try {
            const dataToSend = {
                ...formData,
                id_oficio: idOficio
            };

            const response = await observacionOficio(dataToSend);

            if (response?.status === 200 && formData.id_estatus === estatusObservaciones) {
                await cargarLista();
                const resultado = await Swal.fire({
                    title: "¡Observaciones enviadas!",
                    text: "Las observaciones fueron enviadas",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                })
                if (resultado.isConfirmed) {
                    cerrarModal();
                }
            } else {
                await cargarLista();
                const resultado = await Swal.fire({
                    title: "¡Oficio validado!",
                    text: "Oficio validado con exito",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                })
                if (resultado.isConfirmed) {
                    cerrarModal();
                }
            }
        }
        catch (error) {
            if(error.response && error.response.status === 422)  {
                setErrors(error.response.data.errors);
            } else {
                showAlert('error', error.response?.data?.message || 'No fue posible validar el informe.');
            }
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

    useEffect(() => {
        cargarEstatus();
    }, []);

    useEffect(() => {
        const handleViewPdf = async () => {
            if (idOficio) {
                setLoadingPdf(true);
                try {
                    const pdfBlob = await viewOficio(idOficio);
                    const url = URL.createObjectURL(pdfBlob);
                    setPdfSrc(url);
                    setShowPdf(true);
                } catch (error) {
                    console.error("Error al cargar el PDF:", error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo cargar el documento PDF. Por favor, intente de nuevo más tarde.',
                    });
                } finally {
                    setLoadingPdf(false);
                }
            } else {
                console.error("No se ha proporcionado un ID de oficio para visualizar el PDF.");
                Swal.fire({
                    icon: 'warning',
                    title: 'Faltan datos',
                    text: 'No se puede mostrar el documento porque no se encontró el identificador.',
                });
            }
        };
        handleViewPdf();
    }, []);

    const handleHidePdf = () => {
        setShowPdf(false);
        if (pdfSrc) {
            URL.revokeObjectURL(pdfSrc);
            setPdfSrc(null);
        }
    }

    return (
        <>
        <Toast alerts={alerts} />
        <div className="overlay">
            <div className="modal-box modal-grid" style={{ width: showPdf ? '85%' : '500px', height: showPdf ? '90vh' : 'auto', transition: 'width 0.3s ease, height 0.3s ease' }}>
                <div className="modal-head">
                    <h3>Revisión de informes</h3>
                </div>

                <div className="modal-body">
                    {loadingPdf ? (
                        <div class="loader">
                            <label className="component-cargando">Cargando...</label>
                            <div class="loading"></div>
                        </div>
                    ) : showPdf && (
                        <>
                            <div className="dashboard">
                                <div className="dashboard-left" style={{ width: '60%', height: 'calc(100%)' }}>
                                    <iframe
                                        src={pdfSrc}
                                        title={`Visor de Oficio ${idOficio}`}
                                        style={{ width: '100%', height: '100%', border: 'none' }}
                                    />
                                </div>
                                <div className="dashboard-right">
                                    <div className="form-group">
                                        <label className="form-label">Estatus</label>
                                        <select
                                            className="selector-control"
                                            name="id_estatus"
                                            value={formData.id_estatus}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Selecciona una opción</option>
                                            {estatus.map((est) => (
                                                <option 
                                                    key={est.id_estatus}
                                                    value={est.id_estatus}
                                                >
                                                    {est.nombre_tipo}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.id_estatus && (<p className="error">{errors.id_estatus[0]}</p>)}
                                    </div>

                                    {formData.id_estatus === 'EST-8HCVW2C7' && (
                                        <>
                                            <div className="form-group">
                                                <label className="card-subtitle">Observaciones:</label>
                                                <textarea
                                                    name="observacion"
                                                    value={formData.observacion}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Ingresa las observaciones del sobre el informe"
                                                    title="Ingresa las observaciones del sobre el informe"
                                                />
                                                {errors.observacion && (<p className="error">{errors.observacion[0]}</p>)}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                    <button type="button" className="btn-primario" onClick={hableSubmit}>Guardar</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Revisar_Informe;