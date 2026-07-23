-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-06-2026 a las 00:16:59
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
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_asistente`
--

CREATE TABLE `detalle_asistente` (
  `id_detalle` char(20) NOT NULL,
  `genero` varchar(10) NOT NULL,
  `rango_edad` varchar(20) NOT NULL,
  `id_espacio` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_eca`
--

CREATE TABLE `detalle_eca` (
  `id_detalle_eca` char(20) NOT NULL,
  `telefonos` varchar(130) NOT NULL,
  `dias_hora_aten` varchar(50) NOT NULL,
  `equipo_movil` varchar(150) NOT NULL,
  `equipo_electr` varchar(150) NOT NULL,
  `material_didact` varchar(150) NOT NULL,
  `comentarios` varchar(300) NOT NULL DEFAULT '',
  `id_estatus` char(20) NOT NULL,
  `clave_eca` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_eca`
--

INSERT INTO `detalle_eca` (`id_detalle_eca`, `telefonos`, `dias_hora_aten`, `equipo_movil`, `equipo_electr`, `material_didact`, `comentarios`, `id_estatus`, `clave_eca`) VALUES
('DET-ECA-1', '7757545148 ext. 111\nCel: 7775 133 4173', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 archivero.', ' 1 cámara fotográfica, 1 cámara de video, 1 equipo de sonido, 1 impresora, 1 lap top, 1 computadora, 1 televisor de 43\"', '1 maqueta Contaminación de una Cuenca,  1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-1-1-1'),
('DET-ECA-10', '7787373752 EXT 103 Y 107\nCel. 7717770855', 'LUN-VIER 8:30 AM -04:30 PM - SAB 8:30 ', '1 archivero con cuatro gavetas', '2 televisiones, 1 computadora de escritorio, 2 cámaras fotografías, 2 laptops, 1 pantalla para proyección con tripie, 1 reproductor de DVD. ', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Ciclo del Agua 3D, 1 maqueta Potabilización y Drenaje, 1 maqueta de recic', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13- 10 -1-1'),
('DET-ECA-11', 'Tel: 7898944005\n\nCel: 7715267920', 'LUN-VIER 9:00 AM -04:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', ' 1 laptop, 1 proyector, 1 pantalla 50\"', '1 maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-11-1-1'),
('DET-ECA-12', '7711464295\n\nCel:  7711464295', 'LUN-VIER 8:30 AM -04:30 PM', '1 silla secretarial, 2 archivero, 1 escritorio secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 proyector, 1 equipo de perifoneo, 1 equipo de sonido, 2 cámara fotografica,1 impresora, 1 computadora de escritorio, 1 pantalla de 32\", 1 reproducto', '1 Maqueta Mantos Acuíferos , 1 Maqueta Contaminación de una Cuenca, 1 Maqueta ciclo del Agua,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper d', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-12-1-1'),
('DET-ECA-13', 'Tel: 7787351686\n\nCel: 778351686', 'LUN-VIER 8:00 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 1 silla blanca de plastico, 1 pizarron,  1 Pantalla para proyeccion con tripie, 1 Televiso', '1 laptop, 1 proyector, 1 equipo de perifoneo, 1 equipo de sonido, 1 impresora, 1 DVD, 1 computadora de escritorio, 2 cámara fotográfica, 1 video proye', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Mantos Acuíferos, 1 Maqueta Ciclo del Agua 3D,1 Maqueta Potabilización y Drenaje, 1 Cascos de Realida', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-13-1-1'),
('DET-ECA-14', 'Cel: 7713575676', 'LUN-VIER 9:00 AM -04:00 PM', '1 silla secretarial, escritorio secretarial, archivero,', '1 television, 1 videocasetera,1 CPU, 1 monitor, 2 laptop, 3 proyector, 1 equipo de perifoneo, equipo de sonido, 2 impresora, 1 computadora de escritor', '1 maqueta Contaminación de una Cuenca, 1 maqueta Mantos Acuíferos, 1 maqueta ciclo del Agua 3D,1 Maqueta Potabilización y Drenaje, 1 Cascos de Realida', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-14-1-1'),
('DET-ECA-15', 'Tel: 7597270003\nCel: 7721543575', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 15 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 televisión, 1 videocasetera, 1 proyector, 1 laptop, 1 impresora,1 computadora de escritorio,1 DVD, 1 pantalla 32\", 1 cámara fotográfica.', '1 maqueta Contaminación de una Cuenca, 1 maqueta de Relleno Sanitario,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de ide', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-15-1-1'),
('DET-ECA-16', '7757703600', 'LUN-VIER 8:30 AM -04:30 PM', '1 silla secretarial,  1 escritorio secretarial, 1 archivero, 1 mesa Plegable y  5 sillas Plegable', '1 cámara fotográfica, 1 pantalla de proyección, 1 laptop, 1 equipo de sonido,1 equipo de perifoneo, 1 impresora, 1 cámara de video, 1 computadora de e', 'Maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de identificac', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-16-1-1'),
('DET-ECA-17', 'Te: 7637285034\nCel: 7731309111', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 archivero, 1 escritorio secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 laptop, 1 cámara fotográfica, 1 DVD, 1 pantalla 32\", 1 impresora, 1 computadora de escritorio, 1 Televisor de 50\", 1 Proyector y', '1 maqueta Contaminación de una Cuenca, 1 maqueta Mantos Acuíferos,,1 Cascos de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identif', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-17-1-1'),
('DET-ECA-18', 'Tel: 4833782056\nCel: 7713519386', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 15 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 impresora, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 maqueta Contaminación de una Cuenca, ,1 Cascos de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-18-1-1'),
('DET-ECA-19', '7387830143\nCel. 7721238594', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 15 sillas blancas de plástico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '2 cámara fotográfica, 1 laptop, 1 equipo de sonido, 1 computadora de escritorio, 1 cámara de video, 1 pantalla 32\", 1 Televisor de 50\", 1 Proyector y ', '1 maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos,1 Cascos de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identifica', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-19-1-1'),
('DET-ECA-2', '7767629750 oficina\n7761341136 personal', 'LUN-VIER 8:30 AM -04:30 PM ', '1 Escritorio secretarial, 1 silla secretarial, 1 Archivero de 4 gavetas, 1 Mesa Plegable y  5 sillas Plegables', '1 monitor, 1 cámara fotográfica, 1 impresora multifuncional, 1 CPU, 2 laptop, 1 computadora de escritorio Slimline , 1 pantalla de 32\" HISENSE,1 repro', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta reciclaje,1 relleno sanitario y agua limpia, 1 Cascos de Realidad virtual', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-2-1-1'),
('DET-ECA-20', 'Tel: 7296950434', 'LUN-VIER 8:30 AM -04:30 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', '1 proyector, 1 laptop,1 pantalla de proyección, 1 computadora de escritorio, 1 botarga, 1 pantalla de 50\"', '1 maqueta Contaminación de una Cuenca, 1 maqueta mantos acuíferos, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-20-1-1'),
('DET-ECA-21', 'Tel. 7491044766', 'LUN-VIER 8:30 AM -04:30 PM', '1 escritorio secretarial, 1 silla secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '2 laptop, 1 impresora, 1 cámara fotográfica,  2 proyector, 1 equipo de sonido, 1 Televisor de 50\"', '1 Casco de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-21-1-1'),
('DET-ECA-22', 'Tel: 79 25059 ext 122\nCel: 7713034880\n', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', '1 laptop, 1 proyector,1 Televisor de 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-22-1-1'),
('DET-ECA-23', '7387240112 EXT. 111\n7721512777', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial,1 archivero, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido,1 computadora de escritorio, 1 pantalla de 32\", 2 cámara fotográfica, 1 DVD, 1 CPU,1 monitor, 2 laptop 1 Televisor de 50\", 1 Proyec', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Mantos Acuíferos, 1 Casco de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-23-1-1'),
('DET-ECA-24', '7387241190\n Cel: 7712021065', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 escritorio secretarial,1 archivero, 1 Pantalla de proyeccion, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 equipo de perifoneo, 2 laptop, 2 cámara fotográfica, 2 proyector, 1 impresora, 1 cámara de video, 1 pantalla 32\"1 DVD, 1 computa', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje, 1 Maqueta Ciclo del Agua 3D , 1 Casco de Realid', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-23-1-2'),
('DET-ECA-25', 'Tel:  771 7920101, \n      771 7920253\nCEL: 7711256204', 'LUN-VIER 8:30 AM -04:30 PM', '1 escritorio secretarial, 1 silla secretarial,1 archivero, 14 silla blanca de plastico, 1 pizarron', ' 1 laptop, 1 proyector, 1 pantalla de proyección, equipo de perifoneo,1 equipo de sonido1 ,DVD, 1 cámara fotográfica, 1 computadora de escritorio, 1 i', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Mantos Acuíferos, 1 Maqueta de reciclaje, 1 Relleno Sanitario y Agua Limpia,  1 super del agua, 1 qui', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-24-1-1'),
('DET-ECA-26', 'Cel: 7716289264', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 14 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 computadora de escritorio,  1 DVD, 1 Televisor de 50\", 1 Proyector y 2 LapTop', '1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-25-1-1'),
('DET-ECA-27', 'Cel: ', 'LUN-VIER 8:30 AM -04:00 PM', '2 escritorios secretariales, 2 sillas secretariales, 1 mesa tablón, 6 sillas plegables', ' 1 impresora, 1 cámara fotográfica, 1 proyector, 1 laptop, 1 pantalla 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-26-1-1'),
('DET-ECA-28', '7747437296\n\nCel: 7711903115', 'DOM -VIER 8:00 AM -03:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', ' 1 laptop, 1 proyector, 1 pantalla 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-27-1-1'),
('DET-ECA-29', '(045) 7712008381\n01 (789) 8965621 Ext. 106\n \nCel: 7713550085', 'LUN-VIER 8:30 AM -04:00 PM  - SAB 8:00 - 12:00', '1 escritorio secretarial,  silla secretarial, 1 archivero, 1 silla blanca de plastico, 1 pizarron, 1 pantalla para proyeccion con tripie,', '1 televisión, 1 videocasetera, 1 CPU,1 monitor, 2 proyector, 2 laptop, equipo de sonido, 2 cámara fotografica,1 impresora, 1 equipo de perifoneo, 1 DV', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Ciclo del Agua 3D, 1 Maqueta Potabilización y Drenaje,  1 super del agua,', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-28-1-1'),
('DET-ECA-3', '7721811872', 'LUN-VIER 8:30 AM -04:00 PM', '1 archivero, 1 escritorio secretarial, 1 silla secretarial,  1 pantalla para proyección con tripie, 1 toldo, 2 sillas, 1 mesa plegable.', '1 computadora de escritorio, 1 impresora, 1 pantalla 32\", 1 DVD, 1 CPU, 1 monitor, 1 mini laptop, 1 video proyector, 1 cámara fotográfica, 1 botarga i', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca,  1 maqueta Potabilización y Drenaje, 1 maqueta Ciclo del Agua,  1 super del agua, 1', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-3-1-1'),
('DET-ECA-30', 'Tel: 7898550001\nCel: 7713653610', 'LUN-VIER 8:30 AM -06:00 PM', '1 Archivero, 2 Escritorios Secretariales, 2 Sillas Secretariales, 1 Toldo, 8 Sillas plegables, 2 Mesas plegables.', '1 Computadora de Escritorio, 1 Impresora Multifuncional, 1 Reproductor de DVD, 1 Pantalla de 32\", 2 Proyectores, 1 Cámara Fotográfica, 1 Bocina, 1 pan', '1 Maqueta de Mantos Acuíferos, 1 Maqueta de reciclaje, relleno sanitario y Agua Limpia, loterías, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-28-1-4'),
('DET-ECA-31', 'Oficina: \n7617822590\next 105\n\nCel: 7731333924', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, archivero, 1 Mesa Plegable y  5 sillas Plegables', '2 proyector, 1 equipo perifoneo, 1 equipo de sonido, 1 impresora, 1 pantalla 32\", 2 laptop, computadora de escritorio, 1 cámara fotografica,1 cámara d', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-29-1-1'),
('DET-ECA-32', '7731557507', 'LUN-VIER 9:00 AM -06:00 PM', '2 archivero, 1 silla secretarial, 1 escritorio secretarial, 15 silla blanca de plastico,1  pizarron, 1 Mesa Plegable y  5 sillas Plegables', '2 laptop, 2 cámara fotográfica, 1 proyector, 1 impresora, 1 laptop, 1 DVD,1 pantalla 32\", 1 Pantalla de Proyección, 1 Botarga, 1 Televisor de 50\", 2 P', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta de Relleno Sanitario, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súp', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-29-1-2'),
('DET-ECA-33', 'Tel: 7597238689\n7597288157\n\nCel: 7712434482', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 archivero, 1 silla secretarial, 14 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', 'equipo de sonido, 2 proyector, 1 cámara de video, 1 computadora de escritorio, 1 impresora,1 DVD, 1 cámara fotográfica, 2 laptop, 1 pantalla de proyec', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Ciclo del Agua 3D, 1 Maqueta Potabilización y Drenaje, 1 Casco de Realida', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-30-1-1'),
('DET-ECA-34', 'Tel: 4412933197\n\nCel: 7713426446', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 15 silla blanca de plastico, 1  pizarron', '1 Laptop, 1 equipo de perifoneo,1 equipo de sonido,1 impresora, 1 cámara fotográfica, 1 pantalla 32\", 1 DVD, 1 Computadora de escritorio, 1 Pantalla d', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca,1 Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-31-1-1'),
('DET-ECA-35', '7712360590', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', ' 1 equipo de sonido, 1 impresora, 1 DVD, 2 cámara fotográfica, 1 Televisor de 50\", 2 Proyector y 1 LapTop', '1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-32-1-1'),
('DET-ECA-36', 'Cel: 5539547800\n\nTel:  7711919586', 'LUN-VIER 9:00 AM -05:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', ' 1 laptop, 1 proyector, 1 pantalla 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-33-1-1'),
('DET-ECA-37', 'Cel: 7714032168\n7713504431', 'LUN-VIER 9:00 AM -05:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 2 Video proyector, 1 Pantalla de 32\", 1 pantalla de 50\"', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta ciclo del Agua, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-34-1-1'),
('DET-ECA-38', 'Cel: Miguel Asian Barona', 'LUN-VIER 9:00 AM -05:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector,1 computadora de escritorio, 1 pantalla 32\", 1 DVD, 1 pantalla de 50\"', '1 Maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-35-1-1'),
('DET-ECA-39', '7711173467', 'LUN-VIE 8:30 AM - 04:30 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 1 pizarron, 1 Archivero de 4 Gavetas, 1 Toldo,2 Mesa Plegable y  7 sillas Plegables', ' 1 Cámara Fotográfica, 1 Laptop, Equipo de Sonido, 1 Cámara de Video, DVD, 1 Impresora, 1 Computadora de Escritorio, 1 Bocina, 1 Televisor de 50\", 1 P', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-36-1-1'),
('DET-ECA-4', 'Tel: 7749741030\nCel: 771 332 5613', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', ' 1 laptop, 1 proyector, 1 pantalla 50\"', '1 maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-4-1-1'),
('DET-ECA-40', '7747430841 ext-11  \nCel. 7712049344', 'LUN-VIER 9:00 AM -05:00 PM', '1 Archivero, 25 Sillas Blancas de Plástico, 1 Pizarrón. ', '1 Laptop, 2 Cámara Fotográfica, 1 equipo de sonido, 1 impresora, 1 Televisión, 1 videocasetera,1 equipo de perifoneo, 1 Cámara fotografica,1 proyector', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-37-1-1'),
('DET-ECA-41', 'Cel: 7711099802\nTel: 7717153511 ext 114', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretarial, 1 Silla Secretarial, 25 Sillas Blancas de plasticos, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables  ', ' 1 Cámara Fotográfica, 1 Impresora, 1 Computadora de Escritorio, 1 DVD, 1 Televisor de 50\", 2 Proyector y 2 LapTop ', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-38-1-1'),
('DET-ECA-42', 'Tel: 7717971216 Ext 118 \nDirección de Ecología', 'LUN-SAB 8:30 - 04:00', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-39-1-1'),
('DET-ECA-43', '7745984040\nCel. 7712002049', 'LUN-VIER 9:00 AM -04:00 PM', '2 escritorios secretariales, 2 sillas secretariales, 1 archivero, 1 mesa tablón, 6 sillas plegables', '1 laptop,  1 computadora de escritorio, 1 impresora multifuncional, 1 pantalla 32\",  1 pantalla de 50\", 1 proyector', '1 maqueta mantos acuíferos, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-40-1-1'),
('DET-ECA-44', 'Tel: 7387350574\n\nCel:7721322389', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial,1  silla secretarial, 1 archivero, 25 silla blanca de plastico, 1 pizarron, 1 pantalla para proyeccion con tripie,', '1 proyector, 1 camara de video, 1 pantalla 32\", 1 DVD, 1 impresora,1 camara fotografica, 1 Computadora de Escritorio, 1 Pantalla de 32\", 1  Botarga in', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje,  1 super del agua, 1 quiz del agua, 1 lentes de', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-41-1-1'),
('DET-ECA-45', 'Tel: 774 7450002\nCel: 7713234581', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-42-1-1'),
('DET-ECA-46', '7595963211', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-43-1-1'),
('DET-ECA-47', '7617821308\n7731339206', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 25 silla blanca de plastico,1  pizarron,1  pantalla para proyeccion tripie apoyo, 1 Mesa Plegable y  5 ', ' 1 computadora de escritorio, 1 DVD, 1 pantalla 32\", 1 camara de video, 1 impresora, 2 camara fotografica, 1  equipo de sonido, 1 Televisor de 50\", 2 ', '1 Maqueta Mantos Acuíferos,1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-44-1-1'),
('DET-ECA-48', '7712029631', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 25 sillas blancas de plástico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', ' 2 proyectores, 2 laptops, 1 equipo de perifoneo, 1 cámara de video, 2 cámaras fotograficas,1 equipo de sonido,1 DVD, 1 computadora de escritorio, 1 i', '1 maqueta Contaminación de una Cuenca, 1 maqueta ciclo del Agua, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifica', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-45-1-1'),
('DET-ECA-49', 'Cel: 771 121 4790', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretarial, 1 Silla Secretarial, 1 Archivero,  1 mesa tablón, 6 sillas plegables', '1 Laptop, 1 Proyector, 1 Computadora de Escritorio, 1  DVD, 1 Impresora Multifuncional, 1 Pantalla de 32\'\', 1 pantalla de 50\"', '1 Maqueta de reciclaje, relleno sanitario y agua limpia, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-46-1-1'),
('DET-ECA-5', '7731723650', 'LUN-VIER 9:00 AM - 4:00 PM Y SABADO 9:00 AM - 2:00', '1 escritorio secretarial, 1 silla secretarial, 1 silla plastico,1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 1 Proyector y 1 LapTop, 1 equipo de sonido,1 DVD, 1 botarga', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua,  1 placa de ident', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-5-1-1'),
('DET-ECA-50', 'Cel: 5545775687', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 escritorio secretarial, 1 Mesa Plegable y  5 sillas Plegables ', 'television, 1 cámara fotográfica, 1 laptop, 1 impresora, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-47-1-1'),
('DET-ECA-51', '7717174300', 'LUN-SAB 8:30 - 04:00', '1 escritorio secretarial, 1 silla secretarial, 1 Toldo, 2 Mesa Plegable y  7 sillas Plegables', '2  Laptop, 3 Proyector, 1 Equipo de Sonido, 1 pantalla de 32, impresora, 1 computadora de escritorio, 1  Bocina, 1 Kiosko, 1 Televisor de 50\"', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Ciclo del Agua 3D, 1 Maqueta Potabilización y Drenaje, 1 Maqueta de reciclaje, relleno sanitario y ag', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-48-1-1'),
('DET-ECA-52', '7717172850 ext 2101 y 2102', 'LUN - VIE 9:00 - 15:00', '1 silla secretarial, 1 escritorio secretarial, 35 sillas de plastico,1  pizarron, 1 stand, 1 archivero, 1 Toldo, 2 Sillas plegables, 1 Mesa plegable', '1 televisión, 1 impresora, 1 pantalla de proyección, 3 computadora de escritorio, 3 proyector, 3 cámara fotográfica, 1 cámara de video, 1 DVD, 1 equip', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Mantos Acuíferos, 1 Maqueta Potabilización y Drenaje,1 Maqueta Ciclo del Agua 3D, 1 Maqueta de recicl', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-48-1-3'),
('DET-ECA-53', '5551859158', 'LUN - VIE 8:30 - 16:30', ' 1 Pantalla de Proyeccion, 2 Sillas plegables, 1 Mesa plegable', '1 computadora de escritorio, 2 proyector, 1 DVD, 2 Cascos para video 360 con smarphone, 10 cascos para video 360,  3domo planetario y 2 software (¿Cuá', 'Maqueta Contaminación de una Cuenca, Maqueta Mantos Acuíferos, Maqueta Potabilización y Drenaje, Maqueta Ciclo del Agua 3D, Maqueta de reciclaje, rell', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-48-1-4'),
('DET-ECA-54', '7711868093', 'LUN - VIE 8:00 - 15:30', '1 escritorio secretarial,1  silla secretarial, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-48-1-6'),
('DET-ECA-55', 'Cel: 7711864247', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-49-1-1'),
('DET-ECA-56', '7387250950', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 25 silla blanca de plastico, 1 pizarron,1  Archivero con 4 gavetas,  Pantalla para proyeccion con tripie', ' 1 camara fotografica,1  Computadora de Escritorio, 1  Cámara de Video,  1 DVD,2  Impresora, 1 Pantalla de 32\'\', 1 Botarga, computadora portatil, 1 Te', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca,  1 súper del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-50-1-1'),
('DET-ECA-57', '7716571914', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 25 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables ', ' 1 computadora de escritorio,1  impresora, 1 camara fotografica,1  Pantalla de 32\", 1 Pantalla de Proyeccion, 1  Botarga, 1 Televisor de 50\", 2 Proyec', 'Maqueta Mantos Acuíferos, Maqueta Contaminación de una Cuenca, Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-51-1-1'),
('DET-ECA-58', '7731441087', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretarial, 1 Silla Secretarial,1  silla blanca de plastico, 1 pizarron, 1 Archivero de 4 gavetas,1 Pantalla para proyeccion con tripie,', '1 Equipo de Sonido, 1 Cámara Fotográfica, 1 Computadora de Escritorio, 1 DVD, 1 Impresora,1 Equipo de Sonido,1 Equipo de Perifoneo, 1 Mini Laptop, 1 P', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Ciclo del Agua 3D, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-52-1-1'),
('DET-ECA-59', '5623263042', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio secretarial, 1  Silla Secretarial , 25 silla blanca de plastico,1  pizarron', '1 DVD,1  Impresora, 1 Cámara Fotográfica, Televisor de 43\", computadora portatil', '1 Maqueta de reciclaje, relleno sanitario y agua limpia, 1 súper del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-53-1-1'),
('DET-ECA-6', 'Tel: 7387288392 \nCel: 7721183689', 'LUN- VIERN 8:00 AM- 3:00 PM SAB 9:00 AM - 1:00 PM', '1 escritorio secretarial, 1 silla secretaria, 1 archiverol, 1 sillas blancas , 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 cámara fotográfica, 1 equipo de sonido, 1 DVD, 1 pantalla de proyector, 1 equipo de perifoneo, 1 cámara de video,1 computadora de escritorio, 1 pant', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminacion de una Cuenca, 1 Maqueta Potabilización y Drenaje y 1 Cascos de Realidad virtual y 1 Quiz del Agua', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-6-1-1'),
('DET-ECA-60', '7727282000', 'LUN-VIER 8:30 AM -04:00 PM', 'Escritorio Secretarial, Silla secretarial, Toldo, 2 Mesa Plegable y  7 sillas Plegables ', ' 2  Cámara Fotográfica,1 minilap, 1 Computadora de Escritorio, 1  Impresora, 1  Equipo de Sonido, 1 Videoproyector, 1 Pantalla de 23\",  Reproductor de', '1 Maqueta Mantos Acuíferos, Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifica', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-54-1-1'),
('DET-ECA-61', '7721587836', 'LUN-VIER 8:00 AM -04:00 PM', 'Escritorio secretaria, silla secretarial, pizarrón,  30 sillas de plástico, 1 Mesa Plegable y  5 sillas Plegables', '1 cámara fotográfica, 1 DVD, 1 computadora de escritorio, 1 impresora multifuncional, 1 equipo de sonido, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Potabilización y Drenaje, 1 maqueta de Relleno Sanitario, 1 Casco de Real', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-54-23-1'),
('DET-ECA-62', '7714142914', 'LUN-VIER 8:00 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 1 Archivero ', '1  Equipo de Sonido,1  DVD, 1  Videocasetera, 1 Television, Botarga, cmputadora portatil.', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta de reciclaje, relleno sanitario y agua limpia, 1 súper del agua, 1 quiz d', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-55-1-2'),
('DET-ECA-63', 'Cel: 7751295596', 'LUN-SAB 8:30 AM -04:00 PM', '1 escritorio secretaria, 1 silla secretarial, 1 archivero 1 toldo, 2 sillas, 1 mesa plegable', ' 1 proyector, 1 cámara fotográfica, 1 cámara de video, 1 equipo de perifoneo, 1 equipo de sonido,  1 computadora de escritorio, 1 impresora, 1 pantall', '1 maqueta Mantos Acuíferos, 1 maqueta de reciclaje, relleno sanitario y agua limpia, 1 súper del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de id', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-56-1-1'),
('DET-ECA-64', 'Cel: 7713412769', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Potabilización y Drenaje, 1 super del agua, 1 quiz del agua, 1 lentes de ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-57-1-1'),
('DET-ECA-65', 'Tel: 7597235043 Ext. 111\nCel: 7721117063', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 Maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-58-1-1'),
('DET-ECA-66', '5535704624', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria , 1 silla secretarial, 1 pantalla de proyección, 1 Mesa Plegable y  5 sillas Plegables', '1 cámara fotográfica, 2 laptop,1 equipo de sonido, 1 impresora, 1 equipo de perifoneo, 1 computadora de escritorio, 1 pantalla de 32\", 1 cámara fotogr', '1 maqueta Mantos Acuíferos,1 maqueta Contaminación de una Cuenca, 1 maqueta de relleno Sanitario, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súpe', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-59-1-1'),
('DET-ECA-67', 'Tel: 7751031518', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 Maqueta Mantos Acuíferos, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-60-1-1'),
('DET-ECA-68', 'Tel:7919130612 ext 114\nCel: 7714446732', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-61-1-1'),
('DET-ECA-69', '7747427029', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria, 1 silla secretarial, 1 Mesa Plegable y  5 sillas Plegables ', '1 equipo de sonido, 1 DVD, impresora, 1 cámara fotográfica, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-62-1-1'),
('DET-ECA-7', 'Cel: 7751363861\n7489121833', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 2 Archivero, 1 Pantalla de Proyeccion, 1 Toldo, 2 Sillas, 1 Mesa plegable, 1 Mesa Plegable y  5 sillas ', '1 proyector, 1 cámara fotografica, 1 computadora de escritorio, 1 impresora,1 pantalla 32\", 1 botarga, 1 bocina, 1 Televisor de 50\", 1 Proyector y 1 L', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca y 1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de ident', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-7-1-1'),
('DET-ECA-70', '017737330058\nCel: 7731074705', 'LUN-VIER 8:30 AM -04:00 PM', 'Escritorio Secretaria,  Silla Secretarial, Pantalla de Proyeccion,', ' 1 Camara de Video, 2  Laptop, 1 Proyector, 2 Cámara Fotográfica, 1 Equipo de Sonido,1  Impresora, 1 DVD, 1 Pantalla de 32, 1 Computadora de Escritori', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje, 1 Ciclo del Agua en 3D, 1 súper del agua, 1 qui', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-63-1-1'),
('DET-ECA-71', 'Cel:7731050856', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 25 silla blanca de plastico,1 pizarron, 1 Archivero, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 1 Proyector y 1 LapTop, 1 cámara fotográfica, 1 Equipo de sonido,1  impresora y 1 DVD', '1 Maqueta Ciclo del Agua 3D, 1 Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifica', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-64-1-1'),
('DET-ECA-72', '7787824043', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria,  1 silla secretarial, archivero,  25 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '2  laptop, 2 proyectores, 1 equipo de perifoneo, 1 equipo de sonido, 1 impresora, 1 cámara de video, 1 cámara fotográfica, 1 pantalla 33, 1 botarga, 1', '1 maqueta Mantos Acuíferos, 1maqueta Contaminación de una Cuenca, 1 maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-65-1-1'),
('DET-ECA-73', '7751575175', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 1 Mesa Plegable y  5 sillas Plegables', ' 1 Equipo de Sonido,  1 Cámara Fotográfica,1  Impresora, 1 Camara de Video,1  DVD,1  Pantalla de 33, 1 Botarga, 1 Televisor de 50\", 1 Proyector y 2 La', '1 Maqueta Mantos Acuíferos,1 Maqueta Contaminación de una Cuenca , 1 Maqueta Potabilización y Drenaje, 1 Maqueta ciclo del agua, 1 Maqueta de relleno ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-66-1-1'),
('DET-ECA-74', 'TEL. OFICINA(Dirección):  \n7731047586\nCEL: 7731798516', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria Silla, 1 Secretarial, 1 Archivero , 1 Pantalla para proyeccion con tripie , 1 Toldo, 7 Sillas, 2 Mesa plegable', '2  Laptop,  1 Equipo de Sonido, 2 Proyector, 1 Equipo de Perifoneo,1  Camara de Video, 1 Computadora de escritorio,1  DVD , 1 Videoproyector, 1 Pantal', '1 Maqueta Mantos Acuíferos, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-67-1-1'),
('DET-ECA-75', 'Cel: 7713523127', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-68-1-1'),
('DET-ECA-76', 'Tel: 7797964635 \n7797967993\n7791007583\n\nCel:5514592944\n', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio, 1 secretaria silla, 1 secretarial, 1 archivero, 1 pantalla para proyección con tripie, 1 toldo, 2 sillas, 1 mesa plegable', ' 3 cámaras fotograficas, 1 laptop, proyector, 1 pantalla de proyección, 1 cámara de video, 1 equipo de perifoneo, 1 equipo de sonido, 1 impresora,  1 ', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Ciclo del Agua 3D, 1 maqueta potabilización y drenaje, 1 súper del agua, ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-69-1-1'),
('DET-ECA-77', '7637860578\nCEL. 773 158 6649', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 1 Archivero Pantalla de proyeccion, 1 Mesa Plegable y  5 sillas Plegables', '2 Laptop, 1 Cámara Fotográfica, 2 Proyector,1  Equipo de Sonido,1  Impresora, 1 DVD, 1 Computadora de escritorio,1  Botarga, 1 Televisor de 50\"       ', '1 Maqueta Mantos Acuíferos,1 Maqueta Contaminación de una Cuenca, 1 maqueta potabilización y drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-70-1-1'),
('DET-ECA-78', 'Cel: 7711543497', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria,  1 silla secretarial, 1 Mesa Plegable y  5 sillas Plegables ', '2 laptop, 2  proyector, 1 cámara fotográfica, 1 equipo de sonido, 1 DVD, 1 impresora, 1 Televisor de 50\"', '1 maqueta Mantos Acuíferos, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-71-1-1'),
('DET-ECA-79', '7919131153 EXT 105\n\nCel: 7751234365', 'LUN-VIER 8:30 AM -04:00 PM', '1 Pantalla de Proyeccion, 1 Escritorio Secretarial, 1 silla secretarial, 1 mesa tablón, 6 sillas plegables', '1 Televisión, 1 Computadora de Escritorio, 1 Botarga, 1 Proyector, 1 laptop, 1 Pantalla de 50\" ', '1 Maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-72-1-1'),
('DET-ECA-8', 'Tel: 7489127134\nCel: 7489127134', 'LUN-VIER 9:00 AM- 4:30 SAB 9:00 A 1:00', '1 silla secretarial, 1 escritorio secretarial, 2 archivero, 1 Mesa Plegable y  5 sillas Plegables', '2 proyector, 1 laptop, 1 equipo de sonido,1 cámara de video,1 pantalla de 32\", 1 DVD computadora de escritorio, 2 cámara fotográfica, 1 CPU, 1 monitor', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Ciclo del Agua 3D, 1 maqueta Potabilización y Drenaje, ,1 Cascos de Reali', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-8-1-1'),
('DET-ECA-80', 'Presidencia: 7749740018\n\nLlamadas: 7715567367\nWhatsApp: 7712217508\n\n', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 Botarga, 1 Proyector, 1 laptop, 1 Pantalla de 50\"                       ', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-73-1-1'),
('DET-ECA-81', '55 3570 2744‬', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 1 pantalla para proyeccion con tripie, 1 Mesa Plegable y  5 sillas Plegables', '1  equipo de sonido,1  cámara fotográfica, 1 pantalla 32, 1  impresora, 1 DVD, 1  computadora de escritorio, 2 videoproyector, 1 botarga, 1 Televisor ', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-74-1-1'),
('DET-ECA-82', '7437410977', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Impresora,1  DVD, 1 Pantalla de 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-75-1-1'),
('DET-ECA-83', '\n017737325003 EXT 111 \nCEL: 7731264305', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria,1 Silla Secretarial, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 1 Proyector y 1 LapTop', ' 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-76-1-1'),
('DET-ECA-84', 'Tel: 7757538422 ext 1182\nCel. 5564662038', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria, 1 silla secretarial, 1 archivero de 4 gavetas, 1 pantalla para proyeccion con tripie, 1 toldo, 7 sillas, 2 mesa plegable', '1 camara de video, 2  laptop, 2 cámara fotográfica,  3 proyector,  1 impresora,  1 equipo de sonido,  1 pantalla de 32\'\' , 1 computadora de esritorio,', '1 Maqueta Mantos Acuíferos, 1 maqueta Ciclo del Agua 3D, 1 maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-77-1-1'),
('DET-ECA-85', '7751449476', 'LUN-VIER 8:30 AM -04:00 PM', '1 Archivero, 1 escritorio secretarial, 1 silla secretarial, 1 Mesa Plegable y  5 sillas Plegables', '1 computadora de escritorio, 1 pantalla de 32\", 1 cámara fotográfica, 2 computadora portatil, 1 Televisor de 50\", 1 Proyector ', '1 maqueta de relleno sanitario, 1 súper del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-77-1-5'),
('DET-ECA-86', '775 112 2940', 'LUN-VIER 9:00 AM -06:00 PM', '35 Sillas de Plastico , 1 Escritorio Secretarial, 1 Silla Secretarial,1  Pizarron,1  Pantalla de Proyeccion, 1 Mesa Plegable y  5 sillas Plegables', '1 Proyector, 1 Laptop, 1 Proyector, 2 Cámara Fotográfica,1  Impresora,1   Equipo de Sonido,1  Pantalla 32, 1 DVD, 1 Pantalla de 32\", 1 botarga, 1 Mesa', '1 Maqueta Mantos Acuíferos, Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua,1 placa de identificac', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-77-1-3'),
('DET-ECA-87', 'Cel: 8137060865 CEL. LLAMADAS 7296828476 WHATS: 7713225379', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 Maqueta Mantos Acuíferos, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-78-1-1'),
('DET-ECA-88', '7711415494', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1   Silla Secretarial    Archivero, 1 Mesa Plegable y  5 sillas Plegables', ' 2 Laptop, 1 Equipo de Sonido, 1 Cámara Fotográfica, 1 DVD, 1 Televisor de 50\", 1 Proyector           ', '1 Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-79-1-1'),
('DET-ECA-89', 'Cel: 7717204860', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 maqueta ciclo del agua, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-80-1-1');
INSERT INTO `detalle_eca` (`id_detalle_eca`, `telefonos`, `dias_hora_aten`, `equipo_movil`, `equipo_electr`, `material_didact`, `comentarios`, `id_estatus`, `clave_eca`) VALUES
('DET-ECA-9', '7721812746', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 1 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 2 Proyector y 2 LapTop, 1 equipo de sonido, 1 cámara fotográfica, 1 impresora, 1 DVD, 1 pantalla de 32\", 1 computadora de escritor', 'Maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos, maqueta Ciclo del Agua, maqueta potabilización y drenaje,1 Casco de Realidad virtual y ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-9-1-1'),
('DET-ECA-90', '7747420022', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretarial,   1 Silla Secretarial,  1 Archivero, 1 Mesa Plegable y  5 sillas Plegables', ' 1 Cámara de Video, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta de Relleno Sanitario, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súp', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-81-1-1'),
('DET-ECA-91', 'Cel: 7716833246', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-82-1-1'),
('DET-ECA-92', '7437415088 ext 106\nCel. 7751048997', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-83-1-1'),
('DET-ECA-93', 'Tel: 7437415014\n (Zempoala)- Casa particular\nTel: 7717185323\n (Consultorio Pachuca)\nCel: 7712547079', 'LUN-SAB 9:00 - 4:00 PM ', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 maqueta mantos acuíferos, 1 maqueta de relleno sanitario, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-83-1-2'),
('DET-ECA-94', '7721514670', 'LUN-SAB 9:00 - 5:00 PM ', ' 1 escritorio secretarial,  1 silla secretarial, 1 archivero, 1 Mesa Plegable y  5 sillas Plegables', ' 2  laptop, 2   proyector, 1 equipo de perifoneo, 2  cámaras fotográficas, 1  equipo de sonido, 1 impresora, 1 computadora de escritorio, 1 DVD, 1 pan', '1 maqueta mantos acuíferos, 1 maqueta contaminación de una cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-84-1-1'),
('DET-ECA-95', '7717112044 Ext. 126 \n7717115564 \nCel: 7712061900', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial,1  silla secretarial, ', '1 cámara fotográfica, 1 mini laptop,1 impresora,1 proyector, 1 equipo de sonido, 1 pantalla 32\" y 1 mesa interactiva ', 'Maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos, maqueta Potabilización y Drenaje, maqueta de Relleno Sanitario, maqueta Ciclo del Agua ', 'cerrado', 'EST-1K2LMP4X', '13-48-1-8');

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
('DIR-1', '43540', 'Acatlá', 'Centro', '16 de enero', '14', 'Municipio', 'MUN-1'),
('DIR-10', '42970', 'Atitalaquia', 'Centro', 'Del Arco', '5', 'Organismo Operador Municipal', 'MUN-10'),
('DIR-11', '43060', 'Atlapexco', 'Centro', 'Pino   ', 's/n', 'Municipio', 'MUN-11'),
('DIR-12', '43300', 'Atotonilco el Grande', 'Centro', 'Plaza principal', '334', 'Municipio', 'MUN-12'),
('DIR-13', '42980', 'Atotonilco de Tula', 'Los Compadres', 'Republica de Cuba', 'S/N', 'Organismo Operador Municipal', 'MUN-13'),
('DIR-14', '43233', 'Calnali', 'Centro', 'Av. Juarez', 'S/N', 'Organismo Operador Municipal', 'MUN-14'),
('DIR-15', '42370', 'Cardonal', 'centro', 'BENITO PABLO JUAREZ GARCIA ', '4', 'Organismo Operador Municipal', 'MUN-15'),
('DIR-16', '43740', 'Cuautepec de Hinojosa', 'Centro', 'Benito Juáre', 's/n', 'Organismo Operador Municipal', 'MUN-16'),
('DIR-17', '42900', 'Chapantongo', 'Barrio Guadalupe', 'Palacio Municipal ', '34', 'Organismo Operador Municipal', 'MUN-17'),
('DIR-18', '42280', 'Chapulhuacá', 'Centro', 'Francisco Sarabia ', 's/n', 'Municipio', 'MUN-18'),
('DIR-19', '42750', 'Chilcuautla', 'Centro', 'Diesiseis de enero', 's/n', 'Municipio', 'MUN-19'),
('DIR-2', '43720', 'Acaxochitlá', 'Centro', 'Matamoros', 's/n', 'Municipio', 'MUN-2'),
('DIR-20', '43330', 'Eloxochitlá', 'Centro', '16 de septiembre', 's/n', 'Municipio', 'MUN-20'),
('DIR-21', '43960', 'Emiliano Zapata', 'Centro', '5 de mayo', 's/n', 'Municipio', 'MUN-21'),
('DIR-22', '43580', 'Epazoyucan', 'Centro', 'Carretera Hidalgo', '11', 'Municipio', 'MUN-22'),
('DIR-23', '42660', 'Tepatepec', 'CENTRO', 'EMILIANO ZAPATA', 'S/N', 'Municipio', 'MUN-23'),
('DIR-24', '42660', 'Francisco I. Madero', 'CENTRO', 'Corregidora', '27', 'Organismo Operador Municipal', 'MUN-24'),
('DIR-25', '43500', 'Huasca de Ocampo', 'CENTRO', 'ALDAMA', 'S/N', 'Organismo Operador Municipal', 'MUN-25'),
('DIR-26', '43050', 'Huautla', 'CENTRO', 'ARQ. GUILLERMO ROSELL DE LA LAMA', 'S/N', 'Organismo Operador Municipal', 'MUN-26'),
('DIR-27', '43070', 'Huazalingo', 'Centro', 'AV. HIDALGO ', 's/n', 'Municipio', 'MUN-27'),
('DIR-28', '43420', 'Huehuetla', 'Centro', 'Luis Donaldo Colosio', '330', 'Municipio', 'MUN-28'),
('DIR-29', '43000', 'Huejutla de Reyes', 'Centro', 'NICANDRO CASTILLO', '25', 'Organismo Operador Municipal', 'MUN-29'),
('DIR-3', '42500', 'Actopan', 'Aviació', 'Alonso de Borja ', '201', 'Organismo Operador Municipal', 'MUN-3'),
('DIR-30', '43000', 'Huejutla de Reyes', 'TEPOXTEQUITO', 'PARQUE INDUSTRIAL SIGLO XXI', 'S/N', 'Otro', 'MUN-30'),
('DIR-31', '42400', 'Huichapan', 'Barrio el Calvario ', 'NICOLAS BRAVO ', 's/n', 'Organismo Operador Municipal', 'MUN-31'),
('DIR-32', '42400', 'Huichapan', 'Centro Historico ', 'MANUEL CHAVEZ NAVA ', '3', '?rganos de participaci?n previstos en la LAN', 'MUN-32'),
('DIR-33', '42300', 'Ixmiquilpan', 'CENTRO', 'FELIPE ÁNGELE', 'S/N', '?rganos de participaci?n previstos en la LAN', 'MUN-33'),
('DIR-34', '42200', 'Jacala', 'Centro', 'PINO SUAREZ', 'S/N', '?rganos de participaci?n previstos en la LAN', 'MUN-34'),
('DIR-35', '43040', 'Jaltocá', 'Centro', 'Felipe Ángeles', 's/n', 'Municipio', 'MUN-35'),
('DIR-36', '43190', 'Juáre', 'Centro', 'Avenida Juáre', 's/n', 'Municipio', 'MUN-36'),
('DIR-37', '43140', 'Lolotla', 'Centro', 'Benito Juáre', 's/n', 'Municipio', 'MUN-37'),
('DIR-38', '43400', 'Metepec', 'Centro', 'Diesiseis de septiembre', 's/n', 'Municipio', 'MUN-38'),
('DIR-39', '43380', 'Metzquititlá', 'CENTRO', 'NIÑOS HEROE', 'S/N', 'Municipio', 'MUN-39'),
('DIR-4', '43460', 'Agua Blanca Iturbide', 'Centro', 'Allende', 's/n', 'Municipio', 'MUN-4'),
('DIR-40', '43351', 'Metztitlá', 'Centro', 'Porfirio Día', 's/n', 'Municipio', 'MUN-40'),
('DIR-41', '42120', 'Mineral del Chico', 'Centro', 'plaza principal ', 's/n', 'Municipio', 'MUN-41'),
('DIR-42', '42133', 'Mineral del Monte', 'Industrial', 'Porfirio Día', '200', 'Municipio', 'MUN-42'),
('DIR-43', '42260', 'La Misió', 'Centro', 'Plaza Juáre', 's/n', 'Municipio', 'MUN-43'),
('DIR-44', '42700', 'Mixquiahuala', 'Centro', 'Gómez Farí', '15', '?rganos de participaci?n previstos en la LAN', 'MUN-44'),
('DIR-45', '43100', 'Molango', 'Centro', 'Ignacio Zaragoza', '1', 'Municipio', 'MUN-45'),
('DIR-46', '42360', 'Nicolás Flore', 'Centro', 'Profr. Muriño Muñóz Basi', 's/n', 'Municipio', 'MUN-46'),
('DIR-47', '42470', 'Nopala', 'Centro', 'Avenida del Trabajo', '5', '?rganos de participaci?n previstos en la LAN', 'MUN-47'),
('DIR-48', '43560', 'Omitlán de Juár', 'Centro', 'Juáre', 's/n', 'Municipio', 'MUN-48'),
('DIR-49', '43020', 'Orizatlá', 'CENTRO', 'GUSTAVO ARVIZU AVILA', 'S/N', 'Municipio', 'MUN-49'),
('DIR-5', '42150', 'Ajacuba', 'Centro', 'Eustolia Becerra', 's/n', 'Organismo Operador Municipal', 'MUN-5'),
('DIR-50', '42240', 'Pacula', 'Centro', 'Benito Juáre', 's/n', 'Municipio', 'MUN-50'),
('DIR-51', '42092', 'Pachuca de Soto', 'ZONA INDUSTRIAL LA PAZ', 'INDUSTRIAL LA PAZ', '200', 'Organismo Operador Intermunicipal', 'MUN-51'),
('DIR-52', '42084', 'Pachuca de Soto', 'Zona Plateada', '0', '431', '?rganos de participaci?n previstos en la LAN', 'MUN-52'),
('DIR-53', '42082', 'Pachuca de Soto', 'Zona Plateada', 'Camino Real de la plata', '336', '?rganos de participaci?n previstos en la LAN', 'MUN-53'),
('DIR-54', '42000', 'Centro', 'Pachuca de Soto', 'Plaza Pedro Ma. Anaya', '1', 'Municipio', 'MUN-54'),
('DIR-55', '42220', 'Pisaflores', 'Centro', 'Veinte de noviembre', 's/n', 'Municipio', 'MUN-55'),
('DIR-56', '42730', 'Progreso', 'CENTRO', 'Nuevo Méxic', '22-A', 'Municipio', 'MUN-56'),
('DIR-57', '42180', 'Mineral de la Reforma', 'Santa María la Caler', 'Calle Diamante ', 's/n ', 'Municipio', 'MUN-57'),
('DIR-58', '42160', 'San Agustín Tlaxiac', 'CENTRO', 'AVENIDA INDEPENDENCIA', 'S/N', 'Organismo Operador Municipal', 'MUN-58'),
('DIR-59', '43440', 'Tutotepec', 'CENTRO', 'BENITO JUÁRE', 'S/N', 'Municipio', 'MUN-59'),
('DIR-6', '42390', 'Alfajayucan', 'Centro', 'Palacio Municipal', 's/n ', 'Organismo Operador Municipal', 'MUN-6'),
('DIR-60', '42650', 'San Salvador', 'San Antonio Zaragoza', 'AV. FELIPE ÁNGELE', '10', 'Organismo Operador Municipal', 'MUN-60'),
('DIR-61', '42640', 'San Salvador', 'Centro', 'Calle Ayuntamiento', '1', 'Sistemas de Agua', 'MUN-61'),
('DIR-62', '42620', 'El Centro', 'Gonzalez Gonzalez ', 'Frente a la iglesia', 'S/N', 'Organismo Operador Municipal', 'MUN-62'),
('DIR-63', '43760', 'Santiago Tulantepec', 'Centro', 'Cerrada 1o. de abril', '92', 'Organismo Operador Municipal', 'MUN-63'),
('DIR-64', '43780', 'Singuilucan', 'Centro', 'Plaza del Artículo 11', 's/n', 'Municipio', 'MUN-64'),
('DIR-65', '42380', 'Tasquillo', 'Centro', 'Fernando Soto', 's/n', 'Municipio', 'MUN-65'),
('DIR-66', '42440', 'Tecozautla', 'Barrio Hidalgo', 'Calzada de Guadalupe ', '26', 'Organismo Operador Municipal', 'MUN-66'),
('DIR-67', '43480', 'Tenango de Doria', 'CENTRO', 'AV. BENITO JUÁRE', 'S/N', 'Municipio', 'MUN-67'),
('DIR-68', '43970', 'Tepeapulco', 'CENTRO', 'BENITO JUÁRE', '8', 'Municipio', 'MUN-68'),
('DIR-69', '43120', 'Tepehuacán de Guerrer', 'Centro', 'Av. Democracia', 's/n', 'Municipio', 'MUN-69'),
('DIR-7', '43940', 'Almoloya', 'Centro', 'Pino   ', 's/n', 'Organismo Operador Municipal', 'MUN-7'),
('DIR-70', '42850', 'Tepeji de Ocampo', 'SAN FRANCISCO', 'IGNACIO COMOFORT', 'S/N', 'Organismo Operador Municipal', 'MUN-70'),
('DIR-71', '42920', 'Tepetitlá', 'Centro', 'Tepetitlán  - Tula de Allend', 's/n', 'Municipio', 'MUN-71'),
('DIR-72', '42940', 'Tetepango', 'Centro', 'Av. 16 de enero', 's/n', 'Municipio', 'MUN-72'),
('DIR-73', '43880', 'Tezontepec', 'CENTRO', 'DIESCISEIS DE ENERO ', 'S/N', 'Municipio', 'MUN-73'),
('DIR-74', '42760', 'Tezontepec de Aldama', 'CENTRO', 'AV. ALLENDE ', '5', 'Organismo Operador Municipal', 'MUN-74'),
('DIR-75', '43270', 'Tianguistengo', 'CENTRO', 'RUPERTO ALARCON', '11', 'Municipio', 'MUN-75'),
('DIR-76', '43800', 'Tizayuca', 'El Pedregal', 'Av. Juárez Nort', '39', 'Organismo Operador Municipal', 'MUN-76'),
('DIR-77', '42780', 'Tlahuelilpan', 'CENTRO', 'AV. DEL EJIDO', 'S/N', 'Organismo Operador Municipal', 'MUN-77'),
('DIR-78', '43170', 'Tlahuiltepa', 'Centro', 'Avenida principal', 's/n', 'Municipio', 'MUN-78'),
('DIR-79', '43930', 'Tlanalapa', 'CENTRO', 'GERARDO ROLDAN NORTE', 'S/N', 'Municipio', 'MUN-79'),
('DIR-8', '43900', 'Apan', 'Centro', 'Lauro L. Mendez', 's/n', 'Organismo Operador Municipal', 'MUN-8'),
('DIR-80', '43150', 'Tlanchinol', 'CENTRO', 'J GONZALEZ', 'S/N', 'Municipio', 'MUN-80'),
('DIR-81', '42950', 'Tlaxcoapan', 'Centro', 'Av. Juáre', 's/n', 'Organismo Operador Municipal', 'MUN-81'),
('DIR-82', '43860', 'Tolcayuca', 'Centro', 'Juáre', '1', 'Municipio', 'MUN-82'),
('DIR-83', '42800', 'Tula de Allende', 'CENTRO', 'MELCHOR OCAMPO', 'S/N', 'Organismo Operador Municipal', 'MUN-83'),
('DIR-84', '43640', 'Tulancingo', 'Fracc. Nuevo San Nicolas', 'Blv. San Nicolas ', 's/n', 'Organismo Operador Municipal', 'MUN-84'),
('DIR-85', '43640', 'Tulancingo', 'Fracc. Nuevo San Nicolas', 'Blv. San Nicolas ', 's/n', 'Municipio', 'MUN-85'),
('DIR-86', '43760', 'Tulancingo', 'FRANCSICO I MADERO', 'VENUSTIANO CARRANZA', '402', '?rganos de participaci?n previstos en la LAN', 'MUN-86'),
('DIR-87', '43090', 'Xochiatipan', 'CENTRO', 'INDEPENDENCIA', 'S/N', 'Municipio', 'MUN-87'),
('DIR-88', '43250', 'Xochicoatlá', 'CENTRO', 'MINA', 'S/N', 'Municipio', 'MUN-88'),
('DIR-89', '43080', 'Yahualica', 'Centro', 'Hidalgo ', 's/n', 'Municipio', 'MUN-89'),
('DIR-9', '42680', 'El Arenal', 'Centro', 'Palacio Municipal ', 's/n', 'Municipio', 'MUN-9'),
('DIR-90', '43200', 'Zacualtipá', 'CENTRO', 'Plaza de  la Constitució', 'S/N', 'Municipio', 'MUN-90'),
('DIR-91', '42190', 'Zapotlán de Juár', 'Centro', 'AV. HIDALGO ', 's/n ', 'Municipio', 'MUN-91'),
('DIR-92', '43830', 'Zempoala', 'Centro', 'Hidalgo ', 's/n', 'Municipio', 'MUN-92'),
('DIR-93', '43830', 'Zempoala', 'Centro', 'Abasolo', 's/n', 'Otro', 'MUN-93'),
('DIR-94', '42330', 'Zimapá', 'Centro', 'H. Colegio Militar', '4', 'Organismo Operador Municipal', 'MUN-94'),
('DIR-95', '42080', 'Pachuca de Soto', 'Venta Prieta', 'Boulevard Felipe Angeles', 's/n', 'Museo Interactivo \"El Rehilete\"', 'MUN-95'),
('direccion1', '42300', 'Ixmiquilpan', 'Centro', 'FELIPE ÁNGELES', 'S/N', 'Órganos de participación previstos en la LAN', 'municipio1'),
('id_direcció', 'cod_p', 'localidad', 'colonia', 'calle_av', 'num_direccion', 'tipo_instancia', 'id_municipio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eca`
--

CREATE TABLE `eca` (
  `clave_eca` char(12) NOT NULL,
  `nombre_inst` text NOT NULL,
  `nombre_inst_ope` text NOT NULL,
  `poblacion_atend` int(6) NOT NULL,
  `fecha_apert` date NOT NULL,
  `fecha_forta` date NOT NULL,
  `fecha_cierre` varchar(50) DEFAULT NULL,
  `motivo_cierre` text DEFAULT NULL,
  `id_usuario` char(20) NOT NULL,
  `id_estatus` char(20) NOT NULL,
  `id_direccion` char(20) NOT NULL,
  `id_fecha` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eca`
--

INSERT INTO `eca` (`clave_eca`, `nombre_inst`, `nombre_inst_ope`, `poblacion_atend`, `fecha_apert`, `fecha_forta`, `fecha_cierre`, `motivo_cierre`, `id_usuario`, `id_estatus`, `id_direccion`, `id_fecha`) VALUES
('13- 10 -1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Atitalaquia (CAPASMAH', 6924, '2003-04-15', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-10', '19062026'),
('13-1-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potable Municipa', 439, '2004-12-13', '2023-12-28', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-1', '19062026'),
('13-11-1-1', 'Comisión Estatal del Agua y Alcantarillado', 'Dirección de Ecología', 2960, '2001-11-26', '2025-12-19', 'No Aplica', 'No Aplica\r\n', '2', 'EST-1K2LMP4X', 'DIR-11', '19062026'),
('13-12-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 8417, '2003-11-03', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-12', '19062026'),
('13-13-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Atotonilco de Tula (CAASAT', 8822, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-13', '19062026'),
('13-14-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable y Alcantarillado del municipio de Calnali  (CAPAC', 4235, '2002-10-14', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-14', '19062026'),
('13-15-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Organismo Descentralizado de Agua Potable y \nAlcantarillado de \nCardonal M´Oahi (ODAPYAC', 755, '2002-10-14', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-15', '19062026'),
('13-16-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Cuautepec de Hinojosa, Hidalgo  (CAPASCHH', 20530, '2002-09-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-16', '19062026'),
('13-17-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Sistema de Agua Potable Chapantongo (SAPC)', 2006, '2003-10-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-17', '19062026'),
('13-18-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Servicios Públicos Municipale', 4054, '2003-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-18', '19062026'),
('13-19-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Servicios Municipales', 1262, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-19', '19062026'),
('13-2-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potable Municipa', 250, '2002-12-09', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-2', '19062026'),
('13-20-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 601, '2004-12-01', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-20', '19062026'),
('13-21-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 9584, '2002-10-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-21', '19062026'),
('13-22-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Ecologi', 3310, '2003-04-15', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-22', '19062026'),
('13-23-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 11335, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-23', '19062026'),
('13-23-1-2', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado del Sistema Valle del Mezquital (CAASVAM', 11335, '2006-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-24', '19062026'),
('13-24-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua del Municipio de Huasca de Ocampo (COAMH', 417, '2002-12-01', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-25', '19062026'),
('13-25-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Huautla (CAASH', 3806, '2003-11-03', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-26', '19062026'),
('13-26-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potable y Ecología Municip', 770, '2004-12-01', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-27', '19062026'),
('13-27-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 2993, '2003-12-19', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-28', '19062026'),
('13-28-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamineto de Huejutla, Hidalgo (CAPASHH', 44311, '2003-12-01', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-29', '19062026'),
('13-28-1-4', 'Comisión Estatal del Agua y Alcantarillad', 'Universidad Politécnica de Huejutl', 800, '2016-12-23', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-30', '19062026'),
('13-29-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Huichapan (CAPOSA', 9853, '2004-12-13', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-31', '19062026'),
('13-29-1-2', 'Comisión Estatal del Agua y Alcantarillad', 'Comité Técnico de Aguas Subterraneas (Huichapan-Tecozautla-Nopala)- (COTA', 9853, '2006-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-32', '19062026'),
('13-3-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado del municipio de Actopan (CAASA', 32276, '2004-12-13', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-3', '19062026'),
('13-30-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Ixmiquilpan (CAPASMIH', 37608, '2003-04-15', '2024-09-23', 'No Aplica', 'No Aplica', '7', 'EST-1K2LMP4X', 'DIR-33', '19062026'),
('13-31-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del Municipio de Jacala de Ledezma (CAPASJ', 4582, '2002-04-08', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-34', '19062026'),
('13-32-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Obras públic', 5919, '2001-09-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-35', '19062026'),
('13-33-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 616, '2004-12-01', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-36', '19062026'),
('13-34-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Direccion de Agua Potlable ', 590, '2004-12-01', '2025-12-19', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-37', '19062026'),
('13-35-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 2248, '2003-11-03', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-38', '19062026'),
('13-36-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 1788, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-39', '19062026'),
('13-37-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Direccion de Agua Potable ', 3274, '2003-10-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-40', '19062026'),
('13-38-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Obras Púbic', 533, '2001-09-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-41', '19062026'),
('13-39-1-1', 'Comisión Estatal del Agua y Alcantarillado', 'Dirección de Ecología', 1813, '2003-04-15', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-42', '19062026'),
('13-4-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potable Municipa', 2325, '2003-11-03', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-4', '19062026'),
('13-40-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Obras Publicas y Ecología Municip', 546, '2004-12-01', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-43', '19062026'),
('13-41-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comision de Agua y Alcantarillado del Municipio de Mixquiahuala, Hgo', 27713, '2003-11-01', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-44', '19062026'),
('13-42-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 4995, '2001-11-01', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-45', '19062026'),
('13-43-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable  y Saneamiento del Municipio de Nicolás  Flor', 404, '2003-10-01', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-46', '19062026'),
('13-44-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Nopala (ODAPAN', 1155, '2002-10-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-47', '19062026'),
('13-45-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potable', 1050, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-48', '19062026'),
('13-46-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Ecologi', 7037, '2002-10-01', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-49', '19062026'),
('13-47-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 540, '2004-12-01', '2024-09-24', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-50', '19062026'),
('13-48-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comision de Agua y Alcantarillado Sistemas Intermunicipales (CAASIM)', 125000, '2003-11-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-51', '19062026'),
('13-48-1-3', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión Nacional del Agua (CONAGUA', 150000, '2006-12-01', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-52', '19062026'),
('13-48-1-4', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo (CEAA', 150000, '2006-12-01', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-53', '19062026'),
('13-48-1-6', 'Comisión Estatal del Agua y Alcantarillad', 'Presidencia Municipal de Pachuca', 297848, '2008-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-54', '19062026'),
('13-48-1-8', 'Comisión Estatal del Agua y Alcantarillad', 'Museo Interactivo \"El Rehilete\"', 416000, '2011-08-10', '2019-11-28', '10/12/2025', 'Enviaron oficio de cierre definitivo del espacio de cultura del agua', '2', 'estado2', 'DIR-95', '19062026'),
('13-49-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Servicios Públicos y Ecolog', 2428, '2004-12-01', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-55', '19062026'),
('13-5-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Saneamiento del municipio de Ajacuba (CAYSA', 8254, '2004-10-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-5', '19062026'),
('13-50-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado de Progreso de Alvaro Obregón ( CAAMPA', 17718, '2002-11-29', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-56', '19062026'),
('13-51-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Medio Ambiente', 9559, '2003-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-57', '19062026'),
('13-52-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de San Agustín Tlaxiaca (CAPASSA', 12328, '2003-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-58', '19062026'),
('13-53-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección De Agua Potabl', 2764, '2003-12-01', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-59', '19062026'),
('13-54-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado del municipio de San Salvador, Hgo. (CAAMSSH', 1107, '2003-10-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-60', '19062026'),
('13-54-23-1', 'Comisión Estatal del Agua y Alcantarillad', 'Sistema de Agua Potable Teofani', 1107, '2006-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-61', '19062026'),
('13-55-1-2', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable y Alcantarillado de Santiago de Anay', 2676, '2002-10-25', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-62', '19062026'),
('13-56-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento de Tulantepec  (CAASST', 17449, '2002-10-07', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-63', '19062026'),
('13-57-1-1', 'Comisión Estatal del Agua y Alcantarillado\r\n', 'Dirección de Ecología\r\n', 4805, '2004-12-13', '2025-12-17', 'No Aplica', 'No Aplica\r\n', '2', 'EST-1K2LMP4X', 'DIR-64', '19062026'),
('13-58-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 4030, '2003-11-05', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-65', '19062026'),
('13-59-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comision de Agua Potable, Alcantarillado y Saneamiento del Municipio de Tecozautla (CAAST)', 6701, '2002-11-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-66', '19062026'),
('13-6-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado del municipio de Alfajayucan (CAAMAH', 1794, '2004-10-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-6', '19062026'),
('13-60-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Ecologi', 2614, '2003-10-01', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-67', '19062026'),
('13-61-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 16368, '2002-09-01', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-68', '19062026'),
('13-62-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección De Agua Potable y alcantarillad', 1373, '2004-12-13', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-69', '19062026'),
('13-63-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado del municipio de Tepeji del Río de Ocampo, Hgo. (CAAMTRO', 36618, '2003-10-18', '2023-12-28', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-70', '19062026'),
('13-64-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Ecología de Agua Potab', 1056, '2003-12-19', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-71', '19062026'),
('13-65-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Direccion de Agua Potable y Ecologia ', 9145, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-72', '19062026'),
('13-66-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Municipio de Villa de Tezontepec', 6213, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-73', '19062026'),
('13-67-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado de Tezontepec de Aldama, Hgo. (CAYATAH', 5398, '2003-10-18', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-74', '19062026'),
('13-68-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Dirección de Agua Potabl', 1731, '2004-10-01', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-75', '19062026'),
('13-69-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado del municipio de Tizayuca, Hgo. (CAAMTH', 168302, '2003-12-01', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-76', '19062026'),
('13-7-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable del municipio de Almoloya (COMAAL ', 5618, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-7', '19062026'),
('13-70-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Y Saneamiento del Municipio de Tlahuelilpan (CASMTH', 8657, '2001-09-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-77', '19062026'),
('13-71-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Municipio de Tlahuiltepa', 286, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-78', '19062026'),
('13-72-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Municipio de Tlanalapa', 8062, '2003-10-01', '2025-12-19', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-79', '19062026'),
('13-73-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Tlanchinol ECA', 6117, '2002-10-14', '2025-12-17', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-80', '19062026'),
('13-74-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Saneamiento del municipio de Tlaxcoapan (CAyST', 14689, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-81', '19062026'),
('13-75-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Presidencia Municipal de Tolcayuca', 8966, '2003-12-19', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-82', '19062026'),
('13-76-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable y Alcantarillado de Tula (CAPYAT', 29390, '2001-11-23', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-83', '19062026'),
('13-77-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua y Alcantarillado del municipio de Tulancingo (CAAMT', 105163, '2003-10-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-84', '19062026'),
('13-77-1-3', 'Comisión Estatal del Agua y Alcantarillad', 'Comité Técnico de Aguas Subterráneas del Acuífero del Valle de Tulancingo (CO', 105163, '2006-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-86', '19062026'),
('13-77-1-5', 'Comisión Estatal del Agua y Alcantarillad', 'Municipio de Tulancingo de Bravo', 105163, '2017-11-10', '2023-12-27', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-85', '19062026'),
('13-78-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Xochiatipan ECA', 1593, '2004-12-01', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-87', '19062026'),
('13-79-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Xochicoatlán ECA, Dirección de ecolog', 1301, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-88', '19062026'),
('13-8-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable y Alcantarillado del municipio de Apan (CAAPAN)', 28792, '2001-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-8', '19062026'),
('13-80-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Yahualica ECA', 24674, '2001-12-01', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-89', '19062026'),
('13-81-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Direccion de Obras Publicas y Agua Potable del municipio de Zacualtipan', 29472, '2003-11-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-90', '19062026'),
('13-82-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Zapotlán EC', 4978, '2004-12-13', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-91', '19062026'),
('13-83-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Zempoala ECA', 7205, '2004-12-01', '2025-12-18', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-92', '19062026'),
('13-83-1-2', 'Comisión Estatal del Agua y Alcantarillad', 'Acueducto Padre Tembleque', 7205, '2011-08-10', '2025-12-11', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-93', '19062026'),
('13-84-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Zimapán (CAPASAZI', 14732, '2002-11-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-94', '19062026'),
('13-9-1-1', 'Comisión Estatal del Agua y Alcantarillad', 'Direccion de Agua Potable', 3578, '2004-12-01', '2024-09-23', 'No Aplica', 'No Aplica', '2', 'EST-1K2LMP4X', 'DIR-9', '19062026');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `espaciocultura`
--

CREATE TABLE `espaciocultura` (
  `id_espacio` char(20) NOT NULL,
  `material_did` varchar(100) NOT NULL,
  `total_pobl` int(11) NOT NULL,
  `anexos` varchar(150) NOT NULL DEFAULT '',
  `comentarios` varchar(150) NOT NULL DEFAULT '',
  `asistentes` int(11) NOT NULL DEFAULT 0,
  `clave_eca` char(12) NOT NULL,
  `id_fecha` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fecha`
--

CREATE TABLE `fecha` (
  `id_fecha` char(8) NOT NULL,
  `fecha_comp` date NOT NULL,
  `anio` int(11) NOT NULL,
  `mes` int(11) NOT NULL,
  `dia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fecha`
--

INSERT INTO `fecha` (`id_fecha`, `fecha_comp`, `anio`, `mes`, `dia`) VALUES
('18052026', '2026-05-18', 2026, 5, 18),
('19062026', '2026-05-19', 2026, 6, 19),
('23062026', '2026-06-23', 2026, 6, 23);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historico_eca`
--

CREATE TABLE `historico_eca` (
  `clave_eca` char(12) NOT NULL,
  `nombre_inst` varchar(150) NOT NULL,
  `nombre_inst_ope` varchar(150) NOT NULL,
  `tipo_instancia` varchar(150) NOT NULL,
  `num_habitantes` int(11) NOT NULL,
  `pob_atend` int(11) NOT NULL,
  `calle_av` varchar(150) NOT NULL,
  `num_calle` varchar(150) NOT NULL,
  `colonia` varchar(150) NOT NULL,
  `municipio` varchar(150) NOT NULL,
  `localidad` varchar(150) NOT NULL,
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
  `anio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `memoria_fotografica`
--

CREATE TABLE `memoria_fotografica` (
  `id_memoria` char(20) NOT NULL,
  `descripcion` text NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion_act` text NOT NULL,
  `fecha` date NOT NULL,
  `id_claveEca` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(4, '0001_01_01_000000_create_users_table', 1),
(5, '0001_01_01_000001_create_cache_table', 1),
(6, '0001_01_01_000002_create_jobs_table', 1),
(7, '2026_05_22_162424_create_users_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `id_municipio` char(20) NOT NULL,
  `nombre_munipio` varchar(40) NOT NULL,
  `num_habitan` int(15) NOT NULL,
  `estado` varchar(60) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`id_municipio`, `nombre_munipio`, `num_habitan`, `estado`) VALUES
('id_municipio', 'nombre_municipio', 0, 'estado'),
('MUN-1', 'Acatlá', 22, 'Hidalgo'),
('MUN-10', 'Atitalaquia', 31, 'Hidalgo'),
('MUN-11', 'Atlapexco', 19, 'Hidalgo'),
('MUN-12', 'Atotonilco el Grande', 30, 'Hidalgo'),
('MUN-13', 'Atotonilco de Tula', 62, 'Hidalgo'),
('MUN-14', 'Calnali', 16150, 'Hidalgo'),
('MUN-15', 'Cardonal', 19, 'Hidalgo'),
('MUN-16', 'Cuautepec de Hinojosa', 60, 'Hidalgo'),
('MUN-17', 'Chapantongo', 12, 'Hidalgo'),
('MUN-18', 'Chapulhuacá', 22, 'Hidalgo'),
('MUN-19', 'Chilcuautla', 18, 'Hidalgo'),
('MUN-2', 'Acaxochitlá', 46, 'Hidalgo'),
('MUN-20', 'Eloxochitlá', 2, 'Hidalgo'),
('MUN-21', 'Emiliano Zapata', 15, 'Hidalgo'),
('MUN-22', 'Epazoyucan', 16, 'Hidalgo'),
('MUN-23', 'Francisco I. Madero', 36, 'Hidalgo'),
('MUN-24', 'Francisco I. Madero', 36, 'Hidalgo'),
('MUN-25', 'Huasca de Ocampo', 17, 'Hidalgo'),
('MUN-26', 'Huautla', 20, 'Hidalgo'),
('MUN-27', 'Huazalingo', 12, 'Hidalgo'),
('MUN-28', 'Huehuetla', 22, 'Hidalgo'),
('MUN-29', 'Huejutla de Reyes', 126, 'Hidalgo'),
('MUN-3', 'Actopan', 61, 'Hidalgo'),
('MUN-30', 'Huejutla de Reyes', 126, 'Hidalgo'),
('MUN-31', 'Huichapan', 47, 'Hidalgo'),
('MUN-32', 'Huichapan', 47, 'Hidalgo'),
('MUN-33', 'Ixmiquilpan', 98, 'Hidalgo'),
('MUN-34', 'Jacala de Ledezma', 12, 'Hidalgo'),
('MUN-35', 'Jaltocá', 10, 'Hidalgo'),
('MUN-36', 'Juárez Hidalg', 2, 'Hidalgo'),
('MUN-37', 'Lolotla', 9, 'Hidalgo'),
('MUN-38', 'Metepec', 13, 'Hidalgo'),
('MUN-39', 'San Agustín Metzquititl?,9', 449, 'Hidalgo'),
('MUN-4', 'Agua Blanca de Iturbide', 10, 'Hidalgo'),
('MUN-40', 'Metztitlá', 20, 'Hidalgo'),
('MUN-41', 'Mineral del Chico', 8, 'Hidalgo'),
('MUN-42', 'Mineral del Monte', 14, 'Hidalgo'),
('MUN-43', 'La Misió', 9, 'Hidalgo'),
('MUN-44', 'Mixquiahuala de Juáre', 47, 'Hidalgo'),
('MUN-45', 'Molango de Escamilla', 11, 'Hidalgo'),
('MUN-46', 'Nicolás Flore', 6, 'Hidalgo'),
('MUN-47', 'Nopala de Villagrá', 16, 'Hidalgo'),
('MUN-48', 'Omitlán de Juár', 9, 'Hidalgo'),
('MUN-49', 'San Felipe Orizatlá', 38, 'Hidalgo'),
('MUN-5', 'Ajacuba', 18, 'Hidalgo'),
('MUN-50', 'Pacula', 4, 'Hidalgo'),
('MUN-51', 'Pachuca de Soto', 314, 'Hidalgo'),
('MUN-52', 'Pachuca de Soto', 314, 'Hidalgo'),
('MUN-53', 'Pachuca de Soto', 314, 'Hidalgo'),
('MUN-54', 'Pachuca de Soto', 314331, 'Hidalgo'),
('MUN-55', 'Pisaflores', 18, 'Hidalgo'),
('MUN-56', 'Progreso de Obregó', 23, 'Hidalgo'),
('MUN-57', 'Mineral de la Reforma', 202, 'Hidalgo'),
('MUN-58', 'San Agustín Tlaxiac', 38, 'Hidalgo'),
('MUN-59', 'San Bartolo Tutotepec', 17, 'Hidalgo'),
('MUN-6', 'Alfajayucan', 19, 'Hidalgo'),
('MUN-60', 'San Salvador', 36, 'Hidalgo'),
('MUN-61', 'San Salvador', 36, 'Hidalgo'),
('MUN-62', 'Santiago de Anaya', 18, 'Hidalgo'),
('MUN-63', 'Santiago Tulantepec de Lugo Guerrero', 39, 'Hidalgo'),
('MUN-64', 'Singuilucan', 15, 'Hidalgo'),
('MUN-65', 'Tasquillo', 17, 'Hidalgo'),
('MUN-66', 'Tecozautla', 38, 'Hidalgo'),
('MUN-67', 'Tenango de Doria', 17, 'Hidalgo'),
('MUN-68', 'Tepeapulco', 56, 'Hidalgo'),
('MUN-69', 'Tepehuacán de Guerrer', 31, 'Hidalgo'),
('MUN-7', 'Almoloya', 12, 'Hidalgo'),
('MUN-70', 'Tepeji del Río de Ocamp', 90, 'Hidalgo'),
('MUN-71', 'Tepetitlá', 10, 'Hidalgo'),
('MUN-72', 'Tetepango', 11, 'Hidalgo'),
('MUN-73', 'Villa de Tezontepec', 13, 'Hidalgo'),
('MUN-74', 'Tezontepec de Aldama', 55, 'Hidalgo'),
('MUN-75', 'Tianguistengo', 14, 'Hidalgo'),
('MUN-76', 'Tizayuca', 168, 'Hidalgo'),
('MUN-77', 'Tlahuelilpan', 19, 'Hidalgo'),
('MUN-78', 'Tlahuiltepa', 9, 'Hidalgo'),
('MUN-79', 'Tlanalapa', 11, 'Hidalgo'),
('MUN-8', 'Apan', 46, 'Hidalgo'),
('MUN-80', 'Tlanchinol', 37, 'Hidalgo'),
('MUN-81', 'Tlaxcoapan', 28, 'Hidalgo'),
('MUN-82', 'Tolcayuca', 21, 'Hidalgo'),
('MUN-83', 'Tula de Allende', 115, 'Hidalgo'),
('MUN-84', 'Tulancingo de Bravo', 168369, 'Hidalgo'),
('MUN-85', 'Tulancingo de Bravo', 168369, 'Hidalgo'),
('MUN-86', 'Tulancingo de Bravo', 168369, 'Hidalgo'),
('MUN-87', 'Xochiatipan', 18260, 'Hidalgo'),
('MUN-88', 'Xochicoatlá', 7015, 'Hidalgo'),
('MUN-89', 'Yahualica', 24674, 'Hidalgo'),
('MUN-9', 'El Arenal', 19, 'Hidalgo'),
('MUN-90', 'Zacualtipán de Ángel', 38155, 'Hidalgo'),
('MUN-91', 'Zapotlán de Juár', 21443, 'Hidalgo'),
('MUN-92', 'Zempoala', 57906, 'Hidalgo'),
('MUN-93', 'Zempoala', 57906, 'Hidalgo'),
('MUN-94', 'Zimapá', 39927, 'Hidalgo'),
('MUN-95', 'Pachuca de Soto', 314, 'Hidalgo'),
('municipio1', 'Ixmiquilpan', 98654, 'Hidalgo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oficios_rneca`
--

CREATE TABLE `oficios_rneca` (
  `id_oficio` char(20) NOT NULL,
  `nombre_dicm` varchar(100) NOT NULL,
  `mes_oficio` varchar(20) NOT NULL,
  `ccp` varchar(100) NOT NULL DEFAULT '',
  `ruta_oficio` varchar(255) NOT NULL DEFAULT '',
  `fecha_registro` date DEFAULT NULL,
  `clave_eca` char(12) NOT NULL,
  `id_espacio` char(20) DEFAULT NULL,
  `id_program` char(20) DEFAULT NULL,
  `id_estatus` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oficio_firma_dicm`
--

CREATE TABLE `oficio_firma_dicm` (
  `id_oficio` char(20) NOT NULL,
  `nombre_dicm` varchar(100) NOT NULL,
  `nombre_eca` varchar(150) NOT NULL,
  `mes_oficio` varchar(20) NOT NULL,
  `fecha_validacion` date DEFAULT NULL,
  `observaciones` varchar(300) NOT NULL DEFAULT '',
  `fecha_sub` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `program_cult`
--

CREATE TABLE `program_cult` (
  `id_program` char(20) NOT NULL,
  `municipio` varchar(40) NOT NULL DEFAULT '',
  `localidad` varchar(30) NOT NULL,
  `tipo_platica` varchar(50) NOT NULL,
  `otras_activ` varchar(100) NOT NULL DEFAULT '',
  `alumnos_Aten` varchar(250) NOT NULL,
  `pobl_ate` int(11) NOT NULL DEFAULT 0,
  `fecha_mes` varchar(15) NOT NULL,
  `clave_eca` char(12) NOT NULL,
  `id_fecha` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `program_cult`
--

INSERT INTO `program_cult` (`id_program`, `municipio`, `localidad`, `tipo_platica`, `otras_activ`, `alumnos_Aten`, `pobl_ate`, `fecha_mes`, `clave_eca`, `id_fecha`) VALUES
('PROG-EEPW0COZQF', 'Ixmiquilpan', 'Arenalito', 'escolar', '1O ACTIVIDADES', '300', 0, '2026-01-11', '13-30-1-1', '23062026'),
('PROG-JIVDNMTAGO', 'Ixmiquilpan', 'Arenalito', 'escolar', '1O ACTIVIDADES', '300', 0, '2026-01-11', '13-30-1-1', '23062026'),
('PROG-LBGJAQ0LPN', 'Ixmiquilpan', 'Bangandho', 'comunitaria', 'Ninguna de momento', '123', 90, '2026-06-23', '13-30-1-1', '18052026');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` char(20) NOT NULL,
  `nombre_rol` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`) VALUES
('rol1', 'ECA'),
('rol2', 'Director municipial'),
('rol3', 'Licenciado'),
('rol4', 'CEAA'),
('rol5', 'Admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_estatus`
--

CREATE TABLE `tipo_estatus` (
  `id_estatus` char(20) NOT NULL,
  `nombre_tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_estatus`
--

INSERT INTO `tipo_estatus` (`id_estatus`, `nombre_tipo`) VALUES
('EST-1K2LMP4X', 'En operación'),
('EST-4HJVB2C9', 'Pendiente'),
('EST-A9ZSN5W2', 'Activo'),
('EST-R4M8TP1L', 'Rechazado'),
('EST-V7WQ3N8Z', 'Validado'),
('estado2', 'Cerrado'),
('estado7', 'Inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` char(20) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(14) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_rol` char(20) NOT NULL,
  `id_dicm` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `correo`, `telefono`, `password`, `fecha_registro`, `id_rol`, `id_dicm`) VALUES
('2', 'Alec Dario', 'alec1@gmail.com', '7712912263', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', '2026-06-16 13:55:44', 'rol1', '3'),
('3', 'Pedrito', 'pedrito@gmail.com', '7712912263', '$2y$12$L/1oJtL87UXDY0vpDqEn5.7Oeh2AKm08banzt92nrWvLlHVgltEgW', '2026-06-05 22:46:48', 'rol2', NULL),
('4', 'juanito', 'juanito@gmail.com', '7712912263', '$2y$12$AOS2H5o0FzDXJCTb2Iv7pOw66YHbrpEkUOTvmCyukhAO1MZfYf/dm', '2026-06-05 22:48:41', 'rol3', NULL),
('5', 'Victor', 'vic@gmail.com', '7712912263', '$2y$12$4DXdbE.Ni7JIGKlk3naVN..FaSnickWAWYm9xAIGXbwrHQnz9aNZG', '2026-06-05 22:59:05', 'rol5', NULL),
('6', 'Getz', 'getz@gmail.com', '7712912265', '$2y$12$nTN917UCKyTq4yGLD1k7LeZLVs.EnrHr8ITBBArE1.SsKPqTRrzl2', '2026-06-10 22:56:01', 'rol4', NULL),
('7', 'Hector', 'hector@gmail.com', '7712912275', '$2y$12$STALNsmbmrTGbBmZx7ip7uxSJiXgO5KWue.yPxM1uhhpJ3sF1uy4q', '2026-06-23 16:44:40', 'rol1', '3');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_eca`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vista_eca` (
`Nombre_instancia_ejecutora` text
,`Clave_ECA` char(12)
,`Nombre_Instancia_Operativa` text
,`Tipo_instancia_Operativa` varchar(100)
,`No_habitantes` int(15)
,`Poblacion_atendida` int(6)
,`Calle_Avenida` varchar(50)
,`Num_calle` varchar(20)
,`Colonia` varchar(50)
,`Municipio` varchar(40)
,`Localidad` varchar(50)
,`Codigo_postal` varchar(5)
,`Telefono` varchar(130)
,`Dias_horas_atencion` varchar(50)
,`Nombre_responsable` varchar(60)
,`Correo_electronico` varchar(100)
,`Equipo_mobiliario` varchar(150)
,`Equipo_electronico` varchar(150)
,`Material_didactico` varchar(150)
,`Estado_vigencia` varchar(50)
,`Fecha_Apertura` date
,`Fecha_fortaleza` date
,`Fecha_cierre` varchar(50)
,`Motivo_cierre` text
,`Comentarios_generales` varchar(300)
,`Fecha_Registro` char(8)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_eca`
--
DROP TABLE IF EXISTS `vista_eca`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_eca`  AS SELECT `e`.`nombre_inst` AS `Nombre_instancia_ejecutora`, `e`.`clave_eca` AS `Clave_ECA`, `e`.`nombre_inst_ope` AS `Nombre_Instancia_Operativa`, `d`.`tipo_instancia` AS `Tipo_instancia_Operativa`, `m`.`num_habitan` AS `No_habitantes`, `e`.`poblacion_atend` AS `Poblacion_atendida`, `d`.`calle_av` AS `Calle_Avenida`, `d`.`num_direccion` AS `Num_calle`, `d`.`colonia` AS `Colonia`, `m`.`nombre_munipio` AS `Municipio`, `d`.`localidad` AS `Localidad`, `d`.`cod_postal` AS `Codigo_postal`, concat('',`det`.`telefonos`) AS `Telefono`, `det`.`dias_hora_aten` AS `Dias_horas_atencion`, `u`.`nombre` AS `Nombre_responsable`, `u`.`correo` AS `Correo_electronico`, `det`.`equipo_movil` AS `Equipo_mobiliario`, `det`.`equipo_electr` AS `Equipo_electronico`, `det`.`material_didact` AS `Material_didactico`, `ts`.`nombre_tipo` AS `Estado_vigencia`, `e`.`fecha_apert` AS `Fecha_Apertura`, `e`.`fecha_forta` AS `Fecha_fortaleza`, `e`.`fecha_cierre` AS `Fecha_cierre`, `e`.`motivo_cierre` AS `Motivo_cierre`, `det`.`comentarios` AS `Comentarios_generales`, `e`.`id_fecha` AS `Fecha_Registro` FROM ((((((`eca` `e` join `tipo_estatus` `ts` on(`e`.`id_estatus` = `ts`.`id_estatus`)) join `direccion` `d` on(`e`.`id_direccion` = `d`.`id_direccion`)) join `municipio` `m` on(`d`.`id_municipio` = `m`.`id_municipio`)) join `usuarios` `u` on(`e`.`id_usuario` = `u`.`id_usuario`)) join `detalle_eca` `det` on(`e`.`clave_eca` = `det`.`clave_eca`)) join `fecha` `f` on(`e`.`id_fecha` = `f`.`id_fecha`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indices de la tabla `detalle_asistente`
--
ALTER TABLE `detalle_asistente`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `fk_asist_espacio` (`id_espacio`);

--
-- Indices de la tabla `detalle_eca`
--
ALTER TABLE `detalle_eca`
  ADD PRIMARY KEY (`id_detalle_eca`),
  ADD KEY `fk_det_eca_estatus` (`id_estatus`),
  ADD KEY `fk_det_eca_eca` (`clave_eca`);

--
-- Indices de la tabla `detalle_nexo`
--
ALTER TABLE `detalle_nexo`
  ADD PRIMARY KEY (`id_nexo`),
  ADD KEY `fk_nexo_espacio` (`id_espacio`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`id_direccion`),
  ADD KEY `fk_dir_municipio` (`id_municipio`);

--
-- Indices de la tabla `eca`
--
ALTER TABLE `eca`
  ADD PRIMARY KEY (`clave_eca`),
  ADD KEY `fk_eca_direccion` (`id_direccion`),
  ADD KEY `fk_eca_estatus` (`id_estatus`),
  ADD KEY `fk_eca_fecha` (`id_fecha`),
  ADD KEY `fk_eca_usuario` (`id_usuario`);

--
-- Indices de la tabla `espaciocultura`
--
ALTER TABLE `espaciocultura`
  ADD PRIMARY KEY (`id_espacio`),
  ADD KEY `fk_esp_eca` (`clave_eca`),
  ADD KEY `fk_esp_fecha` (`id_fecha`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `fecha`
--
ALTER TABLE `fecha`
  ADD PRIMARY KEY (`id_fecha`);

--
-- Indices de la tabla `historico_eca`
--
ALTER TABLE `historico_eca`
  ADD PRIMARY KEY (`clave_eca`,`fecha_historial`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `memoria_fotografica`
--
ALTER TABLE `memoria_fotografica`
  ADD PRIMARY KEY (`id_memoria`),
  ADD KEY `fk_clave_Eca` (`id_claveEca`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`id_municipio`);

--
-- Indices de la tabla `oficios_rneca`
--
ALTER TABLE `oficios_rneca`
  ADD PRIMARY KEY (`id_oficio`),
  ADD KEY `fk_rneca_eca` (`clave_eca`),
  ADD KEY `fk_rneca_espacio` (`id_espacio`),
  ADD KEY `fk_rneca_program` (`id_program`),
  ADD KEY `fk_rneca_estatus` (`id_estatus`);

--
-- Indices de la tabla `oficio_firma_dicm`
--
ALTER TABLE `oficio_firma_dicm`
  ADD PRIMARY KEY (`id_oficio`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `program_cult`
--
ALTER TABLE `program_cult`
  ADD PRIMARY KEY (`id_program`),
  ADD KEY `fk_prog_eca` (`clave_eca`),
  ADD KEY `fk_prog_fecha` (`id_fecha`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `tipo_estatus`
--
ALTER TABLE `tipo_estatus`
  ADD PRIMARY KEY (`id_estatus`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `fk_usr_rol` (`id_rol`),
  ADD KEY `id_jefe_fk` (`id_dicm`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_asistente`
--
ALTER TABLE `detalle_asistente`
  ADD CONSTRAINT `fk_asist_espacio` FOREIGN KEY (`id_espacio`) REFERENCES `espaciocultura` (`id_espacio`);

--
-- Filtros para la tabla `detalle_eca`
--
ALTER TABLE `detalle_eca`
  ADD CONSTRAINT `fk_det_eca_eca` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`clave_eca`),
  ADD CONSTRAINT `fk_det_eca_estatus` FOREIGN KEY (`id_estatus`) REFERENCES `tipo_estatus` (`id_estatus`);

--
-- Filtros para la tabla `detalle_nexo`
--
ALTER TABLE `detalle_nexo`
  ADD CONSTRAINT `fk_nexo_espacio` FOREIGN KEY (`id_espacio`) REFERENCES `espaciocultura` (`id_espacio`);

--
-- Filtros para la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD CONSTRAINT `fk_dir_municipio` FOREIGN KEY (`id_municipio`) REFERENCES `municipio` (`id_municipio`);

--
-- Filtros para la tabla `eca`
--
ALTER TABLE `eca`
  ADD CONSTRAINT `fk_eca_direccion` FOREIGN KEY (`id_direccion`) REFERENCES `direccion` (`id_direccion`),
  ADD CONSTRAINT `fk_eca_estatus` FOREIGN KEY (`id_estatus`) REFERENCES `tipo_estatus` (`id_estatus`),
  ADD CONSTRAINT `fk_eca_fecha` FOREIGN KEY (`id_fecha`) REFERENCES `fecha` (`id_fecha`),
  ADD CONSTRAINT `fk_eca_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `espaciocultura`
--
ALTER TABLE `espaciocultura`
  ADD CONSTRAINT `fk_esp_eca` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`clave_eca`),
  ADD CONSTRAINT `fk_esp_fecha` FOREIGN KEY (`id_fecha`) REFERENCES `fecha` (`id_fecha`);

--
-- Filtros para la tabla `memoria_fotografica`
--
ALTER TABLE `memoria_fotografica`
  ADD CONSTRAINT `fk_clave_Eca` FOREIGN KEY (`id_claveEca`) REFERENCES `eca` (`clave_eca`);

--
-- Filtros para la tabla `oficios_rneca`
--
ALTER TABLE `oficios_rneca`
  ADD CONSTRAINT `fk_rneca_eca` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`clave_eca`),
  ADD CONSTRAINT `fk_rneca_espacio` FOREIGN KEY (`id_espacio`) REFERENCES `espaciocultura` (`id_espacio`),
  ADD CONSTRAINT `fk_rneca_estatus` FOREIGN KEY (`id_estatus`) REFERENCES `tipo_estatus` (`id_estatus`),
  ADD CONSTRAINT `fk_rneca_program` FOREIGN KEY (`id_program`) REFERENCES `program_cult` (`id_program`);

--
-- Filtros para la tabla `program_cult`
--
ALTER TABLE `program_cult`
  ADD CONSTRAINT `fk_prog_eca` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`clave_eca`),
  ADD CONSTRAINT `fk_prog_fecha` FOREIGN KEY (`id_fecha`) REFERENCES `fecha` (`id_fecha`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usr_rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`),
  ADD CONSTRAINT `id_jefe_fk` FOREIGN KEY (`id_dicm`) REFERENCES `usuarios` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
