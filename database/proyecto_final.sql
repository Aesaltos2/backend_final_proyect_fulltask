-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2024 a las 14:06:49
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
-- Base de datos: `proyecto_final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencia`
--

CREATE TABLE `incidencia` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `asunto` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `tipo` enum('fontaneria','electricidad','limpieza','otros') NOT NULL,
  `estado` enum('pendiente','en_proceso','resuelta') NOT NULL,
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  `fecha_actualizacion` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `imagenes` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `incidencia`
--

INSERT INTO `incidencia` (`id`, `usuario_id`, `asunto`, `descripcion`, `tipo`, `estado`, `fecha_creacion`, `fecha_actualizacion`, `imagenes`) VALUES
(1, 1, 'Fuga de agua en el baño', 'Se ha detectado una fuga en el baño del apartamento 101.', 'fontaneria', 'en_proceso', '2024-09-03 22:05:13', '2024-09-11 04:24:50', NULL),
(26, 1, 'Fuga de agua en el baño', 'Se detectó una fuga en la tubería del baño.', 'fontaneria', 'resuelta', '2024-09-10 08:28:46', '2024-09-11 04:24:21', NULL),
(27, 1, 'Reparación de interruptor', 'El interruptor de la sala no funciona correctamente.', 'electricidad', 'resuelta', '2024-09-10 08:28:46', '2024-09-11 04:24:14', NULL),
(28, 2, 'Limpieza del área común', 'Es necesario limpiar la sala de reuniones.', 'limpieza', 'resuelta', '2024-09-10 08:28:46', '2024-09-11 04:24:19', NULL),
(30, 3, 'Fuga de gas', 'Se percibe olor a gas en la cocina.', 'fontaneria', 'en_proceso', '2024-09-10 08:28:46', '2024-09-10 08:55:40', NULL),
(32, 4, 'Cortocircuito en oficina', 'Hubo un cortocircuito en la oficina.', 'electricidad', 'en_proceso', '2024-09-10 08:28:46', '2024-09-10 08:55:43', NULL),
(33, 4, 'Problema con el desagüe', 'El desagüe del baño está tapado.', 'fontaneria', 'en_proceso', '2024-09-10 08:28:46', '2024-09-10 08:28:46', NULL),
(34, 5, 'Limpieza de pasillos', 'Los pasillos necesitan ser barridos.', 'limpieza', 'en_proceso', '2024-09-10 08:28:46', '2024-09-10 08:55:47', NULL),
(35, 5, 'Reparación de luminarias', 'Las luces en el pasillo no encienden.', 'electricidad', 'en_proceso', '2024-09-10 08:28:46', '2024-09-10 08:55:51', NULL),
(36, 2, 'Modi rerum sapiente ', 'Enim excepturi nesci', 'electricidad', 'en_proceso', '2024-09-10 08:29:42', '2024-09-10 08:55:54', NULL),
(39, 2, 'Rem quisquam cupidit', 'Magnam et nihil quo ', 'electricidad', 'en_proceso', '2024-09-10 08:39:03', '2024-09-10 08:55:57', NULL),
(42, 13, 'Modi incidunt commo', 'Harum quam neque qua', 'limpieza', 'en_proceso', '2024-09-11 05:20:13', '2024-09-11 05:20:13', NULL),
(43, 13, 'Provident quod aliq', 'Odit amet aliqua Q', 'electricidad', 'en_proceso', '2024-09-11 05:27:58', '2024-09-11 05:27:58', NULL),
(44, 13, 'Deleniti irure id n', 'Nisi irure illum la', 'limpieza', 'en_proceso', '2024-09-11 05:28:16', '2024-09-11 05:28:16', NULL),
(45, 13, 'Deserunt aliquid qua', 'Aut voluptatem disti', 'limpieza', 'en_proceso', '2024-09-11 05:32:35', '2024-09-11 05:32:35', NULL),
(46, 13, 'Ad et veniam rerum ', 'Esse distinctio Eve', 'fontaneria', 'en_proceso', '2024-09-11 05:34:35', '2024-09-11 05:34:35', NULL),
(47, 13, 'Et deserunt placeat', 'Praesentium lorem om', 'fontaneria', 'en_proceso', '2024-09-11 05:35:16', '2024-09-11 05:35:16', NULL),
(48, 13, 'Minim sint totam aut', 'Eum laudantium in q', '', 'en_proceso', '2024-09-11 05:35:50', '2024-09-11 05:35:50', NULL),
(49, 13, 'Ea consequatur simi', 'In autem adipisicing', 'fontaneria', 'en_proceso', '2024-09-11 05:37:28', '2024-09-11 05:37:28', NULL),
(50, 13, 'Possimus aute provi', 'Laudantium accusamu', 'electricidad', 'en_proceso', '2024-09-11 05:40:54', '2024-09-11 05:40:54', NULL),
(51, 13, 'Do eligendi aliqua ', 'Eum et provident ma', 'fontaneria', 'en_proceso', '2024-09-11 05:42:37', '2024-09-11 05:42:37', NULL),
(52, 13, 'Ut sit quia sit in', 'Ea illo voluptas lab', '', 'en_proceso', '2024-09-11 05:42:50', '2024-09-11 05:42:50', NULL),
(53, 13, 'Tenetur adipisicing ', 'Non qui ad corrupti', 'limpieza', 'en_proceso', '2024-09-11 05:44:36', '2024-09-11 05:44:36', NULL),
(55, 13, 'Repudiandae eu quo a', 'Aliqua Esse consequ', 'fontaneria', 'en_proceso', '2024-09-11 06:07:36', '2024-09-11 06:07:36', NULL),
(56, 13, 'Omnis inventore vita', 'Expedita quibusdam q', 'fontaneria', 'en_proceso', '2024-09-11 06:08:55', '2024-09-11 06:08:55', NULL),
(57, 13, 'sadfasdf', 'aaaaaaaaaaaaaaaaaa', 'fontaneria', 'resuelta', '2024-09-11 06:09:36', '2024-09-11 06:30:08', NULL),
(58, 13, 'Nobis laborum Exerc', 'Reprehenderit qui cu', 'electricidad', 'en_proceso', '2024-09-11 06:16:43', '2024-09-11 06:16:43', NULL),
(62, 13, 'Et minim in libero s', 'Ipsum quidem non non', 'limpieza', 'en_proceso', '2024-09-11 06:26:18', '2024-09-11 06:26:18', NULL),
(63, 13, 'Non magni est sapien', 'Mollit veniam ab au', '', 'pendiente', '2024-09-11 06:45:57', '2024-09-11 06:45:57', NULL),
(65, 2, 'Est est officiis do', 'Est reiciendis iste', 'otros', 'pendiente', '2024-09-11 06:52:48', '2024-09-11 06:52:48', NULL),
(66, 2, 'Tenetur consequatur', 'Quibusdam incidunt ', 'fontaneria', 'pendiente', '2024-09-11 06:53:18', '2024-09-11 06:53:18', NULL),
(67, 2, 'Quasi dolorum ad vol', 'Recusandae In asper', 'electricidad', 'pendiente', '2024-09-11 06:54:13', '2024-09-11 06:54:13', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `departamento` varchar(50) NOT NULL,
  `rol` enum('residente','administrador') NOT NULL,
  `numero_contacto` varchar(15) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `departamento`, `rol`, `numero_contacto`, `fecha_creacion`) VALUES
(1, 'Adrian', 'Saltos', 'adrian@gmail.com', '$2b$10$B8du6D5/mv.i9F609bwD5OAZjdAAYbPkXuikJGPbyKHyNiCeI4Tja', 'Ak40', 'administrador', '0987654321', '2024-09-09 02:01:35'),
(2, 'Carlos', 'Perez', 'carlos@gmail.com', '$2b$10$B8du6D5/mv.i9F609bwD5OAZjdAAYbPkXuikJGPbyKHyNiCeI4Tja', 'Ak40', 'residente', '0987654321', '2024-09-09 02:01:35'),
(12, 'afasdf', 'asdfasd', 'adrian2@gmail.com', '$2b$10$EdKnCFIfFulwTuO/k8vk8u1piJNLohh.05ifhUgddbWyIz8.P1hz6', 'Alks', 'residente', '0987654321', '2024-09-09 11:31:26'),
(13, 'Quaerat enim nihil v', 'Cupidatat vel laboru', 'laruw@mailinator.com', '$2b$10$zUnfJRRKdDqidnowQk9jp.QvMEtggR9V.tNbRsC15RscMO95m87hO', 'Veniam ut ratione e', 'residente', '+1 (175) 159-47', '2024-09-11 09:25:56'),
(14, 'Nisi aperiam occaeca', 'Dolores dolore volup', 'dymysof@mailinator.com', '$2b$10$VEbwYZN62.P1rXddQ0D.xOBeTvfme0/UYxXw5D0yB0kx//.HqppPS', 'Aut aliquid magni oc', 'residente', '+1 (897) 461-45', '2024-09-11 11:56:38');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
