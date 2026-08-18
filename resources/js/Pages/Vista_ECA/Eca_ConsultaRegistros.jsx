import React, { useState, useEffect } from "react";
import ECA_Correccion from "../Modals/ECA_Correccion.jsx";
import { getOficeEca } from "@/Components/api/oficio.jsx";
import { dowloadOfice } from "@/Components/api/dowload_ofice.js";
import Ver_Informe from '../Modals/Ver_informe.jsx'
import '../../../css/Style.css'
import VECA_Actividades from "./Eca_Actividades.jsx";

function VECA_ConsultaReg({ cambiarVista }) {

  const [mostrarCorreccion, setMostrarCorreccion] = useState(false);
  const [verInforme, setVerInforme] = useState(null);
  const [informeSeleccinado, setInformeSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(true)

  const [oficios, setOficios] = useState([]);

  useEffect(() => {
    const fetchOficios = async () => {
      try {
        const data = await getOficeEca();
        setOficios(data);
        setCargando(false)
      } catch (error) {
        console.error('Error al obtener los oficios:', error);
      }
    };

    fetchOficios();
  }, []);

  const handleVerCorrecciones = (oficio) => {
    setInformeSeleccionado(oficio);
    setMostrarCorreccion(true);
  }

  const handleRedirectToActivities = () => {
    setMostrarCorreccion(false);
    cambiarVista('actividades');
  };

  const handleDownloadPdf = async (id_oficio) => {
    try {
      // petición Axios que está en el otro JS
      const pdfBlob = await dowloadOfice(id_oficio);

      // objeto URL temporal a partir del Blob recibido
      const blobUrl = window.URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));

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
          {cargando ? (
            <tr>
              <td colSpan="6">
                <p className="text-bold">Cargando...</p>
              </td>
            </tr>
            // <div class="loader">
            //   <label className="component-cargando">Cargando...</label>
            //   <div class="loading"></div>
            // </div>
          ) : oficios && oficios.length > 0 ? (
            oficios.map((item) => (
              <tr key={item.id_oficio}>
                <td>{item.mes_oficio}</td>
                <td>{item.nombre_tipo}</td>
                <td>{item.fecha_registro}</td>
                <td className="btn-container-horizontal">
                  {item.nombre_tipo === 'Pendiente' && (
                    <button type="button" className="btn-neutral" onClick={() => setVerInforme(item.id_oficio)}>Ver documento</button>
                  )}
                  {item.nombre_tipo === 'Firmado' && (
                    <button type="button" className="btn-neutral" onClick={() => setVerInforme(item.id_oficio)}>Ver documento</button>
                  )}
                  {item.nombre_tipo === 'Correcciones' && (
                    <button type="button" className="btn-negativo" onClick={() => handleVerCorrecciones(item.observacion)}>
                      Ver correcciones
                    </button>
                  )}
                  {item.nombre_tipo === 'Validado' && (
                    <>
                      <button type="button" className="btn-neutral" onClick={() => setVerInforme(item.id_oficio)}>Ver documento</button>
                      <button type="button" className="btn-neutral" onClick={() => handleDownloadPdf(item.id_oficio)}>Descargar PDF</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <p className="text-bold">No hay actividades registradas.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {mostrarCorreccion && (
        <ECA_Correccion
          oficioCorregir={informeSeleccinado}
          cerrarModal={() => setMostrarCorreccion(false)}
          onRedirectToActivities={handleRedirectToActivities}
        />
      )}
      {verInforme && (
        <Ver_Informe
          idOficio={verInforme}
          cerrarModal={() => setVerInforme(false)}
        />
      )}
    </div>
  );
}

export default VECA_ConsultaReg;   