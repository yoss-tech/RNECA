import axiosInstance from "./axiosInstance";

export const loginUser = async (correo, password) => {
    // Es vital pedir la cookie CSRF antes del login para evitar el error 419
    await axiosInstance.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true
    });

    const credentials = { correo, password };
    try {
        const response = await axiosInstance.post('/login', credentials);
        return response.data; // El backend devuelve { status, message, body: {...} }
    }
    catch (error) {
        if (error.response) {
            const status = error.response.status;

            if (status === 422) {
                // Error de validación de Laravel
                return error.response.data; // { message, errors: { campo: [...] } }
            }

            if (status === 500) {
                // Error interno del servidor
                return {
                    status: 'error',
                    message: 'Error interno del servidor. Intenta más tarde.',
                    errors: {}
                };
            }

            if (status === 401) {
                return {
                    status: 'error',
                    message: 'Credenciales incorrectas.',
                    errors: {}
                };
            }

            return { 
                status: 'error', 
                message: 'Error de conexión con el servidor.',
                errors: {}
            };
        }
    }
}

export const logoutUser = async () => {
    try {
        const response = await axiosInstance.post('/logout');
        return response.data; // { status, message }
    } catch (error) {
        return {
            status: 'error',
            message: 'Error al cerrar sesión.',
            errors: {}
        };
    }
}

export const checkAuth = async () => {
    try {
        const response = await axiosInstance.get('/check-auth');
        return response.data;
    } catch (error) {
        return null; // No autenticado o error de conexión
    }
}