import React, { useState } from "react";

function SelectorImagen() {
  const [imagen, setImagen] = useState(null);

  const manejarImagen = (e) => {
    const archivo = e.target.files[0];

    if (archivo) {
      setImagen(URL.createObjectURL(archivo));
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={manejarImagen}
        className="selector-control"
      />

      {imagen && (
        <img 
          src={imagen} 
          alt="Vista previa" 
          style={{ width: "150px", marginTop: "10px", border: "1px solid var(--gris-color)" }}
        />
      )}
    </div>
  );
}

export default SelectorImagen;