-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2022 at 08:25 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `development`
--
CREATE DATABASE IF NOT EXISTS `development` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `development`;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `GroupID` int(11) NOT NULL,
  `GroupName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`GroupID`, `GroupName`) VALUES
(1, 'React Team'),
(2, 'UI Team'),
(3, 'Mobile Team'),
(4, 'Angular Team'),
(5, 'API Team');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `MeetingID` int(11) NOT NULL,
  `GroupID` int(11) NOT NULL,
  `StartDate` datetime NOT NULL,
  `EndDate` datetime NOT NULL,
  `Description` varchar(50) NOT NULL,
  `Room` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`MeetingID`, `GroupID`, `StartDate`, `EndDate`, `Description`, `Room`) VALUES
(1, 4, '2022-11-22 18:06:20', '2022-11-22 19:06:20', 'Bugs Solving', 'Green Room'),
(2, 3, '2022-11-20 18:06:20', '2022-11-20 19:15:20', 'Client Requests', 'Red Room'),
(3, 2, '2022-12-14 10:00:00', '2022-12-14 11:30:00', 'Future Projects', 'Orange Room'),
(4, 1, '2023-01-08 09:00:00', '2023-01-08 09:30:00', 'Server Connection', 'Pink Room'),
(5, 4, '2022-11-23 08:00:00', '2022-11-23 09:30:00', 'Graphic Design VX1', 'White Room'),
(6, 3, '2023-01-30 12:15:00', '2023-01-30 12:15:00', 'New Features', 'Red Room'),
(7, 3, '2022-12-07 21:20:00', '2022-12-07 22:00:00', 'UX/UI', 'Blue Room'),
(8, 3, '2022-11-29 14:00:00', '2022-11-29 16:30:00', 'Responsive Requirements', 'Green Room'),
(9, 2, '2022-12-14 11:35:00', '2022-12-14 11:41:00', 'check20', 'ABC'),
(10, 3, '2022-12-04 19:52:00', '2022-12-04 20:53:00', 'check 30', 'White Room'),
(11, 3, '2022-11-24 20:05:00', '2022-11-24 20:05:00', 'fhjdeghf,jehgfrhdgfhshdfhdjcjhgschjgsdhgchdgschjds', 'erfhjdshfjdhsfkjhsdk'),
(12, 3, '2022-11-21 20:59:00', '2022-11-21 20:59:00', 'www', 'e77'),
(13, 4, '2022-11-22 18:00:00', '2022-11-22 18:06:00', 'ghh', 'hgh'),
(14, 4, '2022-11-22 19:07:00', '2022-11-22 19:10:00', 'ghh', 'hgh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`GroupID`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`MeetingID`),
  ADD KEY `GroupID` (`GroupID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `GroupID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `MeetingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`GroupID`) REFERENCES `groups` (`GroupID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
