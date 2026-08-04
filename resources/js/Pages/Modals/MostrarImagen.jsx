import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import "../../../css/image.css"
import { getImgByactiv, deleteImage, addImage } from '../../Components/api/memoria.jsx';
import ImagenActividad from "@/Components/ImagenActividad.jsx";
import Swal from "sweetalert2";
import SubirImagenes from "./SubirImagenes";

function Mostrar_Imagenes({ cerrarModal, actividad }) {
  const [imagenes, setImagenes] = useState([]);
  const [selectedImageIds, setSelectedImageIds] = useState(new Set());
  const [imagenesNew, setImagenesNew] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const handleAgregarImg = () => {
    setMostrarModal(true)
  }

  // Petición para agregar nuevas imagenes a la actividad
  const handleImageChange = (e) => {
    if (e.target.files) {
      setImagenesNew(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addImage({
        id_program: actividad.id_program,
        imagenes: imagenesNew
      });
    }
    catch (error) {
      console.log(error);
    }
    setImagenesNew([]);
    cerrarModal();
  }

  // Petición para trar las id las imgenes en base a la activida con la que estan relacionada
  useEffect(() => {
    CargarImagenes();
  }, [actividad.id_program]);

  const CargarImagenes = async () => {
    try {
      const response = await getImgByactiv(actividad.id_program);
      // Map the response to include 'full' and 'alt' properties for the modal viewer
      const formattedImages = response.map(img => ({
        ...img,
        full: `/api/fotos/${img.id_foto}/archivo`, // Construct the full URL for the modal
        alt: img.nombre || `Imagen de actividad ${actividad.id_program}` // Use 'nombre' or a default alt text
      }));
      setImagenes(formattedImages);
    } catch (error) {
      console.error("Error al cargar las imágenes:", error);
    }
  };

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

    cerrarModal();
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
          <h3>Visualiza y gestiona las imágenes</h3>
        </div>
        <div className="modal-body">
          {imagenes.length === 0 &&(
            <p>No hay fotos registradas para esta actividad. ¿Deseas agregar alguna?</p>
          )}
          <div className="image-grid">
            {imagenes.length > 0 && (
              imagenes.map((foto) => (
                <ImagenActividad
                  key={foto.id_foto}
                  idFoto={foto.id_foto}
                  isSelected={selectedImageIds.has(foto.id_foto)}
                  onSelect={handleImageToggle}
                  onZoom={() => setSelectedImage(foto)}
                />
              )))
            }
            {selectedImage && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000
                }}
                onClick={() => setSelectedImage(null)}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "none",
                    border: "none",
                    color: "white",
                    fontSize: "30px",
                    cursor: "pointer"
                  }}
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <img
                  src={selectedImage.full}
                  alt="Vista ampliada"
                  style={{
                    maxWidth: "90%",
                    maxHeight: "90%",
                    objectFit: "contain"
                  }}
                />
              </div>
            )}
            {mostrarModal && (
              <SubirImagenes
                cerrarModal={() => setMostrarModal(false)}
                Infoactividad={actividad}
                cargarImg={CargarImagenes}
              />
            )}
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
              <button type="button" className="btn-primario" onClick={handleAgregarImg} style={{ marginRight: '10px' }}>Agregar imagenes</button>
              <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mostrar_Imagenes; 