-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-09-2024 a las 13:57:31
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
  `tipo` enum('fontaneria','electricidad','limpieza','otro') NOT NULL,
  `estado` enum('pendiente','en_proceso','resuelta') NOT NULL,
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  `fecha_actualizacion` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `incidencia`
--

INSERT INTO `incidencia` (`id`, `usuario_id`, `asunto`, `descripcion`, `tipo`, `estado`, `fecha_creacion`, `fecha_actualizacion`) VALUES
(1, 1, 'Fuga de agua en el baño', 'Se ha detectado una fuga en el baño del apartamento 101.', 'fontaneria', 'pendiente', '2024-09-03 22:05:13', '2024-09-03 22:05:13'),
(2, 2, 'Problema con las luces en el pasillo', 'Las luces del pasillo del piso 2 parpadean constantemente.', 'electricidad', 'en_proceso', '2024-09-03 22:05:13', '2024-09-03 22:05:13');

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
(12, 'afasdf', 'asdfasd', 'adrian2@gmail.com', '$2b$10$EdKnCFIfFulwTuO/k8vk8u1piJNLohh.05ifhUgddbWyIz8.P1hz6', 'Alks', 'residente', '0987654321', '2024-09-09 11:31:26');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD CONSTRAINT `incidencia_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
