import axiosInstance from "./axiosInstance";

// Registrar una nueva memoria
export const create_memoria = async (data) => {
    try {
        const response = await axiosInstance.post('/create_memoria', data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const get_memoria = async () => {
    try {
        const response = await axiosInstance.get('/infoMemoria');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Otener la descripción general de la memoria
export const getDesc = async () =>{
    try {
        const response = await axiosInstance.get('/getDesc');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Esta es la función que se conectará con el ActividadMemoController
export const create_activ = async (data) => {
    // Creamos un objeto FormData para poder enviar archivos.
    const formData = new FormData();

    // Agregamos los campos de texto que el backend espera.
    formData.append('descripcion', data.descripcion);
    formData.append('id_program', data.id_program);

    if (data.imagenes && data.imagenes.length > 0) {
        for (let i = 0; i < data.imagenes.length; i++) {
            formData.append('imagenes[]', data.imagenes[i]);
        }
    }

    try {
        const response = await axiosInstance.post('/create_activ', formData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}


// Api para traer las id de las imgenes que le corresoponden y pasarselas a cargarImg
export const getImgByactiv = async (id) =>{
    try{
        const response  = await axiosInstance.get(`/getIdActividad/${id}`)
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

// Api para traer las imgenes que le corresoponden a cada actividad en formato blob
export const cargarImg = async (id) => {
    try{
        const response  = await axiosInstance.get(`/fotos/${id}/archivo`,{
            responseType: 'blob'
        })
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

// Obtener las actividades por su id
export const updateActividad = async (data) => {
    try {
        const response = await axiosInstance.put('/update_activ', data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Api para eliminar una imagen
export const deleteImage = async (id) => {
    try {
        const response = await axiosInstance.delete(`/delete_foto/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar la imagen:", error);
        throw error; // Re-throw to be handled by the caller
    }
}

// Api para añadir más imagenes
export const addImage = async (data) => {
    const formData = new FormData();
    formData.append('id_actividad', data.id_program);
    
    if (data.imagenes && data.imagenes.length > 0) {
        for (let i = 0; i < data.imagenes.length; i++) {
            formData.append('imagenes[]', data.imagenes[i]);
        }
    }

    try {
        const response = await axiosInstance.post('/add_image', formData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}