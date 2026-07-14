import React, { useState, useEffect } from "react";
import { create_memoria, get_activ } from "../../Components/api/memoria.jsx";
import { getProgramData } from "../../Components/api/program.jsx";
import Mod_Memoria from "../../Pages/Modals/Modificar/Mod_Memoria.jsx";
import Swal from "sweetalert2";

function VECA_Memoria({ onCompletes }) {

  // Crear la descripcion de la memoria
  const [descrip_gen, setDescripcion] = useState('');
  const [mostrarModalMod, setMostrarModalMod] = useState(false);
  const [memoriaSeleccionada, setMemoriaSeleccionada] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create_memoria({
      descrip_gen
    });
    Swal.fire({
      title: "¡Guardado!",
      text: "La información se guardó correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar"
    });
    onComplete();
  };

  //Traer datos de la memoria fotografica completa
  const [memoria, setMemoria] = useState([]);

  useEffect (() => {
      const loadInfo = async () => {
        try {
          const response = await get_activ();
          setMemoria(response || []); // Asigna la respuesta directamente. Si es null/undefined, usa un array vacío.
          console.log(response);
        }
        catch (error) {
          console.log("Error al cargar los datos del programa")
        }
      }
  
      loadInfo();
  }, []);

  const handleModificarMemoria = (memoria) => {
    setMemoriaSeleccionada(memoria);
    setMostrarModalMod(true);
  };


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
              value={memoria.descrip_gen || ''}
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
        {
          mostrarModalMod && (
            <Mod_Memoria
              cerrarModal={() => setMostrarModalMod(false)}
              actividad={memoriaSeleccionada}
            />
          )
        }
        
        <tbody>
          {memoria.map((item, index) => (
            <tr key={index}>
              <td>{item.otras_activ}</td>
              <td>{item.descripcion}</td>
              <td>
                <button type="button" className="btn-primario">Ver fotografías</button>
              </td>
              <td>
                <button type="button" className="btn-negativo" onClick={() => handleModificarMemoria(item)}>Modificar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>          
    </div>
  );
}

export default VECA_Memoria;   