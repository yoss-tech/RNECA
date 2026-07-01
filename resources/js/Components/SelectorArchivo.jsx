import React, { useState } from "react";

function SelectorArchivo() {
  const [archivos, setArchivos] = useState([]);

  const manejarArchivo = (e) => {
    const listaArchivos = Array.from(e.target.files);
    setArchivos(listaArchivos);
  };

  return (
    <div>
      <input
        type="file"
        onChange={manejarArchivo}
        className="selector-control"
      />
    </div>
  );
}

export default SelectorArchivo;