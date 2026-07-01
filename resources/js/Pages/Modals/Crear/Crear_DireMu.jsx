import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Crear_DirectorMunicipal({ cerrarModal }) {
    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Completa los siguientes datos</h4>
                </div>

                <div className="modal-body">
                     <div className="form-group">
                        <label className="card-subtitle">Municipio:</label>
                        <input type="text" className="form-control" placeholder="Ingresa el municipio"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Instancia operativa:</label>
                        <input type="text" className="form-control" placeholder="Ingresa el nombre de la instancia operativa"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Ingresa el nombre del director municipal"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Correo:</label>
                        <input type="text" className="form-control" placeholder="Ingresa el correo"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Crear contraseña:</label>
                        <input id="nombre" type="text" className="form-control" placeholder="Ingresa una contraseña"/>
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

export default Crear_DirectorMunicipal;