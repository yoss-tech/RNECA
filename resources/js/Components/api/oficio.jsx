import axios from "axios";
import axiosInstance from "./axiosInstance";

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

export const getCumplimientoOficios = async () => {
    const response = await axiosInstance.get('/cumplimientoOficios');
    return response.data;
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

export const subInfoFirm = async (data) => {
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

export const observacionOficio = async (data) => {
    try {
        const response = await axiosInstance.put('/observacionesOficio', data);
        return response.data;
    }
    catch (error) {
        console.log('Error al realizar la validación del documento');
    }
}

export const getEstatus = async () => {
    try {
        const response = await axiosInstance.get('/getEstatusOficios');
        return response.data;
    }
    catch (error) {
        console.log('Error al realizar la validación del documento');
    }
}