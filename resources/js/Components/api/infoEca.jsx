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

//Función con método post para la creación del oficio hecho por el ECA
export const createOfice = async () => {
    try{
        const response = await axiosInstance.post()
        return response.data;
    }
    catch(error){
        console.error("Error en createOfice:", error);
        return null;
    }
}

