import React, { useState, useEffect } from "react";
import { actualizarPrimerAcceso } from "@/Components/api/auth.jsx";
import { getInfoPerfil, getInfoEca } from "@/Components/api/usuarios.jsx";
import Swal from "sweetalert2";
import Toast from "../Toast.jsx";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function ActualizarPrimerAcceso() {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarPasswordConfirm, setMostrarPasswordConfirm] = useState(false);

    const [loading, setLoading] = useState(true);
    const [datos, setDatos] = useState({
        nombre: "",
        nombre_inst_ope: "",
        nombre_jefe: "",
        correo: "",
        password: "",
        password_confirmation: ""
    });
    const cargarDatos = async () => {
        try {
            const rol = localStorage.getItem('rol');
            let response;
            if (rol === 'rol1') {
                response = await getInfoEca();
            } else {
                response = await getInfoPerfil();
            }
            if (response?.status === 200) {
                setDatos({
                    nombre: response.body.nombre || "",
                    correo: response.body.correo || "",
                    nombre_inst_ope: response.body.nombre_inst_ope || "",
                    nombre_jefe: response.body.nombre_jefe || "",
                    password: "",
                    password_confirmation: ""
                });
            }
        } catch (error) {
            console.error("Error al cargar datos:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        cargarDatos();
    }, []);

    const rol = localStorage.getItem('rol');
    const rolEca = 'rol1';
    const esEca = rol === rolEca;
    const [errors, setErrors] = useState({});
    const [alerts, setAlerts] = useState([]);
    const showAlert = (type, message) => {
        setAlerts([...alerts, { type, message }]);
        setTimeout(() => {
          setAlerts((prev) => prev.slice(1));
        }, 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            const response = await actualizarPrimerAcceso(datos);
            if (response.status === 200) {
                const resultado =  await Swal.fire({
                    title: "¡Actualizado!",
                    text: response.message,
                    icon: "success",
                    confirmButtonText: "Continuar",
                    allowOutsideClick: false,
                    allowEscapeKey: false
                });
 
                if(resultado.isConfirmed) {
                    window.location.replace(response.redirect_to);
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                showAlert("error", error.response?.data?.message || "No fue posible actualizar los datos.");
            }
        }
    };

    return (
        <>
        <Toast alerts={alerts} />
        <div className="overlay">
            <div className="modal-box modal-grid">
                <div className="modal-head">
                    <h3>Actualización de datos</h3>
                    <p className="text-small text-white">Por seguridad, verifica que tus datos sean correctos y estén actualizados. De ser necesario, modifica la información y cambia tu contraseña antes de continuar.</p>
                </div>

                <div className="modal-body">
                    {loading ? (
                        <p className="text-bold">Cargando datos...</p>
                    ) : (
                        <>
                        <div className="form-group">
                            <label className="card-subtitle">Nombre completo:</label>
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Ingresa tu nombre completo"
                                title="Ingresa tu nombre completo"
                                value={datos.nombre}
                                onChange={handleChange}
                            />
                            {errors.nombre && (<p className="error">{errors.nombre[0]}</p>)}
                        </div>
                        {esEca && (
                            <>
                            <div className="form-group">
                                <label className="card-subtitle">Nombre de la institución operadora:</label>
                            <input
                                    type="text"
                                    name="nombre_inst_ope"
                                    className="form-control"
                                    placeholder="Ingresa el nombre de la institución operadora"
                                    title="Ingresa el nombre de la institución operadora"
                                    value={datos.nombre_inst_ope}
                                    onChange={handleChange}
                                />
                                {errors.nombre_inst_ope && (<p className="error">{errors.nombre_inst_ope[0]}</p>)}
                            </div>
                            <div className="form-group">
                                <label className="card-subtitle">Nombre y cargo del jefe inmediato :</label>
                                <p className="text-small">Ejemplo: <br /> L.C. Angelica Zamudio Barrera <br /> Directora General de la CAAMAH</p>
                                <textarea
                                    type="text"
                                    name="nombre_jefe"
                                    className="form-control"
                                    placeholder="Ingresa el nombre y cargo del jefe inmediato"
                                    title="Ingresa el nombre y cargo del jefe inmediato"
                                    value={datos.nombre_jefe}
                                    onChange={handleChange}
                                />
                                {errors.nombre_jefe && (<p className="error">{errors.nombre_jefe[0]}</p>)}
                            </div>
                            </>
                        )}
                        <div className="form-group">
                            <label className="card-subtitle">Correo electrónico:</label>
                            <input
                                type="email"
                                name="correo"
                                className="form-control"
                                placeholder="Ingresa el correo electronico"
                                title="Ingresa el correo electronico"
                                value={datos.correo}
                                onChange={handleChange}
                            />
                            {errors.correo && (<p className="error">{errors.correo[0]}</p>)}
                        </div>
                        <div className="form-group">
                            <label className="card-subtitle">Nueva contraseña:</label>
                            <div className="input-password">
                                <input
                                    type={mostrarPassword ? "text" : "password"}
                                    name="password"
                                    className="form-control"
                                    placeholder="Ingresa la nueva contraseña"
                                    title="Ingresa la nueva contraseña"
                                    value={datos.password}
                                    onChange={handleChange}
                                />
                                <i className={mostrarPassword ? "bi bi-eye-slash" : "bi bi-eye"} onClick={() => setMostrarPassword(!mostrarPassword)}></i>
                            </div>
                            {errors.password && (<p className="error">{errors.password[0]}</p>)}
                        </div>
                        <div className="form-group">
                            <label className="card-subtitle">Confirmar nueva contraseña:</label>
                            <div className="input-password">
                                <input
                                    type={mostrarPasswordConfirm ? "text" : "password"}
                                    name="password_confirmation"
                                    className="form-control"
                                    placeholder="Confirmar nueva contraseña"
                                    title="Confirmar nueva contraseña"
                                    value={datos.password_confirmation}
                                    onChange={handleChange}
                                />
                                <i className={mostrarPasswordConfirm ? "bi bi-eye-slash" : "bi bi-eye"} onClick={() => setMostrarPasswordConfirm(!mostrarPasswordConfirm)}></i>
                            </div>
                            {errors.password_confirmation && (<p className="error">{errors.password_confirmation[0]}</p>)}
                        </div>
                        </>
                    )}
                </div>
                
                <div className="modal-foot">
                    <button type="button" className="btn-primario" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ActualizarPrimerAcceso;