import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { create_espacio } from "../../Components/api/espacio_cult.jsx"

function VECA_Poblacion({ onComplete }) {
  const [poblacion, setPoblacion] = useState({
    hombres13_17: 0,
    hombres18_30: 0,
    hombres30_40: 0,
    hombres40_50: 0,
    hombres50mas: 0,
    mujeres13_17: 0,
    mujeres18_30: 0,
    mujeres30_40: 0,
    mujeres40_50: 0,
    mujeres50mas: 0,
    ninos12: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPoblacion({
      ...poblacion,
      [name]: Number(value),
    });
  };

  const [comentarios, setComentarios] = useState('');

  // Inicializamos los nexos con valores booleanos para mayor claridad.
  const [nexo, setNexo] = useState({
    lista_asistencia: false,
    evidencia_fotografica: false,
    nota_periodica: false,
  });

  const [material, setMaterial] = useState({
    inedito : 0,
    reproducido : 0,
    adquirido : 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Transformamos el objeto 'poblacion' en el array 'asistentes' que el backend espera.
      const asistentes = Object.entries(poblacion)
        .filter(([, cantidad]) => cantidad > 0) // Solo enviamos los que tienen cantidad > 0
        .map(([key, cantidad]) => {
          const [genero, rango_edad] = key.startsWith('hombres') 
            ? ['Hombre', key.replace('hombres', '')]
            : key.startsWith('mujeres')
            ? ['Mujer', key.replace('mujeres', '')]
            : ['Niño/Niña', key.replace('ninos', '')]; // 'ninos12'
          
          return {
            genero: genero,
            rango_edad: rango_edad.replace('_', '-'), // ej: 13_17 -> 13-17
            cantidad: cantidad,
          };
        });

      // Construimos el objeto de datos final
      const dataToSend = {
        total_pobl: total,
        comentarios: comentarios,
        asistentes: asistentes,
        nexo: nexo,
        material: material
      };
      console.log(dataToSend);
      await create_espacio(dataToSend);
      onComplete(); 
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  const total =
    poblacion.hombres13_17 +
    poblacion.hombres18_30 +
    poblacion.hombres30_40 +
    poblacion.hombres40_50 +
    poblacion.hombres50mas +
    poblacion.mujeres13_17 +
    poblacion.mujeres18_30 +
    poblacion.mujeres30_40 +
    poblacion.mujeres40_50 +
    poblacion.mujeres50mas +
    poblacion.ninos12;

  

  return (
    <div className="page-container">
      <h1 className="page-title">Registro de participantes y beneficiarios.</h1>
      <h2 className="page-subtitle">Ingrese la información relacionada con la población participante en las actividades realizadas.</h2>

      <form className="form-registro" onSubmit={handleSubmit}>
        <div className="form-registro">
          <p className="page-text">Ingresa la información sobre la población beneficiaria del mes.</p>
          <p className="form-subtitle">Material didáctico
            <i class="bi bi-question-circle" title="Indicar el número de material didáctico que se distribuyó en el ECA según su modalidad"></i>
          </p>

          <div className="btn-container-horizontal">

            <div className="input-container-horizontal">
            <label className="form-label">Inédito
              <i class="bi bi-question-circle" title="Indicar si ha recibido algún material inedito"></i>
            </label>
            <input 
              type="number" 
              placeholder="Ingresa el número de material didáctico según su modalidad" 
              className="form-control" 
              id="inedito"
              name="inedito"
              value={material.inedito}
              onChange={(e) => setMaterial({ ...material, inedito: e.target.value })}
            />
            </div>

             <div className="input-container-horizontal">
              <label className="form-label">Reproducido
                <i class="bi bi-question-circle" title="Indicar si han recibido KITS ahorradores, manuales, librillos, lapiceros, entre otros consumibles"></i>
              </label>
              <input 
              type="number" 
              placeholder="Ingresa el número de material didáctico según su modalidad" 
              className="form-control" 
              id="reproducido"
              name="reproducido"
              value={material.reproducido}
              onChange={(e) => setMaterial({ ...material, reproducido: e.target.value })}
              />
            </div>
            
            <div className="input-container-horizontal">
            <label className="form-label">Adquirido
              <i class="bi bi-question-circle" title="Indicar si el espacio cuenta con maquetas"></i>
            </label>
            <input 
              type="number" 
              placeholder="Ingresa el número de material didáctico según su modalidad" 
              className="form-control"
              id="adquirido"
              name="adquirido"
              value={material.adquirido}
              onChange={(e) => setMaterial({ ...material, adquirido: e.target.value })} 
            />
            </div>
          </div>

  
          <p className="form-subtitle">Asistentes
            <i class="bi bi-question-circle" title="Indicar el número de asistentes según el rango de edad, asi como si se trata de niños menores de 12 años"></i>
          </p>
          <p className="form-text">Hombres</p>
          <div className="form-campo">
            <label className="form-label">Rangos de edad</label>
            
            <div className="btn-container-horizontal">
            <input
              type="number"
              name="hombres13_17"
              placeholder="De 13 a 17"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 13 a 17"
            />

            <input
              type="number"
              name="hombres18_30"
              placeholder="De 18 a 30"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 18 a 30"
            />

            <input
              type="number"
              name="hombres30_40"
              placeholder=" De 30 a 40"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 30 a 40"
            />

              <input
              type="number"
              name="hombres40_50"
              placeholder=" De 40 a 50"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 40 a 50"
            />

            <input
              type="number"
              name="hombres50mas"
              placeholder="De 50 o  +"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 50 o más"
            />
            </div>
          </div>

          <p className="form-text">Mujeres</p>
          <div className="form-campo">
            <label className="form-label">Rangos de edad</label>
            <div className="btn-container-horizontal">
            <input
              type="number"
              name="mujeres13_17"
              placeholder="De 13 a 17"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 13 a 17"
            />

            <input
              type="number"
              name="mujeres18_30"
              placeholder="De 18 a 30"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 18 a 30"
            />
            
            <input
              type="number"
              name="mujeres30_40"
              placeholder="De 30 a 40"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 30 a 40"
            />

            <input
              type="number"
              name="mujeres40_50"
              placeholder="De 40 a 50"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 40 a 50"
            />

            <input
              type="number"
              name="mujeres50mas"
              placeholder="De 50 o  +"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes de 50 o más"
            />
            </div>
          </div>

          <p className="form-text">Niños</p>
          <div className="form-campo">
            <label className="form-label">Rangos de edad</label>
            <input
              type="number"
              name="ninos12"
              placeholder="Ingresa el número de asistentes menores de 12"
              className="form-control"
              onChange={handleChange}
              title="Ingresa el número de asistentes menores de 12"
            />
          </div>

          <div className="btn-container-horizontal">

            <div className="input-container-horizontal">
              <p className="form-subtitle">Anexos
                <i class="bi bi-question-circle" title="Indicar los entregables con los que se cuenta como evidencia de la acción en cuestión (lista de asistencia, evidencia fotográfica o nota periodística). Estos deberán anexarse a este formato"></i>
              </p>
              
              <div className="check-group">
                <label className="check-item">
                  <input 
                  type="checkbox"
                  name="lista_asistencia"
                  id="lista_asistencia"
                  checked={nexo.lista_asistencia}
                  onChange={(e) => setNexo({ ...nexo, lista_asistencia: e.target.checked })} 
                  />Lista de asistencia
                </label>
                
                <label className="check-item">
                  <input 
                  type="checkbox"
                  id='evidencia_fotografica'
                  name='evidencia_fotografica'
                  checked={nexo.evidencia_fotografica}
                  onChange={(e) => setNexo({ ...nexo, evidencia_fotografica: e.target.checked })}
                  />Evidencia fotográfica
                  </label>
                  
                <label className="check-item">
                  <input 
                  type="checkbox"
                  id='nota_periodica'
                  name='nota_periodica'
                  checked={nexo.nota_periodica}
                  onChange={(e) => setNexo({ ...nexo, nota_periodica: e.target.checked })} 
                  />Nota periodística
                </label>
              </div>
            </div>

            <div className="input-container-horizontal">
              <p className="form-subtitle">Total de la población atendida
                <i class="bi bi-question-circle" title="Sumatoria de los asistentes"></i>
              </p>
              
              <div className="form-campo">
                <input
                type="number"
                value={total}
                id="total_pobl"
                name="total_pobl"
                readOnly
                className="form-control"
                />
              </div>
            </div>
          </div>

          <p className="form-subtitle">Comentarios/Observaciones
            <i class="bi bi-question-circle" title="Algún comentario u observaciones que se consideren relevantes y/o añadir listado general de las actividades en el mes"></i>
          </p>

          <div className="form-campo">
            <textarea rows="3"
              name='comentarios'
              id="comentarios"
              onChange={(e) => setComentarios(e.target.value)}
              placeholder="Ingresa algún comentario u observación"
              className="form-control">
            </textarea>
          </div>

          <div className="page-botones">
            <button type="submit" className="btn-primario" onClick={handleSubmit}>Guardar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VECA_Poblacion;   