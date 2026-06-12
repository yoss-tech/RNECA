import React from "react";

function VECA_Presente() {

  return (
  <div className="page-container">
    <h1 className="page-title">Confirmación de información</h1>
    <h2 className="page-subtitle">Verifique los datos capturados antes de continuar.</h2>
    <p className="page-text">Revise la información registrada antes de guardar o enviar el informe mensual.</p>
    
    <div className="form-registro">
      <div className="form-campo">
        <label className="form-label">Fecha</label>
        <input type="text" readOnly placeholder="Fecha del informe" className="form-control"/>
      </div>
      
      <div className="form-campo">
        <label className="form-label">Municipio</label>
        <input type="text" readOnly placeholder="Nombre del municipio" className="form-control"/>
      </div>

      <div className="form-campo">
        <label className="form-label">Mes del informe</label>
        <input type="text" readOnly placeholder="Mes del informe" className="form-control"/>
      </div>

      <div className="form-campo">
        <label className="form-label">Director general del municipio</label>
        <input type="text" readOnly placeholder="Nombre del director general" className="form-control"/>
      </div>

      <div className="form-campo">
        <label className="form-label">CCP</label>
        <textarea rows="3" placeholder="Ingresa el CCP" className="form-control"></textarea>
      </div>

      <div className="page-botones">
        <button type="button" className="btn-primario">Guardar</button>
      </div>
    </div>
  </div>
  );
}

export default VECA_Presente;   