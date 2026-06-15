import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import SelectorImagen from "../../Components/SelectorImagen.jsx";

function ECAM_Inicio({ cerrarModal }) {
    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h4>Completa los siguientes datos</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="card-subtitle">Nombre del director general:</label>
                        <input type="text" className="form-control" placeholder="Ingresa el nombre del director general"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Nombre de la instancia operativa:</label>
                        <input type="text" className="form-control" placeholder="Ingresa el nombre de la instancia operativa"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Subir logo de la instancia:</label>
                         <SelectorImagen/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Número del ultimo registro:</label>
                        <input id="nombre" type="text" className="form-control" placeholder="Ingresa el número del ultimo registro"/>
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Nueva contraseña:</label>
                        <input id="nombre" type="text" className="form-control" placeholder="Ingresa una nueva contraseña"/>
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

export default ECAM_Inicio;