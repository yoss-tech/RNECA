import React from "react";
import "/resources/css/style.css";
import miImagen from "/resources/img/PNG/Logotipo1.png";


function Login() {
  return (
  <body>
    <div className="simple-linear">
        <div className="container-img">
          <div className="logo">
            <img src={miImagen} alt="Logo RNECA" />
          </div>
        </div>

        <div className="text-center title-section">
          <h1>RNECA</h1>
          <h2>ACCESO AL REGISTRO NACIONAL DE ESPACIOS DE CULTURA DEL AGUA</h2>
        </div>
        <br />

      <div className="container">
        <div className="card login-card">
          <form>
            <div className="form-group">
              <label htmlFor="usuario">Usuario:</label>
              <input id="usuario" type="text" placeholder="Ingresa tu usuario"/>
            </div><br />

            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input id="password" type="password" placeholder="Ingresa tu contraseña"/>
            </div><br />

            <button className="btn1" onClick={() => window.location.href = "inicio_dicm"} type="button">DricM</button>
   <br /><br />
            <button className="btn1" onClick={() => window.location.href = "inicio_eca"} type="button">Iniciar Sesión </button>
          </form>
        </div>
      </div>
    </div>
  </body>
  );
}

export default Login;