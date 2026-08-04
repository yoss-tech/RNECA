import React, { useState, useEffect } from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";
import Swal from "sweetalert2";
import Toast from "../../Toast.jsx";
import { updateMunicipio } from "../../../Components/api/municipios.jsx"

function Modificar_NumHab({ municipio, cerrarModal, actualizarLista }) {
    const [numHabitantes, setNumHabitantes] = useState("");

    useEffect(() => {
        if (municipio) {
            setNumHabitantes(municipio.num_habitan);
        }
    }, [municipio]);

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
    
        if (!numHabitantes || Number(numHabitantes) <= 0) newErrors.numHabitantes = 'El número de habitantes no es valido.';

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
                num_habitan: numHabitantes
            };
    
            const response = await updateMunicipio(
                municipio.id_municipio,
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
                    <h3>Modificar el número de habitantes de {municipio.nombre_munipio}</h3>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="card-subtitle">Número de habitantes:</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Ingresa el número de habitantes"
                            title="Ingresa el número de habitantes"
                            value={numHabitantes}
                            onChange={(e) => setNumHabitantes(e.target.value)}
                        />
                        {errors.numHabitantes && <p className="error">{errors.numHabitantes}</p>}
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

export default Modificar_NumHab;