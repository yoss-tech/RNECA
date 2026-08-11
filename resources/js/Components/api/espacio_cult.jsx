import axiosInstance from "./axiosInstance";

// Función para registrar el espacio de cultura (General)
export const create_espacio = async (data) => {
    try{
        const response = await axiosInstance.post('/create_espacio', data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

// Función para obtener la información del espacio de cultura (General)
export const get_espacio = async () => {
    try{
        const response = await axiosInstance.get('/infoEspacio');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const getIdEspacio = async () => {
    try{
        const response = await axiosInstance.get('/idEspacio');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const updatePoblacion = async (data) =>{
    try{
        const response = await axiosInstance.put('/updateEspacio', data)
        return response.data;
    }
    catch(error){
        console.log(error);
        return error;
    }
}

export const getDataEspacio = async (id) => {
    try{
        const response = await axiosInstance.get(`/infoPoblacion/${id}`);
        return response.data;
    }
    catch(error){
        console.log(error);
        return error;
    }
}

// Función para obtener toda la información del espacio de cultura (General) de todos los ecas
export const getAllEspacio = async () => {
    try{
        const response = await axiosInstance.get('/getEspacios');
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}