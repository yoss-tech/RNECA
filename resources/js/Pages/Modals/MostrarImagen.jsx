import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import "../../../css/image.css"
import { getImgByactiv, deleteImage, addImage } from '../../Components/api/memoria.jsx';
import ImagenActividad from "@/Components/ImagenActividad.jsx";
import Swal from "sweetalert2";
import SelectorImagen from "@/Components/SelectorImagen";

function Mostrar_Imagenes({ cerrarModal, actividad }) {

  const [imagenes, setImagenes] = useState([]);
  const [selectedImageIds, setSelectedImageIds] = useState(new Set());
  const [imagenesNew, setImagenesNew] = useState([]);

  
  // Petición para agregar nuevas imagenes a la actividad

  const handleImageChange = (e) => {
    // e.target.files es una lista de archivos, la convertimos a un array
    if (e.target.files) {
      setImagenesNew(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await addImage({
      id_program: actividad.id_program,
      imagenes: imagenesNew
    });
    }
    catch(error){
      console.log(error);
    }
    setImagenesNew([]);
    cerrarModal();
  }

  // Petición para trar las id las imgenes en base a la activida con la que estan relacionada
  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const response = await getImgByactiv(actividad.id_program);
        setImagenes(response);
      } catch (error) {
        console.error("Error al cargar las imágenes:", error);
      }
    };
    fetchImagenes();
  }, [actividad.id_program]);

  const handleImageToggle = (id) => {
    setSelectedImageIds(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleDeleteSelected = async () => {
    if (selectedImageIds.size === 0) {
      Swal.fire("Atención", "Selecciona al menos una imagen para eliminar.", "warning");
      return;
    }

    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Quieres eliminar ${selectedImageIds.size} imagen(es) seleccionada(s)? Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    });

    if (result.isConfirmed) {
      try {
        const deletionPromises = Array.from(selectedImageIds).map(id => deleteImage(id));
        await Promise.all(deletionPromises);

        setImagenes(prevImagenes =>
          prevImagenes.filter(img => !selectedImageIds.has(img.id_foto))
        );
        setSelectedImageIds(new Set());

        Swal.fire("Eliminadas", "Las imágenes han sido eliminadas correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar las imágenes.", "error");
        console.error("Error al eliminar imágenes:", error);
      }
    }
  };


  return (
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-head">
          <h4>Visualiza y gestiona las imágenes</h4>
        </div>
        <div className="modal-body">
          <div className="image-grid">
            {imagenes.length === 0 &&
              <div>
                <p>No hay fotos registradas para esta actividad. ¿Deseas agregar alguna?</p>
                <form onSubmit={handleSubmit}>
                  {
                    <SelectorImagen onChange={handleImageChange} multiple={true} />
                  }
                </form>
                <br />
                <button type="button" className="btn-primario" onClick={handleSubmit}>Guardar</button>
              </div>
            }
            {imagenes.length > 0 && (
              imagenes.map((foto) => (
                <ImagenActividad
                  key={foto.id_foto}
                  idFoto={foto.id_foto}
                  isSelected={selectedImageIds.has(foto.id_foto)}
                  onSelect={handleImageToggle}
                />
              )))
            }
          </div>
        </div>
        <div className="modal-foot">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <span id="counter" style={{ color: '#691B31', fontWeight: 'bold' }}>
              {selectedImageIds.size} seleccionada(s)
            </span>
            <div>
              <button
                type="button"
                className="btn-negativo"
                onClick={handleDeleteSelected}
                disabled={selectedImageIds.size === 0}
                style={{ marginRight: '10px' }}
              >
                Eliminar seleccionadas
              </button>
              <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mostrar_Imagenes; 