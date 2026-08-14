-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-07-2026 a las 21:42:33
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
-- Base de datos: `bd_rneca`
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
  `cantidad` int(20) NOT NULL,
  `id_espacio` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_asistente`
--

INSERT INTO `detalle_asistente` (`id_detalle`, `genero`, `rango_edad`, `cantidad`, `id_espacio`) VALUES
('DETL-0HWXLW18GA', 'Hombre', '13-17', 12, 'ESP-0SIKLFGF8H'),
('DETL-1O4ILGEBKR', 'Mujer', '13-17', 18, 'ESP-L8WVSEBLXV'),
('DETL-93JCBPZTLF', 'Mujer', '18-30', 6, 'ESP-IKKOUHDX3Y'),
('DETL-BPDUGCSHCX', 'Niño/Niña', '12', 64, 'ESP-ZT0QA0GGWU'),
('DETL-C5XWLEQI89', 'Mujer', '13-17', 43, 'ESP-UL3COH0XZ7'),
('DETL-CK6BRPDYAT', 'Mujer', '18-30', 12, 'ESP-0SIKLFGF8H'),
('DETL-DUATL83LJR', 'Mujer', '30-40', 134, 'ESP-UL3COH0XZ7'),
('DETL-FDH9FI8NUZ', 'Hombre', '18-30', 12, 'ESP-ICK7RXKRT3'),
('DETL-GJE2BVNFON', 'Hombre', '18-30', 1, 'ESP-IKKOUHDX3Y'),
('DETL-GPLJUVAUTE', 'Hombre', '18-30', 12, 'ESP-0SIKLFGF8H'),
('DETL-HHYKALQGJX', 'Mujer', '13-17', 32, 'ESP-ZT0QA0GGWU'),
('DETL-HVJKVGVDWZ', 'Mujer', '13-17', 12, 'ESP-IKKOUHDX3Y'),
('DETL-IOFR7JLA8W', 'Hombre', '30-40', 5, 'ESP-L8WVSEBLXV'),
('DETL-J6R3LK8R6R', 'Mujer', '30-40', 1, 'ESP-IKKOUHDX3Y'),
('DETL-KRZAAZSIIG', 'Mujer', '13-17', 12, 'ESP-0SIKLFGF8H'),
('DETL-KTVL7CTAIX', 'Hombre', '13-17', 21, 'ESP-UL3COH0XZ7'),
('DETL-MIXQ61BFAN', 'Niño/Niña', '12', 40, 'ESP-0SIKLFGF8H'),
('DETL-NF1L8TOWGF', 'Niño/Niña', '12', 123, 'ESP-IKKOUHDX3Y'),
('DETL-NNDDY2XTSQ', 'Hombre', '13-17', 32, 'ESP-ZT0QA0GGWU'),
('DETL-NT9RHXDNBA', 'Hombre', '13-17', 1, 'ESP-L8WVSEBLXV'),
('DETL-OAQN6RRVUL', 'Hombre', '13-17', 12, 'ESP-ICK7RXKRT3'),
('DETL-OFGTXEORIS', 'Niño/Niña', '12', 43, 'ESP-ICK7RXKRT3'),
('DETL-PHFZUT60ML', 'Mujer', '18-30', 10, 'ESP-L8WVSEBLXV'),
('DETL-PNIBCDRQMV', 'Mujer', '18-30', 21, 'ESP-ICK7RXKRT3'),
('DETL-RRC7H8SGEY', 'Mujer', '13-17', 12, 'ESP-ICK7RXKRT3'),
('DETL-SAEI395N4H', 'Niño/Niña', '12', 12, 'ESP-UL3COH0XZ7'),
('DETL-SIXQY1FLRV', 'Hombre', '40-50', 3, 'ESP-L8WVSEBLXV'),
('DETL-UJFCLA30FL', 'Niño/Niña', '12', 30, 'ESP-L8WVSEBLXV'),
('DETL-XSMMIUVCYG', 'Hombre', '13-17', 12, 'ESP-IKKOUHDX3Y');

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
('DET-ECA-1', '7757545148 ext. 111 Cel: 7775 133 4173', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 archivero.', ' 1 cámara fotográfica, 1 cámara de video, 1 equipo de sonido, 1 impresora, 1 lap top, 1 computadora, 1 televisor de 43\"', '1 maqueta Contaminación de una Cuenca,  1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-1-1-1'),
('DET-ECA-10', '7787373752 EXT 103 Y 107 Cel. 7717770855', 'LUN-VIER 8:30 AM -04:30 PM - SAB 8:30 ', '1 archivero con cuatro gavetas', '2 televisiones, 1 computadora de escritorio, 2 cámaras fotografías, 2 laptops, 1 pantalla para proyección con tripie, 1 reproductor de DVD. ', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Ciclo del Agua 3D, 1 maqueta Potabilización y Drenaje, 1 maqueta de recic', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13- 10 -1-1'),
('DET-ECA-11', 'Tel: 7898944005  Cel: 7715267920', 'LUN-VIER 9:00 AM -04:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', ' 1 laptop, 1 proyector, 1 pantalla 50\"', '1 maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-11-1-1'),
('DET-ECA-12', '7711464295  Cel:  7711464295', 'LUN-VIER 8:30 AM -04:30 PM', '1 silla secretarial, 2 archivero, 1 escritorio secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 proyector, 1 equipo de perifoneo, 1 equipo de sonido, 2 cámara fotografica,1 impresora, 1 computadora de escritorio, 1 pantalla de 32\", 1 reproducto', '1 Maqueta Mantos Acuíferos , 1 Maqueta Contaminación de una Cuenca, 1 Maqueta ciclo del Agua,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper d', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-12-1-1'),
('DET-ECA-13', 'Tel: 7787351686  Cel: 778351686', 'LUN-VIER 8:00 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 1 silla blanca de plastico, 1 pizarron,  1 Pantalla para proyeccion con tripie, 1 Televiso', '1 laptop, 1 proyector, 1 equipo de perifoneo, 1 equipo de sonido, 1 impresora, 1 DVD, 1 computadora de escritorio, 2 cámara fotográfica, 1 video proye', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Mantos Acuíferos, 1 Maqueta Ciclo del Agua 3D,1 Maqueta Potabilización y Drenaje, 1 Cascos de Realida', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-13-1-1'),
('DET-ECA-14', 'Cel: 7713575676', 'LUN-VIER 9:00 AM -04:00 PM', '1 silla secretarial, escritorio secretarial, archivero,', '1 television, 1 videocasetera,1 CPU, 1 monitor, 2 laptop, 3 proyector, 1 equipo de perifoneo, equipo de sonido, 2 impresora, 1 computadora de escritor', '1 maqueta Contaminación de una Cuenca, 1 maqueta Mantos Acuíferos, 1 maqueta ciclo del Agua 3D,1 Maqueta Potabilización y Drenaje, 1 Cascos de Realida', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-14-1-1'),
('DET-ECA-15', 'Tel: 7597270003 Cel: 7721543575', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 15 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 televisión, 1 videocasetera, 1 proyector, 1 laptop, 1 impresora,1 computadora de escritorio,1 DVD, 1 pantalla 32\", 1 cámara fotográfica.', '1 maqueta Contaminación de una Cuenca, 1 maqueta de Relleno Sanitario,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de ide', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-15-1-1'),
('DET-ECA-16', '7757703600', 'LUN-VIER 8:30 AM -04:30 PM', '1 silla secretarial,  1 escritorio secretarial, 1 archivero, 1 mesa Plegable y  5 sillas Plegable', '1 cámara fotográfica, 1 pantalla de proyección, 1 laptop, 1 equipo de sonido,1 equipo de perifoneo, 1 impresora, 1 cámara de video, 1 computadora de e', 'Maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de identificac', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-16-1-1'),
('DET-ECA-17', 'Te: 7637285034 Cel: 7731309111', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 archivero, 1 escritorio secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 laptop, 1 cámara fotográfica, 1 DVD, 1 pantalla 32\", 1 impresora, 1 computadora de escritorio, 1 Televisor de 50\", 1 Proyector y', '1 maqueta Contaminación de una Cuenca, 1 maqueta Mantos Acuíferos,,1 Cascos de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identif', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-17-1-1'),
('DET-ECA-18', 'Tel: 4833782056 Cel: 7713519386', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 15 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 impresora, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 maqueta Contaminación de una Cuenca, ,1 Cascos de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-18-1-1'),
('DET-ECA-19', '7387830143 Cel. 7721238594', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 15 sillas blancas de plástico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '2 cámara fotográfica, 1 laptop, 1 equipo de sonido, 1 computadora de escritorio, 1 cámara de video, 1 pantalla 32\", 1 Televisor de 50\", 1 Proyector y ', '1 maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos,1 Cascos de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identifica', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-19-1-1'),
('DET-ECA-2', '7767629750 oficina 7761341136 personal', 'LUN-VIER 8:30 AM -04:30 PM ', '1 Escritorio secretarial, 1 silla secretarial, 1 Archivero de 4 gavetas, 1 Mesa Plegable y  5 sillas Plegables', '1 monitor, 1 cámara fotográfica, 1 impresora multifuncional, 1 CPU, 2 laptop, 1 computadora de escritorio Slimline , 1 pantalla de 32\" HISENSE,1 repro', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta reciclaje,1 relleno sanitario y agua limpia, 1 Cascos de Realidad virtual', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-2-1-1'),
('DET-ECA-20', 'Tel: 7296950434', 'LUN-VIER 8:30 AM -04:30 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', '1 proyector, 1 laptop,1 pantalla de proyección, 1 computadora de escritorio, 1 botarga, 1 pantalla de 50\"', '1 maqueta Contaminación de una Cuenca, 1 maqueta mantos acuíferos, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-20-1-1'),
('DET-ECA-21', 'Tel. 7491044766', 'LUN-VIER 8:30 AM -04:30 PM', '1 escritorio secretarial, 1 silla secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '2 laptop, 1 impresora, 1 cámara fotográfica,  2 proyector, 1 equipo de sonido, 1 Televisor de 50\"', '1 Casco de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-21-1-1'),
('DET-ECA-22', 'Tel: 79 25059 ext 122 Cel: 7713034880 ', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', '1 laptop, 1 proyector,1 Televisor de 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-22-1-1'),
('DET-ECA-23', '7387240112 EXT. 111 7721512777', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial,1 archivero, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido,1 computadora de escritorio, 1 pantalla de 32\", 2 cámara fotográfica, 1 DVD, 1 CPU,1 monitor, 2 laptop 1 Televisor de 50\", 1 Proyec', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Mantos Acuíferos, 1 Casco de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-23-1-1'),
('DET-ECA-24', '7387241190  Cel: 7712021065', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 escritorio secretarial,1 archivero, 1 Pantalla de proyeccion, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 equipo de perifoneo, 2 laptop, 2 cámara fotográfica, 2 proyector, 1 impresora, 1 cámara de video, 1 pantalla 32\"1 DVD, 1 computa', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje, 1 Maqueta Ciclo del Agua 3D , 1 Casco de Realid', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-23-1-2'),
('DET-ECA-25', 'Tel:  771 7920101,        771 7920253 CEL: 7711256204', 'LUN-VIER 8:30 AM -04:30 PM', '1 escritorio secretarial, 1 silla secretarial,1 archivero, 14 silla blanca de plastico, 1 pizarron', ' 1 laptop, 1 proyector, 1 pantalla de proyección, equipo de perifoneo,1 equipo de sonido1 ,DVD, 1 cámara fotográfica, 1 computadora de escritorio, 1 i', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Mantos Acuíferos, 1 Maqueta de reciclaje, 1 Relleno Sanitario y Agua Limpia,  1 super del agua, 1 qui', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-24-1-1'),
('DET-ECA-26', 'Cel: 7716289264', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 14 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 computadora de escritorio,  1 DVD, 1 Televisor de 50\", 1 Proyector y 2 LapTop', '1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-25-1-1'),
('DET-ECA-27', 'Cel: ', 'LUN-VIER 8:30 AM -04:00 PM', '2 escritorios secretariales, 2 sillas secretariales, 1 mesa tablón, 6 sillas plegables', ' 1 impresora, 1 cámara fotográfica, 1 proyector, 1 laptop, 1 pantalla 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-26-1-1'),
('DET-ECA-28', '7747437296  Cel: 7711903115', 'DOM -VIER 8:00 AM -03:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', ' 1 laptop, 1 proyector, 1 pantalla 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-27-1-1'),
('DET-ECA-29', '(045) 7712008381 01 (789) 8965621 Ext. 106   Cel: 7713550085', 'LUN-VIER 8:30 AM -04:00 PM  - SAB 8:00 - 12:00', '1 escritorio secretarial,  silla secretarial, 1 archivero, 1 silla blanca de plastico, 1 pizarron, 1 pantalla para proyeccion con tripie,', '1 televisión, 1 videocasetera, 1 CPU,1 monitor, 2 proyector, 2 laptop, equipo de sonido, 2 cámara fotografica,1 impresora, 1 equipo de perifoneo, 1 DV', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Ciclo del Agua 3D, 1 Maqueta Potabilización y Drenaje,  1 super del agua,', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-28-1-1'),
('DET-ECA-3', '7721811872', 'LUN-VIER 8:30 AM -04:00 PM', '1 archivero, 1 escritorio secretarial, 1 silla secretarial,  1 pantalla para proyección con tripie, 1 toldo, 2 sillas, 1 mesa plegable.', '1 computadora de escritorio, 1 impresora, 1 pantalla 32\", 1 DVD, 1 CPU, 1 monitor, 1 mini laptop, 1 video proyector, 1 cámara fotográfica, 1 botarga i', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca,  1 maqueta Potabilización y Drenaje, 1 maqueta Ciclo del Agua,  1 super del agua, 1', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-3-1-1'),
('DET-ECA-30', 'Tel: 7898550001 Cel: 7713653610', 'LUN-VIER 8:30 AM -06:00 PM', '1 Archivero, 2 Escritorios Secretariales, 2 Sillas Secretariales, 1 Toldo, 8 Sillas plegables, 2 Mesas plegables.', '1 Computadora de Escritorio, 1 Impresora Multifuncional, 1 Reproductor de DVD, 1 Pantalla de 32\", 2 Proyectores, 1 Cámara Fotográfica, 1 Bocina, 1 pan', '1 Maqueta de Mantos Acuíferos, 1 Maqueta de reciclaje, relleno sanitario y Agua Limpia, loterías, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-28-1-4'),
('DET-ECA-31', 'Oficina:  7617822590 ext 105  Cel: 7731333924', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, archivero, 1 Mesa Plegable y  5 sillas Plegables', '2 proyector, 1 equipo perifoneo, 1 equipo de sonido, 1 impresora, 1 pantalla 32\", 2 laptop, computadora de escritorio, 1 cámara fotografica,1 cámara d', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-29-1-1'),
('DET-ECA-32', '7731557507', 'LUN-VIER 9:00 AM -06:00 PM', '2 archivero, 1 silla secretarial, 1 escritorio secretarial, 15 silla blanca de plastico,1  pizarron, 1 Mesa Plegable y  5 sillas Plegables', '2 laptop, 2 cámara fotográfica, 1 proyector, 1 impresora, 1 laptop, 1 DVD,1 pantalla 32\", 1 Pantalla de Proyección, 1 Botarga, 1 Televisor de 50\", 2 P', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta de Relleno Sanitario, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súp', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-29-1-2'),
('DET-ECA-33', 'Tel: 7597238689 7597288157  Cel: 7712434482', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 archivero, 1 silla secretarial, 14 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', 'equipo de sonido, 2 proyector, 1 cámara de video, 1 computadora de escritorio, 1 impresora,1 DVD, 1 cámara fotográfica, 2 laptop, 1 pantalla de proyec', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Ciclo del Agua 3D, 1 Maqueta Potabilización y Drenaje, 1 Casco de Realida', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-30-1-1'),
('DET-ECA-34', 'Tel: 4412933197  Cel: 7713426446', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 15 silla blanca de plastico, 1  pizarron', '1 Laptop, 1 equipo de perifoneo,1 equipo de sonido,1 impresora, 1 cámara fotográfica, 1 pantalla 32\", 1 DVD, 1 Computadora de escritorio, 1 Pantalla d', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca,1 Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-31-1-1'),
('DET-ECA-35', '7712360590', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', ' 1 equipo de sonido, 1 impresora, 1 DVD, 2 cámara fotográfica, 1 Televisor de 50\", 2 Proyector y 1 LapTop', '1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-32-1-1'),
('DET-ECA-36', 'Cel: 5539547800  Tel:  7711919586', 'LUN-VIER 9:00 AM -05:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', ' 1 laptop, 1 proyector, 1 pantalla 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-33-1-1'),
('DET-ECA-37', 'Cel: 7714032168 7713504431', 'LUN-VIER 9:00 AM -05:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 2 Video proyector, 1 Pantalla de 32\", 1 pantalla de 50\"', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta ciclo del Agua, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-34-1-1'),
('DET-ECA-38', 'Cel: Miguel Asian Barona', 'LUN-VIER 9:00 AM -05:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector,1 computadora de escritorio, 1 pantalla 32\", 1 DVD, 1 pantalla de 50\"', '1 Maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-35-1-1'),
('DET-ECA-39', '7711173467', 'LUN-VIE 8:30 AM - 04:30 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 1 pizarron, 1 Archivero de 4 Gavetas, 1 Toldo,2 Mesa Plegable y  7 sillas Plegables', ' 1 Cámara Fotográfica, 1 Laptop, Equipo de Sonido, 1 Cámara de Video, DVD, 1 Impresora, 1 Computadora de Escritorio, 1 Bocina, 1 Televisor de 50\", 1 P', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-36-1-1'),
('DET-ECA-4', 'Tel: 7749741030 Cel: 771 332 5613', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', ' 1 laptop, 1 proyector, 1 pantalla 50\"', '1 maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-4-1-1'),
('DET-ECA-40', '7747430841 ext-11   Cel. 7712049344', 'LUN-VIER 9:00 AM -05:00 PM', '1 Archivero, 25 Sillas Blancas de Plástico, 1 Pizarrón. ', '1 Laptop, 2 Cámara Fotográfica, 1 equipo de sonido, 1 impresora, 1 Televisión, 1 videocasetera,1 equipo de perifoneo, 1 Cámara fotografica,1 proyector', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-37-1-1'),
('DET-ECA-41', 'Cel: 7711099802 Tel: 7717153511 ext 114', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretarial, 1 Silla Secretarial, 25 Sillas Blancas de plasticos, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables  ', ' 1 Cámara Fotográfica, 1 Impresora, 1 Computadora de Escritorio, 1 DVD, 1 Televisor de 50\", 2 Proyector y 2 LapTop ', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-38-1-1'),
('DET-ECA-42', 'Tel: 7717971216 Ext 118  Dirección de Ecología', 'LUN-SAB 8:30 - 04:00', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-39-1-1'),
('DET-ECA-43', '7745984040 Cel. 7712002049', 'LUN-VIER 9:00 AM -04:00 PM', '2 escritorios secretariales, 2 sillas secretariales, 1 archivero, 1 mesa tablón, 6 sillas plegables', '1 laptop,  1 computadora de escritorio, 1 impresora multifuncional, 1 pantalla 32\",  1 pantalla de 50\", 1 proyector', '1 maqueta mantos acuíferos, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-40-1-1'),
('DET-ECA-44', 'Tel: 7387350574  Cel:7721322389', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial,1  silla secretarial, 1 archivero, 25 silla blanca de plastico, 1 pizarron, 1 pantalla para proyeccion con tripie,', '1 proyector, 1 camara de video, 1 pantalla 32\", 1 DVD, 1 impresora,1 camara fotografica, 1 Computadora de Escritorio, 1 Pantalla de 32\", 1  Botarga in', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje,  1 super del agua, 1 quiz del agua, 1 lentes de', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-41-1-1'),
('DET-ECA-45', 'Tel: 774 7450002 Cel: 7713234581', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-42-1-1'),
('DET-ECA-46', '7595963211', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-43-1-1'),
('DET-ECA-47', '7617821308 7731339206', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 25 silla blanca de plastico,1  pizarron,1  pantalla para proyeccion tripie apoyo, 1 Mesa Plegable y  5 ', ' 1 computadora de escritorio, 1 DVD, 1 pantalla 32\", 1 camara de video, 1 impresora, 2 camara fotografica, 1  equipo de sonido, 1 Televisor de 50\", 2 ', '1 Maqueta Mantos Acuíferos,1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-44-1-1'),
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
('DET-ECA-6', 'Tel: 7387288392  Cel: 7721183689', 'LUN- VIERN 8:00 AM- 3:00 PM SAB 9:00 AM - 1:00 PM', '1 escritorio secretarial, 1 silla secretaria, 1 archiverol, 1 sillas blancas , 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 cámara fotográfica, 1 equipo de sonido, 1 DVD, 1 pantalla de proyector, 1 equipo de perifoneo, 1 cámara de video,1 computadora de escritorio, 1 pant', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminacion de una Cuenca, 1 Maqueta Potabilización y Drenaje y 1 Cascos de Realidad virtual y 1 Quiz del Agua', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-6-1-1'),
('DET-ECA-60', '7727282000', 'LUN-VIER 8:30 AM -04:00 PM', 'Escritorio Secretarial, Silla secretarial, Toldo, 2 Mesa Plegable y  7 sillas Plegables ', ' 2  Cámara Fotográfica,1 minilap, 1 Computadora de Escritorio, 1  Impresora, 1  Equipo de Sonido, 1 Videoproyector, 1 Pantalla de 23\",  Reproductor de', '1 Maqueta Mantos Acuíferos, Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifica', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-54-1-1'),
('DET-ECA-61', '7721587836', 'LUN-VIER 8:00 AM -04:00 PM', 'Escritorio secretaria, silla secretarial, pizarrón,  30 sillas de plástico, 1 Mesa Plegable y  5 sillas Plegables', '1 cámara fotográfica, 1 DVD, 1 computadora de escritorio, 1 impresora multifuncional, 1 equipo de sonido, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Potabilización y Drenaje, 1 maqueta de Relleno Sanitario, 1 Casco de Real', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-54-23-1'),
('DET-ECA-62', '7714142914', 'LUN-VIER 8:00 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 1 Archivero ', '1  Equipo de Sonido,1  DVD, 1  Videocasetera, 1 Television, Botarga, cmputadora portatil.', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta de reciclaje, relleno sanitario y agua limpia, 1 súper del agua, 1 quiz d', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-55-1-2'),
('DET-ECA-63', 'Cel: 7751295596', 'LUN-SAB 8:30 AM -04:00 PM', '1 escritorio secretaria, 1 silla secretarial, 1 archivero 1 toldo, 2 sillas, 1 mesa plegable', ' 1 proyector, 1 cámara fotográfica, 1 cámara de video, 1 equipo de perifoneo, 1 equipo de sonido,  1 computadora de escritorio, 1 impresora, 1 pantall', '1 maqueta Mantos Acuíferos, 1 maqueta de reciclaje, relleno sanitario y agua limpia, 1 súper del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de id', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-56-1-1'),
('DET-ECA-64', 'Cel: 7713412769', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Potabilización y Drenaje, 1 super del agua, 1 quiz del agua, 1 lentes de ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-57-1-1'),
('DET-ECA-65', 'Tel: 7597235043 Ext. 111 Cel: 7721117063', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 Maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-58-1-1'),
('DET-ECA-66', '5535704624', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria , 1 silla secretarial, 1 pantalla de proyección, 1 Mesa Plegable y  5 sillas Plegables', '1 cámara fotográfica, 2 laptop,1 equipo de sonido, 1 impresora, 1 equipo de perifoneo, 1 computadora de escritorio, 1 pantalla de 32\", 1 cámara fotogr', '1 maqueta Mantos Acuíferos,1 maqueta Contaminación de una Cuenca, 1 maqueta de relleno Sanitario, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súpe', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-59-1-1'),
('DET-ECA-67', 'Tel: 7751031518', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 Maqueta Mantos Acuíferos, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-60-1-1'),
('DET-ECA-68', 'Tel:7919130612 ext 114 Cel: 7714446732', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-61-1-1'),
('DET-ECA-69', '7747427029', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria, 1 silla secretarial, 1 Mesa Plegable y  5 sillas Plegables ', '1 equipo de sonido, 1 DVD, impresora, 1 cámara fotográfica, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-62-1-1'),
('DET-ECA-7', 'Cel: 7751363861 7489121833', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 2 Archivero, 1 Pantalla de Proyeccion, 1 Toldo, 2 Sillas, 1 Mesa plegable, 1 Mesa Plegable y  5 sillas ', '1 proyector, 1 cámara fotografica, 1 computadora de escritorio, 1 impresora,1 pantalla 32\", 1 botarga, 1 bocina, 1 Televisor de 50\", 1 Proyector y 1 L', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca y 1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de ident', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-7-1-1'),
('DET-ECA-70', '017737330058 Cel: 7731074705', 'LUN-VIER 8:30 AM -04:00 PM', 'Escritorio Secretaria,  Silla Secretarial, Pantalla de Proyeccion,', ' 1 Camara de Video, 2  Laptop, 1 Proyector, 2 Cámara Fotográfica, 1 Equipo de Sonido,1  Impresora, 1 DVD, 1 Pantalla de 32, 1 Computadora de Escritori', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta Potabilización y Drenaje, 1 Ciclo del Agua en 3D, 1 súper del agua, 1 qui', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-63-1-1'),
('DET-ECA-71', 'Cel:7731050856', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 25 silla blanca de plastico,1 pizarron, 1 Archivero, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 1 Proyector y 1 LapTop, 1 cámara fotográfica, 1 Equipo de sonido,1  impresora y 1 DVD', '1 Maqueta Ciclo del Agua 3D, 1 Maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifica', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-64-1-1'),
('DET-ECA-72', '7787824043', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria,  1 silla secretarial, archivero,  25 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '2  laptop, 2 proyectores, 1 equipo de perifoneo, 1 equipo de sonido, 1 impresora, 1 cámara de video, 1 cámara fotográfica, 1 pantalla 33, 1 botarga, 1', '1 maqueta Mantos Acuíferos, 1maqueta Contaminación de una Cuenca, 1 maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-65-1-1'),
('DET-ECA-73', '7751575175', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 1 Mesa Plegable y  5 sillas Plegables', ' 1 Equipo de Sonido,  1 Cámara Fotográfica,1  Impresora, 1 Camara de Video,1  DVD,1  Pantalla de 33, 1 Botarga, 1 Televisor de 50\", 1 Proyector y 2 La', '1 Maqueta Mantos Acuíferos,1 Maqueta Contaminación de una Cuenca , 1 Maqueta Potabilización y Drenaje, 1 Maqueta ciclo del agua, 1 Maqueta de relleno ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-66-1-1'),
('DET-ECA-74', 'TEL. OFICINA(Dirección):   7731047586 CEL: 7731798516', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria Silla, 1 Secretarial, 1 Archivero , 1 Pantalla para proyeccion con tripie , 1 Toldo, 7 Sillas, 2 Mesa plegable', '2  Laptop,  1 Equipo de Sonido, 2 Proyector, 1 Equipo de Perifoneo,1  Camara de Video, 1 Computadora de escritorio,1  DVD , 1 Videoproyector, 1 Pantal', '1 Maqueta Mantos Acuíferos, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-67-1-1'),
('DET-ECA-75', 'Cel: 7713523127', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 pantalla 32\", 1 pantalla de 50\".', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-68-1-1'),
('DET-ECA-76', 'Tel: 7797964635  7797967993 7791007583  Cel:5514592944 ', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio, 1 secretaria silla, 1 secretarial, 1 archivero, 1 pantalla para proyección con tripie, 1 toldo, 2 sillas, 1 mesa plegable', ' 3 cámaras fotograficas, 1 laptop, proyector, 1 pantalla de proyección, 1 cámara de video, 1 equipo de perifoneo, 1 equipo de sonido, 1 impresora,  1 ', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Ciclo del Agua 3D, 1 maqueta potabilización y drenaje, 1 súper del agua, ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-69-1-1'),
('DET-ECA-77', '7637860578 CEL. 773 158 6649', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1 Silla Secretarial, 1 Archivero Pantalla de proyeccion, 1 Mesa Plegable y  5 sillas Plegables', '2 Laptop, 1 Cámara Fotográfica, 2 Proyector,1  Equipo de Sonido,1  Impresora, 1 DVD, 1 Computadora de escritorio,1  Botarga, 1 Televisor de 50\"       ', '1 Maqueta Mantos Acuíferos,1 Maqueta Contaminación de una Cuenca, 1 maqueta potabilización y drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-70-1-1'),
('DET-ECA-78', 'Cel: 7711543497', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria,  1 silla secretarial, 1 Mesa Plegable y  5 sillas Plegables ', '2 laptop, 2  proyector, 1 cámara fotográfica, 1 equipo de sonido, 1 DVD, 1 impresora, 1 Televisor de 50\"', '1 maqueta Mantos Acuíferos, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-71-1-1'),
('DET-ECA-79', '7919131153 EXT 105  Cel: 7751234365', 'LUN-VIER 8:30 AM -04:00 PM', '1 Pantalla de Proyeccion, 1 Escritorio Secretarial, 1 silla secretarial, 1 mesa tablón, 6 sillas plegables', '1 Televisión, 1 Computadora de Escritorio, 1 Botarga, 1 Proyector, 1 laptop, 1 Pantalla de 50\" ', '1 Maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-72-1-1'),
('DET-ECA-8', 'Tel: 7489127134 Cel: 7489127134', 'LUN-VIER 9:00 AM- 4:30 SAB 9:00 A 1:00', '1 silla secretarial, 1 escritorio secretarial, 2 archivero, 1 Mesa Plegable y  5 sillas Plegables', '2 proyector, 1 laptop, 1 equipo de sonido,1 cámara de video,1 pantalla de 32\", 1 DVD computadora de escritorio, 2 cámara fotográfica, 1 CPU, 1 monitor', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Ciclo del Agua 3D, 1 maqueta Potabilización y Drenaje, ,1 Cascos de Reali', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-8-1-1'),
('DET-ECA-80', 'Presidencia: 7749740018  Llamadas: 7715567367 WhatsApp: 7712217508  ', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 Botarga, 1 Proyector, 1 laptop, 1 Pantalla de 50\"                       ', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-73-1-1'),
('DET-ECA-81', '55 3570 2744‬', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 1 pantalla para proyeccion con tripie, 1 Mesa Plegable y  5 sillas Plegables', '1  equipo de sonido,1  cámara fotográfica, 1 pantalla 32, 1  impresora, 1 DVD, 1  computadora de escritorio, 2 videoproyector, 1 botarga, 1 Televisor ', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-74-1-1'),
('DET-ECA-82', '7437410977', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Impresora,1  DVD, 1 Pantalla de 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-75-1-1'),
('DET-ECA-83', ' 017737325003 EXT 111  CEL: 7731264305', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria,1 Silla Secretarial, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 1 Proyector y 1 LapTop', ' 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-76-1-1'),
('DET-ECA-84', 'Tel: 7757538422 ext 1182 Cel. 5564662038', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretaria, 1 silla secretarial, 1 archivero de 4 gavetas, 1 pantalla para proyeccion con tripie, 1 toldo, 7 sillas, 2 mesa plegable', '1 camara de video, 2  laptop, 2 cámara fotográfica,  3 proyector,  1 impresora,  1 equipo de sonido,  1 pantalla de 32\'\' , 1 computadora de esritorio,', '1 Maqueta Mantos Acuíferos, 1 maqueta Ciclo del Agua 3D, 1 maqueta Potabilización y Drenaje, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-77-1-1'),
('DET-ECA-85', '7751449476', 'LUN-VIER 8:30 AM -04:00 PM', '1 Archivero, 1 escritorio secretarial, 1 silla secretarial, 1 Mesa Plegable y  5 sillas Plegables', '1 computadora de escritorio, 1 pantalla de 32\", 1 cámara fotográfica, 2 computadora portatil, 1 Televisor de 50\", 1 Proyector ', '1 maqueta de relleno sanitario, 1 súper del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-77-1-5'),
('DET-ECA-86', '775 112 2940', 'LUN-VIER 9:00 AM -06:00 PM', '35 Sillas de Plastico , 1 Escritorio Secretarial, 1 Silla Secretarial,1  Pizarron,1  Pantalla de Proyeccion, 1 Mesa Plegable y  5 sillas Plegables', '1 Proyector, 1 Laptop, 1 Proyector, 2 Cámara Fotográfica,1  Impresora,1   Equipo de Sonido,1  Pantalla 32, 1 DVD, 1 Pantalla de 32\", 1 botarga, 1 Mesa', '1 Maqueta Mantos Acuíferos, Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua,1 placa de identificac', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-77-1-3'),
('DET-ECA-87', 'Cel: 8137060865 CEL. LLAMADAS 7296828476 WHATS: 7713225379', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 Maqueta Mantos Acuíferos, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-78-1-1'),
('DET-ECA-88', '7711415494', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretaria, 1   Silla Secretarial    Archivero, 1 Mesa Plegable y  5 sillas Plegables', ' 2 Laptop, 1 Equipo de Sonido, 1 Cámara Fotográfica, 1 DVD, 1 Televisor de 50\", 1 Proyector           ', '1 Maqueta Contaminación de una Cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-79-1-1'),
('DET-ECA-89', 'Cel: 7717204860', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 maqueta ciclo del agua, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-80-1-1');
INSERT INTO `detalle_eca` (`id_detalle_eca`, `telefonos`, `dias_hora_aten`, `equipo_movil`, `equipo_electr`, `material_didact`, `comentarios`, `id_estatus`, `clave_eca`) VALUES
('DET-ECA-9', '7721812746', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 1 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 2 Proyector y 2 LapTop, 1 equipo de sonido, 1 cámara fotográfica, 1 impresora, 1 DVD, 1 pantalla de 32\", 1 computadora de escritor', 'Maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos, maqueta Ciclo del Agua, maqueta potabilización y drenaje,1 Casco de Realidad virtual y ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-9-1-1'),
('DET-ECA-90', '7747420022', 'LUN-VIER 8:30 AM -04:00 PM', '1 Escritorio Secretarial,   1 Silla Secretarial,  1 Archivero, 1 Mesa Plegable y  5 sillas Plegables', ' 1 Cámara de Video, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca, 1 Maqueta de Relleno Sanitario, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súp', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-81-1-1'),
('DET-ECA-91', 'Cel: 7716833246', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-82-1-1'),
('DET-ECA-92', '7437415088 ext 106 Cel. 7751048997', 'LUN-VIER 8:30 AM -04:00 PM', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-83-1-1'),
('DET-ECA-93', 'Tel: 7437415014  (Zempoala)- Casa particular Tel: 7717185323  (Consultorio Pachuca) Cel: 7712547079', 'LUN-SAB 9:00 - 4:00 PM ', ' 1 Escritorio, 1 Silla Secretarial, 1 mesa tablón, 6 sillas plegables. ', '1 laptop, 1 proyector, 1 Pantalla de 50\"', '1 maqueta mantos acuíferos, 1 maqueta de relleno sanitario, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-83-1-2'),
('DET-ECA-94', '7721514670', 'LUN-SAB 9:00 - 5:00 PM ', ' 1 escritorio secretarial,  1 silla secretarial, 1 archivero, 1 Mesa Plegable y  5 sillas Plegables', ' 2  laptop, 2   proyector, 1 equipo de perifoneo, 2  cámaras fotográficas, 1  equipo de sonido, 1 impresora, 1 computadora de escritorio, 1 DVD, 1 pan', '1 maqueta mantos acuíferos, 1 maqueta contaminación de una cuenca, 1 Casco de Realidad virtual ,1 Quiz del Agua, 1 súper del agua, 1 placa de identifi', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-84-1-1'),
('DET-ECA-95', '7717112044 Ext. 126  7717115564  Cel: 7712061900', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial,1  silla secretarial, ', '1 cámara fotográfica, 1 mini laptop,1 impresora,1 proyector, 1 equipo de sonido, 1 pantalla 32\" y 1 mesa interactiva ', 'Maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos, maqueta Potabilización y Drenaje, maqueta de Relleno Sanitario, maqueta Ciclo del Agua ', 'cerrado', 'EST-C731KSDA', '13-48-1-8');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_nexo`
--

CREATE TABLE `detalle_nexo` (
  `id_nexo` char(20) NOT NULL,
  `list_asist` char(2) DEFAULT NULL,
  `evi_foto` char(2) DEFAULT NULL,
  `nota_period` char(2) DEFAULT NULL,
  `id_espacio` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_nexo`
--

INSERT INTO `detalle_nexo` (`id_nexo`, `list_asist`, `evi_foto`, `nota_period`, `id_espacio`) VALUES
('NEX-0MRBJEW0UH', 'no', 'sí', 'sí', 'ESP-ZT0QA0GGWU'),
('NEX-F5WMFI3NFI', 'no', 'sí', 'no', 'ESP-UL3COH0XZ7'),
('NEX-UPBHOC3NDP', 'sí', 'sí', 'sí', 'ESP-ICK7RXKRT3'),
('NEX-URQNLOWWBN', 'sí', 'no', 'sí', 'ESP-0SIKLFGF8H');

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
('DIR-1', '43540', 'Acatlán', 'Centro', '16 de enero', '14', 'Municipio', 'MUN-1'),
('DIR-10', '42970', 'Atitalaquia', 'Centro', 'Del Arco', '5', 'Organismo Operador Municipal', 'MUN-10'),
('DIR-11', '43060', 'Atlapexco', 'Centro', 'Pino   ', 's/n', 'Municipio', 'MUN-11'),
('DIR-12', '43300', 'Atotonilco el Grande', 'Centro', 'Plaza principal', '334', 'Municipio', 'MUN-12'),
('DIR-13', '42980', 'Atotonilco de Tula', 'Los Compadres', 'Republica de Cuba', 'S/N', 'Organismo Operador Municipal', 'MUN-13'),
('DIR-14', '43233', 'Calnali', 'Centro', 'Av. Juarez', 'S/N', 'Organismo Operador Municipal', 'MUN-14'),
('DIR-15', '42370', 'Cardonal', 'centro', 'BENITO PABLO JUAREZ GARCIA ', '4', 'Organismo Operador Municipal', 'MUN-15'),
('DIR-16', '43740', 'Cuautepec de Hinojosa', 'Centro', 'Benito Juárez', 's/n', 'Organismo Operador Municipal', 'MUN-16'),
('DIR-17', '42900', 'Chapantongo', 'Barrio Guadalupe', 'Palacio Municipal ', '34', 'Organismo Operador Municipal', 'MUN-17'),
('DIR-18', '42280', 'Chapulhuacá', 'Centro', 'Francisco Sarabia ', 's/n', 'Municipio', 'MUN-18'),
('DIR-19', '42750', 'Chilcuautla', 'Centro', 'Diesiseis de enero', 's/n', 'Municipio', 'MUN-19'),
('DIR-2', '43720', 'Acaxochitlán', 'Centro', 'Matamoros', 's/n', 'Municipio', 'MUN-2'),
('DIR-20', '43330', 'Eloxochitlá', 'Centro', '16 de septiembre', 's/n', 'Municipio', 'MUN-20'),
('DIR-21', '43960', 'Emiliano Zapata', 'Centro', '5 de mayo', 's/n', 'Municipio', 'MUN-21'),
('DIR-22', '43580', 'Epazoyucan', 'Centro', 'Carretera Hidalgo', '11', 'Municipio', 'MUN-22'),
('DIR-23', '42660', 'Tepatepec', 'CENTRO', 'EMILIANO ZAPATA', 'S/N', 'Municipio', 'MUN-23'),
('DIR-24', '42660', 'Francisco I. Madero', 'CENTRO', 'Corregidora', '27', 'Organismo Operador Municipal', 'MUN-23'),
('DIR-25', '43500', 'Huasca de Ocampo', 'CENTRO', 'ALDAMA', 'S/N', 'Organismo Operador Municipal', 'MUN-24'),
('DIR-26', '43050', 'Huautla', 'CENTRO', 'ARQ. GUILLERMO ROSELL DE LA LAMA', 'S/N', 'Organismo Operador Municipal', 'MUN-25'),
('DIR-27', '43070', 'Huazalingo', 'Centro', 'AV. HIDALGO ', 's/n', 'Municipio', 'MUN-26'),
('DIR-28', '43420', 'Huehuetla', 'Centro', 'Luis Donaldo Colosio', '330', 'Municipio', 'MUN-27'),
('DIR-29', '43000', 'Huejutla de Reyes', 'Centro', 'NICANDRO CASTILLO', '25', 'Organismo Operador Municipal', 'MUN-28'),
('DIR-3', '42500', 'Actopan', 'Aviación', 'Alonso de Borja ', '201', 'Organismo Operador Municipal', 'MUN-3'),
('DIR-30', '43000', 'Huejutla de Reyes', 'Tepoxtequito', 'PARQUE INDUSTRIAL SIGLO XXI', 'S/N', 'Otro', 'MUN-28'),
('DIR-31', '42400', 'Huichapan', 'Barrio el Calvario ', 'NICOLAS BRAVO ', 's/n', 'Organismo Operador Municipal', 'MUN-29'),
('DIR-32', '42400', 'Huichapan', 'Centro Historico ', 'MANUEL CHAVEZ NAVA ', '3', 'Órganos de participación previstos en la LAN', 'MUN-29'),
('DIR-33', '42300', 'Ixmiquilpan', 'CENTRO', 'FELIPE ÁNGELES', 'S/N', 'Órganos de participación previstos en la LAN', 'MUN-30'),
('DIR-34', '42200', 'Jacala', 'Centro', 'PINO SUAREZ', 'S/N', 'Órganos de participación previstos en la LAN', 'MUN-31'),
('DIR-35', '43040', 'Jaltocán', 'Centro', 'Felipe Ángeles', 's/n', 'Municipio', 'MUN-32'),
('DIR-36', '43190', 'Juárez', 'Centro', 'Avenida Juárez', 's/n', 'Municipio', 'MUN-33'),
('DIR-37', '43140', 'Lolotla', 'Centro', 'Benito Juárez', 's/n', 'Municipio', 'MUN-34'),
('DIR-38', '43400', 'Metepec', 'Centro', 'Diesiseis de septiembre', 's/n', 'Municipio', 'MUN-35'),
('DIR-39', '43380', 'Metzquititlán', 'CENTRO', 'NIÑOS HEROES', 'S/N', 'Municipio', 'MUN-36'),
('DIR-4', '43460', 'Agua Blanca Iturbide', 'Centro', 'Allende', 's/n', 'Municipio', 'MUN-4'),
('DIR-40', '43351', 'Metztitlán', 'Centro', 'Porfirio Díaz', 's/n', 'Municipio', 'MUN-37'),
('DIR-41', '42120', 'Mineral del Chico', 'Centro', 'plaza principal ', 's/n', 'Municipio', 'MUN-38'),
('DIR-42', '42133', 'Mineral del Monte', 'Industrial', 'Porfirio Díaz', '200', 'Municipio', 'MUN-40'),
('DIR-43', '42260', 'La Misión', 'Centro', 'Plaza Juárez', 's/n', 'Municipio', 'MUN-39'),
('DIR-44', '42700', 'Mixquiahuala', 'Centro', 'Gómez Faríaz', '15', 'Órganos de participación previstos en la LAN', 'MUN-41'),
('DIR-45', '43100', 'Molango', 'Centro', 'Ignacio Zaragoza', '1', 'Municipio', 'MUN-42'),
('DIR-46', '42360', 'Nicolás Flores', 'Centro', 'Profr. Muriño Muñóz Basilio', 's/n', 'Municipio', 'MUN-43'),
('DIR-47', '42470', 'Nopala', 'Centro', 'Avenida del Trabajo', '5', 'Órganos de participación previstos en la LAN', 'MUN-44'),
('DIR-48', '43560', 'Omitlán de Juárez', 'Centro', 'Juárez', 's/n', 'Municipio', 'MUN-45'),
('DIR-49', '43020', 'Orizatlán', 'CENTRO', 'GUSTAVO ARVIZU AVILA', 'S/N', 'Municipio', 'MUN-46'),
('DIR-5', '42150', 'Ajacuba', 'Centro', 'Eustolia Becerra', 's/n', 'Organismo Operador Municipal', 'MUN-5'),
('DIR-50', '42240', 'Pacula', 'Centro', 'Benito Juárez', 's/n', 'Municipio', 'MUN-47'),
('DIR-51', '42092', 'Pachuca de Soto', 'Zona Industrial La Paz', 'INDUSTRIAL LA PAZ', '200', 'Organismo Operador Intermunicipal', 'MUN-48'),
('DIR-52', '42084', 'Pachuca de Soto', 'Zona Plateada', '0', '431', 'Órganos de participación previstos en la LAN', 'MUN-48'),
('DIR-53', '42082', 'Pachuca de Soto', 'Zona Plateada', 'Camino Real de la plata', '336', 'Órganos de participación previstos en la LAN', 'MUN-48'),
('DIR-54', '42000', 'Centro', 'Pachuca de Soto', 'Plaza Pedro Ma. Anaya', '1', 'Municipio', 'MUN-48'),
('DIR-55', '42220', 'Pisaflores', 'Centro', 'Veinte de noviembre', 's/n', 'Municipio', 'MUN-49'),
('DIR-56', '42730', 'Progreso', 'CENTRO', 'Nuevo México', '22-A', 'Municipio', 'MUN-50'),
('DIR-57', '42180', 'Mineral de la Reforma', 'Santa María la Calera', 'Calle Diamante ', 's/n ', 'Municipio', 'MUN-51'),
('DIR-58', '42160', 'San Agustín Tlaxiaca', 'CENTRO', 'AVENIDA INDEPENDENCIA', 'S/N', 'Organismo Operador Municipal', 'MUN-52'),
('DIR-59', '43440', 'Tutotepec', 'CENTRO', 'BENITO JUÁREZ', 'S/N', 'Municipio', 'MUN-53'),
('DIR-6', '42390', 'Alfajayucan', 'Centro', 'Palacio Municipal', 's/n ', 'Organismo Operador Municipal', 'MUN-6'),
('DIR-60', '42650', 'San Salvador', 'San Antonio Zaragoza', 'AV. FELIPE ÁNGELES', '10', 'Organismo Operador Municipal', 'MUN-59'),
('DIR-61', '42640', 'San Salvador', 'Centro', 'Calle Ayuntamiento', '1', 'Sistemas de Agua', 'MUN-59'),
('DIR-62', '42620', 'El Centro', 'Gonzalez Gonzalez ', 'Frente a la iglesia', 'S/N', 'Organismo Operador Municipal', 'MUN-60'),
('DIR-63', '43760', 'Santiago Tulantepec', 'Centro', 'Cerrada 1o. de abril', '92', 'Organismo Operador Municipal', 'MUN-61'),
('DIR-64', '43780', 'Singuilucan', 'Centro', 'Plaza del Artículo 115', 's/n', 'Municipio', 'MUN-62'),
('DIR-65', '42380', 'Tasquillo', 'Centro', 'Fernando Soto', 's/n', 'Municipio', 'MUN-54'),
('DIR-66', '42440', 'Tecozautla', 'Barrio Hidalgo', 'Calzada de Guadalupe ', '26', 'Organismo Operador Municipal', 'MUN-55'),
('DIR-67', '43480', 'Tenango de Doria', 'CENTRO', 'AV. BENITO JUÁRE', 'S/N', 'Municipio', 'MUN-56'),
('DIR-68', '43970', 'Tepeapulco', 'CENTRO', 'BENITO JUÁRE', '8', 'Municipio', 'MUN-57'),
('DIR-69', '43120', 'Tepehuacán de Guerrero', 'Centro', 'Av. Democracia', 's/n', 'Municipio', 'MUN-58'),
('DIR-7', '43940', 'Almoloya', 'Centro', 'Pino', 's/n', 'Organismo Operador Municipal', 'MUN-7'),
('DIR-70', '42850', 'Tepeji de Ocampo', 'San Francisco', 'IGNACIO COMOFORT', 'S/N', 'Organismo Operador Municipal', 'MUN-63'),
('DIR-71', '42920', 'Tepetitlán', 'Centro', 'Tepetitlán  - Tula de Allende', 's/n', 'Municipio', 'MUN-64'),
('DIR-72', '42940', 'Tetepango', 'Centro', 'Av. 16 de enero', 's/n', 'Municipio', 'MUN-65'),
('DIR-73', '43880', 'Tezontepec', 'CENTRO', 'DIESCISEIS DE ENERO ', 'S/N', 'Municipio', 'MUN-66'),
('DIR-74', '42760', 'Tezontepec de Aldama', 'CENTRO', 'AV. ALLENDE ', '5', 'Organismo Operador Municipal', 'MUN-67'),
('DIR-75', '43270', 'Tianguistengo', 'CENTRO', 'RUPERTO ALARCON', '11', 'Municipio', 'MUN-68'),
('DIR-76', '43800', 'Tizayuca', 'El Pedregal', 'Av. Juárez Norte', '39', 'Organismo Operador Municipal', 'MUN-69'),
('DIR-77', '42780', 'Tlahuelilpan', 'CENTRO', 'Av. Del Ejido', 'S/N', 'Organismo Operador Municipal', 'MUN-70'),
('DIR-78', '43170', 'Tlahuiltepa', 'Centro', 'Avenida principal', 's/n', 'Municipio', 'MUN-71'),
('DIR-79', '43930', 'Tlanalapa', 'CENTRO', 'GERARDO ROLDAN NORTE', 'S/N', 'Municipio', 'MUN-72'),
('DIR-8', '43900', 'Apan', 'Centro', 'Lauro L. Mendez', 's/n', 'Organismo Operador Municipal', 'MUN-8'),
('DIR-80', '43150', 'Tlanchinol', 'CENTRO', 'J GONZALEZ', 'S/N', 'Municipio', 'MUN-78'),
('DIR-81', '42950', 'Tlaxcoapan', 'Centro', 'Av. Juárez', 's/n', 'Organismo Operador Municipal', 'MUN-79'),
('DIR-82', '43860', 'Tolcayuca', 'Centro', 'Juárez', '1', 'Municipio', 'MUN-80'),
('DIR-83', '42800', 'Tula de Allende', 'CENTRO', 'MELCHOR OCAMPO', 'S/N', 'Organismo Operador Municipal', 'MUN-73'),
('DIR-84', '43640', 'Tulancingo', 'Fracc. Nuevo San Nicolas', 'Blv. San Nicolas ', 's/n', 'Organismo Operador Municipal', 'MUN-74'),
('DIR-85', '43640', 'Tulancingo', 'Fracc. Nuevo San Nicolas', 'Blv. San Nicolas ', 's/n', 'Municipio', 'MUN-74'),
('DIR-86', '43760', 'Tulancingo', 'Francisco I Madero', 'VENUSTIANO CARRANZA', '402', 'Órganos de participación previstos en la LAN', 'MUN-74'),
('DIR-87', '43090', 'Xochiatipan', 'CENTRO', 'INDEPENDENCIA', 'S/N', 'Municipio', 'MUN-75'),
('DIR-88', '43250', 'Xochicoatlán', 'CENTRO', 'MINA', 'S/N', 'Municipio', 'MUN-76'),
('DIR-89', '43080', 'Yahualica', 'Centro', 'Hidalgo ', 's/n', 'Municipio', 'MUN-77'),
('DIR-9', '42680', 'El Arenal', 'Centro', 'Palacio Municipal ', 's/n', 'Municipio', 'MUN-9'),
('DIR-90', '43200', 'Zacualtipán', 'CENTRO', 'Plaza de  la Constitución', 'S/N', 'Municipio', 'MUN-81'),
('DIR-91', '42190', 'Zapotlán de Juárez', 'Centro', 'Av. Hidalgo ', 's/n ', 'Municipio', 'MUN-82'),
('DIR-92', '43830', 'Zempoala', 'Centro', 'Hidalgo ', 's/n', 'Municipio', 'MUN-83'),
('DIR-93', '43830', 'Zempoala', 'Centro', 'Abasolo', 's/n', 'Otro', 'MUN-83'),
('DIR-94', '42330', 'Zimapán', 'Centro', 'H. Colegio Militar', '4', 'Organismo Operador Municipal', 'MUN-84'),
('DIR-95', '42080', 'Pachuca de Soto', 'Venta Prieta', 'Boulevard Felipe Angeles', 's/n', 'Museo Interactivo  "El Rehilete "', 'MUN-48');

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
  `fecha_cierre` date DEFAULT NULL,
  `motivo_cierre` text DEFAULT NULL,
  `id_usuario` char(20) NOT NULL,
  `id_estatus` char(20) NOT NULL,
  `id_direccion` char(20) NOT NULL,
  `fecha_registro` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eca`
--

INSERT INTO `eca` (`clave_eca`, `nombre_inst`, `nombre_inst_ope`, `poblacion_atend`, `fecha_apert`, `fecha_forta`, `fecha_cierre`, `motivo_cierre`, `ruta_logo`, `id_usuario`, `id_estatus`, `id_direccion`, `fecha_registro`) VALUES
('13-1-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable Municipal', 439, '2004-12-13', '2023-12-28', '0000-00-00', 'No Aplica', '', 'USER-1', 'EST-1K2LMP4X', 'DIR-1', '2026-07-22'),
('13-10-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Atitalaquia (CAPASMAH)', 6924, '2003-04-15', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-10', 'EST-1K2LMP4X', 'DIR-10', '2026-07-22'),
('13-11-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Ecología\r ', 2960, '2001-11-26', '2025-12-19', '0000-00-00', 'No Aplica\r ', '', 'USER-11', 'EST-1K2LMP4X', 'DIR-11', '2026-07-22'),
('13-12-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 8417, '2003-11-03', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-12', 'EST-1K2LMP4X', 'DIR-12', '2026-07-22'),
('13-13-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Atotonilco de Tula (CAASAT)', 8822, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-13', 'EST-1K2LMP4X', 'DIR-13', '2026-07-22'),
('13-14-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable y Alcantarillado del municipio de Calnali  (CAPAC)', 4235, '2002-10-14', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-14', 'EST-1K2LMP4X', 'DIR-14', '2026-07-22'),
('13-15-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Organismo Descentralizado de Agua Potable y Alcantarillado de Cardonal M´Oahi (ODAPYAC)', 755, '2002-10-14', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-15', 'EST-1K2LMP4X', 'DIR-15', '2026-07-22'),
('13-16-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Cuautepec de Hinojosa, Hidalgo (CAPASCHH)', 20530, '2002-09-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-16', 'EST-1K2LMP4X', 'DIR-16', '2026-07-22'),
('13-17-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Sistema de Agua Potable Chapantongo (SAPC)', 2006, '2003-10-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-17', 'EST-1K2LMP4X', 'DIR-17', '2026-07-22'),
('13-18-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Servicios Públicos Municipales', 4054, '2003-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-18', 'EST-1K2LMP4X', 'DIR-18', '2026-07-22'),
('13-19-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Servicios Municipales', 1262, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-19', 'EST-1K2LMP4X', 'DIR-19', '2026-07-22'),
('13-2-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable Municipal', 250, '2002-12-09', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-2', 'EST-1K2LMP4X', 'DIR-2', '2026-07-22'),
('13-20-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 601, '2004-12-01', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-20', 'EST-1K2LMP4X', 'DIR-20', '2026-07-22'),
('13-21-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 9584, '2002-10-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-21', 'EST-1K2LMP4X', 'DIR-21', '2026-07-22'),
('13-22-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Ecología', 3310, '2003-04-15', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-22', 'EST-1K2LMP4X', 'DIR-22', '2026-07-22'),
('13-23-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 11335, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-23', 'EST-1K2LMP4X', 'DIR-23', '2026-07-22'),
('13-23-1-2', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del Sistema Valle del Mezquital (CAASVAM)', 11335, '2006-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-24', 'EST-1K2LMP4X', 'DIR-24', '2026-07-22'),
('13-24-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua del Municipio de Huasca de Ocampo (COAMH)', 417, '2002-12-01', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-25', 'EST-1K2LMP4X', 'DIR-25', '2026-07-22'),
('13-25-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Huautla (CAASH)', 3806, '2003-11-03', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-26', 'EST-1K2LMP4X', 'DIR-26', '2026-07-22'),
('13-26-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable y Ecología Municipal', 770, '2004-12-01', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-27', 'EST-1K2LMP4X', 'DIR-27', '2026-07-22'),
('13-27-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 2993, '2003-12-19', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-28', 'EST-1K2LMP4X', 'DIR-28', '2026-07-22'),
('13-28-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamineto de Huejutla, Hidalgo (CAPASHH)', 44311, '2003-12-01', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-29', 'EST-1K2LMP4X', 'DIR-29', '2026-07-22'),
('13-28-1-4', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Universidad Politécnica de Huejutla', 800, '2016-12-23', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-30', 'EST-1K2LMP4X', 'DIR-30', '2026-07-22'),
('13-29-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Huichapan (CAPOSA)', 9853, '2004-12-13', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-31', 'EST-1K2LMP4X', 'DIR-31', '2026-07-22'),
('13-29-1-2', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comité Técnico de Aguas Subterraneas (Huichapan-Tecozautla-Nopala)-(COTAS)', 9853, '2006-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-32', 'EST-1K2LMP4X', 'DIR-32', '2026-07-22'),
('13-3-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del municipio de Actopan (CAASA)', 32276, '2004-12-13', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-3', 'EST-1K2LMP4X', 'DIR-3', '2026-07-22'),
('13-30-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Ixmiquilpan (CAPASMIH)', 37608, '2003-04-15', '2024-09-23', '0000-00-00', 'No Aplica', '', '8', 'EST-1K2LMP4X', 'DIR-33', '2026-07-22'),
('13-31-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del Municipio de Jacala de Ledezma (CAPASJ)', 4582, '2002-04-08', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-34', 'EST-1K2LMP4X', 'DIR-34', '2026-07-22'),
('13-32-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Obras públicas', 5919, '2001-09-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-35', 'EST-1K2LMP4X', 'DIR-35', '2026-07-22'),
('13-33-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable\r ', 616, '2004-12-01', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-36', 'EST-1K2LMP4X', 'DIR-36', '2026-07-22'),
('13-34-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Direccion de Agua Potlable ', 590, '2004-12-01', '2025-12-19', '0000-00-00', 'No Aplica', '', 'USER-37', 'EST-1K2LMP4X', 'DIR-37', '2026-07-22'),
('13-35-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 2248, '2003-11-03', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-38', 'EST-1K2LMP4X', 'DIR-38', '2026-07-22'),
('13-36-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 1788, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-39', 'EST-1K2LMP4X', 'DIR-39', '2026-07-22'),
('13-37-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Direccion de Agua Potable ', 3274, '2003-10-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-40', 'EST-1K2LMP4X', 'DIR-40', '2026-07-22'),
('13-38-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Obras Púbicas', 533, '2001-09-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-41', 'EST-1K2LMP4X', 'DIR-41', '2026-07-22'),
('13-39-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Ecología', 1813, '2003-04-15', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-42', 'EST-1K2LMP4X', 'DIR-42', '2026-07-22'),
('13-4-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable Municipal', 2325, '2003-11-03', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-4', 'EST-1K2LMP4X', 'DIR-4', '2026-07-22'),
('13-40-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Obras Publicas y Ecología Municipal', 546, '2004-12-01', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-43', 'EST-1K2LMP4X', 'DIR-43', '2026-07-22'),
('13-41-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comision de Agua y Alcantarillado del Municipio de Mixquiahuala, Hgo', 27713, '2003-11-01', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-44', 'EST-1K2LMP4X', 'DIR-44', '2026-07-22'),
('13-42-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 4995, '2001-11-01', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-45', 'EST-1K2LMP4X', 'DIR-45', '2026-07-22'),
('13-43-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable  y Saneamiento del Municipio de Nicolás  Flores', 404, '2003-10-01', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-46', 'EST-1K2LMP4X', 'DIR-46', '2026-07-22'),
('13-44-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Nopala (ODAPAN)', 1155, '2002-10-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-47', 'EST-1K2LMP4X', 'DIR-47', '2026-07-22'),
('13-45-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 1050, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-48', 'EST-1K2LMP4X', 'DIR-48', '2026-07-22'),
('13-46-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Ecología', 7037, '2002-10-01', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-49', 'EST-1K2LMP4X', 'DIR-49', '2026-07-22'),
('13-47-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 540, '2004-12-01', '2024-09-24', '0000-00-00', 'No Aplica', '', 'USER-50', 'EST-1K2LMP4X', 'DIR-50', '2026-07-22'),
('13-48-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comision de Agua y Alcantarillado Sistemas Intermunicipales (CAASIM)', 125000, '2003-11-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-51', 'EST-1K2LMP4X', 'DIR-51', '2026-07-22'),
('13-48-1-3', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión Nacional del Agua (CONAGUA)', 150000, '2006-12-01', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-52', 'EST-1K2LMP4X', 'DIR-52', '2026-07-22'),
('13-48-1-4', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo (CEAA)', 150000, '2006-12-01', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-53', 'EST-1K2LMP4X', 'DIR-53', '2026-07-22'),
('13-48-1-6', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Presidencia Municipal de Pachuca', 297848, '2008-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-54', 'EST-1K2LMP4X', 'DIR-54', '2026-07-22'),
('13-48-1-8', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Museo Interactivo \"El Rehilete\"', 416000, '2011-08-10', '2019-11-28', '0000-00-00', 'Enviaron oficio de cierre definitivo del espacio de cultura del agua', '', 'USER-95', 'EST-C731KSDA', 'DIR-95', '2026-07-22'),
('13-49-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Servicios Públicos y Ecología', 2428, '2004-12-01', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-55', 'EST-1K2LMP4X', 'DIR-55', '2026-07-22'),
('13-5-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Saneamiento del municipio de Ajacuba (CAYSA)', 8254, '2004-10-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-5', 'EST-1K2LMP4X', 'DIR-5', '2026-07-22'),
('13-50-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado de Progreso de Alvaro Obregón (CAAMPAO)', 17718, '2002-11-29', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-56', 'EST-1K2LMP4X', 'DIR-56', '2026-07-22'),
('13-51-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Medio Ambiente', 9559, '2003-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-57', 'EST-1K2LMP4X', 'DIR-57', '2026-07-22'),
('13-52-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de San Agustín Tlaxiaca (CAPASSAT)', 12328, '2003-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-58', 'EST-1K2LMP4X', 'DIR-58', '2026-07-22'),
('13-53-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 2764, '2003-12-01', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-59', 'EST-1K2LMP4X', 'DIR-59', '2026-07-22'),
('13-54-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del municipio de San Salvador, Hgo. (CAAMSSH)', 1107, '2003-10-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-60', 'EST-1K2LMP4X', 'DIR-60', '2026-07-22'),
('13-54-23-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Sistema de Agua Potable Teofani', 1107, '2006-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-61', 'EST-1K2LMP4X', 'DIR-61', '2026-07-22'),
('13-55-1-2', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable y Alcantarillado de Santiago de Anaya', 2676, '2002-10-25', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-62', 'EST-1K2LMP4X', 'DIR-62', '2026-07-22'),
('13-56-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento de Tulantepec  (CAASST)', 17449, '2002-10-07', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-63', 'EST-1K2LMP4X', 'DIR-63', '2026-07-22'),
('13-57-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Ecología', 4805, '2004-12-13', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-64', 'EST-1K2LMP4X', 'DIR-64', '2026-07-22'),
('13-58-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 4030, '2003-11-05', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-65', 'EST-1K2LMP4X', 'DIR-65', '2026-07-22'),
('13-59-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comision de Agua Potable, Alcantarillado y Saneamiento del Municipio de Tecozautla (CAAST)', 6701, '2002-11-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-66', 'EST-1K2LMP4X', 'DIR-66', '2026-07-22'),
('13-6-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del municipio de Alfajayucan (CAAMAH)', 1794, '2004-10-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-6', 'EST-1K2LMP4X', 'DIR-6', '2026-07-22'),
('13-60-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Ecología', 2614, '2003-10-01', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-67', 'EST-1K2LMP4X', 'DIR-67', '2026-07-22'),
('13-61-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 16368, '2002-09-01', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-68', 'EST-1K2LMP4X', 'DIR-68', '2026-07-22'),
('13-62-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección De Agua Potable y alcantarillado', 1373, '2004-12-13', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-69', 'EST-1K2LMP4X', 'DIR-69', '2026-07-22'),
('13-63-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del municipio de Tepeji del Río de Ocampo, Hgo. (CAAMTROH)', 36618, '2003-10-18', '2023-12-28', '0000-00-00', 'No Aplica', '', 'USER-70', 'EST-1K2LMP4X', 'DIR-70', '2026-07-22'),
('13-64-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Ecología de Agua Potable', 1056, '2003-12-19', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-71', 'EST-1K2LMP4X', 'DIR-71', '2026-07-22'),
('13-65-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Direccion de Agua Potable y Ecología ', 9145, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-72', 'EST-1K2LMP4X', 'DIR-72', '2026-07-22'),
('13-66-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Municipio de Villa de Tezontepec', 6213, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-73', 'EST-1K2LMP4X', 'DIR-73', '2026-07-22'),
('13-67-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado de Tezontepec de Aldama, Hgo. (CAYATAH)', 5398, '2003-10-18', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-74', 'EST-1K2LMP4X', 'DIR-74', '2026-07-22'),
('13-68-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 1731, '2004-10-01', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-75', 'EST-1K2LMP4X', 'DIR-75', '2026-07-22'),
('13-69-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del municipio de Tizayuca, Hgo. (CAAMTH)', 168302, '2003-12-01', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-76', 'EST-1K2LMP4X', 'DIR-76', '2026-07-22'),
('13-7-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable del municipio de Almoloya (COMAAL)', 5618, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-7', 'EST-1K2LMP4X', 'DIR-7', '2026-07-22'),
('13-70-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Y Saneamiento del Municipio de Tlahuelilpan (CASMTH)', 8657, '2001-09-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-77', 'EST-1K2LMP4X', 'DIR-77', '2026-07-22'),
('13-71-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Municipio de Tlahuiltepa', 286, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-78', 'EST-1K2LMP4X', 'DIR-78', '2026-07-22'),
('13-72-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Municipio de Tlanalapa', 8062, '2003-10-01', '2025-12-19', '0000-00-00', 'No Aplica', '', 'USER-79', 'EST-1K2LMP4X', 'DIR-79', '2026-07-22'),
('13-73-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Tlanchinol ECA', 6117, '2002-10-14', '2025-12-17', '0000-00-00', 'No Aplica', '', 'USER-80', 'EST-1K2LMP4X', 'DIR-80', '2026-07-22'),
('13-74-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Saneamiento del municipio de Tlaxcoapan (CAyST)', 14689, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-81', 'EST-1K2LMP4X', 'DIR-81', '2026-07-22'),
('13-75-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Presidencia Municipal de Tolcayuca', 8966, '2003-12-19', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-82', 'EST-1K2LMP4X', 'DIR-82', '2026-07-22'),
('13-76-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable y Alcantarillado de Tula (CAPYAT)', 29390, '2001-11-23', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-83', 'EST-1K2LMP4X', 'DIR-83', '2026-07-22'),
('13-77-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del municipio de Tulancingo (CAAMT)', 105163, '2003-10-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-84', 'EST-1K2LMP4X', 'DIR-84', '2026-07-22'),
('13-77-1-3', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comité Técnico de Aguas Subterráneas del Acuífero del Valle de Tulancingo (COTAS)', 105163, '2006-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-86', 'EST-1K2LMP4X', 'DIR-86', '2026-07-22'),
('13-77-1-5', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Municipio de Tulancingo de Bravo', 105163, '2017-11-10', '2023-12-27', '0000-00-00', 'No Aplica', '', 'USER-85', 'EST-1K2LMP4X', 'DIR-85', '2026-07-22'),
('13-78-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Xochiatipan ECA', 1593, '2004-12-01', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-87', 'EST-1K2LMP4X', 'DIR-87', '2026-07-22'),
('13-79-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Xochicoatlán ECA, Dirección de ecología', 1301, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-88', 'EST-1K2LMP4X', 'DIR-88', '2026-07-22'),
('13-8-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable y Alcantarillado del municipio de Apan (CAAPAN)', 28792, '2001-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-8', 'EST-1K2LMP4X', 'DIR-8', '2026-07-22'),
('13-80-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Yahualica ECA', 24674, '2001-12-01', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-89', 'EST-1K2LMP4X', 'DIR-89', '2026-07-22'),
('13-81-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Direccion de Obras Publicas y Agua Potable del municipio de Zacualtipan', 29472, '2003-11-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-90', 'EST-1K2LMP4X', 'DIR-90', '2026-07-22'),
('13-82-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Zapotlán ECA', 4978, '2004-12-13', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-91', 'EST-1K2LMP4X', 'DIR-91', '2026-07-22'),
('13-83-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Zempoala ECA', 7205, '2004-12-01', '2025-12-18', '0000-00-00', 'No Aplica', '', 'USER-92', 'EST-1K2LMP4X', 'DIR-92', '2026-07-22'),
('13-83-1-2', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Acueducto Padre Tembleque', 7205, '2011-08-10', '2025-12-11', '0000-00-00', 'No Aplica', '', 'USER-93', 'EST-1K2LMP4X', 'DIR-93', '2026-07-22'),
('13-84-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Zimapán (CAPASAZIM)', 14732, '2002-11-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-94', 'EST-1K2LMP4X', 'DIR-94', '2026-07-22'),
('13-9-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 3578, '2004-12-01', '2024-09-23', '0000-00-00', 'No Aplica', '', 'USER-9', 'EST-1K2LMP4X', 'DIR-9', '2026-07-22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `espaciocultura`
--

CREATE TABLE `espaciocultura` (
  `id_espacio` char(20) NOT NULL,
  `total_pobl` int(11) NOT NULL,
  `comentarios` varchar(150) NOT NULL DEFAULT '',
  `fecha_registro` date NOT NULL DEFAULT current_timestamp(),
  `clave_eca` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `espaciocultura`
--

INSERT INTO `espaciocultura` (`id_espacio`, `total_pobl`, `comentarios`, `fecha_registro`, `clave_eca`) VALUES
('ESP-0SIKLFGF8H', 88, 'PRIMERA PRUEBA PARA SABER COMO SE VERAN LOS DATOS DEL OFICIO', '2026-07-22', '13-30-1-1'),
('ESP-ICK7RXKRT3', 100, 'PRUEBA ESPACIO CON OTRA CUENTA', '2026-07-22', '13-1-1-1'),
('ESP-IKKOUHDX3Y', 155, 'HOLA, prueba 4', '2026-07-22', '13-30-1-1'),
('ESP-L8WVSEBLXV', 67, 'PRUEBA 3', '2026-07-22', '13-30-1-1'),
('ESP-UL3COH0XZ7', 210, 'HOLA BRO, NUEVA BD', '2026-07-22', '13-30-1-1'),
('ESP-ZT0QA0GGWU', 128, 'PRUEBA CON LA BASE LIMPIA', '2026-07-23', '13-12-1-1');

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
-- Estructura de tabla para la tabla `foto_activ`
--

CREATE TABLE `foto_activ` (
  `id_foto` char(20) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `ruta_img` varchar(500) NOT NULL,
  `id_actividad` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `foto_activ`
--

INSERT INTO `foto_activ` (`id_foto`, `nombre`, `ruta_img`, `id_actividad`) VALUES
('img-0OQTO8D9QW', 'image1170x530cropped.jpg', 'uploads/8eFl3V26Dd5xOuuWU0YP7oPOs9miph3lJV18CVgb.jpg', 'Activ-GBSSDXDX6A'),
('img-48RT16YYFV', 'mclaren-765lt-night-3840x2160-20401.jpg', 'uploads/RufxCx6toGrKIlZqjSyii8zKDDARL4OyL3nAbVym.jpg', 'PROG-REYKOP2BCA'),
('img-5I04K3JEHG', 'images.jpeg', 'uploads/5VoAivXtzQwhk50jW45bEdKvtydWlRwoNogMdmte.jpg', 'Activ-9TDMTRMSMA'),
('img-7JRSTMCRX4', 'images.jpeg', 'uploads/vWDX8AGWgaGCNz3uGJWToUwnrusSa7I32U8iwdGh.jpg', 'Activ-GBSSDXDX6A'),
('img-8YRY9J6M4O', 'image1170x530cropped.jpg', 'uploads/3MjY0fhVKttEshixK5T2NBjJ6EHie81cPZEADwoH.jpg', 'Activ-9TDMTRMSMA'),
('img-CVDOL6UXFA', 'dubai-sheikh-zayed-3840x2160-21154.jpg', 'uploads/wZatqEkdHadn9jC2JnIBXF3OGzv6aparTNYRXNoU.jpg', 'PROG-9RRWJD1AQM'),
('img-KO4T77CEYI', 'marvels-spider-man-3840x2160-13514.jpg', 'uploads/chBIlBknNi6ZmZuLDRoRHqusJtZoc0MQd1N3M4fF.jpg', 'PROG-REYKOP2BCA'),
('img-LYOHJVMNQJ', 'images.jpeg', 'uploads/3NbzuordUWlkzcpmnLKeb6RSsvOfzndvCP4mjWrX.jpg', 'Activ-QZHIJHITVW'),
('img-NGYUKQ9O7L', 'image1170x530cropped.jpg', 'uploads/JaShxMJTQLPM1jdmkhiLz3dTFEuWFCEO7tGpreP0.jpg', 'Activ-QZHIJHITVW'),
('img-PQKNXJQ8MN', 'API XD.png', 'uploads/LCz5hwEAZpdj7lCmb0f9R8cFREpecrEzd93Dlend.png', 'PROG-IP7J5VCV9J'),
('img-RFPYXIP7AU', 'image1170x530cropped.jpg', 'uploads/UAbx3zVfRZOOXZ3YRJm6dOrrVrTcb3bG0XVs6kqD.jpg', 'Activ-MG3LB2GELC'),
('img-UMTW5DWOEJ', 'images.jpeg', 'uploads/AABOY48JRjsh3wpxU1GOKgxhsx3eVhgAR4j27R1g.jpg', 'Activ-MG3LB2GELC'),
('img-VOAD20MFFX', 'mclaren-765lt-night-3840x2160-20401.jpg', 'uploads/crzqscDwPxz31uSt7obCo5aDAYnBI9oirWyC3IvW.jpg', 'PROG-VAAJ8HFGS6');

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
-- Estructura de tabla para la tabla `material_didact`
--

CREATE TABLE `material_didact` (
  `id_material` char(20) NOT NULL,
  `inedito` int(11) NOT NULL,
  `reproducido` int(11) NOT NULL,
  `adquirido` int(11) NOT NULL,
  `id_espacio` char(20) NOT NULL,
  `material_Timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `material_didact`
--

INSERT INTO `material_didact` (`id_material`, `inedito`, `reproducido`, `adquirido`, `id_espacio`, `material_Timestamp`) VALUES
('MAT-5YHBPTIYWA', 1, 0, 0, 'ESP-UL3COH0XZ7', '2026-07-22 19:53:41'),
('MAT-ACKAV6BDAK', 12, 12, 12, 'ESP-L8WVSEBLXV', '2026-07-06 16:54:39'),
('MAT-BQHPNMBHVS', 12, 11, 1, 'ESP-IKKOUHDX3Y', '2026-07-14 16:36:33'),
('MAT-MTDSUGBIJQ', 12, 21, 23, 'ESP-ZT0QA0GGWU', '2026-07-23 17:00:24');

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
  `nombre_municipio` varchar(40) NOT NULL,
  `num_habitan` int(15) NOT NULL,
  `estado` varchar(60) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`id_municipio`, `nombre_municipio`, `num_habitan`, `estado`) VALUES
('MUN-1', 'Acatlán', 22268, 'Hidalgo'),
('MUN-10', 'Atitalaquia', 31525, 'Hidalgo'),
('MUN-11', 'Atlapexco', 19812, 'Hidalgo'),
('MUN-12', 'Atotonilco el Grande', 30135, 'Hidalgo'),
('MUN-13', 'Atotonilco de Tula', 62470, 'Hidalgo'),
('MUN-14', 'Calnali', 16150, 'Hidalgo'),
('MUN-15', 'Cardonal', 19431, 'Hidalgo'),
('MUN-16', 'Cuautepec de Hinojosa', 60421, 'Hidalgo'),
('MUN-17', 'Chapantongo', 12967, 'Hidalgo'),
('MUN-18', 'Chapulhuacán', 22903, 'Hidalgo'),
('MUN-19', 'Chilcuautla', 18909, 'Hidalgo'),
('MUN-2', 'Acaxochitlán', 46065, 'Hidalgo'),
('MUN-20', 'Eloxochitlán', 2593, 'Hidalgo'),
('MUN-21', 'Emiliano Zapata', 15175, 'Hidalgo'),
('MUN-22', 'Epazoyucan', 16285, 'Hidalgo'),
('MUN-23', 'Francisco I. Madero', 36248, 'Hidalgo'),
('MUN-24', 'Huasca de Ocampo', 17607, 'Hidalgo'),
('MUN-25', 'Huautla', 20673, 'Hidalgo'),
('MUN-26', 'Huazalingo', 12766, 'Hidalgo'),
('MUN-27', 'Huehuetla', 22846, 'Hidalgo'),
('MUN-28', 'Huejutla de Reyes', 126781, 'Hidalgo'),
('MUN-29', 'Huichapan', 47425, 'Hidalgo'),
('MUN-3', 'Actopan', 61, 'Hidalgo'),
('MUN-30', 'Ixmiquilpan', 98654, 'Hidalgo'),
('MUN-31', 'Jacala de Ledezma', 12290, 'Hidalgo'),
('MUN-32', 'Jaltocán', 10523, 'Hidalgo'),
('MUN-33', 'Juárez Hidalgo', 2895, 'Hidalgo'),
('MUN-34', 'Lolotla', 9474, 'Hidalgo'),
('MUN-35', 'Metepec', 13078, 'Hidalgo'),
('MUN-36', 'San Agustín Metzquititlán', 9449, 'Hidalgo'),
('MUN-37', 'Metztitlán', 20962, 'Hidalgo'),
('MUN-38', 'Mineral del Chico', 8878, 'Hidalgo'),
('MUN-39', 'La Misión', 9819, 'Hidalgo'),
('MUN-4', 'Agua Blanca de Iturbide', 10313, 'Hidalgo'),
('MUN-40', 'Mineral del Monte', 14324, 'Hidalgo'),
('MUN-41', 'Mixquiahuala de Juárez', 47222, 'Hidalgo'),
('MUN-42', 'Molango de Escamilla', 11578, 'Hidalgo'),
('MUN-43', 'Nicolás Flores', 6265, 'Hidalgo'),
('MUN-44', 'Nopala de Villagrán', 16948, 'Hidalgo'),
('MUN-45', 'Omitlán de Juárez', 9295, 'Hidalgo'),
('MUN-46', 'San Felipe Orizatlán', 38492, 'Hidalgo'),
('MUN-47', 'Pacula', 4748, 'Hidalgo'),
('MUN-48', 'Pachuca de Soto', 314331, 'Hidalgo'),
('MUN-49', 'Pisaflores', 18723, 'Hidalgo'),
('MUN-5', 'Ajacuba', 18872, 'Hidalgo'),
('MUN-50', 'Progreso de Obregón', 23641, 'Hidalgo'),
('MUN-51', 'Mineral de la Reforma', 202749, 'Hidalgo'),
('MUN-52', 'San Agustín Tlaxiaca', 38891, 'Hidalgo'),
('MUN-53', 'San Bartolo Tutotepec', 17699, 'Hidalgo'),
('MUN-54', 'Tasquillo', 17441, 'Hidalgo'),
('MUN-55', 'Tecozautla', 38010, 'Hidalgo'),
('MUN-56', 'Tenango de Doria', 17503, 'Hidalgo'),
('MUN-57', 'Tepeapulco', 56245, 'Hidalgo'),
('MUN-58', 'Tepehuacán de Guerrero', 31235, 'Hidalgo'),
('MUN-59', 'San Salvador', 36796, 'Hidalgo'),
('MUN-6', 'Alfajayucan', 19162, 'Hidalgo'),
('MUN-60', 'Santiago de Anaya', 18329, 'Hidalgo'),
('MUN-61', 'Santiago Tulantepec de Lugo Guerrero', 39561, 'Hidalgo'),
('MUN-62', 'Singuilucan', 15142, 'Hidalgo'),
('MUN-63', 'Tepeji del Río de Ocampo', 90546, 'Hidalgo'),
('MUN-64', 'Tepetitlán', 10830, 'Hidalgo'),
('MUN-65', 'Tetepango', 11768, 'Hidalgo'),
('MUN-66', 'Villa de Tezontepec', 13032, 'Hidalgo'),
('MUN-67', 'Tezontepec de Aldama', 55134, 'Hidalgo'),
('MUN-68', 'Tianguistengo', 14340, 'Hidalgo'),
('MUN-69', 'Tizayuca', 168302, 'Hidalgo'),
('MUN-7', 'Almoloya', 12546, 'Hidalgo'),
('MUN-70', 'Tlahuelilpan', 19067, 'Hidalgo'),
('MUN-71', 'Tlahuiltepa', 9086, 'Hidalgo'),
('MUN-72', 'Tlanalapa', 11113, 'Hidalgo'),
('MUN-73', 'Tula de Allende', 115107, 'Hidalgo'),
('MUN-74', 'Tulancingo de Bravo', 168369, 'Hidalgo'),
('MUN-75', 'Xochiatipan', 18260, 'Hidalgo'),
('MUN-76', 'Xochicoatlán', 7015, 'Hidalgo'),
('MUN-77', 'Yahualica', 24674, 'Hidalgo'),
('MUN-78', 'Tlanchinol', 37722, 'Hidalgo'),
('MUN-79', 'Tlaxcoapan', 28626, 'Hidalgo'),
('MUN-8', 'Apan', 46681, 'Hidalgo'),
('MUN-80', 'Tolcayuca', 21362, 'Hidalgo'),
('MUN-81', 'Zacualtipán de Ángeles', 38155, 'Hidalgo'),
('MUN-82', 'Zapotlán de Juárez', 21443, 'Hidalgo'),
('MUN-83', 'Zempoala', 57906, 'Hidalgo'),
('MUN-84', 'Zimapán', 39927, 'Hidalgo'),
('MUN-9', 'El Arenal', 19836, 'Hidalgo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oficios_rneca`
--

CREATE TABLE `oficios_rneca` (
  `id_oficio` char(20) NOT NULL,
  `mes_oficio` varchar(20) NOT NULL,
  `ruta_oficio` varchar(255) NOT NULL DEFAULT 'NA',
  `observacion` varchar(500) NOT NULL DEFAULT 'Sin observaciones',
  `fecha_registro` date NOT NULL DEFAULT current_timestamp(),
  `fecha_firma` date NOT NULL DEFAULT current_timestamp(),
  `fecha_obser` date NOT NULL DEFAULT current_timestamp(),
  `clave_eca` char(12) NOT NULL,
  `id_estatus` char(20) NOT NULL DEFAULT 'EST-4HJVB2C9'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `oficios_rneca`
--

INSERT INTO `oficios_rneca` (`id_oficio`, `mes_oficio`, `ruta_oficio`, `observacion`, `fecha_registro`, `fecha_firma`, `fecha_obser`, `clave_eca`, `id_estatus`) VALUES
('OFIC-1NAVJ', 'Junio', 'documents/CyqJEYLQ7yBAULJdh6cHXPtceY6myiTUAdI9JFT2.pdf', 'NA', '2026-07-19', '2026-07-19', '2026-07-28', '13-30-1-1', 'EST-4HJVB2C9'),
('OFIC-5CJPY', 'Junio', 'documents/sCE2W5rM5n4L1hYpC8j5AEbQA5tzQy9tvRttWG0t.pdf', '', '2026-07-16', '2026-07-19', '2026-07-28', '13-30-1-1', 'EST-4HJVB2C9'),
('OFIC-6F0CV', 'Junio', 'documents/nYrFxVtsfaZeaixW8tfUd5lox7V9yewgtg0LoBNU.pdf', '', '2026-07-16', '2026-07-19', '2026-07-28', '13-30-1-1', 'EST-4HJVB2C9'),
('OFIC-ACG3P', 'Julio', 'documents/FFm16xKQNdQ8w7uJgZMlCmLbJ9UYJc1pdoZ7ogwh.pdf', '', '2026-07-16', '2026-07-19', '2026-07-28', '13-30-1-1', 'EST-4HJVB2C9'),
('OFIC-AFFJH', 'Julio', 'documents/Ix047OA00YgNMFukH0t3rw68DgGC4wNtLtFJBEVA.pdf', '', '2026-07-15', '2026-07-19', '2026-07-28', '13-30-1-1', 'EST-4HJVB2C9'),
('OFIC-LAVCM', 'Junio', 'documents/8GaiMxqqyA6hXs7BP3G2ACsPPg1Xdot1dhv1d7pj.pdf', 'NA', '2026-07-23', '2026-07-23', '2026-07-28', '13-12-1-1', 'EST-4HJVB2C9'),
('OFIC-SUAJO', 'Julio', 'documents/g8qTzZIEy8t5mar5Y6H1JHapZ14R2eNCZ1T2pF4w.pdf', '', '2026-07-15', '2026-07-19', '2026-07-28', '13-30-1-1', 'EST-4HJVB2C9'),
('OFIC-UQHAK', 'Junio', 'documents/1Mu5LfLI8DLbgVJrR9rVbxn4jzOZHvgkWzUAej5B.pdf', 'NA', '2026-07-19', '2026-07-19', '2026-07-28', '13-30-1-1', 'EST-4HJVB2C9');

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
  `descripcion_activ` varchar(500) NOT NULL,
  `alumnos_Aten` varchar(250) DEFAULT NULL,
  `pobl_ate` int(11) DEFAULT 0,
  `fecha_mes` varchar(15) NOT NULL,
  `fecha_registro` date DEFAULT current_timestamp(),
  `clave_eca` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `program_cult`
--

INSERT INTO `program_cult` (`id_program`, `municipio`, `localidad`, `tipo_platica`, `otras_activ`, `descripcion_activ`, `alumnos_Aten`, `pobl_ate`, `fecha_mes`, `fecha_registro`, `clave_eca`) VALUES
('Activ-9TDMTRMSMA', 'Atotonilco el Grande', 'Ixmiquilpan', 'escolar', '123', 'hola bro', '1', 4321, '2026-07-31', '2026-07-28', '13-12-1-1'),
('Activ-GBSSDXDX6A', 'Atotonilco el Grande', 'DASFF', 'comunitaria', 'AFDA', 'FDAF', '2324', 42, '2026-07-09', '2026-07-28', '13-12-1-1'),
('Activ-MG3LB2GELC', 'Atotonilco el Grande', 'Bangandho', 'comunitaria', 'adf', '32ads', '24', 242, '2026-07-01', '2026-07-28', '13-12-1-1'),
('Activ-QZHIJHITVW', 'Atotonilco el Grande', 'El Nith', 'comunitaria', 'asdf', 'adsffs', '123', 123, '2026-07-21', '2026-07-28', '13-12-1-1'),
('PROG-9RRWJD1AQM', 'Ixmiquilpan', 'Pueblo Nuevo', 'escolar', 'descrip12', 'fafa', '12', 12, '2026-06-24', '2026-07-28', '13-30-1-1'),
('PROG-IP7J5VCV9J', 'Ixmiquilpan', 'Capula', 'escolar', '4 Congreso de Tecnologias de la informacion', 'fafa', '500', NULL, '2026-06-17', '2026-07-28', '13-30-1-1'),
('PROG-REYKOP2BCA', 'Ixmiquilpan', 'Botenguedho', 'comunitaria', 'adf', 'fafa', '13', 333, '2026-06-30', '2026-07-28', '13-30-1-1'),
('PROG-VAAJ8HFGS6', 'Ixmiquilpan', 'El Nith', 'comunitaria', 'prueba3', 'fafa', '12', 34, '2026-06-09', '2026-07-28', '13-30-1-1');

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
('rol2', 'Director Municipal'),
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

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('rV6Ltej26uiTP4oA0v5iqFmDTfaV8hXirmcEY2tz', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiN0dGelFvaUYwSGpFYlVxMWhQVVFIbFZhNElQVHBDbXFJQU5Oa0JWcCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1783738457),
('uDPL0aeCTuQgVK6vXhUHNHZCq7A6lXlYqRGWoKVV', 7, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiVW1pYnhjUXB5aDZqalN5UlMwcHpRN0lwVmRTWERoOWZuU0tiWW5yNCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozMjoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2luaWNpb19lY2EiO31zOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czozMjoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2luaWNpb19lY2EiO3M6NToicm91dGUiO3M6MTA6ImluaWNpb19lY2EiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7czoxOiI3Ijt9', 1783742970);

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
('EST-8HCVW2C7', 'Correcciones'),
('EST-A9ZSN5W2', 'Activo'),
('EST-C731KSDA', 'Cerrado'),
('EST-IYU9DADF', 'Inactivo'),
('EST-R4M8TP1L', 'Firmado'),
('EST-V7WQ3N8Z', 'Validado');

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
  `correoExtra` varchar(500) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `cambiar_password` tinyint(1) NOT NULL,
  `fecha_registro` date NOT NULL DEFAULT current_timestamp(),
  `id_rol` char(20) NOT NULL,
  `nombre_jefe` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `correo`, `correoExtra`, `password`, `cambiar_password`, `fecha_registro`,`id_rol`, `nombre_jefe`) VALUES
('USER-1', 'Alberto Islas López', 'agua.potable@acatlanhidalgo.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-06',  'rol1', NULL),
('USER-10', 'C. Rosa Delia Olguín Prado', 'culturadelagua.capasmah@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-15',  'rol1', NULL),
('USER-11', 'C. Hilario Hernándezz Bautista', 'mpioatlapexcoaguapotable@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-16',  'rol1', NULL),
('USER-12', 'Jaquelin Romero Mendoza', 'comisiondeagua@atotonilcoelgrande.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-17',  'rol1', NULL),
('USER-13', 'C. Mayra Ivette Solano Romero ', 'cultura.caasat@outlook.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-18',  'rol1', NULL),
('USER-14', 'Lic. Rossana Salas Alardin ', 'culturadelaguacalnali2021@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-19',  'rol1', NULL),
('USER-15', 'Moisés Cardón Martínez', 'culturadelaguamohai@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-20',  'rol1', NULL),
('USER-16', 'Cynthia Becerril Enciso', 'capaschh@gmail.com ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-21',  'rol1', NULL),
('USER-17', 'Jennifer Nava Ángeles', 'sapchapantongo@hotmail.com ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-22',  'rol1', NULL),
('USER-18', 'Wendy Lima Nuñez', 'serviciospublicoschapulhuacan@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-23',  'rol1', NULL),
('USER-19', 'C. Sergio Pérezz Serrano', 'chil20.24serviciosmunicipales@gmail.com ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-24',  'rol1', NULL),
('USER-2', 'C.Citlali Ortíz Esteban ', 'ECA.presidencia.acaxochitlan@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-07',  'rol1', NULL),
('USER-20', 'Ing. Iris Piedad García Santamaria', 'garciastam26@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-25',  'rol1', NULL),
('USER-21', 'Lic. Alfonso Gustavo Lozano Raya ', 'gus_tavo230705@hotmail.com ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-26',  'rol1', NULL),
('USER-22', 'Leonel Cruz Ortíz', 'cvsl.2024epazoyucan@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-27',  'rol1', NULL),
('USER-23', 'C. Maribel Moreno Pérez', 'morenomaribel516@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-28',  'rol1', NULL),
('USER-24', 'Lic. Nubya Jazmín Gálvez Ordóñez', 'eca.organismo.caasvam@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-29',  'rol1', NULL),
('USER-25', 'Lidia Escorza Gómez ', 'ca.huasca2021@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-30',  'rol1', NULL),
('USER-26', 'Tec. Avi Melec Contreras Torres ', 'caashuautla@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-31',  'rol1', NULL),
('USER-27', 'Patricia Hernández Hernández', 'municipiohuazalingo@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-01',  'rol1', NULL),
('USER-28', 'Ing. Valente Sevilla Maximino', 'presidenciahuehuetlahgo2024@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-02',  'rol1', NULL),
('USER-29', 'Ing. Naiby Arely Sanchez González', 'culturadelagua7@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-03',  'rol1', NULL),
('USER-3', 'Lic.José Adrián Chávez Cruz', 'enlaceh2o.actopan@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-08',  'rol1', NULL),
('USER-30', 'Mtro. Jesús Manuel Bautista Mateos', 'culturadelagua@uphuejutla.edu.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-04',  'rol1', NULL),
('USER-31', 'Gabriela Berrospe Téllez', 'culturagua@caposa.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-05',  'rol1', NULL),
('USER-32', 'Ing. MARCOS LUIS LEON ', 'cotas_htn@hotmail.com ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-06',  'rol1', NULL),
('USER-33', 'L.C.C. SUSANA MIRANDA BERNAL', 'culturadelagua@capasmih.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-07',  'rol1', NULL),
('USER-34', 'Andrea Esmeralda Martínez Abreo', 'capasjculturadelagua@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-08',  'rol1', NULL),
('USER-35', 'Emmanuel Montaño Monterrubio ', 'emmanuelmontanomonterrubio@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-09',  'rol1', NULL),
('USER-36', 'Lisareli López Aragón', 'espaciodeculturadelaguajh@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-06',  'rol1', NULL),
('USER-37', 'C. Edgar Mendoza Hernández', 'reglamentos22@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-11',  'rol1', NULL),
('USER-38', 'Lic. Saúl Mérida Chávez', 'asba.miguel@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-12',  'rol1', '3'),
('USER-39', 'Ing. Juvenal Gutiérrez Balderrama', 'culturadelagua.sametzquititl��n@gmai', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-13',  'rol1', NULL),
('USER-4', 'Raúl Santos Muñoz', 'aguapotable@aguablanca.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-09',  'rol1', NULL),
('USER-40', 'Beatriz Monter Melo', 'presidencia@meztitlan.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-14',  'rol1', NULL),
('USER-41', 'C. Jesus lazcano arriaga ', 'obraspubl_mchico20@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-15',  'rol1', NULL),
('USER-42', 'Nora Martínez Orozco', 'at.ecologia2024rm@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-16',  'rol1', NULL),
('USER-43', 'Norma Leticia Rubio Rubio', 'presidenciamunicipal@lamision.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-17',  'rol1', NULL),
('USER-44', 'T.S.U. Ana Mayela Calva Hernández', 'eca.orgmixquiahuala@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-18',  'rol1', NULL),
('USER-45', 'Maria Juliana Velazco Reyes', 'molangoobras2024@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-19',  'rol1', NULL),
('USER-46', 'C. José Manuel Simón Moreno', 'obras_20nf24@outlook.es', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-20',  'rol1', NULL),
('USER-47', 'Ana Patricia Salvador Zúñiga', 'ecanopala21@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-21',  'rol1', NULL),
('USER-48', 'Maria de los Ángeles Guerrero Mejía', 'culturadelagua.omitlan24@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-22',  'rol1', NULL),
('USER-49', 'Deysi María Castillo Rivera', 'agua@orizatlan.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-23',  'rol1', NULL),
('USER-5', 'Lic. Sandra Ethel Arciniega López ', 'culturadelagua.ajacuba@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-10',  'rol1', NULL),
('USER-50', 'Ing. Luis Eduardo Hernández Gómez', 'paculacapasap@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-24',  'rol1', NULL),
('USER-51', 'Lic. Yadira Garcia Franco', 'caasim@hidalgo.com.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-25',  'rol1', NULL),
('USER-52', 'Lic. Luis Garcia Contreras', 'luis.garciacon@conagua.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-26',  'rol1', NULL),
('USER-53', 'L.N.I. Martha Beatriz Mejía Hernández', 'ceaaculturahgo@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-27',  'rol1', NULL),
('USER-54', 'Mtro. Javier Rosas López', 'departamentodeeduacionambienta@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-28',  'rol1', NULL),
('USER-55', 'C. Rogelio Flores Morales', 'servicospublicos20.24@gmail.com ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-29',  'rol1', NULL),
('USER-56', 'C. Judith Pérez Trejo', ' bring1704@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-30',  'rol1', NULL),
('USER-57', 'Ing. Lucia Guerrero Guerra ', 'culturadelagua.mraldelareforma@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-08-31',  'rol1', NULL),
('USER-58', 'José Manuel Hernández López', 'delaguacultura638@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-01',  'rol1', NULL),
('USER-59', 'José Antonio Trejo Pérez', 'ceasbth@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-02',  'rol1', NULL),
('USER-6', 'Ing. Jimena Zamudio Sanchez ', 'caamah.culturadelagua24@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-11',  'rol1', NULL),
('USER-60', 'Lic. Marina Cruz Rivero', 'sculturadelagua@gmail.com ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-03',  'rol1', NULL),
('USER-61', 'Ing. Rosa María Vázquez Pérez', 'culturaagua2427@outlook.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-04',  'rol1', NULL),
('USER-62', 'Ing. Karina Hernández Gómez', 'ecacapassa24@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-05',  'rol1', NULL),
('USER-63', 'Salma Aileth Islas Torres', 'santiagoculturadelagua@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-06',  'rol1', NULL),
('USER-64', 'Ing. Elfego Tonatiu Flores Castañeda', 'ecosinguilucan2427@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-07',  'rol1', NULL),
('USER-65', 'Fidelia González González', 'tasquilloaguapotable@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-08',  'rol1', NULL),
('USER-66', 'Lic. Fernanda Guadalupe De la Cruz Rojo', 'eca.caast.tecozautla@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-09',  'rol1', NULL),
('USER-67', 'Ángel de Jesús Sevilla Caro', 'servimpal2021@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-06',  'rol1', NULL),
('USER-68', 'Ing. Saúl Cuellar Cordero', 'aguapotable@tepeapulco.gob.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-11',  'rol1', NULL),
('USER-69', 'Lic. Ricardo Bautista Resendiz', 'culturadelaguatepehuacan24@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-12',  'rol1', NULL),
('USER-7', 'L.A. Jahtziri Campos Lozada', 'comisiondeaguaalmoloya24.27@gimail.com ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-12',  'rol1', NULL),
('USER-70', 'Luis Armando Jiménez', 'culturadelagua@caamtroh.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-13',  'rol1', NULL),
('USER-71', 'Pablo Reyes Cerón', 'tepetitlan.aguapotable@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-14',  'rol1', NULL),
('USER-72', 'Yazareth Lopez Sanchez ', 'd.aguapotable.2024@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-15',  'rol1', NULL),
('USER-73', 'Lic. Alejandra Orozco González', 'ale.ebra1306@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-16',  'rol1', NULL),
('USER-74', 'C. Martha López Chávez', 'cayatah.eca@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-17',  'rol1', NULL),
('USER-75', 'Dorys M. Alonso C.', 'serviciostianguistengo@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-18',  'rol1', NULL),
('USER-76', 'C. Analilia Chávez Jauregui', 'caamth_culturadelagua@outlook.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-19',  'rol1', NULL),
('USER-77', 'Ing. Daniela Monserrat Hernández Reyes', 'culturadeaguatlahuelilpan@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-20',  'rol1', NULL),
('USER-78', 'C. Filimón Solís Vazquez', 'aguaalcantarilladotlahuiltepa@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-21',  'rol1', NULL),
('USER-79', 'Ing. Juan Carlos Ávila Olvera', 'aguapotable@tlanalapa.gob.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-22',  'rol1', NULL),
('USER-8', 'TLC. BRENDA ALVARADO ALEMÁN', 'caapan@live.com.mx', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-13',  'rol1', NULL),
('USER-80', 'Xavier Guerrero Cordero', 'vitemendozajoseluis@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-23',  'rol1', NULL),
('USER-81', 'Yanet Ángeles Juárez', 'culturadeagua.tlaxcoapan@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-24',  'rol1', NULL),
('USER-82', 'Maricruz Bautista Zamora', 'aguapotable.tolcayuca@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-25',  'rol1', NULL),
('USER-83', 'Ing. Kennia Islas Escamilla ', 'madonna_lozano@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-26',  'rol1', NULL),
('USER-84', 'María de los Ángeles Peña Gómez', 'tulancingo.organismo.eca@gmail.com\r ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-06',  'rol1', NULL),
('USER-85', 'Fabiola Vera Hernández', 'fabi120899@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-28',  'rol1', NULL),
('USER-86', 'Arq. Sonia Ortiz Camacho', 'cotastulancingo@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-29',  'rol1', NULL),
('USER-87', 'Luz Fabiola Gutierrez', 'Hernándezgmario02@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-09-30',  'rol1', NULL),
('USER-88', 'Alan Noe Pérez López', 'ecologiarecursos2024@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-10-01',  'rol1', NULL),
('USER-89', 'Arturo Cortés Hernández', 'culturadelaguayahualica@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-10-02',  'rol1', NULL),
('USER-9', 'TEC. ABIGAIL ESPARZA Hernández  ', 'elarenalaguayalcantarillado@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-14',  'rol1', NULL),
('USER-90', 'ING. ARISAID FLORES Gómez', 'desarrollourbano20242027@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-10-03',  'rol1', NULL),
('USER-91', 'Salvador Bolaños Pitón', 'ecologiazapotlan2021@gmail.com\r ', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-06',  'rol1', NULL),
('USER-92', 'C. Sergio Vera Franco', 'saguapotable2024@hotmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-10-05',  'rol1', NULL),
('USER-93', 'Dra. Guillermina María Guadalupe Acosta Barrera', 'zempoala7@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-10-06',  'rol1', NULL),
('USER-94', 'Ing. Jesus Everardo Guerrero', 'guerreroeverardo113@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-10-07',  'rol1', NULL),
('USER-95', 'C. Mariana Fernanda Acuña Tejeda', 'marianaferandaacuñatejeda@gmail.com', 'Sin correos extra', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-06',  'rol1', NULL);
('u_prueba_admin', 'admin', 'admin@gmail.com',  'Sin correos extra', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-23', 'rol5', NULL),
('u_prueba_ceaa', 'ceaa', 'ceaa@gmail.com', 'Sin correos extra', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-22', 'rol4', NULL),
('u_prueba_dic', 'dic', 'dic@gmail.com', 'Sin correos extra', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-23', 'rol2', NULL),
('u_prueba_eca', 'eca', 'eca@gmail.com', 'Sin correos extra', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-22', 'rol1', NULL),
('u_prueba_lic', 'lic', 'lic@gmail.com', 'Sin correos extra', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-23', 'rol3', NULL);

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
  ADD KEY `fk_eca_usuario` (`id_usuario`);

--
-- Indices de la tabla `espaciocultura`
--
ALTER TABLE `espaciocultura`
  ADD PRIMARY KEY (`id_espacio`),
  ADD KEY `fk_esp_eca` (`clave_eca`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `foto_activ`
--
ALTER TABLE `foto_activ`
  ADD PRIMARY KEY (`id_foto`),
  ADD KEY `fk_activ` (`id_actividad`);

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
-- Indices de la tabla `material_didact`
--
ALTER TABLE `material_didact`
  ADD PRIMARY KEY (`id_material`),
  ADD KEY `fk_id_espacio` (`id_espacio`);

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
  ADD KEY `fk_rneca_estatus` (`id_estatus`);

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
  ADD KEY `fk_prog_eca` (`clave_eca`);

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
  ADD CONSTRAINT `fk_eca_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `espaciocultura`
--
ALTER TABLE `espaciocultura`
  ADD CONSTRAINT `fk_esp_eca` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`clave_eca`);

--
-- Filtros para la tabla `foto_activ`
--
ALTER TABLE `foto_activ`
  ADD CONSTRAINT `fk_activ` FOREIGN KEY (`id_actividad`) REFERENCES `program_cult` (`id_program`);

--
-- Filtros para la tabla `material_didact`
--
ALTER TABLE `material_didact`
  ADD CONSTRAINT `fk_id_espacio` FOREIGN KEY (`id_espacio`) REFERENCES `espaciocultura` (`id_espacio`);

--
-- Filtros para la tabla `oficios_rneca`
--
ALTER TABLE `oficios_rneca`
  ADD CONSTRAINT `fk_rneca_eca` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`clave_eca`),
  ADD CONSTRAINT `fk_rneca_estatus` FOREIGN KEY (`id_estatus`) REFERENCES `tipo_estatus` (`id_estatus`);

--
-- Filtros para la tabla `program_cult`
--
ALTER TABLE `program_cult`
  ADD CONSTRAINT `fk_prog_eca` FOREIGN KEY (`clave_eca`) REFERENCES `eca` (`clave_eca`);

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
