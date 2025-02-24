-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 24 fév. 2025 à 15:11
-- Version du serveur : 10.11.10-MariaDB
-- Version de PHP : 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `u825403542_audacieuses`
--

-- --------------------------------------------------------

--
-- Structure de la table `Administratifs`
--

CREATE TABLE `Administratifs` (
  `id_administratif` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `piece_jointe` varchar(50) DEFAULT NULL,
  `date_heure` datetime DEFAULT NULL,
  `id_client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Categories`
--

CREATE TABLE `Categories` (
  `id_categorie` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `icon` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Clients`
--

CREATE TABLE `Clients` (
  `id_client` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `id_unique` varchar(50) DEFAULT NULL,
  `id_planning` int(11) NOT NULL,
  `id_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Contenus`
--

CREATE TABLE `Contenus` (
  `id_contenu` int(11) NOT NULL,
  `type_contenu` varchar(50) DEFAULT NULL,
  `ordre` int(11) DEFAULT NULL,
  `contenu` text DEFAULT NULL,
  `id_seance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Modules`
--

CREATE TABLE `Modules` (
  `id_module` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `date_mise_a_jour` datetime DEFAULT NULL,
  `image_url` varchar(50) DEFAULT NULL,
  `id_categorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Modules_clients`
--

CREATE TABLE `Modules_clients` (
  `id_module` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `pourcentage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Planning`
--

CREATE TABLE `Planning` (
  `id_planning` int(11) NOT NULL,
  `titre` varchar(50) DEFAULT NULL,
  `ligne_planning` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Questions`
--

CREATE TABLE `Questions` (
  `id_question` int(11) NOT NULL,
  `texte_question` varchar(50) DEFAULT NULL,
  `exemple` varchar(50) DEFAULT NULL,
  `type_question` text DEFAULT NULL,
  `options` text DEFAULT NULL,
  `ordre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Questions_seances`
--

CREATE TABLE `Questions_seances` (
  `id_seance` int(11) NOT NULL,
  `id_question` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Reponses`
--

CREATE TABLE `Reponses` (
  `id_reponse` int(11) NOT NULL,
  `texte_reponse` varchar(50) DEFAULT NULL,
  `type_reponse` text DEFAULT NULL,
  `options_choisis` text DEFAULT NULL,
  `id_client` int(11) NOT NULL,
  `id_question` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Roles`
--

CREATE TABLE `Roles` (
  `id_role` int(11) NOT NULL,
  `nom_role` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Seances`
--

CREATE TABLE `Seances` (
  `id_seance` int(11) NOT NULL,
  `titre` varchar(50) DEFAULT NULL,
  `date_mise_a_jour` varchar(50) DEFAULT NULL,
  `image_url` varchar(50) DEFAULT NULL,
  `id_module` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Seances_clients`
--

CREATE TABLE `Seances_clients` (
  `id_seance` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `valide` tinyint(1) DEFAULT NULL,
  `date_validation` datetime DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Administratifs`
--
ALTER TABLE `Administratifs`
  ADD PRIMARY KEY (`id_administratif`),
  ADD KEY `id_client` (`id_client`);

--
-- Index pour la table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `Clients`
--
ALTER TABLE `Clients`
  ADD PRIMARY KEY (`id_client`),
  ADD KEY `id_planning` (`id_planning`),
  ADD KEY `id_role` (`id_role`);

--
-- Index pour la table `Contenus`
--
ALTER TABLE `Contenus`
  ADD PRIMARY KEY (`id_contenu`),
  ADD KEY `id_seance` (`id_seance`);

--
-- Index pour la table `Modules`
--
ALTER TABLE `Modules`
  ADD PRIMARY KEY (`id_module`),
  ADD KEY `id_categorie` (`id_categorie`);

--
-- Index pour la table `Modules_clients`
--
ALTER TABLE `Modules_clients`
  ADD PRIMARY KEY (`id_module`,`id_client`),
  ADD KEY `id_client` (`id_client`);

--
-- Index pour la table `Planning`
--
ALTER TABLE `Planning`
  ADD PRIMARY KEY (`id_planning`);

--
-- Index pour la table `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`id_question`);

--
-- Index pour la table `Questions_seances`
--
ALTER TABLE `Questions_seances`
  ADD PRIMARY KEY (`id_seance`,`id_question`),
  ADD KEY `id_question` (`id_question`);

--
-- Index pour la table `Reponses`
--
ALTER TABLE `Reponses`
  ADD PRIMARY KEY (`id_reponse`),
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_question` (`id_question`);

--
-- Index pour la table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Index pour la table `Seances`
--
ALTER TABLE `Seances`
  ADD PRIMARY KEY (`id_seance`),
  ADD KEY `id_module` (`id_module`);

--
-- Index pour la table `Seances_clients`
--
ALTER TABLE `Seances_clients`
  ADD PRIMARY KEY (`id_seance`,`id_client`),
  ADD KEY `id_client` (`id_client`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Administratifs`
--
ALTER TABLE `Administratifs`
  ADD CONSTRAINT `Administratifs_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `Clients` (`id_client`);

--
-- Contraintes pour la table `Clients`
--
ALTER TABLE `Clients`
  ADD CONSTRAINT `Clients_ibfk_1` FOREIGN KEY (`id_planning`) REFERENCES `Planning` (`id_planning`),
  ADD CONSTRAINT `Clients_ibfk_2` FOREIGN KEY (`id_role`) REFERENCES `Roles` (`id_role`);

--
-- Contraintes pour la table `Contenus`
--
ALTER TABLE `Contenus`
  ADD CONSTRAINT `Contenus_ibfk_1` FOREIGN KEY (`id_seance`) REFERENCES `Seances` (`id_seance`);

--
-- Contraintes pour la table `Modules`
--
ALTER TABLE `Modules`
  ADD CONSTRAINT `Modules_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `Categories` (`id_categorie`);

--
-- Contraintes pour la table `Modules_clients`
--
ALTER TABLE `Modules_clients`
  ADD CONSTRAINT `Modules_clients_ibfk_1` FOREIGN KEY (`id_module`) REFERENCES `Modules` (`id_module`),
  ADD CONSTRAINT `Modules_clients_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `Clients` (`id_client`);

--
-- Contraintes pour la table `Questions_seances`
--
ALTER TABLE `Questions_seances`
  ADD CONSTRAINT `Questions_seances_ibfk_1` FOREIGN KEY (`id_seance`) REFERENCES `Seances` (`id_seance`),
  ADD CONSTRAINT `Questions_seances_ibfk_2` FOREIGN KEY (`id_question`) REFERENCES `Questions` (`id_question`);

--
-- Contraintes pour la table `Reponses`
--
ALTER TABLE `Reponses`
  ADD CONSTRAINT `Reponses_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `Clients` (`id_client`),
  ADD CONSTRAINT `Reponses_ibfk_2` FOREIGN KEY (`id_question`) REFERENCES `Questions` (`id_question`);

--
-- Contraintes pour la table `Seances`
--
ALTER TABLE `Seances`
  ADD CONSTRAINT `Seances_ibfk_1` FOREIGN KEY (`id_module`) REFERENCES `Modules` (`id_module`);

--
-- Contraintes pour la table `Seances_clients`
--
ALTER TABLE `Seances_clients`
  ADD CONSTRAINT `Seances_clients_ibfk_1` FOREIGN KEY (`id_seance`) REFERENCES `Seances` (`id_seance`),
  ADD CONSTRAINT `Seances_clients_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `Clients` (`id_client`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
