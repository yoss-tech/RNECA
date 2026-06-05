import { Select } from "@headlessui/react";
import React from "react";

function CEAA_Validados() {

  return (

    <div className="registro-container">
      <h1 className="registro-title">Informes revisados y aprobados.</h1>
      <h2 className="registro-subtitle">Consulte los informes que fueron revisados y validados correctamente durante el periodo mensual.</h2>
    
       <div className="dashboard">
            <div className="dashboard-left">
                <div className="buscador">
                     <h3 class="card-text">Municipio:</h3>
                       <select className="municipio-select">
                       <option value="">Selecciona una opción</option>
                       <option value="1">Toluca</option>
                       <option value="2">Metepec</option>
                       <option value="3">Lerma</option>
                       <option value="4">Atlacomulco</option>
                       <option value="5">Valle de Bravo</option>
                       </select>
                </div>

                <div className="cards cards-revision">
                    <div className="card card-municipio">
                        <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Mes:</p>
                            <p class="card-text">Fecha:</p>
                            <button className="btn btn-guardar">Leer documento</button>
                        </div>
                    </div>

                    <div className="card card-municipio">
                        <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Mes:</p>
                            <p class="card-text">Fecha:</p>
                            <button className="btn btn-guardar">Leer documento</button>
                        </div>
                    </div>

                    <div className="card card-municipio">
                        <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Mes:</p>
                            <p class="card-text">Fecha:</p>
                            <button className="btn btn-guardar">Leer documento</button>
                        </div>
                    </div>

                    <div className="card card-municipio">
                        <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Mes:</p>
                            <p class="card-text">Fecha:</p>
                            <button className="btn btn-guardar">Leer documento</button>
                        </div>
                    </div>
                    
                    <div className="card card-municipio">
                        <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Mes:</p>
                            <p class="card-text">Fecha:</p>
                            <button className="btn btn-guardar">Leer documento</button>
                        </div>
                    </div>

                    <div className="card card-municipio">
                        <div class="card-body">
                            <h3 class="card-titulo">Municipio</h3>
                            <h3 class="card-title">Instancia Operativa</h3>
                            <p class="card-text">Mes:</p>
                            <p class="card-text">Fecha:</p>
                            <button className="btn btn-guardar">Leer documento</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default CEAA_Validados;     