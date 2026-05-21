-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2026 a las 22:06:33
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rneca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_asistente`
--

CREATE TABLE `detalle_asistente` (
  `id_detalle` char(20) NOT NULL,
  `Genero` varchar(10) NOT NULL,
  `rango_edad` varchar(20) NOT NULL,
  `id_espacio` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_nexo`
--

CREATE TABLE `detalle_nexo` (
  `id_nexo` char(20) NOT NULL,
  `list_asist` char(2) NOT NULL,
  `evi_foto` char(2) NOT NULL,
  `nota_period` char(2) NOT NULL,
  `id_espacio` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `id_direccion` char(20) NOT NULL,
  `cod_postal` varchar(5) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `colonia` varchar(50) NOT NULL,
  `calle_av` varchar(50) NOT NULL,
  `num_direccion` varchar(20) NOT NULL,
  `tipo_instancia` varchar(100) NOT NULL,
  `id_municipio` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`id_direccion`, `cod_postal`, `localidad`, `colonia`, `calle_av`, `num_direccion`, `tipo_instancia`, `id_municipio`) VALUES
('direccion1', '42300', 'Ixmiquilpan', 'Centro', 'FELIPE ÁNGELES', 'S/N', 'Órganos de participación previstos en la LAN', 'municipio1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eca`
--

CREATE TABLE `eca` (
  `claveEca` char(12) NOT NULL,
  `nombre_Inst` varchar(150) NOT NULL,
  `nombre_InstOpe` varchar(150) NOT NULL,
  `poblacion_atend` int(6) NOT NULL,
  `telefono_lada` varchar(14) NOT NULL,
  `dias_hora_Aten` varchar(50) NOT NULL,
  `equipo_movil` varchar(150) NOT NULL,
  `equipo_electr` varchar(150) NOT NULL,
  `material_didact` varchar(150) NOT NULL,
  `fecha_apert` date NOT NULL,
  `fecha_forta` date NOT NULL,
  `fecha_cierre` date NOT NULL,
  `motivo_cierre` varchar(150) NOT NULL,
  `comentarios` varchar(150) NOT NULL,
  `id_usuario` char(20) NOT NULL,
  `clave_estado` char(20) NOT NULL,
  `id_direccion` char(20) NOT NULL,
  `id_fecha` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eca`
--

INSERT INTO `eca` (`claveEca`, `nombre_Inst`, `nombre_InstOpe`, `poblacion_atend`, `telefono_lada`, `dias_hora_Aten`, `equipo_movil`, `equipo_electr`, `material_didact`, `fecha_apert`, `fecha_forta`, `fecha_cierre`, `motivo_cierre`, `comentarios`, `id_usuario`, `clave_estado`, `id_direccion`, `id_fecha`) VALUES
('13-30-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del m', 37608, '7597238689', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 archivero, 1 silla secretarial, 14 silla blanca de p', 'equipo de sonido, 2 proyector, 1 cámara de video, 1 computadora de escritorio, 1', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Cic', '2003-04-15', '2024-09-23', '2026-05-14', 'No aplica', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'user1', 'estado1', 'direccion1', '18052026');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `espaciocultura`
--

CREATE TABLE `espaciocultura` (
  `id_espacio` char(20) NOT NULL,
  `material_did` varchar(100) NOT NULL,
  `total_pobl` int(100) NOT NULL,
  `comentarios` varchar(100) NOT NULL,
  `clave_eca` char(12) NOT NULL,
  `id_fecha` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadovigencia`
--

CREATE TABLE `estadovigencia` (
  `id_estado` char(20) NOT NULL,
  `nombreTipo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estadovigencia`
--

INSERT INTO `estadovigencia` (`id_estado`, `nombreTipo`) VALUES
('estado1', 'En operación'),
('estado2', 'Cerrado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fecha`
--

CREATE TABLE `fecha` (
  `id_fecha` char(8) NOT NULL,
  `fecha_comp` date NOT NULL,
  `año` int(11) NOT NULL,
  `mes` int(11) NOT NULL,
  `dia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fecha`
--

INSERT INTO `fecha` (`id_fecha`, `fecha_comp`, `año`, `mes`, `dia`) VALUES
('18052026', '2026-05-18', 2026, 5, 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historico_eca`
--

CREATE TABLE `historico_eca` (
  `nombre_Inst` varchar(150) NOT NULL,
  `clave_eca` char(12) NOT NULL,
  `nombre_InstOpe` varchar(150) NOT NULL,
  `tipo_instancia` varchar(150) NOT NULL,
  `num_habitantes` int(11) NOT NULL,
  `pob_atend` int(11) NOT NULL,
  `calle_av` varchar(150) NOT NULL,
  `num_Calle` varchar(150) NOT NULL,
  `colonia` varchar(150) NOT NULL,
  `municipio` varchar(150) NOT NULL,
  `localida` varchar(150) NOT NULL,
  `cp` char(5) NOT NULL,
  `telefono` char(10) NOT NULL,
  `dias_hora_aten` varchar(60) NOT NULL,
  `nombre_respo` varchar(60) NOT NULL,
  `correo_elec` varchar(120) NOT NULL,
  `equipo_mobil` varchar(150) NOT NULL,
  `equipo_comp` varchar(150) NOT NULL,
  `material_didac` varchar(150) NOT NULL,
  `estado_vig` varchar(30) NOT NULL,
  `fecha_aper` date NOT NULL,
  `fecha_forta` date NOT NULL,
  `fecha_cierr` date NOT NULL,
  `motivo_cierre` varchar(150) NOT NULL,
  `comentarios` varchar(150) NOT NULL,
  `fecha_historial` date NOT NULL,
  `año` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `id_municipio` char(20) NOT NULL,
  `nombre_munipio` varchar(40) NOT NULL,
  `num_habitan` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`id_municipio`, `nombre_munipio`, `num_habitan`) VALUES
('municipio1', 'Ixmiquilpan', 98654);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `program_cult`
--

CREATE TABLE `program_cult` (
  `id_program` char(20) NOT NULL,
  `localidad` varchar(30) NOT NULL,
  `tipo_platica` varchar(20) NOT NULL,
  `otras_activ` varchar(30) NOT NULL,
  `pobl_ate` varchar(40) NOT NULL,
  `fecha_mes` varchar(15) NOT NULL,
  `clave_eca` char(20) NOT NULL,
  `id_fecha` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` char(20) NOT NULL,
  `nombre_rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`) VALUES
('rol1', 'ECA'),
('rol2', 'Director municipio'),
('rol3', 'Subdirector'),
('rol4', 'Licenciado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` char(20) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(14) NOT NULL,
  `contraseña` varchar(40) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_rol` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `correo`, `telefono`, `contraseña`, `fecha_registro`, `id_rol`) VALUES
('user1', 'Alec', 'alecdjm85@gmail.com', '7712912263', 'alec', '2026-05-18 22:36:04', 'rol1');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_eca`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vista_eca` (
`Nombre_instancia_ejecutora` varchar(150)
,`Clave_ECA` char(12)
,`Nombre_Instancia_Operactiva` varchar(150)
,`Tipo_instancia_Operativa` varchar(100)
,`No_habitantes` int(15)
,`Población_atendida` int(6)
,`Calle_Avenida` varchar(50)
,`Núm_calle` varchar(20)
,`Colonia` varchar(50)
,`Municipio` varchar(40)
,`Localidad` varchar(50)
,`Codigo_postal` varchar(5)
,`Telefono` varchar(44)
,`Dias_horas_atencion` varchar(50)
,`Nombre_responsable` varchar(60)
,`Correo_elec` varchar(100)
,`Equipo_mobil` varchar(150)
,`Equipo_electronico` varchar(150)
,`Material_didactico` varchar(150)
,`Estado_vigencia` varchar(30)
,`Fecha_Apertura` date
,`Fecha_fortaleza` date
,`Fecha_cierre` date
,`Motivo_cierre` varchar(150)
,`Comentarios_generales` varchar(150)
,`fecha_Registro` char(8)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_eca`
--
DROP TABLE IF EXISTS `vista_eca`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_eca`  AS SELECT `eca`.`nombre_Inst` AS `Nombre_instancia_ejecutora`, `eca`.`claveEca` AS `Clave_ECA`, `eca`.`nombre_InstOpe` AS `Nombre_Instancia_Operactiva`, `d`.`tipo_instancia` AS `Tipo_instancia_Operativa`, `mun`.`num_habitan` AS `No_habitantes`, `eca`.`poblacion_atend` AS `Población_atendida`, `d`.`calle_av` AS `Calle_Avenida`, `d`.`num_direccion` AS `Núm_calle`, `d`.`colonia` AS `Colonia`, `mun`.`nombre_munipio` AS `Municipio`, `d`.`localidad` AS `Localidad`, `d`.`cod_postal` AS `Codigo_postal`, concat('Personal: ',`us`.`telefono`,' Tel: ',`eca`.`telefono_lada`) AS `Telefono`, `eca`.`dias_hora_Aten` AS `Dias_horas_atencion`, `us`.`nombre` AS `Nombre_responsable`, `us`.`correo` AS `Correo_elec`, `eca`.`equipo_movil` AS `Equipo_mobil`, `eca`.`equipo_electr` AS `Equipo_electronico`, `eca`.`material_didact` AS `Material_didactico`, `ev`.`nombreTipo` AS `Estado_vigencia`, `eca`.`fecha_apert` AS `Fecha_Apertura`, `eca`.`fecha_forta` AS `Fecha_fortaleza`, `eca`.`fecha_cierre` AS `Fecha_cierre`, `eca`.`motivo_cierre` AS `Motivo_cierre`, `eca`.`comentarios` AS `Comentarios_generales`, `eca`.`id_fecha` AS `fecha_Registro` FROM (((((`eca` join `estadovigencia` `ev` on(`eca`.`clave_estado` = `ev`.`id_estado`)) join `direccion` `d` on(`eca`.`id_direccion` = `d`.`id_direccion`)) join `municipio` `mun` on(`d`.`id_municipio` = `mun`.`id_municipio`)) join `usuarios` `us` on(`eca`.`id_usuario` = `us`.`id_usuario`)) join `fecha` on(`eca`.`id_fecha` = `fecha`.`id_fecha`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detalle_asistente`
--
ALTER TABLE `detalle_asistente`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `id_espacio` (`id_espacio`);

--
-- Indices de la tabla `detalle_nexo`
--
ALTER TABLE `detalle_nexo`
  ADD PRIMARY KEY (`id_nexo`),
  ADD KEY `id_espacio` (`id_espacio`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`id_direccion`),
  ADD KEY `id_municipio` (`id_municipio`);

--
-- Indices de la tabla `eca`
--
ALTER TABLE `eca`
  ADD PRIMARY KEY (`claveEca`),
  ADD KEY `id_fecha` (`id_fecha`),
  ADD KEY `id_direccion` (`id_direccion`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `clave_estado` (`clave_estado`);

--
-- Indices de la tabla `espaciocultura`
--
ALTER TABLE `espaciocultura`
  ADD PRIMARY KEY (`id_espacio`),
  ADD KEY `clave_eca` (`clave_eca`),
  ADD KEY `id_fecha` (`id_fecha`);

--
-- Indices de la tabla `estadovigencia`
--
ALTER TABLE `estadovigencia`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `fecha`
--
ALTER TABLE `fecha`
  ADD PRIMARY KEY (`id_fecha`);

--
-- Indices de la tabla `historico_eca`
--
ALTER TABLE `historico_eca`
  ADD PRIMARY KEY (`clave_eca`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`id_municipio`);

--
-- Indices de la tabla `program_cult`
--
ALTER TABLE `program_cult`
  ADD PRIMARY KEY (`id_program`),
  ADD KEY `id_fecha` (`id_fecha`),
  ADD KEY `clave_eca` (`clave_eca`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_rol` (`id_rol`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_asistente`
--
ALTER TABLE `detalle_asistente`
  ADD CONSTRAINT `detalle_asistente_ibfk_1` FOREIGN KEY (`id_espacio`) REFERENCES `espaciocultura` (`id_espacio`);

--
-- Filtros para la tabla `detalle_nexo`
--
ALTER TABLE `detalle_nexo`
  ADD CONSTRAINT `detalle_nexo_ibfk_1` FOREIGN KEY (`id_espacio`) REFERENCES `espaciocultura` (`id_espacio`),
  ADD CONSTRAINT `detalle_nexo_ibfk_2` FOREIGN KEY (`id_espacio`) REFERENCES `espaciocultura` (`id_espacio`);

--
-- Filtros para la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD CONSTRAINT `direccion_ibfk_1` FOREIGN KEY (`id_municipio`) REFERENCES `municipio` (`id_municipio`);

--
-- Filtros para la tabla `eca`
--
ALTER TABLE `eca`
  ADD CONSTRAINT `eca_ibfk_1` FOREIGN KEY (`id_fecha`) REFERENCES `fecha` (`id_fecha`),
  ADD CONSTRAINT `eca_ibfk_2` FOREIGN KEY (`id_direccion`) REFERENCES `direccion` (`id_direccion`),
  ADD CONSTRAINT `eca_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `eca_ibfk_4` FOREIGN KEY (`clave_estado`) REFERENCES `estadovigencia` (`id_estado`);

--
-- Filtros para la tabla `espaciocultura`
--
ALTER TABLE `espaciocultura`
  ADD CONSTRAINT `espaciocultura_ibfk_1` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`claveEca`),
  ADD CONSTRAINT `espaciocultura_ibfk_2` FOREIGN KEY (`id_fecha`) REFERENCES `fecha` (`id_fecha`);

--
-- Filtros para la tabla `program_cult`
--
ALTER TABLE `program_cult`
  ADD CONSTRAINT `program_cult_ibfk_1` FOREIGN KEY (`id_fecha`) REFERENCES `fecha` (`id_fecha`),
  ADD CONSTRAINT `program_cult_ibfk_2` FOREIGN KEY (`id_fecha`) REFERENCES `fecha` (`id_fecha`),
  ADD CONSTRAINT `program_cult_ibfk_3` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`claveEca`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
