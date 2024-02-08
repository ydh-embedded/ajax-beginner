-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 12. Sep 2023 um 14:36
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `company`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_persons`
--

CREATE TABLE `tbl_persons` (
  `perso_id` int(11) NOT NULL,
  `perso_firstname` varchar(50) DEFAULT NULL,
  `perso_lastname` varchar(50) NOT NULL,
  `perso_age` tinyint(4) NOT NULL,
  `perso_hometown` varchar(50) NOT NULL,
  `perso_job` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `tbl_persons`
--

INSERT INTO `tbl_persons` (`perso_id`, `perso_firstname`, `perso_lastname`, `perso_age`, `perso_hometown`, `perso_job`) VALUES
(1, 'Peter', 'Griffin', 41, 'Quahong', 'Brewery'),
(2, 'Lois', 'Griffin', 40, 'Newport', 'Piano Teacher'),
(3, 'Joseph', 'Swanson', 39, 'Quahong', 'Police Officer'),
(4, 'Glenn', 'Quagmire', 41, 'Quahong', 'Pilot');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `tbl_persons`
--
ALTER TABLE `tbl_persons`
  ADD PRIMARY KEY (`perso_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `tbl_persons`
--
ALTER TABLE `tbl_persons`
  MODIFY `perso_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
