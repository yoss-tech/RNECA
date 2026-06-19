import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Perfil_DirectorM({ cerrarModal }) {
    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Perfil</h4>
                </div>

                <div className="modal-body">
                     <div className="form-group">
                        <label className="card-subtitle">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Nombre del director municipal"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Correo electrónico:</label>
                        <input type="text" className="form-control" placeholder="Correo electrónico"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Contraseña:</label>
                        <input id="nombre" type="text" className="form-control" placeholder="Contraseña del director municipal"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Municipio:</label>
                        <input id="nombre" type="text" className="form-control" placeholder="Nombre del municipio"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Instancia operativa:</label>
                        <input id="nombre" type="text" className="form-control" placeholder="Nombre de la instancia operativa"/>
                    </div>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}
export default Perfil_DirectorM;