import React, { useState, useEffect } from "react";
import { getOficioCorreccion } from "@/Components/api/oficio";

function DIC_Correcciones() {
  const [oficios, setOficios] = useState([]);
  const [loading, setLoading] = useState(true);
  const cargarCorrecciones = async () => {
    const response = await getOficioCorreccion();
    if (response && response.status === 200) {
      setOficios(response.body);
      console.log(response);
      setLoading(false);
    }
  };
  useEffect(() => {
    cargarCorrecciones();
  }, []);

  return (
  <div className="page-container">
    <h1 className="page-title">Informes en corrección.</h1>
    <h2 className="page-subtitle">Visualice los informes devueltos para corrección debido a observaciones detectadas durante la revisión.</h2>
    
    <table class="tabla-registros">
      <thead>
        <tr>
          <th className="th-start">ECA</th>
          <th className="th-start">Mes</th>
          <th className="th-start">Observaciones</th>
          <th className="th-start">Fecha</th>
        </tr>
      </thead>

      <tbody>
        {loading ? (
          <tr>
            <td colSpan="4">
              <p className="text-bold">Cargando datos...</p> 
            </td>
          </tr>
        ) : oficios.length > 0 ? (
          oficios.map((oficioCor) => (
            <tr key={oficioCor.id_oficio}>
              <td>{oficioCor.nombre}</td>
              <td>{oficioCor.mes_oficio}</td>
              <td>{oficioCor.observacion}</td>
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

export default  DIC_Correcciones;   