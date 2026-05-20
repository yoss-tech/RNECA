import React from "react";

const Galeria = (src) => {
  return (
    <div>
       {Object.values(import.meta.glob('/resource/img/PNG/*.png', { eager: true })).map((img, i) => (
        <img key={i} src={img.default} alt="Imagen" width="150" />
      ))}
    </div>
  );
};

export default Galeria;
