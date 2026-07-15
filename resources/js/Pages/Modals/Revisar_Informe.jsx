import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Revisar_Informe({ cerrarModal }) {
    const [mostrarPassword, setMostrarPassword] = useState(false);

    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Revisión de informes</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="card-subtitle">Observaciones:</label>
                        <textarea className="form-control" placeholder="Ingresa las observaciones del sobre el informe" title="Ingresa las observaciones del sobre el informe">
                        </textarea>
                    </div>

                    <div className="form-campo">
                        <label className="form-label">Fecha de revisión</label>
                        <input
                        type="date"
                        name='fecha_mes'
                        id="fecha_mes"
                        placeholder="Ingresa la fecha de revisión"
                        className="form-control"
                        />
                    </div>

                     <div className="form-group">
                        <label className="card-subtitle">Visualizar el documento:</label>
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

export default Revisar_Informe;