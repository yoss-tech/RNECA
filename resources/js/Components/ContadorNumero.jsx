import React, { useState, useEffect, useRef } from 'react';

const Contador = ({ valorFinal, duracion = 3500, valorBase = 0 }) => {
  const [valorFormateado, setValorFormateado] = useState('');
  
  const idAnimacionRef = useRef(null);

  const formateador = new Intl.NumberFormat({
    style: 'decimal',
    minimumFractionDigits: 0
  });

  useEffect(() => {
    let valorActual = valorBase;
    
    const incremento = (valorFinal - valorBase) / (duracion / 16); 

    const actualizar = () => {
      valorActual += incremento;
      const todaviaFalta = incremento > 0 ? valorActual < valorFinal : valorActual > valorFinal;

      if (todaviaFalta) {
        setValorFormateado(formateador.format(Math.floor(valorActual)));
        idAnimacionRef.current = requestAnimationFrame(actualizar);
      } else {
        setValorFormateado(formateador.format(valorFinal));
      }
    };

    idAnimacionRef.current = requestAnimationFrame(actualizar);

    return () => {
      if (idAnimacionRef.current) {
        cancelAnimationFrame(idAnimacionRef.current);
      }
    };
  }, [valorFinal, duracion, valorBase]);

  return <span>{valorFormateado}</span>;
};

export default Contador;