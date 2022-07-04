-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2022 at 08:51 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usuarios`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_credencials`
--

CREATE TABLE `user_credencials` (
  `id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_credencials`
--

INSERT INTO `user_credencials` (`id`, `email`, `pass`, `rol`, `name`) VALUES
(20, 'gbasulto2015@gmail.com', '$2a$08$VEI0RoE5xrYVQT4sQ42OBOD4SDJIxedSXvySlqWQwV.ubeeYa.Gf6', 'admin', 'George Luis Basulto Reyes'),
(21, 'ana@gmail.com', '$2a$08$gIEZANJL2fpXbdyb6vfZTuBSFvYUbZZmhL3Lo7afXjJBf.wIl9x56', 'data entry', 'Anabel Campos de Castro'),
(24, 'bry@gmail.com', '$2a$08$upzhnFOL/92zH7JjEDLJB.zthiAyNtY9QW04UsxC8aQmEJPDVpZfG', 'data entry', 'Bryhana Basulto');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `ci` varchar(20) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `ul` varchar(20) NOT NULL,
  `experiencia` int(10) NOT NULL,
  `capago` int(10) NOT NULL,
  `resfamiliar` varchar(45) NOT NULL,
  `otrosIngresos` int(20) NOT NULL,
  `escolaridad` varchar(45) NOT NULL,
  `tasa` int(10) NOT NULL,
  `garantia` varchar(45) NOT NULL,
  `total` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `ci`, `nombre`, `apellidos`, `ul`, `experiencia`, `capago`, `resfamiliar`, `otrosIngresos`, `escolaridad`, `tasa`, `garantia`, `total`) VALUES
(3, '81031224907', 'George', 'Basulto', 'centro', 15, 7, '6', 10000, 'superior', 8, 'garantia-real', '1.0000000000000009'),
(12, '941022346578', 'Anabel', 'Campos', 'centro', 5, 6, '3', 5500, 'superior', 7, 'garantia-real', '1.0000000000001708'),
(14, '37367831133', 'Luis', 'Basulto', 'centro', 40, 5, '5', 4000, 'superior', 7, 'respaldo-colateral', '1.000000000000005'),
(19, '51051037638', 'Mirelsis', 'Reyes', 'contornos', 35, 4, '3', 3000, 'no-nivel-superior', 6, 'respaldo-colateral', '1.000000000000024');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_credencials`
--
ALTER TABLE `user_credencials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_credencials`
--
ALTER TABLE `user_credencials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
