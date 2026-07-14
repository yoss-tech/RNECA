import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

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

    const datos = {
        labels: [
            "Validados",
            "Pendientes",
            "No Entregados",
        ],

       datasets: [
        {
            data: [60, 10, 30],
            backgroundColor: [
                "#2952A3",
                "#CC7A00",
                "#B02E0E"
            ]
        }
        ]
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
            <h5>Total de informes: {totalInformes}</h5>
        </div>
    );
};
export default CumplimientoInformes;