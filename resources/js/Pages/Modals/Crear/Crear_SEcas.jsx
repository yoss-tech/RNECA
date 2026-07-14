import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";


function Crear_SupervisorECAS({ cerrarModal }) {
    const [mostrarPassword, setMostrarPassword] = useState(false);

    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Completa los siguientes datos</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="card-subtitle">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Ingresa el nombre del supervisor de eca" title="Ingresa el nombre del supervisor de eca"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Correo:</label>
                        <input type="email" className="form-control" placeholder="Ingresa el correo" title="Ingresa el correo"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Crear contraseña:</label>
                        <div className="input-password">
                            <input type={mostrarPassword ? "text" : "password"} className="form-control" placeholder="Ingresa una contraseña" title="Ingresa una conraseña"/>
                            <i className={mostrarPassword ? "bi bi-eye-slash" : "bi bi-eye"} onClick={() => setMostrarPassword(!mostrarPassword)}></i>
                        </div>
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

export default Crear_SupervisorECAS;