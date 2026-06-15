import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function DirM_Inico({ cerrarModal }) {
    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Completa los siguientes datos</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="card-subtitle">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Ingresa tu nombre"/>
                    </div>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                    <button type="button" className="btn-primario">Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default DirM_Inico;