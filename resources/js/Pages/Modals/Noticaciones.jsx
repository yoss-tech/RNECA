import { useState, useEffect } from "react";
import { getNotificaciones, marcarNotificacionLeida } from "@/Components/api/notificaciones";
import "/resources/css/Notificaciones.css";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Notificaciones({ cerrarModal, disminuirContador, cambiarVista }) {
    const [notificaciones, setNotificaciones] = useState([]);

    const cargarNotificaciones = async () => {
        const response = await getNotificaciones();
        console.log('Notificaciones:', response);
        if (response && response.status === 200) {
            setNotificaciones(response.body);
        }
    };

    const manejarNotificacion = async (notificacion) => {
        try {
            if (!notificacion.leida) {
                const response = await marcarNotificacionLeida(
                    notificacion.id
                );

                if (response && response.status === 200) {
                    setNotificaciones((prev) =>
                        prev.map((item) =>
                            item.id === notificacion.id
                                ? {...item, leida:true}
                                : item
                        )
                    );
                    disminuirContador();
                }
            }
            if (notificacion.url) {
                cerrarModal();
                cambiarVista(notificacion.url);
            }
        }
        catch (error) {
            console.error('Error al manejar la notificación: ', error);
        }
    }

    useEffect(() => {
        cargarNotificaciones();
    }, []);

    return (
        <div className="overlay">
            <div className="modal-box">
                <div className="modal-head">
                    <h3 className="text-white">Notificaciones</h3>
                </div>

                <div className="modal-body">
                    <div className="notificaciones-body">
                        {notificaciones.length === 0 ? (
                            <p className="sin-notificaciones">No tienes notificaciones.</p>
                        ) : (
                            notificaciones.map((notificacion) => (
                                <div
                                key={notificacion.id}
                                className={`notificacion-item ${
                                    !notificacion.leida
                                        ? "no-leida"
                                        : ""
                                    }`}
                                onClick={() => manejarNotificacion(notificacion)}
                                >
                                    <div className="notificacion-icono">
                                        {notificacion.tipo === "warning" && (<i class="bi bi-exclamation-triangle notificacion-icono warning"></i>)}
                                        {notificacion.tipo === "error" && (<i class="bi bi-x-circle notificacion-icono error"></i>)}
                                        {notificacion.tipo === "success" && (<i class="bi bi-check-circle notificacion-icono success"></i>)}
                                        {notificacion.tipo === "info" && (<i class="bi bi-info-circle notificacion-icono info"></i>)}
                                    </div>

                                    <div className="notificacion-text">
                                        <p className="text-bold">{notificacion.titulo}</p>
                                        <p className="text-small">{notificacion.mensaje}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default Notificaciones;