import React, { useState } from "react";
import "/resources/css/Style.css";
import Swal from "sweetalert2";

function SelectorArchivo({ onChange, multiple = false }) {
  const [archivos, setArchivos] = useState([]);
  const MAX_SIZE_BYTES = 5 * 1024 * 1024;

  const manejarArchivo = (e) => {
    const listaArchivos = Array.from(e.target.files);

    if (listaArchivos.length === 0) return;

    if (!multiple && listaArchivos.length > 1) {
      Swal.fire({
        title: 'Error',
        text: 'Solo puedes subir un solo archivo',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      e.target.value = '';
      return;
    }

    for (const file of listaArchivos) {
      const isPdfType = file.type === 'application/pdf';
      const isPdfExtension = file.name.toLowerCase().endsWith('.pdf');

      if (!isPdfType && !isPdfExtension) {
        Swal.fire({
          title: 'Error',
          text: `El archivo "${file.name}" no es un PDF válido`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        e.target.value = '';
        return;
      }

      if (file.size > MAX_SIZE_BYTES) {
        Swal.fire({
          title: 'Error',
          text: `El archivo "${file.name}" supera el límite de 5 MB`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        e.target.value = '';
        return;
      }
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
        accept=".pdf, application/pdf"
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
          e.currentTarget.style.color = '#fff';
        }}
      >
        <i className="bi bi-file-earmark-arrow-up"></i>
        <span>
          {archivos.length > 0 
            ? (multiple ? `${archivos.length} archivos seleccionados` : archivos[0].name) 
            : "Seleccionar archivo"}
        </span>
      </label>
    </div>
  );
}

export default SelectorArchivo;