import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function EliminarElemento({ cerrarModal }) {
    
    return (
        <div className="overlay">
            <div className="modal-box">
                <div className="modal-head">
                    <h4>Eliminar Archivo</h4>
                </div>

                <div className="modal-body">
                    <p>¿Está seguro de eliminar este elemento?</p>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cancelar</button>
                    <button type="button" className="btn-primario">Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default EliminarElemento;