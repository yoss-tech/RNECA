import React, { useState, useEffect } from 'react';
import { cargarImg } from '../Components/api/memoria.jsx';
import { data } from 'autoprefixer';

const ImagenActividad = ({ idFoto, isSelected, onSelect }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let objectUrl = '';

    const cargarImagen = async () => {
      try {
        const blob = await cargarImg(idFoto);
        objectUrl = window.URL.createObjectURL(blob);
        setImageUrl(objectUrl);
      } catch (error) {
        console.error(`Error al cargar la foto ${idFoto}:`, error);
      } finally {
        setCargando(false);
      }
    };

    cargarImagen();

    return () => {
      if (objectUrl) {
        window.URL.revokeObjectURL(objectUrl);
      }
    };
  }, [idFoto]);

  if (cargando) {
    return <div style={{ width: '150px', height: '150px', background: '#f0f0f0', display: 'inline-block', margin: '5px' }}>Cargando...</div>;
  }
  
  return (
    imageUrl && (
      <div
        className={`image-card ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(idFoto)}
        data-idFoto={idFoto}
        
      >
        <img
          src={imageUrl}
          alt="Foto de actividad"
          style={{ width: '160px', height: '160px', objectFit: 'cover', margin: '5px', borderRadius: '4px' }}
        />
        {isSelected && <div className="selected-overlay"></div>}
      </div >
    )
  );
};

export default ImagenActividad;