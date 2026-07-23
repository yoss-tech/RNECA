import React, { useEffect, useMemo, useState } from 'react';
import '../../../css/Preview.css';
import { mostrarSoloMes } from "../../Components/functions.jsx";
import { get_espacio } from "../../Components/api/espacio_cult.jsx";
import { getProgramData } from "../../Components/api/program.jsx";
import { get_memoria, getImgByactiv } from "../../Components/api/memoria.jsx";
import { infoEca} from "../../Components/api/infoEca.jsx";
import imgceaa from "../../../img/PNG/Logotipo7.png";
import imgconagua from "../../../img/PNG/CONAGUA.png";
import imglogo from "../../../img/PNG/Logotipo1.png";
import ImagenActividad from '@/Components/ImagenActividad';


const DocumentoPreview = React.forwardRef(({ datosDinamicos, paginaActual, setNumPaginas }, ref) => {
  const [programa, setPrograma] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [espacio, setEspacio] = useState(null);
  const [errorEspacio, setErrorEspacio] = useState(null);
  const [memoria, setMemoria] = useState([]);
  const [ecaInfo, setinfoEca] = useState(null); // Descripción general de la memoria fotográfica
  const [imagesByActivity, setImagesByActivity] = useState({}); // Nuevo estado para almacenar imágenes por actividad

  // Petición para obtener la población beneficiaria
  useEffect(() => {
    const fetchPrograma = async () => {
      try {
        const data = await getProgramData();
        setPrograma(data || null);
      } catch (err) {
        setError('Ocurrió un error al conectar con el servidor.');
      }
      setCargando(false);
    };
    fetchPrograma();
  }, []);

  // Petición para obtener la población beneficiaria
  useEffect(() => {
    const fetchEspacio = async () => {
      try {
        const data = await get_espacio();
        setEspacio(data);
      } catch (error) {
        setErrorEspacio('Ocurrió un error al conectar con el servidor.');
      }
    };
    fetchEspacio();
  }, []);

  // Petición para obtener información de las actividades que componen la memoria fotografica
  // Y ahora también para obtener las imágenes de cada actividad
  useEffect(() => {
    const fetchMemoriaAndImages = async () => {
      try {
        const memoriaData = await get_memoria();
        setMemoria(memoriaData);

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
        setError('Ocurrió un error al conectar con el servidor.');
      }
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
        setError('Ocurrió un error al conectar con el servidor.');
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
          <p>M.A.P. Juan</p>
          <p>Director General de la Comisión Estatal</p>
          <p>del Agua y Alcantarillado del Estado de Hidalgo</p>
        </div>
        <div className="header-meta">
          <p>Fecha: {new Date().toLocaleDateString()}</p>
          <p>Expediente: Cultura del agua</p>
          <p>Asunto: Reporte de actividades</p>
          <br /> <br />
          <p>Atención: Lic. Javier</p>
          <p>Director de Orfanismos Operadores y</p>
          <p>Atención a Usuarios de la CEAA</p>
        </div>
      </div>
      <div className="documento-contenido">
        <section>
          <h2 className="seccion-titulo">Presente</h2>
          <div className="descripcion-parrafo">
            <p>
              Por medio del presente le saludo y me permito hacer llegar a usted el informe mensual del
              espacio de Cultura del Agua del Municipio de {ecaInfo?.[2]?.municipio || '...'}, Hidalgo,
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
            <br />
            <p>
              Director general de la Comisión de Agua y Alcantarillado del <br />
              municipio de {programa?.[0]?.municipio || '...'}, Hidalgo.
            </p>
          </div>
        </section>
      </div>
      <div className="documento-footer">
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
          <p>Espacio de Cultura del Agua y Alcantarillado del Municipio de {programa?.[0]?.municipio || '...'}, Hidalgo.</p>
          <br />
          <p>Programa de Cultura del Agua / Informe mensual Cultura del Agua</p>
        </div>
      </div>
      <div className="documento-contenido">
        {programa && programa.length > 0 && (
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
          </table>
        )}
      </div>
      <div className="documento-footer"></div>
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
        {cargando ? <p>Cargando datos de la tabla...</p> : errorEspacio ? <p style={{ color: 'red' }}>{errorEspacio}</p> : (
          espacioAgrupado.length > 0 && (
            <table className="tabla-espacio tablas-preview" border="1" cellPadding="5" cellSpacing="0">
              <thead>
                <tr>
                  <th rowSpan="4">Clave del ECA</th>
                  <th rowSpan="4">Fechas</th>
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
                    <td>Apertura: {item.fecha_apert ? new Date(item.fecha_apert).toLocaleDateString() : '---'}<br />Fortalecimiento: {item.fecha_forta ? new Date(item.fecha_forta).toLocaleDateString() : '---'}</td>
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
          )
        )}
      </div>
      <div className="documento-footer"></div>
    </div>,

    // MEMORIA FOTOGRAFICA
    <div className="hoja-a4" key="pagina1">
      <div className="header-logo">
        <img className="imagen" src={imgconagua} alt="Logo CONAGUA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imgceaa} alt="Logo CEAA" style={{ width: '18%', height: 'auto' }} />
        <img className='imagen' src={imglogo} alt="Logo RNECA" style={{ width: '18%', height: 'auto' }} />
      </div>
      <div className="documento-header">
        <div>
          <h1 className='seccion-titulo header-meta-center' >MEMORIA FOTOGRAFICA</h1>
          <p className='header-meta-center'>Informes del mes de </p>
          <br />
          {/* <p>{desc?.[0]?.descrip_gen || '---'}</p> */}
        </div>
      </div>
      <div className="documento-contenido">
        <section>
          {memoria.map((item) => ( // Iteramos sobre cada actividad de la memoria
            <div key={item.id_program}> {/* Añadimos una key única para cada actividad */}
              <div className="descripcion-parrafo">
                <li><h1 className="seccion-titulo">{item.otras_activ || '---'}</h1></li>
                <p>{item.descripcion || '---'}</p>
              </div>
              <h2 className="seccion-titulo">Fotos de la Actividad: {item.otras_activ || '---'}</h2> {/* Usamos el título de la actividad */}
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {imagesByActivity[item.id_program] && imagesByActivity[item.id_program].length > 0 ? (
                  imagesByActivity[item.id_program].map((foto) => (
                    <ImagenActividad key={foto.id_foto} idFoto={foto.id_foto} />
                  ))
                ) : (
                  <p>No hay fotos registradas para esta actividad.</p>
                )}
              </div>
              <br />
            </div>
          ))}

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
    <div ref={ref}>
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