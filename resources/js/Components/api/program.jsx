import axiosInstance from "./axiosInstance";

export const create_program = async (data) =>{
    const formData = new FormData();
    formData.append('municipio', data.programa.municipio);
    formData.append('localidad', data.programa.localidad);
    formData.append('tipo_platica', data.programa.tipo_platica);
    formData.append('otras_activ', data.programa.otras_activ);
    formData.append('alumnos_Aten', data.programa.alumnos_Aten);
    formData.append('pobl_ate', data.programa.pobl_ate);
    formData.append('fecha_mes', data.programa.fecha_mes);
    formData.append('descripcion_activ', data.programa.descripcion_activ);
    
    if (data.imagenes && data.imagenes.length > 0) {
        for (let i = 0; i < data.imagenes.length; i++) {
            formData.append('imagenes[]', data.imagenes[i]);
        }
    }

    try{
        const response = await axiosInstance.post('/create_program', formData);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
        }
}

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

export const update_program = async (data) => {
    try{
        const response = await axiosInstance.put('/update_program', data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}