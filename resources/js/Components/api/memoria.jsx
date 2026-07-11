import axiosInstance from "./axiosInstance";

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

// Esta es la función que se conectará con el ActividadMemoController
export const create_activ = async (data) => {
    // Creamos un objeto FormData para poder enviar archivos.
    const formData = new FormData();

    // Agregamos los campos de texto que el backend espera.
    formData.append('descripcion', data.descripcion);
    formData.append('id_program', data.id_program);

    // Es crucial usar 'imagenes[]' para que el backend (Laravel) lo interprete como un array.
    if (data.imagenes && data.imagenes.length > 0) {
        for (let i = 0; i < data.imagenes.length; i++) {
            formData.append('imagenes[]', data.imagenes[i]);
        }
    }

    try {
        // 4. Enviamos la petición
        const response = await axiosInstance.post('/create_activ', formData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const get_activ = async () => {
    try {
        const response = await axiosInstance.get('/infoActiv');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
