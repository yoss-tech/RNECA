import React, {useState, useEffect} from "react";
import {dateNow, mostrarSoloMes} from "../../Components/functions.jsx";
import {infoEca} from "../../Components/api/infoEca.jsx";

function VECA_Presente({ onComplete }) {

  const [municipio, setMunicipio] = useState('');
  const [director, setDirector] = useState('');

  useEffect(() =>{
    const loadInfo = async () => {
      const response = await infoEca();
      // Accedemos a .body porque así lo envía el controlador de Laravel
      if (response && response.body) {
        setMunicipio(response.body.municipio || '');
        setDirector(response.body.director || '');
      }
    }

    loadInfo();
  }, []); // Agregamos [] para que solo se ejecute al montar el componente

  const handleSubmit = () => {
    try {
      //Post para bd
      onComplete();
    } catch(error) {
      console.error("Error al guardar:", error);
    }
  };
  
  return (
  <div className="page-container">
    <h1 className="page-title">Confirmación de información</h1>
    <h2 className="page-subtitle">Verifique los datos capturados antes de continuar.</h2>
    <p className="page-text">Revise la información registrada antes de guardar o enviar el informe mensual.</p>
    
    <div className="form-registro">
      <div className="form-campo">
        <label className="form-label">Fecha</label>
        <input type="text" readOnly placeholder="Fecha del informe" className="form-control" value={dateNow().toLocaleDateString()} />
      </div>
      
      <div className="form-campo">
        <label className="form-label">Municipio</label>
        <input type="text" readOnly placeholder="Nombre del municipio" className="form-control" value={municipio} />
      </div>

      <div className="form-campo">
        <label className="form-label">Mes del informe</label>
        <input type="text" readOnly placeholder="Mes del informe" className="form-control" value={mostrarSoloMes() || ""} />
      </div>

      <div className="form-campo">
        <label className="form-label">Director general del municipio</label>
        <input type="text" readOnly placeholder="Nombre del director general" className="form-control" value={director} />
      </div>

      <div className="form-campo">
        <label className="form-label">Con copia</label>
        <textarea rows="3" placeholder="Ingresa el CCP" className="form-control"></textarea>
      </div>

      <div className="page-botones">
        <button type="button" className="btn-primario" onClick={handleSubmit}>Guardar</button>
      </div>
    </div>
  </div>
  );
}

const InfoEca = infoEca(); // Esto devuelve una promesa
InfoEca.then(data => {
  console.log("Información del eca:", data);
}).catch(error => {
  console.error("Error al obtener la información del usuario:", error);
})

export default VECA_Presente;   