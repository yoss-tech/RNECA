import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Modificar_SupervisorEcas({ cerrarModal }) {
    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Modifica los siguientes datos</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="card-subtitle">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Ingresa tu nombre"/>
                    </div>
                    <div className="form-group">
                        <label className="card-subtitle">Correo:</label>
                        <input type="text" className="form-control" placeholder="Ingresa tu correo"/>
                    </div>
                    <div className="form-group">
                        <label className="card-subtitle">Contraseña:</label>
                        <input type="text" className="form-control" placeholder="Ingresa tu contraseña"/>
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

export default Modificar_SupervisorEcas;