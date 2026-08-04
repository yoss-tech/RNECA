import React, { useState, useEffect, use } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import { observacionOficio, viewOficio, getEstatus } from "@/Components/api/oficio";
import Swal from "sweetalert2";

function Revisar_Informe({ cerrarModal, idOficio, cargarLista }) {
    const [showPdf, setShowPdf] = useState(false);
    const [pdfSrc, setPdfSrc] = useState(null);
    const [loadingPdf, setLoadingPdf] = useState(false);
    const [estatus, setEstatus] = useState([]);
    const [formData, setFormData] = useState({
        observacion: '',
        fecha_obser: '',
        id_estatus: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        return () => {
            if (pdfSrc) {
                URL.revokeObjectURL(pdfSrc);
            }
        };
    }, [pdfSrc]);

    const hableSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
            ...formData,
            id_oficio: idOficio
        };
        await observacionOficio(dataToSend);
        await cargarLista();
        Swal.fire({
            title: "Enviado!",
            text: "Las revisiones y correcciones fueron enviadas",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {
            cerrarModal();
        });
    };

    useEffect(() => {
        const fetchEstatus = async () => {
            try {
                const data = await getEstatus();
                setEstatus(data);
                if (data.length > 0) {
                    setFormData(prev => ({ ...prev, id_estatus: '' }));
                }
            }
            catch (error) {
                console.error('Error al obtener los estatus:', error);
            }
        }
        fetchEstatus();
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
                                        <label className="card-subtitle">Observaciones:</label>
                                        <textarea
                                            name="observacion"
                                            value={formData.observacion}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Ingresa las observaciones del sobre el informe"
                                            title="Ingresa las observaciones del sobre el informe"
                                        />
                                    </div>

                                    <div className="form-campo">
                                        <label className="form-label">Fecha de revisión</label>
                                        <input
                                            type="date"
                                            name='fecha_obser'
                                            value={formData.fecha_obser}
                                            onChange={handleChange}
                                            id="fecha_obser"
                                            placeholder="Ingresa la fecha de revisión"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-campo">
                                        <label className="form-label">Estatus</label>
                                        <select
                                            name="id_estatus"
                                            value={formData.id_estatus}
                                            onChange={handleChange}
                                            className="form-control"
                                        >
                                            <option value="" disabled>--Selecciona un estatus--</option>
                                            {estatus && estatus.map((est) => (
                                                <option key={est.id_estatus} value={est.id_estatus}>
                                                    {est.nombre_tipo}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
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
    );
}

export default Revisar_Informe;