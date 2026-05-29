import React from "react";
import "/resources/css/style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";
import { useForm, Head } from "@inertiajs/react";
import InputError from "../Components/InputError";
import VECA_Inicio from "./VECA_Inicio";
import { loginUser } from "../Components/auth.jsx";
import { GetUserInfo } from "../Components/users.jsx";

function Login() {
  const { data, setData, processing, errors, setError, clearErrors } = useForm({
    correo: '',
    password: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    clearErrors();

    try {
      const result = await loginUser(data.correo, data.password);

      if (result && (result.status === 'success' || result.status === 200)) {
        window.location.href = "/inicio_eca";
      }
    } catch (error) {
      // Si el backend devuelve 422 (Validación fallida)
      if (error.response && error.response.status === 422) {
        const backendErrors = error.response.data.errors;
        // Pasamos los errores de la API al estado de Inertia
        Object.keys(backendErrors).forEach((key) => {
          setError(key, backendErrors[key][0]);
        });
        console.error("Errores de validación:", backendErrors);
      } else {
        setError('correo', 'Ocurrió un error inesperado.');
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Head title="Iniciar Sesión" />
      <div className="simple-linear">
        <div className="container-img">
          <div className="logo">
            <img src={miImagen} alt="Logo RNECA" />
          </div>
        </div>

        <div className="text-center title-section">
          <h1>RNECA</h1>
          <h2>
            ACCESO AL REGISTRO NACIONAL DE ESPACIOS
            DE CULTURA DEL AGUA
          </h2>
        </div><br />

        <div className="container">
          <div className="card login-card">
            <form className='loginForm' onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="correo">
                  Correo electrónico:
                </label>
                <input
                  id="correo"
                  type="email"
                  name="correo"
                  value={data.correo}
                  className="form-control"
                  placeholder="Ingresa tu correo electrónico"
                  onChange={(e) => setData('correo', e.target.value)}
                />
                <InputError message={errors.correo} className="mt-2" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password">
                  Contraseña:
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  onChange={(e) => setData('password', e.target.value)}
                />
                <InputError message={errors.password} className="mt-2" />
              </div>
              <br />
              <button className="btn1" disabled={processing} type="submit">
                {processing ? 'Verificando...' : 'Iniciar Sesión'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const userInfo = GetUserInfo(); // Esto devuelve una promesa
userInfo.then(data => {
  console.log("Información del usuario:", data);
}).catch(error => {
  console.error("Error al obtener la información del usuario:", error);
});

export default Login;