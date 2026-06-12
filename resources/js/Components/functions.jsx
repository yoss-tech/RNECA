// Definir los nombres de los meses
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Función para convertir un número de mes a su nombre
export function mostrarSoloMes() {

    // Obtener la fecha actual
    const fecha = new Date();
    const nombreMes = meses[fecha.getMonth() -1 ]; // getMonth() devuelve 0-11

    return nombreMes;
}

// Función para mostrar la fecha limite, este aplica mes a mes y solo es hasta el 5 de cada mes
export function dateLimit() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mesActualIndex = fecha.getMonth();
    const nombreMes = meses[mesActualIndex];
    const año = fecha.getFullYear();

    const fechaLimite = "5 de "+ nombreMes + " de " + año; // Formato MM/DD/YYYY

    // Si la fecha actual es mayor al día 5, mostrar la fecha límite del próximo mes
    if (dia > 5) {
        const proximoMesIndex = (mesActualIndex + 1) % 12;
        const proximoAño = mesActualIndex === 11 ? año + 1 : año;
        return (proximoMesIndex + 1) + "/5/" + proximoAño; // Formato MM/DD/YYYY
    }

    return fechaLimite;
}

export function dateNow(){
    const fecha = new Date();
    
    return fecha;
}