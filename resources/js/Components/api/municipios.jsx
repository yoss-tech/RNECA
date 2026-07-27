import axiosInstance from "./axiosInstance";

export const getTotalMunicipio = async () => {
    const response = await axiosInstance.get('/municipios/total');
    return response.data;
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

export const updateMunicipio = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/municipio/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error en updateMunicipio:", error);
        return null;
    }
}

export const buscarMunicipio = async (buscar) => {
    try {
        const response = await axiosInstance.get("/municipios/buscar", {
            params: {
                buscar: buscar
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const buscarMunicipioSelect = async (id_municipio) => {
    try {
        const response = await axiosInstance.get("/municipios/select", {
            params: {
                id_municipio
            }
        });

        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};