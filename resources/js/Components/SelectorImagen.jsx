import React, { useState } from "react";

function SelectorImagen() {
  const [imagenes, setImagenes] = useState([]);

  const manejarImagen = (e) => {
    const archivos = Array.from(e.target.files);

    if (archivos.length > 0) {
      const urls = archivos.map((archivo) => URL.createObjectURL(archivo));
      setImagenes(urls);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
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
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectorImagen;