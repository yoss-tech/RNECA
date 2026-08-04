import Reac, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import SelectorArchivo from "@/Components/SelectorArchivo";
import { subInfoFirm } from "../../Components/api/oficio.jsx"
import { dateShortNow } from "@/Components/functions";

function SubirArchivo({ cerrarModal, idOficio, oficios }) {

    console.log(idOficio)

    const [ruta_oficio, setRuta_oficio] = useState(null);
    const [fecha_oficio, setFechaoficio] = useState(dateShortNow);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await subInfoFirm({
            id_oficio: idOficio,
            fecha_firma: fecha_oficio,
            ruta_oficio_firma: ruta_oficio
        });
        await oficios();
        Swal.fire({
            title: "¡Enviado!",
            text: "Oficio subido",
            icon: "success",
            confirmButtonText: "Aceptar"
        });
    };

    const handleFileChange = (e) => {
        setRuta_oficio(e.target.files[0]);
    };


    return (
        <div className="overlay">

            <div className="modal-box">

                <div className="modal-head">
                    <h3>Subir archivo firmado</h3>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <form onSubmit={handleSubmit}>
                            <SelectorArchivo onChange={handleFileChange} />
                        </form>
                    </div>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                    <button type="submit" className="btn-primario" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default SubirArchivo;