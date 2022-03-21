-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 21 mars 2022 à 02:02
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bhland`
--

-- --------------------------------------------------------

--
-- Structure de la table `album`
--

CREATE TABLE `album` (
  `id` int(11) NOT NULL,
  `cover` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `pike` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `album`
--

INSERT INTO `album` (`id`, `cover`, `pike`, `name`) VALUES
(3, '../static/cover/pike278.png', 278, 'Unexpected Journeys'),
(5, '../static/cover/pike157.png', 157, 'Upside Down Skyway'),
(6, '../static/cover/pike166.png', 166, 'Region'),
(7, '../static/cover/pike51.png', 51, 'Claymation Courtyard'),
(10, '../static/cover/pike291.png', 291, 'Fogray'),
(11, '../static/cover/pike271.png', 271, 'The Squaring of the Circle'),
(12, '../static/cover/pike268.png', 268, 'Sonar Rainbow'),
(13, '../static/cover/pike65.png', 65, 'Hold Me Forever'),
(14, '../static/cover/pike0.png', 0, 'Test');

-- --------------------------------------------------------

--
-- Structure de la table `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `track` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `id_Album` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `music`
--

INSERT INTO `music` (`id`, `track`, `title`, `id_Album`) VALUES
(2, 1, 'Familiar Spirit', 3),
(3, 2, 'WtSS and tMW', 3),
(8, 1, 'Caterpillar Invasion', 5),
(9, 2, 'Skull Rock Cove', 5),
(10, 3, 'Suspension Bridge', 5),
(11, 4, 'Upside Down Skyway', 5),
(14, 7, 'Insects', 5),
(15, 5, 'Kendo Training Port', 5),
(16, 6, 'Braking Zones', 5),
(17, 1, 'Region', 6),
(18, 2, 'Castle Stairs', 6),
(19, 3, 'River of Liquid Fire', 6),
(20, 4, 'Clock Striking', 6),
(21, 5, 'Ancient Desert', 6),
(22, 1, 'Claymation Courtyard', 7),
(23, 2, 'Disintegration Mirrors', 7),
(24, 3, 'Chainsaw Slide', 7),
(25, 4, 'Eerie Canal', 7),
(28, 3, 'BooBoo Got His Black Belt', 3),
(30, 4, 'The Caterpillar\'s Trail', 3),
(31, 5, 'G.H.S. Live', 3),
(32, 1, 'Piston', 10),
(33, 2, 'Fogray', 10),
(34, 1, 'The Squaring of the Circle', 11),
(35, 2, 'Osirion', 11),
(36, 3, 'Scalp Assail', 11),
(37, 4, 'Fork', 11),
(38, 5, 'Mosaic Silk', 11),
(39, 6, 'Decake', 11),
(40, 1, 'Sonar Rainbow', 12),
(41, 2, 'The Maddening of Mercury', 12),
(42, 3, 'Debris', 12),
(43, 4, 'Venomous Fog', 12),
(44, 1, 'N', 13),
(45, 2, 'Y', 13),
(46, 3, 'C', 13),
(47, 4, '4', 13),
(48, 5, 'Ev', 13),
(49, 6, 'Er', 13),
(50, 1, 'Test 1', 14),
(51, 2, 'Test 2', 14),
(52, 3, 'Test 3', 14),
(54, 4, 'Test 4', 14),
(55, 5, 'Test 5', 14),
(56, 6, 'Test 6', 14);

-- --------------------------------------------------------

--
-- Structure de la table `rate`
--

CREATE TABLE `rate` (
  `id` int(11) NOT NULL,
  `rate` float NOT NULL,
  `id_User` int(11) NOT NULL,
  `id_Music` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `role`) VALUES
(3, 'Sam', 's_capron@hotmail.fr', '$2b$05$2GtasvmV4fiwhCs.77boNuDFkkTmh82FIioxUk313nDcqTIGmzKvi', 'admin'),
(6, 'test', 'test@test.fr', '$2b$05$g4mL/.tKOK8ou8wtcL/QlOvX9BLIMF3BWod5ytcTKADCCuF8yuRXa', 'user'),
(22, 'Sam', 's_capron@hotmail.fr', '$2b$05$Tf31MASMozBsGgL4SdhPIeFOJ6/ccaRndHfpSGzU5bb3WFj5Q67la', 'user'),
(23, 'Sam', 's_capron@hotmail.fr', '$2b$05$5lagGqKwgtUXGQ0VDho./Ofd9ibemfSjdscgBH7sNYprNvUg5bJfO', 'user');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Music_Album_FK` (`id_Album`);

--
-- Index pour la table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Rate_User_FK` (`id_User`),
  ADD KEY `Rate_Music0_FK` (`id_Music`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `album`
--
ALTER TABLE `album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT pour la table `rate`
--
ALTER TABLE `rate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `music`
--
ALTER TABLE `music`
  ADD CONSTRAINT `Music_Album_FK` FOREIGN KEY (`id_Album`) REFERENCES `album` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `Rate_Music0_FK` FOREIGN KEY (`id_Music`) REFERENCES `music` (`id`),
  ADD CONSTRAINT `Rate_User_FK` FOREIGN KEY (`id_User`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
