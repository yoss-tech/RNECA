import axiosInstance from "./axiosInstance";

export const get_municipios = async () => {
    try {
        const response = await axiosInstance.get('/municipios');
        return response.data;
    } catch (error) {
        console.log(error);
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