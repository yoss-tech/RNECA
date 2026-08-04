import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Revisar_Oficio({ cerrarModal }) {

    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h3>Revisión de Oficios</h3>
                    <p className="text-small text-white">Oficio para la habilitación de plataforma</p>
                </div>

                <div className="modal-body">
                     <div className="form-group">
                        <label className="card-subtitle">Visualizar:</label>
                        <button type="button" className="btn-neutral">Ver</button>
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

export default Revisar_Oficio;