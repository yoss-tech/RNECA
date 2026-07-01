import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import SelectorArchivo from "@/Components/SelectorArchivo";

function SubirArchivo({ cerrarModal }) {
    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Subir archivo firmado</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                    <SelectorArchivo />
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

export default SubirArchivo;