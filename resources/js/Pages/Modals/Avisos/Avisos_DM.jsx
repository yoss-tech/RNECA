import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Avisos_DireMunicipal({ cerrarModal }) {
    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Avisos</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <table class="tabla-registros">
                        <tbody>
                            <tr>
                            <td class="card-text">El registro correspondiente al mes de mayo fue validado correctamente.</td>
                            <td class="card-subtitle">12/Mayo</td>
                            </tr>
                            
                            <tr>
                            <td class="card-text">El registro mensual requiere correcciones antes de su validación final. Verifica los apartados señalados y realiza nuevamente el envío.</td>
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

export default Avisos_DireMunicipal;