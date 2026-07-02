import React, { useState } from "react";
import Modificar_DireMunicipal from "../Modals/Modificar/Mod_DireMu";
import Crear_DirectorMunicipal from "../Modals/Crear/Crear_DireMu";
import EliminarElemento from "../Modals/Eliminar_Elemento";

function Diseño_Formularios() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModal2, setMostrarModal2] = useState(false);
  const [mostrarModal3, setMostrarModal3] = useState(false);

  return (
  <div className="page-container">
    <h1 className="page-title">Diseño y Configuración de Formularios</h1>
    <h2 className="page-subtitle">Asigna preguntas, establece opciones y guarda la configuración</h2>


  </div>
  );
}

export default Diseño_Formularios;   