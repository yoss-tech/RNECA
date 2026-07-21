import React from "react";
import "/resources/css/Style.css";
import "/resources/css/Modal.css";

function Ver_ECA({ eca, cerrarModal, abrirModalModificar }) {
  if(!eca) return null;

  return (
    <div className="overlay">
        <div className="modal-box">
            <div className="modal-head">
              <h4>Espacio de cultura del agua {eca.nombre_munipio}</h4>
            </div>
            <div className="modal-body">
              <p className="text-title">Datos generales</p>
              <table>
                <tbody>
                  <tr>
                    <td className="text-bold">Instancia Ejecutora</td>
                    <td>{eca.nombre_inst}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Clave</td>
                    <td>{eca.clave_eca}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Instancia Operativa</td>
                    <td>{eca.nombre_inst_ope}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Tipo</td>
                    <td>{eca.tipo_instancia}</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-title">Población</p>
              <table>
                <tbody>
                  <tr>
                    <td className="text-bold">Habitantes</td>
                    <td>{eca.num_habitan}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Atendidos</td>
                    <td>{eca.poblacion_atend}</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-title">Ubicación</p>
              <table>
                <tbody>
                  <tr>
                    <td className="text-bold">Municipio</td>
                    <td>{eca.nombre_munipio}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Localidad</td>
                    <td>{eca.localidad}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Colonia</td>
                    <td>{eca.colonia}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Calle/Avenida</td>
                    <td>{eca.calle_av}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Número</td>
                    <td>{eca.num_direccion}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Código Postal</td>
                    <td>{eca.cod_postal}</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-title">Telefonos:</p>
              <p>{eca.telefonos}</p>

              <p className="text-title">Atención</p>
              <table>
                <tbody>
                  <tr>
                    <td className="text-bold">Reponsable</td>
                    <td>{eca.nombre}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Correo</td>
                    <td>{eca.correo}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Horario</td>
                    <td>{eca.dias_hora_aten}</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-title">Equipamiento</p>
              <table>
                <tbody>
                  <tr>
                    <td className="text-bold">
                      Equipo mobiliario
                      <p>{eca.equipo_movil}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-bold">
                      Equipo de cómputo
                      <p>{eca.equipo_electr}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-bold">
                      Material didáctico
                      <p>{eca.material_didact}</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="text-title">Operación</p>
              <table>
                <tbody>
                  <tr>
                    <td className="text-bold">Estado</td>
                    <td>{eca.nombre_tipo}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Apertura</td>
                    <td>{eca.fecha_apert}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Fortalecimiento</td>
                    <td>{eca.fecha_forta}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Cierre</td>
                    <td>{eca.fecha_cierre ?? 'No aplica'}</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-title">Motivo de cierre</p>
              <p>{eca.motivo_cierre ?? 'No Aplica'}</p>

              <p className="text-title">Comentarios generales</p>
              <table>
                <tbody>
                  <tr>
                    <td>{eca.comentarios}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-foot">
                <button type="button" className="btn-neutral" onClick={cerrarModal}>Cerrar</button>
                <button className="btn-negativo" onClick={() => abrirModalModificar(eca)}>Modificar</button>
            </div>
        </div>
    </div>
  );
}

export default Ver_ECA;