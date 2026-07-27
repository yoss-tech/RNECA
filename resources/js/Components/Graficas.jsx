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


const CumplimientoInformes = () => {
    const [estadisticas, setEstadisticas] = useState({
        validados: 0,
        pendientes: 0,
        noEntregados: 0
    });
    
    useEffect (() => {
        const cargarDatos = async () => {
            const response = await getCumplimientoOficios();
    
            if (response.status === 200) {
                setEstadisticas(response.body);
            }
        };
    
        cargarDatos();
    }, []);

    const datos = {
        labels: [
            "Validados",
            "Pendientes",
            "No Entregados",
        ],

        datasets: [{
            data: [
                estadisticas.validados,
                estadisticas.pendientes,
                estadisticas.noEntregados
            ],
            backgroundColor: [
                "#2952A3",
                "#CC7A00",
                "#B02E0E"
            ]
        }]
    };

    const totalInformes = datos.datasets[0].data.reduce((a, b) => a + b, 0);

    const opciones = {
    responsive: true,
    animation: {
        animateRotate: true,
        duration: 1500
    },
    
    plugins: {
        legend: {
            position: "top",
        },
        datalabels: {
            position:"center",
            color: "#fff",
            font: {
                weight: "bold",
                size: 14
            },
            formatter: (value, context) => {
                const data = context.dataset.data;
                const total = data.reduce((sum, current) => sum + current, 0);
                const porcentaje = ((value / total) * 100).toFixed(1);
                return `${porcentaje}%`;
            }
        }
    }
};

    return (
        <div style={{width:"300px"}}>
            <Doughnut data={datos} options={opciones}/>
            <br />
            <h5>Total de informes: {totalInformes}</h5>
        </div>
    );
};
export default CumplimientoInformes;