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
('DET-ECA-1', '7757545148 ext. 111 Cel: 7775 133 4173', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 archivero.', '1 cámara fotográfica, 1 cámara de video, 1 equipo de sonido, 1 impresora, 1 lap top, 1 computadora, 1 televisor de 43\"', '1 maqueta Contaminación de una Cuenca,  1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-1-1-1'),
('DET-ECA-10', '7787373752 EXT 103 Y 107 Cel. 7717770855', 'LUN-VIER 8:30 AM -04:30 PM - SAB 8:30', '1 archivero con cuatro gavetas', '2 televisiones, 1 computadora de escritorio, 2 cámaras fotografías, 2 laptops, 1 pantalla para proyección con tripie, 1 reproductor de DVD.', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Ciclo del Agua 3D, 1 maqueta Potabilización y Drenaje, 1 maqueta de recic', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-10-1-1'),
('DET-ECA-11', 'Tel: 7898944005  Cel: 7715267920', 'LUN-VIER 9:00 AM -04:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', '1 laptop, 1 proyector, 1 pantalla 50\"', '1 maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-11-1-1'),
('DET-ECA-12', '7711464295  Cel:  7711464295', 'LUN-VIER 8:30 AM -04:30 PM', '1 silla secretarial, 2 archivero, 1 escritorio secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 proyector, 1 equipo de perifoneo, 1 equipo de sonido, 2 cámara fotografica,1 impresora, 1 computadora de escritorio, 1 pantalla de 32\", 1 reproducto', '1 Maqueta Mantos Acuíferos , 1 Maqueta Contaminación de una Cuenca, 1 Maqueta ciclo del Agua,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper d', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-12-1-1'),
('DET-ECA-13', 'Tel: 7787351686  Cel: 778351686', 'LUN-VIER 8:00 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 1 silla blanca de plastico, 1 pizarron,  1 Pantalla para proyeccion con tripie, 1 Televiso', '1 laptop, 1 proyector, 1 equipo de perifoneo, 1 equipo de sonido, 1 impresora, 1 DVD, 1 computadora de escritorio, 2 cámara fotográfica, 1 video proye', '1 Maqueta Contaminación de una Cuenca, 1 Maqueta Mantos Acuíferos, 1 Maqueta Ciclo del Agua 3D,1 Maqueta Potabilización y Drenaje, 1 Cascos de Realida', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-13-1-1'),
('DET-ECA-14', 'Cel: 7713575676', 'LUN-VIER 9:00 AM -04:00 PM', '1 silla secretarial, escritorio secretarial, archivero', '1 television, 1 videocasetera,1 CPU, 1 monitor, 2 laptop, 3 proyector, 1 equipo de perifoneo, equipo de sonido, 2 impresora, 1 computadora de escritor', '1 maqueta Contaminación de una Cuenca, 1 maqueta Mantos Acuíferos, 1 maqueta ciclo del Agua 3D,1 Maqueta Potabilización y Drenaje, 1 Cascos de Realida', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-14-1-1'),
('DET-ECA-15', 'Tel: 7597270003 Cel: 7721543575', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 15 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 televisión, 1 videocasetera, 1 proyector, 1 laptop, 1 impresora,1 computadora de escritorio,1 DVD, 1 pantalla 32\", 1 cámara fotográfica.', '1 maqueta Contaminación de una Cuenca, 1 maqueta de Relleno Sanitario,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de ide', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-15-1-1'),
('DET-ECA-16', '7757703600', 'LUN-VIER 8:30 AM -04:30 PM', '1 silla secretarial,  1 escritorio secretarial, 1 archivero, 1 mesa Plegable y  5 sillas Plegable', '1 cámara fotográfica, 1 pantalla de proyección, 1 laptop, 1 equipo de sonido,1 equipo de perifoneo, 1 impresora, 1 cámara de video, 1 computadora de e', 'Maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos,1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de identificac', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-16-1-1'),
('DET-ECA-17', 'Tel: 7637285034 Cel: 7731309111', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 archivero, 1 escritorio secretarial, 15 silla blanca de plastico, 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 laptop, 1 cámara fotográfica, 1 DVD, 1 pantalla 32\", 1 impresora, 1 computadora de escritorio, 1 Televisor de 50\", 1 Proyector y', '1 maqueta Contaminación de una Cuenca, 1 maqueta Mantos Acuíferos,,1 Cascos de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identif', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-17-1-1'),
('DET-ECA-18', 'Tel: 4833782056 Cel: 7713519386', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 15 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 equipo de sonido, 1 impresora, 1 Televisor de 50\", 1 Proyector y 1 LapTop', '1 maqueta Contaminación de una Cuenca, ,1 Cascos de Realidad virtual, 1 Quiz del Agua, 1 súper del agua, 1 placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-18-1-1'),
('DET-ECA-2', '7767629750 oficina 7761341136 personal', 'LUN-VIER 8:30 AM -04:30 PM', '1 Escritorio secretarial, 1 silla secretarial, 1 Archivero de 4 gavetas, 1 Mesa Plegable y  5 sillas Plegables', '1 monitor, 1 cámara fotográfica, 1 impresora multifuncional, 1 CPU, 2 laptop, 1 computadora de escritorio Slimline , 1 pantalla de 32\" HISENSE,1 repro', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta reciclaje,1 relleno sanitario y agua limpia, 1 Cascos de Realidad virtual', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-2-1-1'),
('DET-ECA-3', '7721811872', 'LUN-VIER 8:30 AM -04:00 PM', '1 archivero, 1 escritorio secretarial, 1 silla secretarial,  1 pantalla para proyección con tripie, 1 toldo, 2 sillas, 1 mesa plegable.', '1 computadora de escritorio, 1 impresora, 1 pantalla 32\", 1 DVD, 1 CPU, 1 monitor, 1 mini laptop, 1 video proyector, 1 cámara fotográfica, 1 botarga i', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca,  1 maqueta Potabilización y Drenaje, 1 maqueta Ciclo del Agua,  1 super del agua, 1', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-3-1-1'),
('DET-ECA-4', 'Tel: 7749741030 Cel: 771 332 5613', 'LUN-VIER 8:30 AM -04:00 PM', '1 silla secretarial, 1 escritorio, 6 sillas plegables, 1 tablón mesa', '1 laptop, 1 proyector, 1 pantalla 50\"', '1 maqueta Contaminación de una Cuenca, 1 super del agua, 1 quiz del agua, 1 lentes de RV, 1  placa de identificación', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-4-1-1'),
('DET-ECA-5', '7731723650', 'LUN-VIER 9:00 AM - 4:00 PM Y SABADO 9:00 AM - 2:00', '1 escritorio secretarial, 1 silla secretarial, 1 silla plastico,1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 1 Proyector y 1 LapTop, 1 equipo de sonido,1 DVD, 1 botarga', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua,  1 placa de ident', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-5-1-1'),
('DET-ECA-6', 'Tel: 7387288392  Cel: 7721183689', 'LUN- VIERN 8:00 AM- 3:00 PM SAB 9:00 AM - 1:00 PM', '1 escritorio secretarial, 1 silla secretaria, 1 archiverol, 1 sillas blancas , 1 pizarron, 1 Mesa Plegable y  5 sillas Plegables', '1 cámara fotográfica, 1 equipo de sonido, 1 DVD, 1 pantalla de proyector, 1 equipo de perifoneo, 1 cámara de video,1 computadora de escritorio, 1 pant', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminacion de una Cuenca, 1 Maqueta Potabilización y Drenaje y 1 Cascos de Realidad virtual y 1 Quiz del Agua', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-6-1-1'),
('DET-ECA-7', 'Cel: 7751363861 7489121833', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 2 Archivero, 1 Pantalla de Proyeccion, 1 Toldo, 2 Sillas, 1 Mesa plegable, 1 Mesa Plegable y  5 sillas ', '1 proyector, 1 cámara fotografica, 1 computadora de escritorio, 1 impresora,1 pantalla 32\", 1 botarga, 1 bocina, 1 Televisor de 50\", 1 Proyector y 1 L', '1 Maqueta Mantos Acuíferos, 1 Maqueta Contaminación de una Cuenca y 1 Cascos de Realidad virtual y 1 Quiz del Agua, 1 súper del agua, 1 placa de ident', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-7-1-1'),
('DET-ECA-8', 'Tel: 7489127134 Cel: 7489127134', 'LUN-VIER 9:00 AM- 4:30 SAB 9:00 A 1:00', '1 silla secretarial, 1 escritorio secretarial, 2 archivero, 1 Mesa Plegable y  5 sillas Plegables', '2 proyector, 1 laptop, 1 equipo de sonido,1 cámara de video,1 pantalla de 32\", 1 DVD computadora de escritorio, 2 cámara fotográfica, 1 CPU, 1 monitor', '1 maqueta Mantos Acuíferos, 1 maqueta Contaminación de una Cuenca, 1 maqueta Ciclo del Agua 3D, 1 maqueta Potabilización y Drenaje, ,1 Cascos de Reali', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-8-1-1'),
('DET-ECA-9', '7721812746', 'LUN-VIER 8:30 AM -04:00 PM', '1 escritorio secretarial, 1 silla secretarial, 1 archivero, 1 silla blanca de plastico, 1 pizarrón, 1 Mesa Plegable y  5 sillas Plegables', '1 Televisor de 50\", 2 Proyector y 2 LapTop, 1 equipo de sonido, 1 cámara fotográfica, 1 impresora, 1 DVD, 1 pantalla de 32\", 1 computadora de escritor', 'Maqueta Contaminación de una Cuenca, maqueta Mantos Acuíferos, maqueta Ciclo del Agua, maqueta potabilización y drenaje,1 Casco de Realidad virtual y ', 'Los ECAS, generalmente atienden a la población de las cabeceras municipales y comunidades cercanas.', 'EST-1K2LMP4X', '13-9-1-1');

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
('DIR-11', '43060', 'Atlapexco', 'Centro', 'Pino', 's/n', 'Municipio', 'MUN-11'),
('DIR-12', '43300', 'Atotonilco el Grande', 'Centro', 'Plaza principal', '334', 'Municipio', 'MUN-12'),
('DIR-13', '42980', 'Atotonilco de Tula', 'Los Compadres', 'Republica de Cuba', 's/n', 'Organismo Operador Municipal', 'MUN-13'),
('DIR-14', '43233', 'Calnali', 'Centro', 'Av. Juarez', 's/n', 'Organismo Operador Municipal', 'MUN-14'),
('DIR-15', '42370', 'Cardonal', 'Centro', 'Benito Pablo Juárez Garcia', '4', 'Organismo Operador Municipal', 'MUN-15'),
('DIR-16', '43740', 'Cuautepec de Hinojosa', 'Centro', 'Benito Juárez', 's/n', 'Organismo Operador Municipal', 'MUN-16'),
('DIR-17', '42900', 'Chapantongo', 'Barrio Guadalupe', 'Palacio Municipal', '34', 'Organismo Operador Municipal', 'MUN-17'),
('DIR-18', '42280', 'Chapulhuacán', 'Centro', 'Francisco Sarabia', 's/n', 'Municipio', 'MUN-18'),
('DIR-2', '43720', 'Acaxochitlán', 'Centro', 'Matamoros', 's/n', 'Municipio', 'MUN-2'),
('DIR-3', '42500', 'Actopan', 'Alonso de Borja', 'Aviación', '201', 'Organismo Operador Municipal', 'MUN-3'),
('DIR-4', '43460', 'Agua Blanca Iturbide', 'Centro', 'Allende', 's/n', 'Municipio', 'MUN-4'),
('DIR-5', '42150', 'Ajacuba', 'Centro', 'Eustolia Becerra', 's/n', 'Organismo Operador Municipal', 'MUN-5'),
('DIR-6', '42390', 'Alfajayucan', 'Centro', 'Palacio Municipal', 's/n', 'Organismo Operador Municipal', 'MUN-6'),
('DIR-7', '43940', 'Almoloya', 'Centro', 'Pino', 's/n', 'Organismo Operador Municipal', 'MUN-7'),
('DIR-8', '43900', 'Apan', 'Centro', 'Lauro L. Mendez', 's/n', 'Organismo Operador Municipal', 'MUN-8'),
('DIR-9', '42680', 'El Arenal', 'Centro', 'Palacio Municipal', 's/n', 'Municipio', 'MUN-9');

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
  `fecha_registro` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eca`
--

INSERT INTO `eca` (`clave_eca`, `nombre_inst`, `nombre_inst_ope`, `poblacion_atend`, `fecha_apert`, `fecha_forta`, `fecha_cierre`, `motivo_cierre`, `id_usuario`, `id_estatus`, `id_direccion`, `fecha_registro`) VALUES
('13-1-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable Municipal', 439, '2004-12-13', '2023-12-28', NULL, NULL, 'USER-1', 'EST-1K2LMP4X', 'DIR-1', '2026-07-22'),
('13-10-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Atitalaquia (CAPASMAH)', 6924, '2003-04-15', '2023-12-27', NULL, NULL, 'USER-10', 'EST-1K2LMP4X', 'DIR-10', '2026-07-22'),
('13-11-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Ecología', 2960, '2001-11-26', '2025-12-19', NULL, NULL, 'USER-11', 'EST-1K2LMP4X', 'DIR-11', '2026-07-22'),
('13-12-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 8417, '2003-11-03', '2024-09-23', NULL, NULL, 'USER-12', 'EST-1K2LMP4X', 'DIR-12', '2026-07-22'),
('13-13-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Atotonilco de Tula (CAASAT)', 8822, '2004-12-01', '2024-09-23', NULL, NULL, 'USER-13', 'EST-1K2LMP4X', 'DIR-13', '2026-07-22'),
('13-14-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable y Alcantarillado del municipio de Calnali (CAPAC)', 4235, '2002-10-14', '2024-09-23', NULL, NULL, 'USER-14', 'EST-1K2LMP4X', 'DIR-14', '2026-07-22'),
('13-15-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Organismo Descentralizado de Agua Potable y Alcantarillado de Cardonal MOahi (ODAPYAC)', 755, '2002-10-14', '2024-09-23', NULL, NULL, 'USER-15', 'EST-1K2LMP4X', 'DIR-15', '2026-07-22'),
('13-16-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable, Alcantarillado y Saneamiento del municipio de Cuautepec de Hinojosa, Hidalgo (CAPASCHH)', 20530, '2002-09-01', '2024-09-23', NULL, NULL, 'USER-16', 'EST-1K2LMP4X', 'DIR-16', '2026-07-22'),
('13-17-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Sistema de Agua Potable Chapantongo (SAPC)', 2006, '2003-10-01', '2024-09-23', NULL, NULL, 'USER-17', 'EST-1K2LMP4X', 'DIR-17', '2026-07-22'),
('13-18-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Servicios Públicos Municipales', 4054, '2003-12-01', '2024-09-23', NULL, NULL, 'USER-18', 'EST-1K2LMP4X', 'DIR-18', '2026-07-22'),
('13-2-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable Municipal', 250, '2002-12-09', '2024-09-23', NULL, NULL, 'USER-2', 'EST-1K2LMP4X', 'DIR-2', '2026-07-22'),
('13-3-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del municipio de Actopan (CAASA)', 32276, '2004-12-13', '2023-12-27', NULL, NULL, 'USER-3', 'EST-1K2LMP4X', 'DIR-3', '2026-07-22'),
('13-4-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable Municipal', 2325, '2003-11-03', '2025-12-18', NULL, NULL, 'USER-4', 'EST-1K2LMP4X', 'DIR-4', '2026-07-22'),
('13-5-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Saneamiento del municipio de Ajacuba (CAYSA)', 8254, '2004-10-01', '2024-09-23', NULL, NULL, 'USER-5', 'EST-1K2LMP4X', 'DIR-5', '2026-07-22'),
('13-6-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua y Alcantarillado del municipio de Alfajayucan (CAAMAH)', 1794, '2004-10-01', '2024-09-23', NULL, NULL, 'USER-6', 'EST-1K2LMP4X', 'DIR-6', '2026-07-22'),
('13-7-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable del municipio de Almoloya (COMAAL)', 5618, '2004-12-01', '2024-09-23', NULL, NULL, 'USER-7', 'EST-1K2LMP4X', 'DIR-7', '2026-07-22'),
('13-8-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Comisión de Agua Potable y Alcantarillado del municipio de Apan (CAAPAN)', 28792, '2001-12-01', '2024-09-23', NULL, NULL, 'USER-8', 'EST-1K2LMP4X', 'DIR-8', '2026-07-22'),
('13-9-1-1', 'Comisión Estatal del Agua y Alcantarillado de Hidalgo', 'Dirección de Agua Potable', 3578, '2004-12-01', '2024-09-23', NULL, NULL, 'USER-9', 'EST-1K2LMP4X', 'DIR-9', '2026-07-22');

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
  `idClave_eca` char(12) NOT NULL,
  `id_estatus` char(20) NOT NULL DEFAULT 'EST-4HJVB2C9'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `oficios_rneca`
--

INSERT INTO `oficios_rneca` (`id_oficio`, `mes_oficio`, `ruta_oficio`, `observacion`, `fecha_registro`, `fecha_firma`, `fecha_obser`, `idClave_eca`, `id_estatus`) VALUES
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
  `password` varchar(255) NOT NULL,
  `cambiar_password` tinyint(1) NOT NULL,
  `fecha_registro` date NOT NULL DEFAULT current_timestamp(),
  `correoExtra` varchar(500) DEFAULT NULL,
  `telefono_extra` varchar(250) DEFAULT NULL,
  `id_rol` char(20) NOT NULL,
  `id_dicm` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `correo`, `password`, `cambiar_password`, `fecha_registro`, `correoExtra`, `telefono_extra`, `id_rol`, `id_dicm`) VALUES
('USER-1', 'Alberto Islas López', 'agua.potable@acatlanhidalgo.gob.mx', '$2y$12$Yca/f1.o.wRjfHcudaLkVOdbZRVa1SQB6vUaj0y01hryXjUKgQPTK', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-10', 'C. Rosa Delia Olguín Prado', 'culturadelagua.capasmah@gmail.com', '$2y$12$X9jpKi9wapwkA6JMmcCJcuZvZJ1tMFvoOeSb9kn1Jbv4s1E9T9U4.', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-11', 'C. Hilario Hernández Bautista', 'mpioatlapexcoaguapotable@gmail.com', '$2y$12$P1QcLdXx65oKwq5ERsgkT.fqxyS90DTkgaRv1nZcgJVkAKwoqbsE.', 1, '2026-07-22', 'pedrorip640913@gmail.com', NULL, 'rol1', NULL),
('USER-12', 'Jaquelin Romero Mendoza', 'comisiondeagua@atotonilcoelgrande.gob.mx', '$2y$12$2UuZdQdI6vSRx4mM74O8xuXRUrVxD8NTJ9a2.mHv3lwqeHe0QgCYW', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-13', 'C. Mayra Ivette Solano Romero', 'cultura.caasat@outlook.com', '$2y$12$HcTQHPsKeiWRmc0cmAtsmegJuHPFKKRjt2xB5TEvMFZPIHXZ260Y6', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-14', 'Lic. Rossana Salas Alardin', 'culturadelaguacalnali2021@gmail.com', '$2y$12$qlNpYAkMNkMqLYzZvzLC1OEKhOuSkB..3pt0sU5k0IsfBE2xMdwgm', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-15', 'Moisés Cardón Martínez', 'culturadelaguamohai@gmail.com', '$2y$12$sdgDzroXQhqOD8RQpqgp0.TeUEYUBx1614Of42jjyiqopSXCVX8Gi', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-16', 'Cynthia Becerril Enciso', 'capaschh@gmail.com', '$2y$12$1rfnVXMBt7KXdtoP/3Eor.7nXc9kjCnTk8sRcSG/AXmwQX5NJbMC2', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-17', 'Jennifer Nava Ángeles', 'sapchapantongo@hotmail.com', '$2y$12$.aQDPSgC5kLOf6NPTCfQH..9H21R.sEuARJattf1ym1ilTCTNAcvm', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-18', 'Wendy Lima Nuñez', 'serviciospublicoschapulhuacan@hotmail.com', '$2y$12$jfsN1RUr3MGRtX7KFzAny.1FzXu1wUUkuUPp6Dl1wHW6xtir660tq', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-2', 'C.Citlali Ortíz Esteban', 'ECA.presidencia.acaxochitlan@gmail.com', '$2y$12$8QSgAcrRcczhMuS4kR.OMew7tySKwCebV5uUu/Ud046CtSBbrf6rW', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-3', 'Lic.José Adrián Chávez Cruz', 'enlaceh2o.actopan@gmail.com', '$2y$12$eHkCL0mUhTBjq6nHiEQOAORYC2IUBXpZQKOavJAHXL79TCl8247hm', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-4', 'Raúl Santos Muñoz', 'aguapotable@aguablanca.gob.mx', '$2y$12$I6vTDdkms20mOL.XnKg31eYEx.DaCSjsD.5Dw.yC2aSZI6DKpD8NS', 1, '2026-07-22', 'liannyandre8486@gmail.com', NULL, 'rol1', NULL),
('USER-5', 'Lic. Sandra Ethel Arciniega López', 'culturadelagua.ajacuba@gmail.com', '$2y$12$gEgcMkzxTgcOcE5b2KGaMOjhFL9G7/8q/.g6/v4v7Y4TplSz8a98m', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-6', 'Ing. Jimena Zamudio Sanchez', 'caamah.culturadelagua24@gmail.com', '$2y$12$zxUqHjdJ4gZcg3WkV8Fj9.XHDyk0sgnxnNjc.w9gWfOYIWPURgjFu', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-7', 'L.A. Jahtziri Campos Lozada', 'comisiondeaguaalmoloya24.27@gimail.com', '$2y$12$qZ4e8CINuFgrcsDPil3BIuo7a8z2ACBmSDIbG5w2uoCIe5FAwsAAi', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('USER-8', 'TLC. BRENDA ALVARADO ALEMÁN', 'caapan@live.com.mx', '$2y$12$jw8mOJnc0xpKv/d/AzjDDOsnNCsdl3pWrl2lUqF1.NSshRDuKv9sS', 1, '2026-07-22', 'lopivonn@gmail.com', NULL, 'rol1', NULL),
('USER-9', 'TEC. ABIGAIL ESPARZA HERNANDEZ', 'elarenalaguayalcantarillado@gmail.com', '$2y$12$sZWWtoR.COQLSlIkan/WLu7vhzEUYYpyoaOa4LpaclDiSWRBdzRuS', 1, '2026-07-22', NULL, NULL, 'rol1', NULL),
('u_prueba_admin', 'admin', 'admin@gmail.com', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-23', NULL, NULL, 'rol5', NULL),
('u_prueba_ceaa', 'ceaa', 'ceaa@gmail.com', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-22', NULL, NULL, 'rol4', NULL),
('u_prueba_dic', 'dic', 'dic@gmail.com', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-23', NULL, NULL, 'rol2', NULL),
('u_prueba_eca', 'eca', 'eca@gmail.com', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-22', NULL, NULL, 'rol1', NULL),
('u_prueba_lic', 'lic', 'lic@gmail.com', '$2y$12$adMatpGzED8c9vUb90uWKOuonvZjSHMessXnNqtbtatv7CkT7ZODu', 0, '2026-07-23', NULL, NULL, 'rol3', NULL);

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
  ADD KEY `fk_rneca_eca` (`idClave_eca`),
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
  ADD CONSTRAINT `fk_rneca_eca` FOREIGN KEY (`idClave_eca`) REFERENCES `eca` (`clave_eca`),
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
