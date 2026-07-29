import axiosInstance from "./axiosInstance";

export const getTotalUser = async () => {
    const response = await axiosInstance.get('/usuarios/total');
    return response.data;
}

export const getTotalUserECAS = async () => {
    const response = await axiosInstance.get('/usuarios/totalECAS');
    return response.data;
}

export const getTotalUserDic = async () => {
    const response = await axiosInstance.get('/usuarios/totalDic');
    return response.data;
}

export const getTotalUserInactivo = async () => {
    const response = await axiosInstance.get('/usuarios/totalInactivo');
    return response.data;
}

export const getInfoPerfil = async () => {
    try {
        const response = await axiosInstance.get('/user/perfil');
        return response.data;
    } catch (error) {
        console.error("Error en getInfoPerfil:", error);
        return null;
    }
}

export const getInfoDic = async () => {
    try {
        const response = await axiosInstance.get('/user/dic');
        return response.data;
    } catch (error) {
        console.error("Error en getInfoDic:", error);
        return null;
    }
}

export const getInfoEca = async () => {
    try {
        const response = await axiosInstance.get('/user/eca');
        return response.data;
    } catch (error) {
        console.error("Error en getInfoEca:", error);
        return null;
    }
}

export const getUserDic = async () => {
    try {
        const response = await axiosInstance.get('/usuarios/dic');
        return response.data;
    } catch (error) {
        console.error("Error en getUserDic:", error);
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

export const getUserCeaa = async () => {
    try {
        const response = await axiosInstance.get('/usuarios/ceaa');
        return response.data;
    } catch (error) {
        console.error("Error en getUserCeaa:", error);
        return null;
    }
}

export const getUserLic = async () => {
    try {
        const response = await axiosInstance.get('/usuarios/lic');
        return response.data;
    } catch (error) {
        console.error("Error en getUserLic:", error);
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

export const getEstatus = async () => {
    try {
        const response = await axiosInstance.get('/estatu');
        return response.data;
    } catch (error) {
        console.error("Error en getEstatus:", error);
        return null;
    }
}

export const updateUser = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/usuarios/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error en updateUser:", error);
        return null;
    }
}

export const updateUserPerfil = async (data) => {
    try {
        const response = await axiosInstance.put('/usuarios/perfil', data);
        return response.data;
    } catch (error) {
        console.error("Error en updateUserPerfil:", error);
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

export const createUserCeaa = async (data) => {
    try {
        const response = await axiosInstance.post('/usuarios/create', data);
        return response.data;
    } catch (error) {
        console.error("Error al crear el Ceaa:", error);
        throw error;
    }
}