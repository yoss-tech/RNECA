import axiosInstance from "./axiosInstance";

export const create_ofice = async (data) => {
    const formData = new FormData();
    formData.append('mes_oficio', data.mes_oficio);
    // formData.append('ruta_oficio', data.ruta_oficio);

    // Aseguramos que el archivo exista antes de adjuntarlo
    if (data.ruta_oficio) {
        formData.append('ruta_oficio', data.ruta_oficio);
    }

    try{
        const response = await axiosInstance.post('/create_ofice', formData);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}   

export const get_ofice = async () => {
    try{
        const response = await axiosInstance.get('/get_ofice');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const getOficeEca = async () => {
    try{
        const response = await axiosInstance.get('/getOficeByEca');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const getOficio = async () => {
    try{
        const response = await axiosInstance.get('/oficios');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const getOficioPendiente = async () => {
    try{
        const response = await axiosInstance.get('/oficiosPendientes');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const getOficioCorreccion = async () => {
    try{
        const response = await axiosInstance.get('/oficiosCorreccion');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const getOficioValidado = async () => {
    try{
        const response = await axiosInstance.get('/oficiosValidados');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}