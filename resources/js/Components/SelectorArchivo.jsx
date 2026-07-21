import React, { useState } from "react";

function SelectorArchivo({ onChange, multiple = false }) {
  const [archivos, setArchivos] = useState([]);

  const manejarArchivo = (e) => {
    const listaArchivos = Array.from(e.target.files);
    setArchivos(listaArchivos);
    if (onChange) {
      onChange(e);
    }
  };

  const inputId = `file-upload-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="file"
        id={inputId}
        onChange={manejarArchivo}
        className="selector-control"
        style={{ display: 'none' }}
        multiple={multiple}
      />
      <label
        htmlFor={inputId}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '8px 12px',
          backgroundColor: '#691B31',
          color: 'white',
          borderRadius: '4px',
          cursor: 'pointer',
          gap: '8px',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          paddingBottom: '10px',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a162a'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#691B31'}
      >
        <i className="bi bi-file-earmark-arrow-up"></i>
        <span>{archivos.length > 0 ? (multiple ? `${archivos.length} archivos seleccionados` : archivos[0].name) : "Seleccionar archivo"}</span>
      </label>
    </div>
  );
}

export default SelectorArchivo;