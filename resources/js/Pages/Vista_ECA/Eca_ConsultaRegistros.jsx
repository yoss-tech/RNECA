import React, { useState, useEffect } from "react";
import ECA_Correccion from "../Modals/ECA_Correccion.jsx";
import { getOficeEca } from "@/Components/api/oficio.jsx";
import { dowloadOfice } from "@/Components/api/dowload_ofice.js";

function VECA_ConsultaReg() {

  const [mostrarCorreccion, setMostrarCorreccion] = useState(false);

  const [oficios, setOficios] = useState([]);

  useEffect(() => {
    const fetchOficios = async () => {
      try {
        const data = await getOficeEca();
        setOficios(data);
      } catch (error) {
        console.error('Error al obtener los oficios:', error);
      }
    };

    fetchOficios();
  }, []);


  const handleDownloadPdf = async (id_oficio) => {

    try {
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
    catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="page-container">
      <h1 className="page-title">Historial de informes mensuales enviados.</h1>
      <h2 className="page-subtitle">Consulte los informes registrados y enviados en periodos anteriores.</h2>

      <table class="tabla-registros">
        <thead>
          <tr>
            <th className="th-start">Mes</th>
            <th className="th-start">Estado</th>
            <th className="th-start">Fecha de envío</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {oficios.map((item, index) => (
            <tr key={index.id_oficio}>
              <td>{item.mes_oficio}</td>
              <td>{item.nombre_tipo}</td>
              <td>{item.fecha_registro}</td>
              <td className="btn-container-horizontal">
                <button type="button" className="btn-neutral" onClick={() => handleDownloadPdf(item.id_oficio)}>Descargar PDF</button>
              </td>
            </tr>
          ))}

          <tr>
            <td>Marzo</td>
            <td class="estado correcciones">Correcciones</td>
            <td>DIA de MES del AÑO</td>
            <td className="btn-container-horizontal">
              <button type="button" className="btn-negativo" onClick={() => setMostrarCorreccion(true)}>
                Ver correcciones
              </button>
              {mostrarCorreccion && (
                <ECA_Correccion
                  cerrarModal={() => setMostrarCorreccion(false)}
                />
              )}
            </td>
          </tr>

          <tr>
            <td>Febrero</td>
            <td class="estado enviado">Enviado</td>
            <td>DIA de MES del AÑO</td>
            <td className="btn-container-horizontal">
              <button type="button" className="btn-neutral">Leer documento</button>
            </td>
          </tr>

          <tr>
            <td>Enero</td>
            <td class="estado pendiente">Pendiente</td>
            <td>DIA de MES del AÑO</td>
            <td className="btn-container-horizontal">
              <button type="button" className="btn-primario">Completar registro pendiente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VECA_ConsultaReg;   