import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Swal from "sweetalert2";
import Toast from "../../Toast.jsx";
import { updateUser } from "../../../Components/api/usuarios.jsx"

function Modificar_User({ usuario, cerrarModal, actualizarLista }) {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarPasswordConfirm, setMostrarPasswordConfirm] = useState(false);

    const [formData, setFormData] = useState({
        id_rol: "",
        nombre: "",
        correo: "",
        password: "",
        confirmPassword: ""
    })

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
            await updateUser(
                formData.id_usuario,
                formData
            );
            await actualizarLista();
            cerrarModal();
            Swal.fire({
                title: "¡Actualizado!",
                text: "La información se actualizo correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        }
        catch (error) {
            showAlert('error', 'Error al actualizar.');
            return;
        }
    }

    useEffect(() => {
        if (usuario) {
            setFormData(usuario);
        }
    }, [usuario]);


    const [errors, setErrors] = useState({});
    const validateForm =() => {
        let newErrors = {};
    
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido.';
        if (!formData.correo.trim()) {
            newErrors.correo = 'El correo es requerido.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            newErrors.correo = 'El correo no tiene un formato válido.';
        }

        if (formData.password !== "") {
            if (formData.confirmPassword === "") {
                newErrors.password = 'Confirma la contraseña.';
            }
            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Las contraseñas no coinciden.';
            }
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
                    <h4>Modifica los siguientes datos</h4>
                </div>

                <div className="modal-body">
                    {(formData.id_rol === "rol3" || formData.id_rol === "rol4") && (
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
                    )}
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
                                placeholder="Dejar vacío para no cambiar"
                                title="Dejar vacío para no cambiar"
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
                                placeholder="Confirmar nueva contraseña"
                                title="Confirmar nueva contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <i className={mostrarPasswordConfirm ? "bi bi-eye-slash" : "bi bi-eye"} onClick={() => setMostrarPasswordConfirm(!mostrarPasswordConfirm)}></i>
                        </div>
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>
                </div>

                <div className="modal-foot">
                    <button type="button" className="btn-neutral" onClick={cerrarModal}>
                        Cerrar
                    </button>
                    <button type="button" className="btn-primario" onClick={handleSubmit}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modificar_User;