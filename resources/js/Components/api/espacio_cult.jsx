import axiosInstance from "./axiosInstance";

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