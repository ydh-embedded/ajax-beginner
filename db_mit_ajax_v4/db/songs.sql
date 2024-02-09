-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 09. Feb 2024 um 14:08
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
-- Datenbank: `laravel-db`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `songs`
--

CREATE TABLE `songs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `labels_id_ref` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `band` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `songs`
--

INSERT INTO `songs` (`id`, `labels_id_ref`, `title`, `band`, `created_at`, `updated_at`) VALUES
(1, 3, 'I!\' said.', 'Cheshire.', '2024-01-17 09:10:54', '2024-01-17 09:10:54'),
(2, 5, 'Who ever.', 'Said his.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(3, 1, 'She drew.', 'I\'ll set.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(4, 4, 'First it.', 'Allow me.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(5, 4, 'Dormouse.', 'A bright.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(6, 3, 'I was, I.', 'Alice to.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(7, 3, 'She took.', 'I should.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(8, 3, 'When the.', 'Then she.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(9, 2, 'I get it.', 'Dormouse.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(10, 1, 'Lizard\'s.', 'Knave of.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(11, 2, 'WHAT are.', 'For some.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(12, 1, 'Cheshire.', 'It\'s the.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(13, 1, 'I shan\'t.', 'She felt.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(14, 4, 'Dormouse.', 'Queen in.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(15, 3, 'King. On.', 'I\'ll set.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(16, 1, 'It quite.', 'So Alice.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(17, 3, 'Alice as.', 'Cheshire.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(18, 1, 'WOULD go.', 'Lizard\'s.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(19, 4, 'King say.', 'I\'m sure.', '2024-01-17 09:10:55', '2024-01-17 09:10:55'),
(20, 5, 'I should.', 'THAT\'S a.', '2024-01-17 09:10:55', '2024-01-17 09:10:55');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `songs_labels_id_ref_foreign` (`labels_id_ref`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `songs`
--
ALTER TABLE `songs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_labels_id_ref_foreign` FOREIGN KEY (`labels_id_ref`) REFERENCES `labels` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
