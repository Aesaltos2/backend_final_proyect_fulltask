-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 11:31:23
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
-- Base de datos: `final_proyect_as`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `categoryid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`categoryid`, `name`) VALUES
(8, 'Actualidad'),
(3, 'Education'),
(4, 'Health'),
(2, 'Lifestyle'),
(9, 'Religion'),
(11, 'Religiones del Mundo'),
(7, 'Sports'),
(1, 'Technology'),
(5, 'Travel'),
(6, 'Videogames');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `commentid` int(11) NOT NULL,
  `content` text NOT NULL,
  `userid` int(11) NOT NULL,
  `postid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`commentid`, `content`, `userid`, `postid`) VALUES
(1, 'Great article on JavaScript!', 3, 1),
(2, 'Very informative, thanks for sharing.', 2, 2),
(3, 'I would love to visit these places.', 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `postid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`postid`, `title`, `content`, `userid`) VALUES
(1, 'Introduction to JavaScript', 'JavaScript is a versatile language...', 2),
(2, 'Healthy Living Tips', 'Living a healthy life involves...', 3),
(3, 'Homework', 'Aqui se añade el resto de la informacion del contenido', 2),
(4, 'Homework', 'Aqui se añade el resto de la informacion del contenido', 1),
(5, 'Homework', 'Aqui se añade el resto de la informacion del contenido', 1),
(6, 'Homework', 'Aqui se añade el resto de la informacion del contenido', 1),
(7, 'Homework2', 'Aqui se añade el resto de la informacion del contenido', 1),
(8, 'Homework2', 'Aqui se añade el resto de la informacion del contenido', 1),
(9, 'Homework2', 'Aqui se añade el resto de la informacion del contenido', 1),
(16, 'Homework3', 'Aqui se añade el resto de la informacion del contenido', 1),
(23, 'Homework26', 'Aqui se añade el resto de la informacion del contenido', 1),
(25, 'Título de la publicación', 'Contenido de la publicación', 1),
(26, 'Título de la publicación', 'Contenido de la publicación', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post_categories`
--

CREATE TABLE `post_categories` (
  `postid` int(11) NOT NULL,
  `categoryid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `post_categories`
--

INSERT INTO `post_categories` (`postid`, `categoryid`) VALUES
(1, 3),
(2, 4),
(3, 6),
(4, 2),
(5, 6),
(7, 8),
(8, 4),
(9, 1),
(16, 3),
(23, 8),
(25, 3),
(26, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userid`, `username`, `email`, `password`, `role`) VALUES
(1, 'admin10', 'admin1@email.com', 'qwerty12345', 'user'),
(2, 'user1', 'user1@example.com', '$2b$10$UJHrW1BfO0by4Te1PzPn4O58m3p7lGngVEqMEjCe5IDvsAeog4jqi', 'user'),
(3, 'user2', 'user2@example.com', '$2b$10$eJhZ9UIsQaNmlURmlS8PZexjOqW7QbflmhoV6nAFJUbqg5Jptq/e6', 'user'),
(4, 'user6', 'user6@example.com', 'qwerty12345', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryid`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentid`),
  ADD KEY `user_id` (`userid`),
  ADD KEY `post_id` (`postid`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postid`),
  ADD KEY `user_id` (`userid`);

--
-- Indices de la tabla `post_categories`
--
ALTER TABLE `post_categories`
  ADD PRIMARY KEY (`postid`,`categoryid`),
  ADD KEY `category_id` (`categoryid`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `commentid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `postid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`postid`) REFERENCES `posts` (`postid`);

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Filtros para la tabla `post_categories`
--
ALTER TABLE `post_categories`
  ADD CONSTRAINT `post_categories_ibfk_1` FOREIGN KEY (`postid`) REFERENCES `posts` (`postid`),
  ADD CONSTRAINT `post_categories_ibfk_2` FOREIGN KEY (`categoryid`) REFERENCES `categories` (`categoryid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
