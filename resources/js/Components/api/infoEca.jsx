import axiosInstance from "./axiosInstance";

// Función para traer información que requiera el ECA logueado
// para rellenar los datos del informe
export const infoEca = async () =>{
    try{
        const response = await axiosInstance.get('/infoEca');
        return response.data;
    }
    catch(error){
        console.error("Error en infoEca:", error);
        return null;
    }
}