import React from "react";

function ECAM_Inicio({ cerrarModal }) {

    return (

        <div className="modal">

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">
                            Completa los siguientes datos
                        </h4>
                    </div>

                    <div className="modal-body">

                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" />
                        </div>

                    </div>

                    <div className="modal-footer">

                        <button
                            className="btn btn-secondary"
                            onClick={cerrarModal}
                        >
                            Cerrar
                        </button>

                        <button className="btn btn-primary">
                            Guardar
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Modal;