import React, { useState, useEffect, useMemo, useRef } from "react";
// import "/resources/css/Style.css";
import "/resources/css/Preview_oficio.css"
import { getAllEspacio } from "../../Components/api/espacio_cult"
import { mostrarSoloMes } from "../../Components/functions.jsx";
import { useReactToPrint } from "react-to-print";
import { getTotalPlaticas } from "../../Components/api/program.jsx";
import { getadmin } from "../../Components/api/users.jsx";
import { getUserLic } from "../../Components/api/usuarios.jsx"
import imgceaa from "../../../img/PNG/Logotipo6.png";
import imgconagua from "../../../img/PNG/mexico_conagua.png";

function Admin_oficios() {
    const [espacio, setEspacio] = useState(null);
    const [espacioCargando, setEspacioCargando] = useState(true);
    const [espacioError, setEspacioError] = useState(null);
    const [ecaInfoCargando, setEcaInfoCargando] = useState(true);
    const [totalPlaticas, setTotalPlaticas] = useState(null);
    const [paginaActual, setPaginaActual] = useState(1);
    const [numPaginas, setNumPaginas] = useState(0);
    const [cargandoTotales, setCargandoTotales] = useState(true);
    const [semestreSeleccionado, setSemestreSeleccionado] = useState(new Date().getMonth() < 6 ? 1 : 2);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: "Espacios_Cultura_Agua",
    });

    // const [licenciado, setLicenciado] = useState([]);
    // const cargarUserLic = async () => {
    //     const response = await getUserLic();
    //     console.log(response);

    //     if (response && response.status === 200) {
    //         setLicenciado(response.body);
    //     }
    // };

    // useEffect(() => {
    //     cargarUserLic();
    // }, []);

    const [admin, setAdmin] = useState(null);

    // Petición para obtener la descripción general de la memoria fotográfica
    useEffect(() => {
        const fechtInfo = async () => {
            setEcaInfoCargando(true);
            try {
                const data = await getadmin();
                setAdmin(data.body || {});
            }
            catch {
                console.error('Ocurrió un error al conectar con el servidor para obtener info ECA.');
            }
            setEcaInfoCargando(false);
        };
        fechtInfo();
    }, []);

    // console.log(admin)

    // Petición para obtener toda la población beneficiaria
    useEffect(() => {
        const fetchEspacio = async () => {
            setEspacioCargando(true);
            try {
                const data = await getAllEspacio();
                setEspacio(data);
            } catch (error) {
                setEspacioError('Ocurrió un error al cargar la información de población.');
            }
            setEspacioCargando(false);
        };
        fetchEspacio();
    }, []);

    // Petición para obtener el total de actividades realizadas por eca
    useEffect(() => {
        const fechtInfo = async () => {
            setCargandoTotales(true);
            try {
                const data = await getTotalPlaticas();
                setTotalPlaticas(data || []);
            }
            catch {
                console.error('Ocurrió un error al conectar con el servidor para obtener info ECA.');
            }
            setCargandoTotales(false);
        };
        fechtInfo();
    }, []);


    const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    // const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const espacioAgrupado = useMemo(() => {
        if (!espacio || espacio.length === 0 || !totalPlaticas || !semestreSeleccionado) return [];

        const mesesSemestre = semestreSeleccionado === 1
            ? [1, 2, 3, 4, 5, 6]
            : [7, 8, 9, 10, 11, 12];

        const anioActualFiltro = new Date().getFullYear();


        const platicasMap = (totalPlaticas || []).reduce((acc, platica) => {
            const key = `${platica.clave_eca}-${platica.año}-${platica.mes_numero}`;
            acc[key] = {
                total_escolar: parseInt(platica.total_escolar) || 0,
                total_comunitarias: parseInt(platica.total_comunitarias) || 0,
            };
            return acc;
        }, {});

        const espacioFiltrado = espacio.filter(item => {
            const fecha = new Date(item.fecha_registro);
            const mes = fecha.getUTCMonth() + 1;
            const anio = fecha.getUTCFullYear();
            return anio === anioActualFiltro && mesesSemestre.includes(mes);
        });

        const agrupado = espacioFiltrado.reduce((acc, item) => {
            const fecha = new Date(item.fecha_registro);
            const mes = fecha.getUTCMonth() + 1;
            const anio = fecha.getUTCFullYear();
            const mesKey = `${anio}-${mes}`;

            if (!acc[mesKey]) {
                acc[mesKey] = { anio, mes, registros: {} };
            }

            if (!acc[mesKey].registros[item.id_espacio]) {
                acc[mesKey].registros[item.id_espacio] = {
                    ...item,
                    totales: { totalHombres: 0, totalMujeres: 0, totalJovenes: 0, totalNinos: 0 },
                    actividades: { totalEscolar: 0, totalComunitaria: 0 }
                };

                const platicasKey = `${item.clave_eca}-${anio}-${mes}`;
                const platicas = platicasMap[platicasKey];
                if (platicas) {
                    acc[mesKey].registros[item.id_espacio].actividades.totalEscolar = platicas.total_escolar;
                    acc[mesKey].registros[item.id_espacio].actividades.totalComunitaria = platicas.total_comunitarias;
                }
            }

            const cantidad = parseInt(item.cantidad) || 0;
            const registroECA = acc[mesKey].registros[item.id_espacio];
            if (item.genero === 'Hombre') registroECA.totales.totalHombres += cantidad;
            if (item.genero === 'Mujer') registroECA.totales.totalMujeres += cantidad;
            if (item.rango_edad === "13-17") registroECA.totales.totalJovenes += cantidad;
            if (item.rango_edad === "Menor a 12") registroECA.totales.totalNinos += cantidad;

            return acc;
        }, {});

        return Object.values(agrupado)
            .sort((a, b) => a.anio - b.anio || a.mes - b.mes)
            .map(grupoMes => ({
                ...grupoMes,
                registros: Object.values(grupoMes.registros),
                totalesMes: Object.values(grupoMes.registros).reduce((totales, registro) => {
                    totales.inedito += parseInt(registro.inedito) || 0;
                    totales.reproducido += parseInt(registro.reproducido) || 0;
                    totales.adquirido += parseInt(registro.adquirido) || 0;
                    totales.hombres += registro.totales.totalHombres || 0;
                    totales.mujeres += registro.totales.totalMujeres || 0;
                    totales.jovenes += registro.totales.totalJovenes || 0;
                    totales.ninos += registro.totales.totalNinos || 0;
                    totales.poblacion += parseInt(registro.total_pobl) || 0;
                    return totales;
                }, { inedito: 0, reproducido: 0, adquirido: 0, hombres: 0, mujeres: 0, jovenes: 0, ninos: 0, poblacion: 0 })
            }));
    }, [espacio, totalPlaticas, semestreSeleccionado]);

    useEffect(() => {
        // console.log("Datos agrupados y con totales:", espacioAgrupado);
    }, [espacioAgrupado]);

    const totalesSemestre = useMemo(() => {
        if (!espacioAgrupado || espacioAgrupado.length === 0) {
            return { inedito: 0, reproducido: 0, adquirido: 0, hombres: 0, mujeres: 0, jovenes: 0, ninos: 0, poblacion: 0 };
        }
        return espacioAgrupado.reduce((acc, grupoMes) => {
            acc.inedito += grupoMes.totalesMes.inedito;
            acc.reproducido += grupoMes.totalesMes.reproducido;
            acc.adquirido += grupoMes.totalesMes.adquirido;
            acc.hombres += grupoMes.totalesMes.hombres;
            acc.mujeres += grupoMes.totalesMes.mujeres;
            acc.jovenes += grupoMes.totalesMes.jovenes;
            acc.ninos += grupoMes.totalesMes.ninos;
            acc.poblacion += grupoMes.totalesMes.poblacion;
            return acc;
        }, { inedito: 0, reproducido: 0, adquirido: 0, hombres: 0, mujeres: 0, jovenes: 0, ninos: 0, poblacion: 0 });
    }, [espacioAgrupado]);

    const anioActual = new Date().getFullYear();
    const semestreActual = semestreSeleccionado === 1 ? '1er' : '2do';

    const oficioPages = useMemo(() => {
        const createPageHeader = () => (
            <>
                <div className="header-logo">
                    <img className="imagen" src={imgconagua} alt="Logo CONAGUA" style={{ width: '14%', height: 'auto' }} />
                    <img className='imagen' src={imgceaa} alt="Logo CEAA" style={{ width: '12%', height: 'auto' }} />
                </div>
                <br />
                <div className="documento-header">
                    <div className="header-meta-center">
                        <p><b>Información sobre la población potencial atendida</b></p>
                        <br />
                        <p><b>Espacios de Cultura del Agua</b></p>
                    </div>
                </div>
                <div className="dashboard">
                    <div className="dashboard-left">
                        <p><b>Entidad federativa: Hidalgo</b></p>
                    </div>
                    <div className="header-meta-right">
                        <p><b>Semestre: {semestreActual} Semestre {anioActual}</b></p>
                    </div>
                </div>
            </>
        );

        const createSignatures = () => (
            <div className="documento-footer">
                <div className='dashboard'>
                    <div className="dashboard-left">
                        <div className="firmas">
                            <div className="firma">
                                <div className="linea-firma"><b>{admin?.nombre || '---'}</b><br />Encargado de Control de Gestión, Comunicación, Atención Social e Institucional y Cultura del Agua en la Dirección Local Hidalgo de la Comisión Nacional del Agua</div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-right">
                        <div className='firmas'>
                            <div className="firma">
                                <div className="linea-firma"><b>{admin?.nombre_jefe || '---'}</b><br />Director de Organizmos Operadores y Atención a Usuarios</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        const createColGroup = () => (
            <colgroup>
                <col style={{ width: '4%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '5%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '9%' }} />
                <col style={{ width: '5.5%' }} />
                <col style={{ width: '5.5%' }} />
                <col style={{ width: '5.5%' }} />
                <col style={{ width: '4.125%' }} />
                <col style={{ width: '4.125%' }} />
                <col style={{ width: '4.125%' }} />
                <col style={{ width: '4.125%' }} />
                <col style={{ width: '5%' }} />
                <col style={{ width: '5.16%' }} />
                <col style={{ width: '5.16%' }} />
                <col style={{ width: '5.16%' }} />
                <col style={{ width: '12%' }} />
            </colgroup>
        );

        const createTableHead = () => (
            <thead>
                <tr>
                    <th rowSpan="2">Clave del ECA</th>
                    <th rowSpan="2">Nombre del ECA</th>
                    <th rowSpan="2">Fecha de apertura</th>
                    <th rowSpan="2">Fecha de fortalecimiento</th>
                    <th rowSpan="2">Actividad realizada</th>
                    <th colSpan="3">Material didactico</th>
                    <th colSpan="4" style={{ background: '#BFBFBF' }}>Asistentes</th>
                    <th rowSpan="2">Total de población atendida</th>
                    <th colSpan="3">Soporte/Evidencia</th>
                    <th rowSpan="2">Comentarios/Observaciones</th>
                </tr>
                <tr>
                    <th>Inédito</th>
                    <th>Reproducido</th>
                    <th>Adquirido</th>
                    <th style={{ background: '#BFBFBF' }}>Hombres</th>
                    <th style={{ background: '#BFBFBF' }}>Mujeres</th>
                    <th style={{ background: '#BFBFBF' }}>Jovenes</th>
                    <th style={{ background: '#BFBFBF' }}>Niños</th>
                    <th>Lista de asistencia</th>
                    <th>Evidencia fotográfica</th>
                    <th>Nota periodística</th>
                </tr>
            </thead>
        );

        if (espacioCargando || cargandoTotales) {
            return [<div className="hoja-a4 pagina-horizontal" key="loading"><p>Cargando...</p></div>];
        }
        if (espacioError) {
            return [<div className="hoja-a4 pagina-horizontal" key="error"><p style={{ color: 'red' }}>{espacioError}</p></div>];
        }
        if (!espacioAgrupado || espacioAgrupado.length === 0) {
            return [<div className="hoja-a4 pagina-horizontal" key="empty"><p>No hay datos para mostrar.</p></div>];
        }

        const allRowElements = [];
        espacioAgrupado.forEach((grupoMes, idx) => {
            allRowElements.push(
                <tr key={`header-${idx}`}>
                    <th colSpan="17" style={{ backgroundColor: '#000', color: '#ffffff', fontSize: '12px' }}>{meses[grupoMes.mes - 1]}</th>
                </tr>
            );
            grupoMes.registros.forEach((item, index) => {
                allRowElements.push(
                    <tr key={`${idx}-${index}`}>
                        <td className="item-center">{item.clave_eca || '---'}</td>
                        <td className="item-left">{item.nombre_inst_ope}</td>
                        <td className="item-center">{item.fecha_apert || '---'}</td>
                        <td className="item-center">{item.fecha_forta || '---'}</td>
                        <td className="item-center">
                            {
                                item.actividades.totalEscolar > 0 && item.actividades.totalComunitaria > 0
                                    ? `${item.actividades.totalEscolar} platica(s) escolar(es) y ${item.actividades.totalComunitaria} comunitaria(s)`
                                    : item.actividades.totalEscolar > 0
                                        ? `${item.actividades.totalEscolar} platica(s) escolar(es)`
                                        : item.actividades.totalComunitaria > 0
                                            ? `${item.actividades.totalComunitaria} platica(s) comunitaria(s)`
                                            : '0'
                            }
                        </td>
                        <td className="item-center">{item.inedito || '0'}</td>
                        <td className="item-center">{item.reproducido || '0'}</td>
                        <td className="item-center">{item.adquirido || '0'}</td>
                        <td className="item-center" style={{ background: '#BFBFBF' }}><b>{item.totales.totalHombres || 0}</b></td>
                        <td className="item-center" style={{ background: '#BFBFBF' }}><b>{item.totales.totalMujeres || 0}</b></td>
                        <td className="item-center" style={{ background: '#BFBFBF' }}><b>{item.totales.totalJovenes || 0}</b></td>
                        <td className="item-center" style={{ background: '#BFBFBF' }}><b>{item.totales.totalNinos || 0}</b></td>
                        <td className="item-center">{item.total_pobl || 0}</td>
                        <td className="item-center">{item.list_asist === 'sí' ? 'Sí' : 'No'}</td>
                        <td className="item-center">{item.evi_foto === 'sí' ? 'Sí' : 'No'}</td>
                        <td className="item-center">{item.nota_period === 'sí' ? 'Sí' : 'No'}</td>
                        <td className="item-left">{item.comentarios || '---'}</td>
                    </tr>
                );
            });
            allRowElements.push(
                <tr key={`subtotal-${idx}`} style={{ fontWeight: 'bold' }}>
                    <td colSpan="5" style={{ textAlign: 'right' }}>Subtotal:</td>
                    <td className="item-center">{grupoMes.totalesMes.inedito}</td>
                    <td className="item-center">{grupoMes.totalesMes.reproducido}</td>
                    <td className="item-center">{grupoMes.totalesMes.adquirido}</td>
                    <td className="item-center" style={{ background: '#BFBFBF' }}>{grupoMes.totalesMes.hombres}</td>
                    <td className="item-center" style={{ background: '#BFBFBF' }}>{grupoMes.totalesMes.mujeres}</td>
                    <td className="item-center" style={{ background: '#BFBFBF' }}>{grupoMes.totalesMes.jovenes}</td>
                    <td className="item-center" style={{ background: '#BFBFBF' }}>{grupoMes.totalesMes.ninos}</td>
                    <td className="item-center" style={{ background: '#BFBFBF' }}>{grupoMes.totalesMes.poblacion}</td>
                    <td colSpan="4"></td>
                </tr>
            );
        });

        const firstPageRows = 55;
        const subsequentPageRows = 70;
        const chunks = [];
        if (allRowElements.length > 0) {
            let remainingRows = [...allRowElements];
            chunks.push(remainingRows.splice(0, firstPageRows));
            while (remainingRows.length > 0) {
                chunks.push(remainingRows.splice(0, subsequentPageRows));
            }
        }

        return chunks.map((chunk, pageIndex) => (
            <div className="hoja-a4 pagina-horizontal" key={`oficio-page-${pageIndex}`}>
                {pageIndex === 0 && createPageHeader()}
                <div className="documento-contenido">
                    <table className="tabla-espacio-general tablas-preview" border="1" cellPadding="5" cellSpacing="0">
                        {createColGroup()}
                        {pageIndex === 0 && createTableHead()}
                        <tbody>
                            {chunk}
                        </tbody>
                        {pageIndex === chunks.length - 1 && (
                            <tfoot>
                                <tr style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
                                    <td colSpan="5" style={{ textAlign: 'right' }}>Totales del {semestreActual} Semestre {anioActual}:</td>
                                    <td className="item-center">{totalesSemestre.inedito}</td>
                                    <td className="item-center">{totalesSemestre.reproducido}</td>
                                    <td className="item-center">{totalesSemestre.adquirido}</td>
                                    <td className="item-center">{totalesSemestre.hombres}</td>
                                    <td className="item-center">{totalesSemestre.mujeres}</td>
                                    <td className="item-center">{totalesSemestre.jovenes}</td>
                                    <td className="item-center">{totalesSemestre.ninos}</td>
                                    <td className="item-center">{totalesSemestre.poblacion}</td>
                                    <td colSpan="4"></td>
                                </tr>
                            </tfoot>
                        )}
                    </table>
                </div>
                {pageIndex === chunks.length - 1 && createSignatures()}
            </div>
        ));
    }, [espacioAgrupado, espacioCargando, espacioError, admin, semestreActual, anioActual, totalesSemestre, cargandoTotales]);

    useEffect(() => {
        if (oficioPages) {
            setNumPaginas(oficioPages.length);
        }
    }, [oficioPages]);

    const irAPaginaSiguiente = () => {
        setPaginaActual((prev) => Math.min(prev + 1, numPaginas));
    };

    const irAPaginaAnterior = () => {
        setPaginaActual((prev) => Math.max(prev - 1, 1));
    };

    return (
        <>
            <div className="page-container">
                <h1 className="page-title">Administración de oficios.</h1>
                <h2 className="page-subtitle">Gestione los oficios que se pueden generar en el sistema.</h2>

                <div className="dashboard" style={{ marginBottom: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="dashboard-left">
                        <button className={`btn-neutral ${semestreSeleccionado === 1 ? 'active' : ''}`} onClick={() => setSemestreSeleccionado(1)}>
                            1er Semestre
                        </button>
                        <button className={`btn-neutral ${semestreSeleccionado === 2 ? 'active' : ''}`} onClick={() => setSemestreSeleccionado(2)} style={{ marginLeft: '10px' }}>
                            2do Semestre
                        </button>
                        <button className="btn-primario btn-pdf" onClick={handlePrint} style={{ marginLeft: '10px' }}><i class="bi bi-filetype-pdf"></i>Generar PDF</button>
                    </div>
                    <div className="header-meta-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {numPaginas > 1 && (
                            <div className="paginacion-controles" style={{ margin: 0, padding: 0, background: 'transparent', boxShadow: 'none' }}>
                                <button onClick={irAPaginaAnterior} disabled={paginaActual === 1} className="btn-neutral btn-acciones">
                                    <i class="bi bi-caret-left-fill"></i>
                                </button>
                                <span className="acciones-paginacion">
                                    Página {paginaActual} de {numPaginas}
                                </span>
                                <button onClick={irAPaginaSiguiente} disabled={paginaActual >= numPaginas} className="btn-neutral btn-acciones">
                                    <i class="bi bi-caret-right-fill"></i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div ref={componentRef}>
                    {espacioCargando || cargandoTotales ? (
                        <div className="hoja-a4 pagina-horizontal">
                            <div class="loader">
                                <label className="component-cargando">Cargando...</label>
                                <div class="loading"></div>
                            </div>
                        </div>
                    ) : (
                        oficioPages.map((pagina, index) => (
                            <div key={index} className={paginaActual === index + 1 ? 'pagina-activa' : 'pagina-oculta-pantalla'}>
                                {pagina}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}
export default Admin_oficios;