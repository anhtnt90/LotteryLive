-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 04, 2013 at 01:36 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `xs`
--

-- --------------------------------------------------------

--
-- Table structure for table `xo_so_truyen_thong_mb`
--

DROP TABLE IF EXISTS `xo_so_truyen_thong_mb`;
CREATE TABLE IF NOT EXISTS `xo_so_truyen_thong_mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `result_json` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `date` (`date`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `xo_so_truyen_thong_mb`
--

INSERT INTO `xo_so_truyen_thong_mb` (`id`, `date`, `result_json`) VALUES
(1, '2013-07-04', '{xxx:xxx}'),
(2, '2013-07-02', '{123:abc}'),
(3, '2013-07-03', '{ "A" : "91840", 	"B" : "33292", 	"C" : "18855;44817", 	"D" : "65963;36748;42968;98788;62369;37381", 	"E" : "5802;3217;5697;5812", 	"F" : "2861;7896;1129;4790;2593;3809", "G" : "186;578;274", 	"H" : "10;66;63;54" }');
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
