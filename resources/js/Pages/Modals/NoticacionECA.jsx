import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Notificaciones_Eca({ cerrarModal }) {
    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Notificaciones</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <table class="tabla-registros">
                        <tbody>
                            <tr>
                            <td class="card-text">Tu registro mensual presenta apartados pendientes.</td>
                            <td class="card-subtitle">12/Mayo</td>
                            </tr>

                            <tr>
                            <td class="card-text">El periodo de captura finalizará en 3 días.</td>
                            <td class="card-subtitle">12/Mayo</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default Notificaciones_Eca;