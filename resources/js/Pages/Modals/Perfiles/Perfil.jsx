import React, { useState, useEffect } from "react";
import { updateUserPerfil } from "@/Components/api/usuarios";
import Swal from "sweetalert2";
import Toast from "../../Toast.jsx";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Perfil({ cerrarModal, obtenerPerfil, mostrarInformacion = false}) {
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarPasswordConfirm, setMostrarPasswordConfirm] = useState(false);

    const [datos, setDatos] = useState({
        nombre_munipio: "",
        nombre_inst_ope: "",
        nombre: "",
        correo: "",
        password: "",
        confirmPassword: ""
    });
    const [editar, setEditar] = useState(false);
    const [loading, setLoading] = useState(true);
    const cargarPerfil = async () => {
        const response = await obtenerPerfil();
        if (response?.status === 200) {
            setDatos({
                nombre_inst_ope: response.body.nombre_inst_ope || "",
                nombre_munipio: response.body.nombre_munipio || "",
                nombre: response.body.nombre || "",
                correo: response.body.correo || "",
                password: ""
            });
            setLoading(false);
        }
    };
    useEffect(() => {
        cargarPerfil();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos((prevDatos) => ({
            ...prevDatos,
            [name]: value
        }));
    };

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
    
        if (!datos.nombre.trim()) newErrors.nombre = 'El nombre es requerido.';
        if (!datos.correo.trim()) {
            newErrors.correo = 'El correo es requerido.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) {
            newErrors.correo = 'El correo no tiene un formato válido.';
        }

        if (datos.password !== "") {
            if (datos.confirmPassword === "") {
                newErrors.confirmPassword = 'Confirma la contraseña.';
            }
            if (datos.password !== datos.confirmPassword) {
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

        const datosActualizar = {
            nombre: datos.nombre,
            correo: datos.correo,
            password: datos.password
        }
        
        try {
            const response = await updateUserPerfil(datosActualizar);
            if (response.status === 200) {
                setEditar(false);
                await cargarPerfil();
                
                Swal.fire({
                    title: "¡Actualizado!",
                    text: "La información se actualizo correctamente.",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                });
                cerrarModal();
            } else {
                showAlert('error', response.message || 'No fue posible actualizar.');
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
                    <h3>Perfil</h3>
                </div>

                <div className="modal-body">
                    {loading ? (
                        <p className="text-bold">Cargando datos...</p>
                    ) : (
                        <>
                        {mostrarInformacion && (
                            <div class="mb-3">
                                <p className="text-title">{datos.nombre_munipio}</p>
                                <p className="text-subtitle">{datos.nombre_inst_ope}</p>
                            </div>
                        )}
                        <div className="form-group">
                            <label className="card-subtitle">Nombre:</label>
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                value={datos.nombre}
                                onChange={handleChange}
                                readOnly={!editar}
                            />
                            {errors.nombre && <p className="error">{errors.nombre}</p>}
                        </div>
                        <div className="form-group">
                            <label className="card-subtitle">Correo electrónico:</label>
                            <input
                                type="text"
                                name="correo"
                                className="form-control"
                                value={datos.correo}
                                onChange={handleChange}
                                readOnly={!editar}
                            />
                            {errors.correo && <p className="error">{errors.correo}</p>}
                        </div>
                        {editar && (
                            <>
                            <div className="form-group">
                                <label className="card-subtitle">Nueva contraseña:</label>
                                <div className="input-password">
                                    <input
                                        type={mostrarPassword ? "text" : "password"}
                                        name="password"
                                        className="form-control"
                                        placeholder="Dejar vacío para no cambiar"
                                        title="Dejar vacío para no cambiar"
                                        value={datos.password}
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
                                        value={datos.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <i className={mostrarPasswordConfirm ? "bi bi-eye-slash" : "bi bi-eye"} onClick={() => setMostrarPasswordConfirm(!mostrarPasswordConfirm)}></i>
                                </div>
                                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                            </div>
                            </>
                        )}
                        </>
                    )}
                </div>
                
                <div className="modal-foot">
                    {!editar ? (
                        <>
                        <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                        <button type="button" className="btn-negativo" onClick={() => setEditar(true)}>Modificar</button>
                        </>
                    ) : (
                        <>
                        <button 
                            type="button"
                            className="btn-neutral"
                            onClick={() => {
                                setEditar(false);
                                setErrors({});
                                cargarPerfil();
                            }}>
                            Cancelar
                        </button>
                        <button type="button" className="btn-primario" onClick={handleSubmit}>Guardar</button>
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}
export default Perfil;