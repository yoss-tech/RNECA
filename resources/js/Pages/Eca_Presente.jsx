import React from "react";

function VECA_Presente() {

  return (

    <div className="registro-container">
      <h2 className="registro-title"> Generación de registros</h2>
      <h5 className="registro-subtitle"> Presente del informe mensual del Espacio de Cultura del Agua</h5>
       <p className="registro-text">Verifique que la información mostrada sea correcta.</p>

      <div className="form-registro">
        <div className="campo">
          <label>Fecha</label>
          <input type="text" readOnly placeholder="05/05/2026 "/>
        </div>

        <div className="campo">
          <label>Municipio</label>
          <input type="text" readOnly placeholder="Nombre del municipio" />
        </div>

        <div className="campo">
          <label>Mes del informe</label>
          <input type="text" readOnly placeholder="Mes del informe"/>
        </div>

        <div className="campo">
          <label>Director general del municipio</label>
          <input type="text" 
            readOnly placeholder="Nombre del director general"/>
        </div>

        <div className="campo">
          <label>CCP</label>
          <textarea rows="3" placeholder="Ingresa el CCP"></textarea>
        </div>

        <div className="botones-registro">
          <button type="button" className="btn-guardar" >Guardar </button>
        </div>
        
      </div>
    </div>
  );
}

export default VECA_Presente;   