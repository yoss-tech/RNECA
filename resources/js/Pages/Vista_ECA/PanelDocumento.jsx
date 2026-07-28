import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import DocumentoPreview from './DocumentoPreview';
import { create_ofice, checkOficio } from "../../Components/api/oficio.jsx";
import { mostrarSoloMes } from "../../Components/functions.jsx"
import '../../../css/Preview.css';
import SelectorArchivo from '../../Components/SelectorArchivo';
import Swal from "sweetalert2";

function PanelDocumento() {
  const componentRef = useRef(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [numPaginas, setNumPaginas] = useState(0);
  const [inputId, setInputId] = useState();
  const [resultado, setResultado] = useState(null)
  const [hasShownAlert, setHasShownAlert] = useState(false);

  useEffect(() => {
    const checkRegistro = async () => {
      try {
        const data = await checkOficio()
        setResultado(data.registro_existente);
      }
      catch (error) {
        console.error('Sin registros aún', error);
        setResultado(false); 
      }
    };

    checkRegistro();
  }, []);

  useEffect(() => {
    if (resultado === true && !hasShownAlert) {
      Swal.fire({
        title: '¡Registro existente!',
        text: 'Actualmente el oficio ya fue enviado y esta en proceso de validación, espera a que finalice todo el proceso',
        icon: 'info',
        confirmButtonText: 'Entendido',
        timer: 10000,
        timerProgressBar: true,
      });
      setHasShownAlert(true);
    }
  }, [resultado, hasShownAlert]); 

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
    Swal.fire({
      title: "¡Enviado!",
      text: "Archivo enviando correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar"
    });
    // setInputId(null);
  };

  const handleFileChange = (e) => {
    setRuta_oficio(e.target.files[0]);
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
          <div className="panel-controles-form">
            <form action="">
              <div className="form-registro">
                <div className="form-campo">
                  <label className="panel-form-label">Mes del oficio</label>
                  <input
                    type="text"
                    className="panel-form-input"
                    id="mes_oficio"
                    value={mes_oficio}
                    onChange={(e) => setMes_oficio(e.target.value)}
                    readOnly
                  />
                  <SelectorArchivo onChange={handleFileChange} />
                </div>
              </div>
            </form>
          </div>
          {/* <h2 className="panel-controles-titulo">Modificar Datos</h2> */}
          <button onClick={handlePrint} className="btn-primario" style={{ marginTop: '1rem', fontSize: '15px' }} >
            <i class="bi bi-filetype-pdf"></i>
            Generar PDF
          </button>
          <button type="submit" className="btn-primario" onClick={handleSubmit} disabled={resultado}>
            <i class="bi bi-clipboard2-check"></i>
            Enviar a revisión
          </button>
        </div>

        {/* SECCIÓN DERECHA: Vista Previa */}
        <div className="panel-preview">
          {/* <h2 className="text-xl font-bold mb-4 text-gray-800">Vista Previa del Documento</h2> */}

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
