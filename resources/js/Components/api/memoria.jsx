import axiosInstance from "./axiosInstance";

export const create_memoria = async (data) =>{
    const formData = new FormData();
    formData.append('titulo', data.titulo);
    formData.append('descripcion', data.descripcion);
    formData.append('descripcion_act', data.descripcion_act);
    formData.append('ruta_img', data.imagen)

    console.log(formData);

    try{
        const response = await axiosInstance.post('/create_memoria', formData);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}