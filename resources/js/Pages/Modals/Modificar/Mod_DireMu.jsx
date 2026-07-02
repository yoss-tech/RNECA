import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Modificar_DireMunicipal({ cerrarModal }) {
    const [mostrarPassword, setMostrarPassword] = useState(false);

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
                        <div className="input-password">
                            <input type={mostrarPassword ? "text" : "password"} className="form-control" placeholder="Ingresa tu contraseña"/>
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

export default Modificar_DireMunicipal;