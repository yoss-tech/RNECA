import axios from "axios";
import axiosInstance from "./axiosInstance";

// Crear la ruta del oficio y guardarlo en el storage
export const create_ofice = async (data) => {
    const formData = new FormData();
    formData.append('mes_oficio', data.mes_oficio);
    // formData.append('ruta_oficio', data.ruta_oficio);

    // Aseguramos que el archivo exista antes de adjuntarlo
    if (data.ruta_oficio) {
        formData.append('ruta_oficio', data.ruta_oficio);
    }

    try {
        const response = await axiosInstance.post('/create_ofice', formData);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const get_ofice = async () => {
    try {
        const response = await axiosInstance.get('/get_ofice');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const get_oficeCorrecion = async () => {
    try {
        const response = await axiosInstance.get('/oficiosCorrecion');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const getOficeCompletos = async () => {
    try {
        const response = await axiosInstance.get('/oficiosCompletos');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const getOficeEca = async () => {
    try {
        const response = await axiosInstance.get('/getOficeByEca');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const getOficio = async () => {
    try {
        const response = await axiosInstance.get('/oficios');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const buscarOficios = async (municipio) => {
    try {
        const response = await axiosInstance.get(
            `/oficios/buscar/${encodeURIComponent(municipio)}`
        );

        return response.data;
    }
    catch (error) {
        console.log("Error al buscar oficios por municipio:", error);
        return null;
    }
};

export const getOficioPendiente = async () => {
    try {
        const response = await axiosInstance.get('/oficiosPendientes');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const buscarMunicipioSelect = async (id_municipio) => {
    try {
        const response = await axiosInstance.get(
            `/oficiosPendientes/municipio/${id_municipio}`
        );

        return response.data;
    }
    catch (error) {
        console.log("Error al buscar oficios por municipio:", error);
        return null;
    }
}

export const getOficioCorreccion = async () => {
    try {
        const response = await axiosInstance.get('/oficiosCorreccion');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const getOficioValidado = async () => {
    try {
        const response = await axiosInstance.get('/oficiosValidados');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const buscarSelectValidado = async (id_municipio) => {
    try {
        const response = await axiosInstance.get(
            `/oficiosValidados/municipio/${id_municipio}`
        );

        return response.data;
    }
    catch (error) {
        console.log("Error al buscar oficios validados por municipio:", error);
        return null;
    }
}

export const getCumplimientoOficios = async () => {
    try {
        const response = await axiosInstance.get('/cumplimientoOficios');
        return response.data;
    } catch (error) {
        console.error("Error al obtener cumplimiento de oficios:", error);
        throw error;
    }
}

export const getOficeFirm = async () => {
    try {
        const result = await axiosInstance.get('/oficiosFirm');
        return result.data;
    }
    catch (error) {
        console.log('Error al obtener los oficios firmados')
    }
}

// 
export const updateOficio = async (data) => {
    const formData = new FormData();
    formData.append('id_oficio', data.id_oficio)
    formData.append('fecha_firma', data.fecha_firma);

    // Asegurarse de que el archivo existe y usar el nombre de campo correcto ('ruta_oficio_firm')
    if (data.ruta_oficio_firma) {
        formData.append('ruta_oficio', data.ruta_oficio_firma);
    }

    try {
        // Se cambia a .post para manejar correctamente la carga de archivos (multipart/form-data)
        const response = await axiosInstance.post('/subirOficioFirm', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
    catch (error) {
        console.log("Error al subir el oficio firmado:", error.response ? error.response.data : error);
        return null
    }
}

// Revisión para saber si el oficio ya fue enviado o no
export const checkOficio = async () => {
    try {
        const response = await axiosInstance.get('/checkOficio');
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

// Traer los oficios existentes en pdf desde el storage
export const viewOficio = async (id) => {
    try {
        const response = await axiosInstance.get(`/view_ofice/${id}`, {
            responseType: 'blob',
        });
        return response.data;
    }
    catch (error) {
        console.log('Error al obtener la vista del documento', error);
        throw error;
    }
}

// Crear las observaciones de un oficio
export const observacionOficio = async (data) => {
    const response = await axiosInstance.put('/observacionesOficio', data);
    return response.data;
}

//Obtener los tipos de estatus disponibles para asignar a un oficio
export const getEstatus = async () => {
    try {
        const response = await axiosInstance.get('/getEstatusOficios');
        return response.data;
    }
    catch (error) {
        console.log('Error en getEstatus: ', error);
        return null;
    }
}

// Obtener la metadata del último oficio (mes y estado)
export const getUltimoOficioMetadata = async () => {
    try {
        const response = await axiosInstance.get('/getUltimoOficioMetadata');
        return response.data;
    } catch (error) {
        console.error('Error al obtener la metadata del último oficio:', error);
        throw error; // Re-lanzamos el error para que el componente que llama lo maneje
    }
};

// Obtener el estatus de un oficio ya registrado con el fin de saber si esta firmado o con correcciones
export const getEstatusOficio = async () => {
    try{
        const response = await axiosInstance.get('/getEstatusOficio');
        return response.data;
    }
    catch(error){
        console.log('Error al realizar la validación del documento');
        throw error;
    }
}