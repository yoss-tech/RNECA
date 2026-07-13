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