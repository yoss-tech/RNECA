import Reac, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import SelectorImagen from "@/Components/SelectorImagen.jsx";
import { addImage } from '../../Components/api/memoria.jsx';
import Swal from "sweetalert2";


function SubirImagenes({ cerrarModal, Infoactividad, cargarImg }) {

    const [imagenesNew, setImagenesNew] = useState([]);

    const handleImageChange = (e) => {
        if (e.target.files) {
            setImagenesNew(Array.from(e.target.files));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addImage({
                id_program: Infoactividad.id_program,
                imagenes: imagenesNew
            });
            await cargarImg();
            Swal.fire({
                title: 'Imagenes agregadas correctamente!',
                text: 'Tus imagenes acaban de ser subidas, ya puedes visualizarlas',
                icon: "success",
                confirmButtonText: "Aceptar",
                customClass: {
                    popup: 'custom-swal-zindex'
                }
            });
        }
        catch (error) {
            console.log(error);
        }
        setImagenesNew([]);
        cerrarModal();
    }


    return (
        <div className="overlay">

            <div className="modal-box" style={{width:"800px"}}>

                <div className="modal-head">
                    <h4>Agregar más imágenes</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <form onSubmit={handleSubmit}>
                            {
                                <SelectorImagen onChange={handleImageChange} multiple={true} />
                            }
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

export default SubirImagenes;