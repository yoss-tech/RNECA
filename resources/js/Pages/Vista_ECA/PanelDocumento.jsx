import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import DocumentoPreview from './DocumentoPreview';
import { create_ofice } from "../../Components/api/oficio.jsx";
import { mostrarSoloMes } from "../../Components/functions.jsx"
import '../../../css/Preview.css';
import { infoEca } from '../../Components/api/infoEca.jsx';

function PanelDocumento() {
  const componentRef = useRef(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [numPaginas, setNumPaginas] = useState(0);

  // Ejemplo de estado.
  const [datosFormulario, setDatosFormulario] = useState({
    ccp: '',
  });

  // Configuración de react-to-print
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Reporte_RNECA',
  });

  const irAPaginaSiguiente = () => {
    setPaginaActual((prev) => Math.min(prev + 1, numPaginas));
  };

  const irAPaginaAnterior = () => {
    setPaginaActual((prev) => Math.max(prev - 1, 1));
  };

  const [ruta_oficio, setRuta_oficio] = useState(null);
  const [mes_oficio, setMes_oficio] = useState(mostrarSoloMes());

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create_ofice({
      mes_oficio: mes_oficio,
      ruta_oficio: ruta_oficio
    });
  };



  return (
    <div className="page-container">
      <h1 className="page-title">Consulta y revisión del avance del informe.</h1>
      <h2 className="page-subtitle">Visualice el progreso del informe y verifique la información registrada antes del envío.</h2>
      <p className="page-text">Verifique que la información mostrada en la vista previa sea correcta.</p>
      <div className="panel-documento-grid">
        {/* SECCIÓN IZQUIERDA: Controles */}
        <div className="panel-controles">
          <h2 className="panel-controles-titulo">Panel de control</h2>
          <div className="panel-controles-form">
            <div>
              <label className="panel-form-label">C.C.P</label>
              <input
                type="text"
                className="panel-form-input"
                value={datosFormulario.ccp}
                onChange={(e) => setDatosFormulario({ ...datosFormulario, ccp: e.target.value })}
              />
            </div>
          </div>
          <div className="page-botones">
            <form action="">
              <div className="form-registro">
                <div className="form-campo">
                  <label className="panel-form-label">Mes del oficio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mes_oficio"
                    value={mes_oficio}
                    onChange={(e) => setMes_oficio(e.target.value)}
                    readOnly
                  />
                  <input type="file" accept=".pdf" onChange={(e) => setRuta_oficio(e.target.files[0])} />
                </div>
              </div>
            </form>
          </div>
          {/* <h2 className="panel-controles-titulo">Modificar Datos</h2> */}
          <button onClick={handlePrint} className="btn-primario" style={{ marginTop: '1rem' }}>
            Generar PDF
          </button>
          <button type="submit" className="btn-primario" onClick={handleSubmit} style={{ marginTop: '1' }}>
            Enviar a revisión
            </button>
        </div>

        {/* SECCIÓN DERECHA: Vista Previa */}
        <div className="panel-preview">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Vista Previa del Documento</h2>

          {/* El contenedor para la vista previa ahora usa paginación */}
          <div className="preview-container-paged">
            <DocumentoPreview
              ref={componentRef}
              datosDinamicos={datosFormulario}
              paginaActual={paginaActual}
              setNumPaginas={setNumPaginas} // Pasamos la función para actualizar el número de páginas
            />
          </div>

          {/* Controles de paginación */}
          {numPaginas > 0 && (
            <div className="paginacion-controles">
              <button onClick={irAPaginaAnterior} disabled={paginaActual === 1} className="btn-neutral">
                Anterior
              </button>
              <span>
                Página {paginaActual} de {numPaginas}
              </span>
              <button onClick={irAPaginaSiguiente} disabled={paginaActual >= numPaginas} className="btn-neutral">
                Siguiente
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default PanelDocumento;
