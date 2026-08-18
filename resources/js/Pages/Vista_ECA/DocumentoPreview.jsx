import React, { useEffect, useMemo, useState } from 'react';
import '../../../css/Preview.css';
import { mostrarSoloMes } from "../../Components/functions.jsx";
import { get_espacio } from "../../Components/api/espacio_cult.jsx";
import { getProgramData } from "../../Components/api/program.jsx";
import { get_memoria, getImgByactiv } from "../../Components/api/memoria.jsx";
import { infoEca } from "../../Components/api/infoEca.jsx";
import imgceaa from "../../../img/PNG/Logotipo7.png";
import imgconagua from "../../../img/PNG/CONAGUA.png";
import imglogo from "../../../img/PNG/Logotipo1.png";
import ImagenActividadOf from '@/Components/ImagenActividadOf';


const DocumentoPreview = React.forwardRef(({ datosDinamicos, paginaActual, setNumPaginas, onLoadingChange }, ref) => {
  const [programa, setPrograma] = useState(null);
  const [programaCargando, setProgramaCargando] = useState(true);
  const [programaError, setProgramaError] = useState(null);

  const [espacio, setEspacio] = useState(null);
  const [espacioCargando, setEspacioCargando] = useState(true);
  const [espacioError, setEspacioError] = useState(null);

  const [memoria, setMemoria] = useState([]);
  const [memoriaCargando, setMemoriaCargando] = useState(true);
  const [memoriaError, setMemoriaError] = useState(null);
  const [descripcionMemoria, setDescripcionMemoria] = useState('');

  const [ecaInfo, setinfoEca] = useState(null);
  const [ecaInfoCargando, setEcaInfoCargando] = useState(true);
  const [imagesByActivity, setImagesByActivity] = useState({});

  useEffect(() => {
    const isLoading = programaCargando || espacioCargando || memoriaCargando || ecaInfoCargando;
    if (onLoadingChange) {
      onLoadingChange(isLoading);
    }
  }, [programaCargando, espacioCargando, memoriaCargando, ecaInfoCargando, onLoadingChange]);

  // Petición para obtener las actividades del mes
  useEffect(() => {
    const fetchPrograma = async () => {
      setProgramaCargando(true);
      try {
        const data = await getProgramData();
        setPrograma(data || []);
      } catch (err) {
        setProgramaError('Ocurrió un error al cargar las actividades del mes.');
      }
      setProgramaCargando(false);
    };
    fetchPrograma();
  }, []);

  // Petición para obtener la población beneficiaria
  useEffect(() => {
    const fetchEspacio = async () => {
      setEspacioCargando(true);
      try {
        const data = await get_espacio();
        setEspacio(data);
      } catch (error) {
        setEspacioError('Ocurrió un error al cargar la información de población.');
      }
      setEspacioCargando(false);
    };
    fetchEspacio();
  }, []);

  // Obtener las imágenes de cada actividad
  useEffect(() => {
    const fetchMemoriaAndImages = async () => {
      setMemoriaCargando(true);
      try {
        const [memoriaData, descData] = await Promise.all([get_memoria()]);

        setMemoria(memoriaData || []);
        setDescripcionMemoria(descData?.descripcion || '');

        if (memoriaData && memoriaData.length > 0) {
          const imagesPromises = memoriaData.map(async (activity) => {
            const images = await getImgByactiv(activity.id_program);
            return { id: activity.id_program, images: images };
          });
          const results = await Promise.all(imagesPromises);
          const newImagesByActivity = results.reduce((acc, curr) => {
            acc[curr.id] = curr.images;
            return acc;
          }, {});
          setImagesByActivity(newImagesByActivity);
        }
      }
      catch {
        setMemoriaError('Ocurrió un error al cargar la memoria fotográfica.');
      }
      setMemoriaCargando(false);
    };
    fetchMemoriaAndImages();
  }, []);

  // Petición para obtener la información del eca
  useEffect(() => {
    const fechtInfo = async () => {
      setEcaInfoCargando(true);
      try {
        const data = await infoEca();
        setinfoEca(data.body || {});
      }
      catch {
        console.error('Ocurrió un error al conectar con el servidor para obtener info ECA.');
      }
      setEcaInfoCargando(false);
    };
    fechtInfo();
  }, []);

  //Mostrar la tabla en un mejor orden
  const espacioAgrupado = useMemo(() => {
    if (!espacio || espacio.length === 0) return [];
    const agrupado = espacio.reduce((acc, item) => {
      if (!acc[item.clave_eca]) {
        acc[item.clave_eca] = { ...item, asistentes: {} };
      }
      const rangoEdadKey = item.rango_edad.replace('-', '_');
      const keyAsistente = `${item.genero}_${rangoEdadKey}`;
      acc[item.clave_eca].asistentes[keyAsistente] = item.cantidad;
      return acc;
    }, {});
    return Object.values(agrupado);
  }, [espacio]);

  // Calcular totales para Alumnos atendidos y Población atendida
  const { totalAlumnosAtendidos, totalPoblacionAtendida } = useMemo(() => {
    if (!programa || programa.length === 0) {
      return { totalAlumnosAtendidos: 0, totalPoblacionAtendida: 0 };
    }

    const sumAlumnos = programa.reduce((acc, item) => acc + (parseInt(item.alumnos_Aten) || 0), 0);
    const sumPoblacion = programa.reduce((acc, item) => acc + (parseInt(item.pobl_ate) || 0), 0);
    return { totalAlumnosAtendidos: sumAlumnos, totalPoblacionAtendida: sumPoblacion };
  }, [programa]);

  const { totalplaticasEscolares, totalplaticasComunitarias } = useMemo(() => {
    if (!programa || programa.length === 0) {
      return { totalplaticasEscolares: 0, totalplaticasComunitarias: 0 };
    }

    const sumEscolares = programa.reduce((acc, item) => acc + (item.tipo_platica === 'escolar' ? 1 : 0), 0);
    const sumComunitarias = programa.reduce((acc, item) => acc + (item.tipo_platica === 'comunitaria' ? 1 : 0), 0);
    return { totalplaticasEscolares: sumEscolares, totalplaticasComunitarias: sumComunitarias };
  }, [programa]);

  const programaPages = useMemo(() => {
    const createPageHeader = () => (
      <>
        <div className="documento-header">
          <div className="header-meta-center">
            <p><b>Estado Hidalgo</b></p>
            <p><b>Espacio de Cultura del Agua de: {ecaInfo?.nombre_inst_ope || '---'}</b></p>
            <p><b>Programa de Cultura del Agua / Informe mensual Cultura del Agua</b></p>
          </div>
        </div>
        <div className="header-meta-right">
          <p><b>Fecha de informe: {mostrarSoloMes(new Date())} {new Date().getFullYear()}</b></p>
        </div>
      </>
    );

    const createSignatures = () => (
      <div className="documento-footer">
        <div className='dashboard'>
          <div className='dashboard-left'>
            <div className="firmas">
              <div className="firma">
                <div className="linea-firma">{ecaInfo?.Jefe_inmediato || '---'} Director General de la comisión de Agua y Alcantarillado del Municipio de {ecaInfo?.municipio || '...'}, Hidalgo</div>
              </div>
            </div>
          </div>
          <div className='dashboard-right'>
            <div className='firmas'>
              <div className="firma">
                <div className="linea-firma">{ecaInfo?.nombre_Responsable || '---'} Coordinador del Espacio de Cultura del Agua de {ecaInfo?.municipio || '...'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    if (programaCargando) {
      return [
        <div className="hoja-a4 pagina-horizontal" key="programa-loading">
          {createPageHeader()}
          <p>Cargando actividades del mes...</p>
        </div>
      ];
    }
    if (programaError) {
      return [
        <div className="hoja-a4 pagina-horizontal" key="programa-error">
          {createPageHeader()}
          <p style={{ color: 'red' }}>{programaError}</p>
        </div>
      ];
    }
    if (!programa || programa.length === 0) {
      return [
        <div className="hoja-a4 pagina-horizontal" key="programa-empty">
          {createPageHeader()}
          <p>No hay actividades registradas para este mes.</p>
          {createSignatures()}
        </div>
      ];
    }

    const firstPageRows = 10;
    const subsequentPageRows = 18;
    const chunks = [];

    chunks.push(programa.slice(0, firstPageRows));
    let currentIndex = firstPageRows;
    while (currentIndex < programa.length) {
      chunks.push(programa.slice(currentIndex, currentIndex + subsequentPageRows));
      currentIndex += subsequentPageRows;
    }

    return chunks.map((chunk, pageIndex) => (
      <div className="hoja-a4 pagina-horizontal" key={`pagina-programa-${pageIndex}`}>
        <div className="header-logo">
          <img className="imagen" src={imgconagua} alt="Logo CONAGUA" style={{ width: '18%', height: 'auto' }} />
          <img className='imagen' src={imgceaa} alt="Logo CEAA" style={{ width: '18%', height: 'auto' }} />
          <img className='imagen' src={imglogo} alt="Logo RNECA" style={{ width: '18%', height: 'auto' }} />
        </div>
        <br />
        {pageIndex === 0 && createPageHeader()}
        <div className="documento-contenido">
          <table className="tabla-programa tablas-preview" border="1" cellPadding="5" cellSpacing="0">
            {pageIndex === 0 && (
              <thead>
                <tr className="tabla-header">
                  <th rowSpan="2">Estado</th>
                  <th rowSpan="2">Municipio</th>
                  <th rowSpan="2">Localidad</th>
                  <th colSpan="2">Plática</th>
                  <th rowSpan="2">Otras actividades</th>
                  <th rowSpan="2">Alumnos atendidos</th>
                  <th rowSpan="2">Población atendida</th>
                  <th rowSpan="2">Fecha</th>
                </tr>
                <tr className="tabla-header">
                  <th>Escolar</th>
                  <th>Comunitaria</th>
                </tr>
              </thead>
            )}
            <tbody>
              {chunk.map((item, index) => (
                <tr key={index}>
                  <td>Hidalgo</td>
                  <td>{item.municipio || '---'}</td>
                  <td>{item.localidad || '---'}</td>
                  <td>{item.tipo_platica === 'escolar' ? '1' : 'N/A'}</td>
                  <td>{item.tipo_platica === 'comunitaria' ? '1' : 'N/A'}</td>
                  <td>{item.otras_activ || '---'}</td>
                  <td>{item.alumnos_Aten || '---'}</td>
                  <td>{item.pobl_ate || '---'}</td>
                  <td>{new Date(item.fecha_mes).toLocaleDateString() || '---'}</td>
                </tr>
              ))}
            </tbody>
            {pageIndex === chunks.length - 1 && (
              <tfoot>
                <tr>
                  <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
                  <td>{totalplaticasEscolares}</td>
                  <td>{totalplaticasComunitarias}</td>
                  <td></td>
                  <td>{totalAlumnosAtendidos}</td>
                  <td>{totalPoblacionAtendida}</td>
                  <td></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
        {pageIndex === chunks.length - 1 && createSignatures()}
      </div>
    ));
  }, [programa, programaCargando, programaError, ecaInfo, totalAlumnosAtendidos, totalPoblacionAtendida, totalplaticasEscolares, totalplaticasComunitarias]);

  const memoriaFotograficaPages = useMemo(() => {
    const createPage = (content, pageIndex) => (
      <div className="hoja-a4" key={`memoria-pagina-${pageIndex}`}>
        <div className="header-logo">
          <img className="imagen" src={imgconagua} alt="Logo CONAGUA" style={{ width: '18%', height: 'auto' }} />
          <img className='imagen' src={imgceaa} alt="Logo CEAA" style={{ width: '18%', height: 'auto' }} />
          <img className='imagen' src={imglogo} alt="Logo RNECA" style={{ width: '18%', height: 'auto' }} />
        </div>

        {pageIndex === 0 && (
          <div className="documento-header">
            <div>
              <h1 className='seccion-titulo header-meta-center'>MEMORIA FOTOGRAFICA</h1>
              <p className='header-meta-center'>Informes del mes de {mostrarSoloMes(new Date())}</p>
            </div>
          </div>
        )}

        <div className="documento-contenido">
          <section>{content}</section>
        </div>
        <div className="documento-footer"></div>
      </div>
    );

    if (memoriaCargando) return [createPage(<p>Cargando memoria fotográfica...</p>, 0)];
    if (memoriaError) return [createPage(<p style={{ color: 'red' }}>{memoriaError}</p>, 0)];
    if (memoria.length === 0) return [createPage(<p>No hay memoria fotográfica registrada para este mes.</p>, 0)];

    const pages = [];
    let currentPageContent = [];
    const ACTIVITIES_PER_PAGE = 1;

    memoria.forEach((activity, index) => {
      const activityContent = (
        <div key={`activity-wrapper-${activity.id_program}`}>
          <div key={`header-${activity.id_program}`}>
            <div className="descripcion-parrafo">
              <h1 className="seccion-titulo">{activity.otras_activ || '---'} - {activity.fecha_mes ? new Date(activity.fecha_mes).toLocaleDateString('es-Es', { day: 'numeric', month: 'long', year: 'numeric' }) : '---'}</h1>
              {/* <p>{activity.descripcion_activ || '---'}</p> */}
            </div>
            <h2 className="seccion-titulo">Evidencia fotografica: </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {(imagesByActivity[activity.id_program] || []).length > 0 ? (
              (imagesByActivity[activity.id_program] || []).map(foto =>
                <ImagenActividadOf key={foto.id_foto} idFoto={foto.id_foto} />
              )
            ) : (
              <p>No hay fotos registradas para esta actividad.</p>
            )}
          </div>
          <br />
        </div>
      );

      currentPageContent.push(activityContent);

      if ((index + 1) % ACTIVITIES_PER_PAGE === 0 || (index + 1) === memoria.length) {
        pages.push(createPage(currentPageContent, pages.length));
        currentPageContent = [];
      }
    });

    if (currentPageContent.length > 0) {
      pages.push(createPage(currentPageContent, pages.length));
    }

    return pages.length > 0 ? pages : [createPage(<p>No hay memoria fotográfica registrada para este mes.</p>, 0)];
  }, [memoria, imagesByActivity, memoriaCargando, memoriaError, imgconagua, imgceaa, imglogo]);

  const allPages = useMemo(() => [
    // PRESENTACIÓN DEL OFICIO
    <div className="hoja-a4" key="pagina1">
      <div className="header-logo">
        <img className="imagen" src={imgconagua} alt="Logo CONAGUA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imgceaa} alt="Logo CEAA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imglogo} alt="Logo RNECA" style={{ width: '18%', height: 'auto' }} />
      </div>
      <div className="documento-header">
        <div className="header-meta-left">
          <p>M.A.P. </p>
          <p>Director General de la Comisión Estatal</p>
          <p>del Agua y Alcantarillado del Estado de Hidalgo</p>
        </div>
        <div className="header-meta">
          <p>Fecha: {new Date().toLocaleDateString()}</p>
          <p>Expediente: Cultura del agua</p>
          <p>Asunto: Reporte de actividades</p>
          <br /> <br />
          <p>Atención:</p>
          <p>Director de Organismos Operadores y</p>
          <p>Atención a Usuarios de la CEAA</p>
        </div>
      </div>
      <div className="documento-contenido">
        <section>
          <h2 className="seccion-titulo">Presente</h2>
          <div className="descripcion-parrafo">
            <p>
              Por medio del presente le saludo y me permito hacer llegar a usted el informe mensual del
              espacio de Cultura del Agua del Municipio de {programa?.[0]?.municipio || '...'}, Hidalgo,
              correspondiente al mes de {mostrarSoloMes(new Date())} del año {new Date().getFullYear()},
              con la memoria fotografica y cuadro de población atendida que sustenta el trabajo de dicho municipio.
              Sin más por el momento, quedo a sus órdenes para cualquier aclaración al respecto.
            </p>
            <p>El informe contiene los detalles de las actividades realizadas, incluyendo pláticas, talleres y otras acciones llevadas a cabo durante el mes.</p>
          </div>
        </section>
        <section>
          <h2 className="seccion-despedida">Atentamente</h2>
          <div className="info-firma">
            <br /><br />
            <div className='firmas'>
              <div class="linea-firma"><p>Director general de la Comisión de Agua y Alcantarillado del <br />
                municipio de  {programa?.[0]?.municipio || '...'}, Hidalgo.</p></div>
            </div>
          </div>
        </section>
      </div>
      <div className="documento-footer ccp">
        <br /><br />
        {/* <p className="info-dato">C.C.P</p> */}
        <p className="info-dato">C.c.p M.A.C. Félix Adrían Brambila Mendoza. -Director Local de la CONAGUA Hidalgo <br />
          L.C.C. Luis García Contreras. -Jefe de control de Gestión, Encargado de la Subdirección de Comunicación, Social y Cultura del Agua<br />
          Expediente único
        </p>
      </div>
    </div>,

    // PROGRMAS DE CULTURA -> ACTIVIDADES
    ...programaPages,

    // POBLACIÓN BENEFICIARIA
    <div className="hoja-a4 pagina-horizontal" key="pagina3">
      <div className="header-logo">
        <img className="imagen" src={imgconagua} alt="Logo CONAGUA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imgceaa} alt="Logo CEAA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imglogo} alt="Logo RNECA" style={{ width: '18%', height: 'auto' }} />
      </div>
      <br />
      <div className="documento-header">
        <div className="header-meta-center">
          <p><b>Información sobre la población beneficiera con las acciones de Cultura del Agua.</b></p>
          <br />
          <p><b>Espacio de Cultura del Agua</b></p>
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboard-left">
          <p><b>Entidad federativa: Hidalgo</b></p>
        </div>
        <div className="header-meta-right">
          <p><b>Mes: {mostrarSoloMes(new Date())} {new Date().getFullYear()}</b></p>
        </div>
      </div>
      <div className="documento-contenido">
        {espacioCargando ? <p>Cargando datos de población...</p> : espacioError ? <p style={{ color: 'red' }}>{espacioError}</p> : (
          espacioAgrupado.length > 0 ? (
            <table className="tabla-espacio tablas-preview" border="1" cellPadding="5" cellSpacing="0">
              <thead>
                <tr>
                  <th rowSpan="4">Clave del ECA</th>
                  <th rowSpan="4">Fecha de apertura</th>
                  <th rowSpan="4">Fecha de fortalecimiento</th>
                  <th colSpan="3" rowSpan="3">Material didactico</th>
                  <th colSpan="11">Asistentes</th>
                  <th rowSpan="4">Total de población atendida</th>
                  <th rowSpan="3" colSpan="3">Anexos</th>
                  <th rowSpan="4">Comentarios/Observaciones</th>
                </tr>
                <tr>
                  <th colSpan="5">Hombres</th>
                  <th colSpan="5">Mujeres</th>
                  <th rowSpan="1">Niños</th>
                </tr>
                <tr>
                  <th colSpan="5">Rango de edad</th>
                  <th colSpan="5">Rango de edad</th>
                  <th rowSpan="2">Menores de 12</th>
                </tr>
                <tr>
                  <th>Inédito</th><th>Reproducido</th><th>Aquirido</th>
                  <th>13-17</th><th>18-30</th><th>31-40</th><th>41-50</th><th>51 o +</th>
                  <th>13-17</th><th>18-30</th><th>31-40</th><th>41-50</th><th>51 o +</th>
                  <th>Lista de asistencia</th><th>Evidencia fotografíca</th><th>Nota periodistica</th>
                </tr>
              </thead>
              <tbody>
                {espacioAgrupado.map((item, index) => (
                  <tr key={index}>
                    <td style={{ width: '8%' }}>{item.clave_eca || '---'}</td>
                    <td style={{ width: '8%' }}>{item.fecha_apert || '---'}</td>
                    <td>{item.fecha_forta || '---'}</td>
                    <td>{item.inedito || '---'}</td>
                    <td>{item.reproducido || '---'}</td>
                    <td>{item.adquirido || '---'}</td>
                    <td>{item.asistentes.Hombre_13_17 || 0}</td>
                    <td>{item.asistentes.Hombre_18_30 || 0}</td>
                    <td>{item.asistentes.Hombre_30_40 || 0}</td>
                    <td>{item.asistentes.Hombre_40_50 || 0}</td>
                    <td>{item.asistentes['Hombre_50 o más'] || 0}</td>
                    <td>{item.asistentes.Mujer_13_17 || 0}</td>
                    <td>{item.asistentes.Mujer_18_30 || 0}</td>
                    <td>{item.asistentes.Mujer_30_40 || 0}</td>
                    <td>{item.asistentes.Mujer_40_50 || 0}</td>
                    <td>{item.asistentes['Mujer_50 o más'] || 0}</td>
                    <td>{item.asistentes['Niño/Niña_Menor a 12'] || 0}</td>
                    <td>{item.total_pobl || '---'}</td>
                    <td>{item.list_asist === 'sí' ? 'Sí' : 'No'}</td>
                    <td>{item.evi_foto === 'sí' ? 'Sí' : 'No'}</td>
                    <td>{item.nota_period === 'sí' ? 'Sí' : 'No'}</td>
                    <td>{item.comentarios || '---'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay datos de población beneficiaria para mostrar.</p>
          )
        )}
      </div>
      <div className="documento-footer">
        <div className='dashboard'>
          <div className='dashboard-left'>
            <div class="firmas">
              <div class="firma">
                <div class="linea-firma">{ecaInfo?.Jefe_inmediato || '---'} Director General de la comisión de Agua y Alcantarillado del Municipio de {ecaInfo?.municipio || '...'}, Hidalgo</div>
              </div>
            </div>
          </div>
          <div className='dashboard-right'>
            <div className='firmas'>
              <div class="firma">
                <div class="linea-firma">{ecaInfo?.nombre_Responsable || '---'} Coordinador del Espacio de Cultura del Agua de {ecaInfo?.municipio || '...'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    ...memoriaFotograficaPages
  ], [programaPages, ecaInfo, espacio, espacioCargando, espacioError, espacioAgrupado, totalAlumnosAtendidos, totalPoblacionAtendida, datosDinamicos.ccp, memoriaFotograficaPages]);

  useEffect(() => {
    setNumPaginas(allPages.length);
  }, [allPages.length, setNumPaginas]);

  return (
    <div ref={ref} className='documento-preview-container'>
      {allPages.map((pagina, index) => (
        <div key={index} className={paginaActual === index + 1 ? 'pagina-activa' : 'pagina-oculta-pantalla'}>
          {pagina}
        </div>
      ))}
    </div>
  );
});

DocumentoPreview.displayName = 'DocumentoPreview';
export default DocumentoPreview;