import React, { useState, useEffect } from "react";
import { get_ofice } from "@/Components/api/oficio.jsx";
import { dowloadOfice } from "@/Components/api/dowload_ofice.js";
import SubirArchivo from "../Modals/SubirArchivo";

function DICRegistros_Recibidos() {
  
  const [mostrarSubir, setMostrarSubir] = useState(false);
  const [idOficioSeleccionado, setIdOficioSeleccionado] = useState(null);
  const handlerSubirOficio = (idOficio) => {
    setIdOficioSeleccionado(idOficio);
    setMostrarSubir(true);
  }
  
  const [ofice, setOfice] = useState([]);
  const [loading, setLoading] = useState(true);
  const cargarOficios = async () => {
    try {
      const response = await get_ofice();
      console.log(response);
      setOfice(response || []);
      setLoading(false);
    }
    catch (error) {
      console.log("Error al cargar los datos del programa");
      setLoading(false);
    }
  }
  useEffect(() => {
    cargarOficios();
  }, []);

  const handleDownloadPdf = async (id_oficio) => {
    try {
      const pdfBlob = await dowloadOfice(id_oficio);
      //objeto URL temporal a partir del Blob
      const blobUrl = window.URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));
      // enlace invisible, simulamos click y lo removemos
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', `oficio_${id_oficio}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      // window.URL.revokeObjectURL(blobUrl);
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Informes pendientes de validación.</h1>
      <h2 className="page-subtitle">Consulte los informes enviados por su municipio para descargar, revisar, firmar y sellar.</h2>

      <table class="tabla-registros">
        <thead>
          <tr>
            <th className="th-start">ECA</th>
            <th className="th-start">Mes</th>
            <th className="th-start">Fecha de envío</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">
                <p className="text-bold">Cargando datos...</p> 
              </td>
            </tr>
          ) : ofice.length > 0 ? (
            ofice.map((item, index) => (
              <tr key={index.id_oficio}>
                <td>{item.nombre_eca}</td>
                <td>{item.mes_oficio}</td>
                <td>{item.fecha_registro}</td>
                <td className="btn-container-horizontal">
                  <button type="button" className="btn-neutral" onClick={() => handleDownloadPdf(item.id_oficio)}>Descargar PDF</button>
                  <button type="button" className="btn-primario" onClick={() => handlerSubirOficio(item.id_oficio)}>Subir Firmado</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                <p className="text-bold">No existen informes recibidos.</p> 
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {mostrarSubir && (
        <SubirArchivo
          cerrarModal={() => setMostrarSubir(false)}
          idOficio={idOficioSeleccionado}
          oficios={cargarOficios}
        />
      )}
    </div>
  );
}

export default DICRegistros_Recibidos;   