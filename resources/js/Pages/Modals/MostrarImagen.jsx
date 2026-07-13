import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Mostrar_Imagenes({ cerrarModal }) {
    
    return (
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-head">
          <h4>Visualiza las imagenes</h4>
        </div>
        <div className="modal-body">
            <table class="tabla-registros">
            <tbody>
                <tr>
                <td><img src="/Imagen.png"></img></td>
                <td><img src="/Imagen.png"></img></td>
                <td><img src="/Imagen.png"></img></td>
                <td><img src="/Imagen.png"></img></td>
                </tr>
            </tbody>
            </table>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default Mostrar_Imagenes; 