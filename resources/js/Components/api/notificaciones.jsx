import axiosInstance from "./axiosInstance";

export const getNotificaciones = async () => {
    try {
        const response = await axiosInstance.get('/notificaciones');
        return response.data;
    } catch (error) {
        console.error("Error en getNotificaciones:", error);
        return null;
    }
}

export const getContadorNotificaciones = async () => {
    try {
        const response = await axiosInstance.get('/notificaciones/contador');
        return response.data;
    } catch (error) {
        console.error("Error en getContadorNotificaciones:", error);
        return null;
    }
}

export const marcarNotificacionLeida = async (id) => {
    try {
        const response = await axiosInstance.put(`/notificaciones/${id}/leida`);
        return response.data;
    } catch (error) {
        console.error("Error en marcarNotificacionLeida:", error);
        return null;
    }
}