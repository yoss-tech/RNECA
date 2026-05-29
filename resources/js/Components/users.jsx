import axiosInstance from "./axiosInstance";

export const GetUserInfo = async () => {
    try{
        // Hacemos GET en lugar de POST. No enviamos ID explícito, 
        // el backend lo toma de la cookie de sesión (g.user).
        const response = await axiosInstance.get('/users');
        return response.data; // El backend devuelve { status, message, body: {...} }
    }
    catch (error) {
        console.error("Error en GetUserInfo:", error);
        // Retornar null para que la UI sepa que falló
        return null;
    }
}