import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import DocumentoPreview from './DocumentoPreview';
import { create_ofice, getEstatusOficio, updateOficio } from "../../Components/api/oficio.jsx";
import { mostrarSoloMes, dateShortNow } from "../../Components/functions.jsx";
import '../../../css/Preview.css';
// import '../../../css/Style.css';
import SelectorArchivo from '../../Components/SelectorArchivo';
import Swal from "sweetalert2";

function PanelDocumento() {
  const componentRef = useRef(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [numPaginas, setNumPaginas] = useState(0);
  const [inputId, setInputId] = useState();
  const [resultado, setResultado] = useState(null)
  const [hasShownAlert, setHasShownAlert] = useState(false);
  const [isDocumentoLoading, setIsDocumentoLoading] = useState(true);
  const [idOficioActual, setIdOficioActual] = useState(null);
  const [estatusOficio, setEstatusOficio] = useState(null);

  const handleLoadingChange = (isLoading) => {
    setIsDocumentoLoading(isLoading);
  };

  useEffect(() => {
    const checkRegistro = async () => {
      try {
        const data = await getEstatusOficio()
        setResultado(data.body.registro_existente);
        setIdOficioActual(data.body.id_oficio); // Almacenar el id_oficio
        setEstatusOficio(data.body.estatus);
      }
      catch (error) {
        console.error('Sin registros aún', error);
        setResultado(false);
      }
    };

    checkRegistro();
  }, []);

  console.log(estatusOficio)
  console.log(idOficioActual)

  useEffect(() => {
    if (estatusOficio === 'Correcciones' && !hasShownAlert) {
      setResultado(false);
    }
    else if (estatusOficio === 'Validado' && !hasShownAlert) {
      Swal.fire({
        title: '¡Oficio validado!',
        text: 'El oficio ya fue validado, espera hasta el siguiente mes para realizar otro registro',
        icon: 'success',
        confirmButtonText: 'Entendido',
        timer: 10000,
        timerProgressBar: true,
      });
      setHasShownAlert(true);
    }
    else {
      if (resultado === true && !hasShownAlert) {
        Swal.fire({
          title: '¡Oficio ya enviado!',
          text: 'Actualmente el oficio ya fue enviado y esta en proceso de validación, no puede realizar ninguna acción por el momento',
          icon: 'info',
          confirmButtonText: 'Entendido',
          timer: 10000,
          timerProgressBar: true,
        });
        setHasShownAlert(true);
      }
    }
  }, [estatusOficio, resultado, hasShownAlert]);

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

    if (!ruta_oficio) {
      Swal.fire({
        title: "Error",
        text: "Por favor, selecciona un archivo PDF para enviar.",
        icon: "error",
        confirmButtonText: "Aceptar"
      });
      return;
    }

    const fecha = dateShortNow();

    try {
      if (estatusOficio === 'Correcciones' && idOficioActual) {
        // Si el oficio está en correcciones, lo actualizamos
        await updateOficio({ id_oficio: idOficioActual, ruta_oficio_firma: ruta_oficio, fecha_firma: fecha }); // No enviar fecha_firma para correcciones
        Swal.fire({ title: "¡Reenviado!", text: "Oficio corregido reenviado para revisión correctamente.", icon: "success", confirmButtonText: "Aceptar" });
      } else {
        // Si es la primera vez o no está en correcciones, lo creamos
        await create_ofice({ mes_oficio: mes_oficio, ruta_oficio: ruta_oficio });
        Swal.fire({ title: "¡Enviado!", text: "Archivo enviado correctamente.", icon: "success", confirmButtonText: "Aceptar" });
      }
    } catch (error) {
      console.error("Error al enviar/actualizar oficio:", error);
      Swal.fire({ title: "Error", text: "Ocurrió un error al procesar el oficio. Inténtalo de nuevo.", icon: "error", confirmButtonText: "Aceptar" });
    }
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
          <h3 className="text-subtitle">Panel de control</h3>
          {/* <div className="panel-controles-form">
            <div>
              <label className="panel-form-label">C.C.P</label>
              <input
                type="text"
                className="panel-form-input"
                value={datosFormulario.ccp}
                onChange={(e) => setDatosFormulario({ ...datosFormulario, ccp: e.target.value })}
              />
            </div>
          </div> */}
          <div className="panel-controles-form">
            <form action="">
              <div className="form-registro">
                <div className="form-campo">
                  <label className="text-bold">Mes del oficio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mes_oficio"
                    value={mes_oficio}
                    onChange={(e) => setMes_oficio(e.target.value)}
                    readOnly
                  />
                </div>
              </div>
            </form>
          </div>
          <SelectorArchivo onChange={handleFileChange} />
          <br />
          <div className="dashboard">
            <button onClick={handlePrint} className="btn-primario" style={{ padding: '10px auto', fontSize: "14px" }} disabled={isDocumentoLoading}>
              <i class="bi bi-filetype-pdf"></i>
              Generar PDF
            </button>
            <button type="submit" className="btn-negativo" onClick={handleSubmit} disabled={isDocumentoLoading || (resultado === true && estatusOficio !== 'Correcciones')} style={{ padding: '10px auto', fontSize: "14px" }}>
              <i class="bi bi-clipboard2-check"></i>
              Enviar a revisión
            </button>
          </div>
        </div>

        {/* SECCIÓN DERECHA: Vista Previa */}
        <div className="panel-preview">
          {/* <h2 className="text-xl font-bold mb-4 text-gray-800">Vista Previa del Documento</h2> */}

          {/* El contenedor para la vista previa ahora usa paginación */}
          <div className="preview-container-paged">
            {isDocumentoLoading && (
              <div className="loader">
                <label className="component-cargando">Cargando vista previa...</label>
                <div className="loading"></div>
              </div>
            )}
            <div style={{ display: isDocumentoLoading ? 'none' : 'block' }}>
              <DocumentoPreview
                ref={componentRef}
                datosDinamicos={datosFormulario}
                paginaActual={paginaActual}
                setNumPaginas={setNumPaginas}
                onLoadingChange={handleLoadingChange}
              />
            </div>
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
