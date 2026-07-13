import axiosInstance from "./axiosInstance";

export const checkEspacioRegistro = async () => {
    try {
        const response = await axiosInstance.get('/espacio/check');
        return response.data;
    } catch (error) {
        console.error('Error al verificar el registro de espacio:', error);
        return { registro_existente: false, error: true };
    }
};
