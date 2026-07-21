import axiosInstance from "./axiosInstance";

export const getUserDicMun = async () => {
    try {
        const response = await axiosInstance.get('/usuarios/dicmun');
        return response.data;
    } catch (error) {
        console.error("Error en getUserDicMun:", error);
        return null;
    }
}

export const getUserEcas = async () => {
    try {
        const response = await axiosInstance.get('/usuarios/eca');
        return response.data;
    } catch (error) {
        console.error("Error en getUserEcas:", error);
        return null;
    }
}

export const getEcas = async () => {
    try {
        const response = await axiosInstance.get('/ecas');
        return response.data;
    } catch (error) {
        console.error("Error en getEcas:", error);
        return null;
    }
}

export const getMunicipios = async () => {
    try {
        const response = await axiosInstance.get('/municipio');
        return response.data;
    } catch (error) {
        console.error("Error en getMunicipios:", error);
        return null;
    }
}

export const getEstatus = async () => {
    try {
        const response = await axiosInstance.get('/estatu');
        return response.data;
    } catch (error) {
        console.error("Error en getEstatus:", error);
        return null;
    }
}

export const updateUserEca = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/usuarios/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error en updateUserEca:", error);
        return null;
    }
}

export const updateEca = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/usuarios/eca/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error en updateEca:", error);
        return null;
    }
}

export const createEca = async (data) => {
    try {
        const response = await axiosInstance.post('/usuarios/eca', data);
        return response.data;
    } catch (error) {
        console.error("Error al crear el ECA:", error);
        throw error;
    }
}