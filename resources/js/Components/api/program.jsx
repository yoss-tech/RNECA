import axiosInstance from "./axiosInstance";

export const create_program = async (data) =>{
    try{
        const response = await axiosInstance.post('/create_program', data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

// Puedes crear una función específica si el endpoint es diferente
export const getProgramData = async () => {
    try {
        // Asumiendo que tu ruta en api.php es /get_program
        const response = await axiosInstance.get('/infoProgram');
        return response.data;
    } catch (error) {
        console.error("Error en getProgramData:", error);
        return null;
    }
}

export const delete_program = async (id) => {
    try {
        const response = await axiosInstance.delete(`/delete_program/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error en delete_program:", error);
        return null;
    }
}