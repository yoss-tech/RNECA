import axios from 'axios';

axios.defaults.withCredentials = true; // Esto es VITAL para que Laravel Sanctum funcione correctamente

const apiBaseUrl = import.meta.env.APP_URL || 'http://localhost:8000' || 'http://127.0.0.1:8000'

const axiosInstance = axios.create({
    // En local/Docker, el navegador accede al backend por localhost:8000
    baseURL: `${apiBaseUrl}/api`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    // Esto es VITAL si usas Laravel Sanctum para que envíe las cookies de sesión
    withCredentials: true, 
    withXSRFToken: true,
});

export default axiosInstance;