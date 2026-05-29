import axios from 'axios';

const axiosInstance = axios.create({
    // En local/Docker, el navegador accede al backend por localhost:8000
    baseURL: 'http://localhost:8000/api', 
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    // Esto es VITAL si usas Laravel Sanctum para que envíe las cookies de sesión
    withCredentials: true, 
    withXSRFToken: true,
});

export default axiosInstance;