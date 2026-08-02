import React, { useEffect, useMemo, useState } from 'react';
import '../../../css/Preview.css';
import { mostrarSoloMes } from "../../Components/functions.jsx";
import { get_espacio } from "../../Components/api/espacio_cult.jsx";
import { getProgramData } from "../../Components/api/program.jsx";
import { get_memoria, getImgByactiv, getDesc } from "../../Components/api/memoria.jsx";
import { infoEca } from "../../Components/api/infoEca.jsx";
import imgceaa from "../../../img/PNG/Logotipo7.png";
import imgconagua from "../../../img/PNG/CONAGUA.png";
import imglogo from "../../../img/PNG/Logotipo1.png";
import ImagenActividadOf from '@/Components/ImagenActividadOf';


const DocumentoPreview = React.forwardRef(({ datosDinamicos, paginaActual, setNumPaginas }, ref) => {
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

  const [ecaInfo, setinfoEca] = useState(null); // Descripción general de la memoria fotográfica
  const [imagesByActivity, setImagesByActivity] = useState({}); // Nuevo estado para almacenar imágenes por actividad

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
        const [memoriaData, descData] = await Promise.all([get_memoria(), getDesc()]);
        
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

  // Petición para obtener la descripción general de la memoria fotográfica
  useEffect(() => {
    const fechtInfo = async () => {
      try {
        const data = await infoEca();
        setinfoEca(data);
      }
      catch {
        // No hay un manejo de error específico para ecaInfo, se podría agregar si fuera necesario.
        console.error('Ocurrió un error al conectar con el servidor para obtener info ECA.');
      }
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

  const paginas = [
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
              espacio de Cultura del Agua del Municipio de {programa?.municipio || '...'}, Hidalgo,
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
                municipio de {programa?.municipio || '...'}, Hidalgo.</p></div>
            </div>
          </div>
        </section>
      </div>
      <div className="documento-footer">
        <br />
        <h2 className="seccion-titulo">C.C.P</h2>
        <p className="info-dato">{datosDinamicos.ccp || '---'}</p>
      </div>
    </div>,

    // POBLACIÓN ANTENDIDA -> ACTIVIDADES
    <div className="hoja-a4 pagina-horizontal" key="pagina2">
      <div className="header-logo">
        <img className="imagen" src={imgconagua} alt="Logo CONAGUA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imgceaa} alt="Logo CEAA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imglogo} alt="Logo RNECA" style={{ width: '18%', height: 'auto' }} />
      </div>
      <br />
      <div className="documento-header">
        <div className="header-meta-center">
          <p>Estado HIDALGO</p>
          <p>Espacio de Cultura del Agua y Alcantarillado del Municipio de {ecaInfo?.municipio || '...'}, Hidalgo.</p>
          <br />
          <p>Programa de Cultura del Agua / Informe mensual Cultura del Agua</p>
        </div>
      </div>
      <div className="documento-contenido">
        {programaCargando ? (
          <p>Cargando actividades del mes...</p>
        ) : programaError ? (
          <p style={{ color: 'red' }}>{programaError}</p>
        ) : programa && programa.length > 0 ? (
          <table className="tabla-programa tablas-preview" border="1" cellPadding="5" cellSpacing="0">
            <thead>
              <tr>
                <th rowSpan="2">Estado</th>
                <th rowSpan="2">Municipio</th>
                <th rowSpan="2">Localidad</th>
                <th colSpan="2">Plática</th>
                <th rowSpan="2">Otras actividades</th>
                <th rowSpan="2">Alumnos atendidos</th>
                <th rowSpan="2">Población atendida</th>
                <th rowSpan="2">Fecha</th>
              </tr>
              <tr>
                <th>Escolar</th>
                <th>Comunitaria</th>
              </tr>
            </thead>
            <tbody>
              {programa.map((item, index) => (
                <tr key={index}>
                  <td>Hidalgo</td>
                  <td>{item.municipio || '---'}</td>
                  <td>{item.localidad || '---'}</td>
                  <td>{item.tipo_platica === 'escolar' ? 'X' : ''}</td>
                  <td>{item.tipo_platica === 'comunitaria' ? 'X' : ''}</td>
                  <td>{item.otras_activ || '---'}</td>
                  <td>{item.alumnos_Aten || '---'}</td>
                  <td>{item.pobl_ate || '---'}</td>
                  <td>{new Date(item.fecha_mes).toLocaleDateString() || '---'}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
                <td>{totalAlumnosAtendidos}</td>
                <td>{totalPoblacionAtendida}</td>
                <td></td> {/* Empty cell for Fecha */}
              </tr>
            </tfoot>
          </table>
        ) : (
          <p>No hay actividades registradas para este mes.</p>
        )}
      </div>
      <div className="documento-footer">
        <div className='dashboard'>
          <div class="firmas">
            <div class="firma dashboard-left">
              <div class="linea-firma"><p>{ecaInfo?.director || '---'}</p>Director General de la comisión de Agua y Alcantarillado del Municipio de {ecaInfo?.municipio || '...'}, Hidalgo</div>
            </div>
          </div>
          <div className='firmas'>
            <div class="firma dashboard-right">
              <div class="linea-firma"><p>{ecaInfo?.coordinador || '---'}</p>Coordinador del Espacio de Cultura del Agua de la {ecaInfo?.nombre_eca || '...'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>,

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
          <p>Información sobre la población beneficiera con las acciones de Cultura del Agua.</p>
          <br />
          <p>Espacio de Cultura del Agua</p>
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
                  <th rowSpan="3">Niños (Menores de 12)</th>
                </tr>
                <tr>
                  <th colSpan="5">Rango de edad</th>
                  <th colSpan="5">Rango de edad</th>
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
                    <td>{item.clave_eca || '---'}</td>
                    <td>{item.fecha_apert || '---'}</td>
                    <td>{item.fecha_forta || '---'}</td>
                    <td>{item.inedito || '---'}</td>
                    <td>{item.reproducido || '---'}</td>
                    <td>{item.adquirido || '---'}</td>
                    <td>{item.asistentes.Hombre_13_17 || 0}</td>
                    <td>{item.asistentes.Hombre_18_30 || 0}</td>
                    <td>{item.asistentes.Hombre_31_40 || 0}</td>
                    <td>{item.asistentes.Hombre_41_50 || 0}</td>
                    <td>{item.asistentes.Hombre_51_o__ || 0}</td>
                    <td>{item.asistentes.Mujer_13_17 || 0}</td>
                    <td>{item.asistentes.Mujer_18_30 || 0}</td>
                    <td>{item.asistentes.Mujer_31_40 || 0}</td>
                    <td>{item.asistentes.Mujer_41_50 || 0}</td>
                    <td>{item.asistentes.Mujer_51_o__ || 0}</td>
                    <td>{item.asistentes['Niño/Niña_12'] || 0}</td>
                    <td>{item.total_pobl || '---'}</td>
                    <td>{item.list_asist === 'sí' ? 'X' : ''}</td>
                    <td>{item.evi_foto === 'sí' ? 'X' : ''}</td>
                    <td>{item.nota_period === 'sí' ? 'X' : ''}</td>
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
          <div class="firmas">
            <div class="firma dashboard-left">
              <div class="linea-firma"><p>{ecaInfo?.director || '---'}</p>Director General de la comisión de Agua y Alcantarillado del Municipio de {ecaInfo?.municipio || '...'}, Hidalgo</div>
            </div>
          </div>
          <div className='firmas'>
            <div class="firma dashboard-right">
              <div class="linea-firma"><p>{ecaInfo?.coordinador || '---'}</p>Coordinador del Espacio de Cultura del Agua de la {ecaInfo?.nombre_eca || '...'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // MEMORIA FOTOGRAFICA
    <div className="hoja-a4" key="pagina4">
      <div className="header-logo">
        <img className="imagen" src={imgconagua} alt="Logo CONAGUA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imgceaa} alt="Logo CEAA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imglogo} alt="Logo RNECA" style={{ width: '18%', height: 'auto' }} />
      </div>
      <div className="documento-header">
        <div>
          <h1 className='seccion-titulo header-meta-center' >MEMORIA FOTOGRAFICA</h1>
          <p className='header-meta-center'>Informes del mes de {mostrarSoloMes(new Date())}</p>
        </div>
      </div>
      <div className="documento-contenido">
        <section>
          {memoriaCargando ? (
            <p>Cargando memoria fotográfica...</p>
          ) : memoriaError ? (
            <p style={{ color: 'red' }}>{memoriaError}</p>
          ) : memoria.length > 0 ? (
            memoria.map((item) => ( // Iteración de cada actividad de la memoria
              <div key={item.id_program}>
                <div className="descripcion-parrafo">
                  <h1 className="seccion-titulo">{item.otras_activ || '---'}</h1>
                  <p>{item.descripcion_activ || '---'}</p>
                </div>
                <h2 className="seccion-titulo">Evidencia fotografica: {item.otras_activ || '---'}</h2> {/* Usamos el título de la actividad */}
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {imagesByActivity[item.id_program] && imagesByActivity[item.id_program].length > 0 ? (
                    imagesByActivity[item.id_program].map((foto) => (
                      <ImagenActividadOf key={foto.id_foto} idFoto={foto.id_foto} />
                    ))
                  ) : (
                    <p>No hay fotos registradas para esta actividad.</p>
                  )}
                </div>
                <br />
              </div>
            ))
          ) : (
            <p>No hay memoria fotográfica registrada para este mes.</p>
          )}

        </section>
        <section>
          <h2 className="seccion-despedida"></h2>
          <div className="info-firma">
          </div>

        </section>
      </div>
      <div className="documento-footer">

      </div>
    </div>
  ];

  useEffect(() => {
    setNumPaginas(paginas.length);
  }, [paginas.length, setNumPaginas]);

  return (
    <div ref={ref} className='documento-preview-container'>
      {paginas.map((pagina, index) => (
        <div key={index} className={paginaActual === index + 1 ? 'pagina-activa' : 'pagina-oculta-pantalla'}>
          {pagina}
        </div>
      ))}
    </div>
  );
});

DocumentoPreview.displayName = 'DocumentoPreview';
export default DocumentoPreview;