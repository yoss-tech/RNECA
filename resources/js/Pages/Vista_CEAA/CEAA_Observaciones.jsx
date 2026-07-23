import React, {useState, useEffect} from "react";
import { getOficioCorreccion } from "@/Components/api/oficio";

function CEAA_Observaciones() {

  const [oficios, setOficios] = useState([]);
  useEffect(() => {
    cargarCorrecciones();
  }, []);
      
  const cargarCorrecciones = async () => {
    const response = await getOficioCorreccion();
    if(response && response.status==200){
      setOficios(response.body);
      console.log(response);
    }
  };

  return (
  <div className="page-container">
    <h1 className="page-title">Informes devueltos para corrección.</h1>
    <h2 className="page-subtitle">Visualice los informes que fueron regresados por inconsistencias u observaciones detectadas durante la revisión.</h2>
    
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">Información Institucional</th>
          <th className="th-start">Mes</th>
          <th className="th-start">Observaciones</th>
          <th className="th-start">Fecha</th>
        </tr>
      </thead>
      
      <tbody>
        {oficios.length > 0 ? (
          oficios.map((oficioCor) => (
            <tr key={oficioCor.id_oficio}>
              <td>
                <p className="text-title">{oficioCor.nombre_munipio}</p>
                <p className="text-subtitle">{oficioCor.nombre_inst_ope}</p>
            </td>
            <td>{oficioCor.mes_oficio}</td>
            <td>Observaciones</td>
            <td>{oficioCor.fecha_registro}</td>
          </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">
              <p className="text-bold">No existen informes devueltos para corrección.</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  );
}

export default CEAA_Observaciones;     