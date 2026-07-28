import React, { useState, useEffect } from "react";
import { getOficeFirm } from "@/Components/api/oficio";
import { dowloadOfice } from "@/Components/api/dowload_ofice.js";

function DIC_Firmados() {

  const [oficiosFirm, setOficiosFirm] = useState([]);

  useEffect(() => {
    cargarOficiosFirm();
  }, [])

  const cargarOficiosFirm = async () => {
    try {
      const data = await getOficeFirm();
      setOficiosFirm(data || []);
    }
    catch (erorr) {
      console.log('Error al obtener los oficios firmados')
    }
  }

  const handleDownloadPdf = async (id_oficio) => {

    try {
      const pdfBlob = await dowloadOfice(id_oficio);
      const blobUrl = window.URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));
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
      <h1 className="page-title">Historial de informes completados.</h1>
      <h2 className="page-subtitle">Consulte los informes firmados, sellados y cargados correctamente en el sistema.</h2>

      <table class="tabla-registros">
        <thead>
          <tr>
            <th className="th-start">ECA</th>
            <th className="th-start">Mes</th>
            <th className="th-start">Fecha subida</th>
            <th>Archivo</th>
          </tr>
        </thead>

        <tbody>
          {oficiosFirm.map((item, index) => (
            <tr key={index.id_oficio}>
              <td>{item.nombre_eca}</td>
              <td>{item.mes_oficio}</td>
              <td>{item.fecha_registro}</td>
              <td className="btn-container-horizontal">
                <button type="button" className="btn-neutral" onClick={() => handleDownloadPdf(item.id_oficio)}>Descargar PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DIC_Firmados;