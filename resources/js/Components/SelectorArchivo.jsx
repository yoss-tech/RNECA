import React, { useState } from "react";
import "/resources/css/Style.css";

function SelectorArchivo({ onChange, multiple = false }) {
  const [archivos, setArchivos] = useState([]);
  const [error, setError] = useState('');
  const MAX_SIZE = 5 * 1024 * 1024;

  const manejarArchivo = (e) => {
    const listaArchivos = Array.from(e.target.files);

    if (!listaArchivos.length > 1) {
      setError(
        Swal.fire({
          title: 'Error',
          text: 'Solo puedes subir un solo archivo',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      );
      e.target.value = '';
      return;
    }

    if (listaArchivos > MAX_SIZE) {
      setError(
        Swal.fire({
          title: 'Error',
          text: 'El archivo es muy pesado, revisa que no sea mayor a 5MB',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      );
      e.target.value = '';
      return;
    }

    if (listaArchivos.type !== 'application/pdf') {
      setError(
        Swal.fire({
          title: 'Error',
          text: 'El archivo seleccionado no es un PDF',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      );
      e.target.value = '';
      return;
    }

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
        accept="application/pdf"
      />
      <label
        htmlFor={inputId}
        className="btn-neutral"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#98989a';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#98989a';
          e.currentTarget.style.color = '#fff'
        }}
      >
        <i className="bi bi-file-earmark-arrow-up"></i>
        <span>{archivos.length > 0 ? (multiple ? `${archivos.length} archivos seleccionados` : archivos[0].name) : "Seleccionar archivo"}</span>
      </label>
    </div>
  );
}

export default SelectorArchivo;