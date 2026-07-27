import React, { useState } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Swal from "sweetalert2";
import Toast from "../../Toast.jsx";
import { createUserCeaa } from "../../../Components/api/usuarios.jsx"

function Crear_SupervisorECAS({ cerrarModal, actualizarLista }) {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarPasswordConfirm, setMostrarPasswordConfirm] = useState(false);

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [alerts, setAlerts] = useState([]);
    const showAlert = (type, message) => {
        setAlerts([...alerts, { type, message }]);
        setTimeout(() => {
          setAlerts((prev) => prev.slice(1));
        }, 3000);
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            showAlert('error', 'Por favor, completa todos los campos requeridos.');
            return;
        }
        try {
            const response = await createUserCeaa(formData);
            const passwordTemporal = response.password_temporal;
            const usuario = response.usuario;

            await actualizarLista();
            cerrarModal();
            Swal.fire({
                title: "¡Guardado!",
                html:
                `<p>La información se guardó correctamente.</p>
                <p>Usuario (correo):</p>
                <p>${usuario}</p>
                <button id="copyUserBtn" class="swal2-confirm swal2-styled" style="background-color:#3085d6;">
                    Copiar usuario
                </button>
                <p>Contraseña temporal:</p>
                <p>${passwordTemporal}</p>
                <button id="copyPassBtn" class="swal2-confirm swal2-styled" style="background-color:#3085d6;">
                    Copiar contraseña
                </button>`,
                icon: "success",
                showConfirmButton: true,
                confirmButtonText: "Aceptar",
                didOpen: () => {
                    const copyUserBtn = document.getElementById("copyUserBtn");
                    const copyPassBtn = document.getElementById("copyPassBtn");
                    if (copyUserBtn) {
                        copyUserBtn.addEventListener("click", async () => {
                            await navigator.clipboard.writeText(usuario);

                            copyUserBtn.textContent = "¡Copiado! ✅"
                            copyUserBtn.disabled = true;
                            
                            setTimeout(() => {
                                copyUserBtn.textContent = "Copiar usuario"
                                copyUserBtn.disabled = false;
                            }, 2000);
                        });
                    }
                    if (copyPassBtn) {
                        copyPassBtn.addEventListener("click", async () => {
                            await navigator.clipboard.writeText(passwordTemporal);

                            copyPassBtn.textContent = "¡Copiado! ✅"
                            copyPassBtn.disabled = true;
                            
                            setTimeout(() => {
                                copyPassBtn.textContent = "Copiar contraseña"
                                copyPassBtn.disabled = false;
                            }, 2000);
                        });
                    }
                }
            });
        }
        catch (error) {
            if (error.response && error.response?.data?.errors) {
                showAlert('error', error.response.data.errors.correo[0]);
                return;
            } else {
                Swal.fire({
                    title: "Error al guardar",
                    text: "Ocurrió un problema al guardar la información. Inténtalo nuevamente.",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                });
            }
        }
    }

    const [errors, setErrors] = useState({});
    const validateForm =() => {
        let newErrors = {};
    
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido.';
        if (!formData.correo.trim()) {
            newErrors.correo = 'El correo es requerido.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            newErrors.correo = 'El correo no tiene un formato válido.';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'El password es requerido.';
        }
        if (formData.confirmPassword === "") {
            newErrors.password = 'Confirma la contraseña.';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <>
        <Toast alerts={alerts} />
        <div className="overlay">
            <div className="modal-box">
                <div className="modal-head">
                    <h4>Completa los siguientes datos</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="card-subtitle">Nombre del usuario:</label>
                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Ingresa el nombre del usuario"
                            title="Ingresa el nombre del usuario"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        {errors.nombre && <p className="error">{errors.nombre}</p>}
                    </div>
                    <div className="form-group">
                        <label className="card-subtitle">Correo del usuario:</label>
                        <input
                            type="email"
                            name="correo"
                            className="form-control"
                            placeholder="Ingresa el correo del usuario"
                            title="Ingresa el correo del usuario"
                            value={formData.correo}
                            onChange={handleChange}
                        />
                        {errors.correo && <p className="error">{errors.correo}</p>}
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Nueva contraseña:</label>
                        <div className="input-password">
                            <input
                                type={mostrarPassword ? "text" : "password"}
                                name="password"
                                className="form-control"
                                placeholder="Ingresa la contraseña"
                                title="Ingresa la contraseña"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <i className={mostrarPassword ? "bi bi-eye-slash" : "bi bi-eye"} onClick={() => setMostrarPassword(!mostrarPassword)}></i>
                        </div>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Confirmar nueva contraseña:</label>
                        <div className="input-password">
                            <input
                                type={mostrarPasswordConfirm ? "text" : "password"}
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirmar contraseña"
                                title="Confirmar contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <i className={mostrarPasswordConfirm ? "bi bi-eye-slash" : "bi bi-eye"} onClick={() => setMostrarPasswordConfirm(!mostrarPasswordConfirm)}></i>
                        </div>
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                    <button type="button" className="btn-primario" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Crear_SupervisorECAS;