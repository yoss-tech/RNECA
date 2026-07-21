import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Swal from "sweetalert2";
import Toast from "../../Toast.jsx";
import { updateUserEca } from "../../../Components/api/usuario_eca.jsx"

function Modificar_UserECA({ usuario, cerrarModal, actualizarLista }) {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarPasswordConfirm, setMostrarPasswordConfirm] = useState(false);

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (usuario) {
            setCorreo(usuario.correo);

            setPassword("");
        }
    }, [usuario]);

    const [alerts, setAlerts] = useState([]);
    const showAlert = (type, message) => {
        setAlerts([...alerts, { type, message }]);
        setTimeout(() => {
          setAlerts((prev) => prev.slice(1));
        }, 3000);
    };

    const [errors, setErrors] = useState({});
    const validateForm =() => {
        let newErrors = {};
    
        if (!correo.trim()) {
            newErrors.correo = 'El correo es requerido.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            newErrors.correo = 'El correo no tiene un formato válido.';
        }

        if (password !== "") {
            if (confirmPassword === "") {
                newErrors.password = 'Confirma la contraseña.';
            }
            if (password !== confirmPassword) {
                newErrors.confirmPassword = 'Las contraseñas no coinciden.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            showAlert('error', 'Por favor, completa todos los campos requeridos.');
            return;
        }
        try {
            const datos = {
                correo: correo,
                password: password
            };
    
            const response = await updateUserEca(
                usuario.id_usuario,
                datos
            );

            if (response && response.status === 200) {
                await actualizarLista();
                cerrarModal();
                
                Swal.fire({
                    title: "¡Actualizado!",
                    text: "La información se actualizo correctamente.",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                });
            }
        }
        catch (error) {
            showAlert('error', 'Error al actualizar.');
            return;
        }
    }

    return (
        <>
        <Toast alerts={alerts} />
        <div className="overlay">
            <div className="modal-box">
                <div className="modal-head">
                    <h4>Modifica los siguientes datos</h4>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="card-subtitle">Correo del usuario:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingresa el correo del usuario"
                            title="Ingresa el correo del usuario"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        {errors.correo && <p className="error">{errors.correo}</p>}
                    </div>

                    <div className="form-group">
                        <label className="card-subtitle">Nueva contraseña:</label>
                        <div className="input-password">
                            <input
                                type={mostrarPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Dejar vacío para no cambiar"
                                title="Dejar vacío para no cambiar"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                className="form-control"
                                placeholder="Confirmar nueva contraseña"
                                title="Confirmar nueva contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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

export default Modificar_UserECA;