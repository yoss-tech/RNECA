import React, { useState } from "react";

function SelectorImagen({ onChange, multiple = false }) {
  const [imagenes, setImagenes] = useState([]);

  const manejarImagen = (e) => {
    const archivos = Array.from(e.target.files);

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
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectorImagen;