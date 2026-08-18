import React, { useState, useEffect } from "react";
import "../../css/image.css"
import Swal from "sweetalert2";
import Toast from "@/Pages/Toast";

function SelectorImagen({ onChange, multiple = false }) {
  const [imagenes, setImagenes] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState('');
  const MAX_IMAGENES = 6;
  const MAX_SIZE = 5 * 1024 * 1024;

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);


  const manejarImagen = (e) => {
    const archivos = Array.from(e.target.files);

    if(archivos.length > MAX_IMAGENES){
      setError(
        Swal.fire({
          title: 'Error',
          text: 'No puedes subir más de 6 imágenes',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      );
      e.target.value = ''; 
      return;
    }

    // 2. Validar tamaño de cada archivo
    for (const file of archivos) {
      if (file.size > MAX_SIZE) {
        setError(
          Swal.fire({
            title: 'Error',
            text: 'Uno de los archivo es muy pesado, revisa que no sea mayor a 5mb',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        );
        e.target.value = ''; 
        return;
      }

      if(file.type !== 'image/*'){
        setError(
          Swal.fire({
            title: 'Error',
            text: 'Uno de los archivo no es una imagen',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        );
        e.target.value = ''; 
        return;
      }
    }


    // Llama a la función `onChange` del componente padre para pasarle los archivos.
    if (onChange) {
      onChange(e); // Pasamos el evento completo para que el padre pueda acceder a e.target.files
    }

    if (archivos.length > 0) {
      const urls = archivos.map(archivo => URL.createObjectURL(archivo));
      setImagenes(urls);
    }
  };

  return (
    <div>
      <input
        id="imagen"
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={manejarImagen}
        className="selector-control"
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {imagenes.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Vista previa ${index + 1}`}
            style={{
              width: "150px",
              border: "1px solid var(--gris-color)",
              cursor: "pointer"
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

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
            src={selectedImage}
            alt="Vista ampliada"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain"
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SelectorImagen;