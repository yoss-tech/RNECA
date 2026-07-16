import React, { useState, useEffect } from "react";
import SubirArchivo from "../Modals/SubirArchivo";
import { get_ofice } from "@/Components/api/oficio.jsx";
import { dowloadOfice } from "@/Components/api/dowload_ofice.js";


function DICRegistros_Recibidos() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ofice, setOfice] = useState([]);

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const response = await get_ofice();
        console.log(response);
        setOfice(response || []);
      }
      catch (error) {
        console.log("Error al cargar los datos del programa")
      }
    }

    loadInfo();
  }, [])

  const handleDownloadPdf = async (id_oficio) => {

    try{
      // 1. Llamamos a la petición Axios que está en el otro JS
      const pdfBlob = await dowloadOfice(id_oficio);

      // 2. Creamos el objeto URL temporal a partir del Blob recibido
      const blobUrl = window.URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));

      // 3. Creamos un enlace invisible, simulamos click y lo removemos
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', `oficio_${id_oficio}.pdf`);
      document.body.appendChild(link);
      
      link.click();
      
      link.remove();
      // window.URL.revokeObjectURL(blobUrl); // Liberamos memoria del navegador
    }
    catch(error){
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
          {ofice.map((item, index) => (
            <tr key={index.id_oficio}>
              <td>{item.nombre_eca}</td>
              <td>{item.mes_oficio}</td>
              <td>{item.fecha_registro}</td>
              <td className="btn-container-horizontal">
                <button type="button" className="btn-neutral" onClick={() => handleDownloadPdf(item.id_oficio)}>Descargar PDF</button>
                <button className="btn-primario" onClick={() => setMostrarModal(true)}>
                  Subir Firmado</button>
                {mostrarModal && (
                  <SubirArchivo
                    cerrarModal={() => setMostrarModal(false)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DICRegistros_Recibidos;   