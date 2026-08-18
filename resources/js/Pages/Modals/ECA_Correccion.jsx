import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function ECA_Correccion({ cerrarModal, oficioCorregir, onRedirectToActivities }) {
    console.log(oficioCorregir);

    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h3>Lee las correcciones</h3>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <p>{oficioCorregir}</p>
                    </div>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                    <button
                        type="button"
                        className="btn-negativo"
                        onClick={onRedirectToActivities}
                    >Corregir</button>
                </div>
            </div>
        </div>
    );
}

export default ECA_Correccion;