import React, { useState, useEffect } from "react";
import { create_memoria, get_activ } from "../../Components/api/memoria.jsx";
import { getProgramData } from "../../Components/api/program.jsx";


function VECA_Memoria({ onComplete }) {

  // Crear la descripcion de la memoria
  const [descrip_gen, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create_memoria({
      descrip_gen
    });
    onComplete();
  };

  //Traer datos de la memoria fotografica completa
  const [memoria, setMemoria] = useState({});

  useEffect (() => {
      const loadInfo = async () => {
        try {
          const response = await get_activ();
          setActividades(response || []); // Asigna la respuesta directamente. Si es null/undefined, usa un array vacío.
          console.log(response);
        }
        catch (error) {
          console.log("Error al cargar los datos del programa")
        }
      }
  
      loadInfo();
    }, []);


  return (
    <div className="page-container">
      <h1 className="page-title">Evidencia visual de las actividades realizadas.</h1>
      <h2 className="page-subtitle">Adjunte fotografías y complete la información correspondiente de las actividades efectuadas.</h2>
      
      <form className="form-registro" onSubmit={handleSubmit}>
        <div className="form-registro">
          <div className="form-campo">
            <label className="form-label">Descripción general de la memoria fotográfica</label>
            <textarea
              id="descrip_gen"
              ows="3"
              placeholder="Ingresa la descripción general"
              className="form-control"
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <div className="page-botones">
            <button type="submit" className="btn-primario">Guardar</button>
          </div>
        </div>
      </form>
      <table class="tabla-registros">
        <thead>
          <tr>
            <th className="th-start">Título</th>
            <th className="th-start">Descripción</th>
            <th className="th-start">Fotografías</th>
            <th>Acciones</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>TÍTULO</td>
            <td>DESCRIPCIÓN</td>
            <td>FOTOGRAFÍAS</td>
            <td className="btn-container-horizontal">
              <button type="button" className="btn-negativo">Modificar</button>
            </td>
          </tr>
        </tbody>
      </table>          
    </div>
  );
}

export default VECA_Memoria;   