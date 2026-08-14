import React, { useState, useEffect } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getCumplimientoOficios } from "./api/oficio";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
);

const CumplimientoInformes = ({ setTotalInformes }) => {
    const [estadisticas, setEstadisticas] = useState({
        validados: 0,
        pendientes: 0,
        noEntregados: 0
    });
    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const response = await getCumplimientoOficios();
                console.log("Respuesta cumplimiento:", response);
                if (response?.status === 200 && response?.body) {
                    const nuevasEstadisticas = {
                        validados: Number(response.body.validados) || 0,
                        pendientes: Number(response.body.pendientes) || 0,
                        noEntregados: Number(response.body.noEntregados) || 0
                    };
                    setEstadisticas(nuevasEstadisticas);
                    const total = nuevasEstadisticas.validados + nuevasEstadisticas.pendientes + nuevasEstadisticas.noEntregados;
                    console.log("TOTAL INFORMES:", total);
                    if (setTotalInformes) {
                        setTotalInformes(total);
                    }
                }
            } catch (error) {
                console.error(
                    "Error al cargar cumplimiento de informes:",
                    error
                );
                setCargando(false);
            }
        };
        cargarDatos();
    }, [setTotalInformes]);

    const datos = {
        labels: [
            "Validados",
            "Pendientes",
            "No Entregados"
        ],
        datasets: [
            {
                data: [
                    estadisticas.validados,
                    estadisticas.pendientes,
                    estadisticas.noEntregados
                ],

                backgroundColor: [
                    "#2952A3",
                    "#CC7A00",
                    "#B02E0E"
                ],
                borderWidth: 0
            }
        ]
    };
    
    const totalInformes =estadisticas.validados + estadisticas.pendientes + estadisticas.noEntregados;
    const opciones = {
        responsive: true,
        animation: {
            animateRotate: true,
            duration: 1500
        },
        plugins: {
            legend: {
                position: "top"
            },
            datalabels: {
                position: "center",
                color: "#fff",
                font: {
                    weight: "bold",
                    size: 14
                },
                formatter: (value, context) => {
                    const data = context.dataset.data;
                    const total = data.reduce(
                        (sum, current) =>
                            sum + Number(current),
                        0
                    );
                    if (total === 0) {
                        return "0%";
                    }
                    const porcentaje = (
                        (Number(value) / total) * 100
                    ).toFixed(1);
                    return `${porcentaje}%`;
                }
            }
        }
    };
    return (
        <div style={{width: "300px",textAlign: "center"}}>
            <Doughnut data={datos} options={opciones}/>
        </div>
    );
};
export default CumplimientoInformes;