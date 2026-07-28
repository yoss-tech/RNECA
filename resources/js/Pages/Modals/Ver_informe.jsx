import React, { useState, useEffect } from "react";
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

    // Limpiar el object URL cuando el modal se cierra o el PDF se oculta
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
                    <h4>Vista del informe</h4>
                </div>

                <div className="modal-body">
                    {showPdf ? (
                        <>
                            <div className="dashboard">
                                <div className="dashboard-left" style={{ width: '60%', height: 'calc(100%)' }}>
                                    <iframe
                                        src={pdfSrc}
                                        title={`Visor de Oficio ${idOficio}`}
                                        style={{ width: '100%', height: '100%', border: 'none' }}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="form-group">
                                <label className="card-subtitle">Visualizar el documento:</label>
                                <button type="button" className="btn-neutral" onClick={handleViewPdf} disabled={loadingPdf}>
                                    {loadingPdf ? 'Cargando...' : 'Ver'}
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default Revisar_Informe;