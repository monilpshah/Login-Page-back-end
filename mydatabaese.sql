-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 23, 2018 at 03:49 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydatabaese`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_tbl`
--

DROP TABLE IF EXISTS `category_tbl`;
CREATE TABLE IF NOT EXISTS `category_tbl` (
  `Id` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `IsActive` varchar(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_tbl`
--

INSERT INTO `category_tbl` (`Id`, `Name`, `IsActive`) VALUES
(1, 'Plastic', 'no'),
(2, 'fashion', 'no'),
(3, 'abc', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `cat_tbl`
--

DROP TABLE IF EXISTS `cat_tbl`;
CREATE TABLE IF NOT EXISTS `cat_tbl` (
  `Fk_Cat_Id` int(11) NOT NULL,
  `Cat_Name` varchar(500) NOT NULL,
  PRIMARY KEY (`Fk_Cat_Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cat_tbl`
--

INSERT INTO `cat_tbl` (`Fk_Cat_Id`, `Cat_Name`) VALUES
(101, 'Mobile'),
(102, 'Air Conditioner');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` float NOT NULL,
  `Image` text NOT NULL,
  `Mfg` varchar(100) NOT NULL,
  `Soh` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Id`, `Name`, `Price`, `Image`, `Mfg`, `Soh`) VALUES
(1, 'Rose', 30, 'Path', 'sun enterprice', 100),
(3, 'Bench', 5000, 'Path', 'Furniture', 500),
(2, 'Smit', 0.25, '../../assets/images/Chrysanthemum.jpg', 'Rajukaka', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_tbl`
--

DROP TABLE IF EXISTS `product_tbl`;
CREATE TABLE IF NOT EXISTS `product_tbl` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Price` float NOT NULL,
  `Qty` int(11) NOT NULL,
  `Mfg` varchar(500) NOT NULL,
  `Soh` int(11) NOT NULL,
  `Img` varchar(100) NOT NULL,
  `Color` varchar(30) NOT NULL,
  `Fk_Cat_Id` int(11) NOT NULL,
  `Descr` varchar(1000) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_tbl`
--

INSERT INTO `product_tbl` (`Id`, `Name`, `Price`, `Qty`, `Mfg`, `Soh`, `Img`, `Color`, `Fk_Cat_Id`, `Descr`) VALUES
(1, 'Redmi note 5 pro', 15000, 10, 'redmi', 20, '1.jpg', 'Red', 101, 'mobile j chhe.Vdhare panchat mate mi.com visit kro'),
(2, 'L.G', 30000, 1, 'Lg', 200, 'lg.jpg', 'white', 102, 'First class chhe. Vadhare Panchat nai krvani'),
(4, 'oppo F3', 15000, 10, 'Oppo', 100, 'oppof3.jpg', 'Black', 101, 'Oppo F3 Black Colour Camera phone'),
(3, 'iphone 8', 80000, 100, 'Apple', 131, 'iphone.jpg', 'black', 101, 'Apple ma jovanu hoy j nai'),
(5, 'Oppo F7', 25000, 100, 'Oppo', 150, 'oppo.jpg', 'Blue', 101, 'vdhare panchat mate google search kri levanu'),
(6, 'Redmi note 5', 12000, 50, 'Redmi', 100, 'mi.jpg', 'Gold', 101, 'Are tamare to bdha ma badhu description jovu hoy mare ktlu lakhavanu?'),
(7, 'Panasonic', 40000, 100, 'Panasonic', 20, 'panasonic.jpg', 'white', 102, 'Air Conditioner'),
(8, 'Whirlpool', 20000, 20, 'Whirlpool', 10, 'whirlpool.jpg', 'silver', 102, 'A.c');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `Rollno` int(11) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Mobileno` double NOT NULL,
  `Gender` varchar(7) NOT NULL,
  `City` varchar(20) NOT NULL,
  `Fee` float NOT NULL,
  PRIMARY KEY (`Rollno`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Rollno`, `Name`, `Mobileno`, `Gender`, `City`, `Fee`) VALUES
(1, 'Monil', 9173569994, 'Male', 'amd', 9000),
(2, 'Bunny', 9427806221, 'Male', 'amd', 1000),
(3, 'Smit', 9601488526, 'Male', 'amd', 5000),
(4, 'Mili', 217389327, 'Female', 'amd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `Id` int(11) NOT NULL,
  `Title` varchar(300) NOT NULL,
  `Status` varchar(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`Id`, `Title`, `Status`) VALUES
(1, 'Go to Market today', 'done'),
(2, 'Email to Monil', 'done'),
(3, 'Push code to GitHub', 'done'),
(4, 'Go to Movie', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
CREATE TABLE IF NOT EXISTS `usertable` (
  `emailId` varchar(50) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mobileNo` varchar(13) NOT NULL,
  `city` varchar(10) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(200) NOT NULL,
  PRIMARY KEY (`emailId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`emailId`, `userName`, `password`, `mobileNo`, `city`, `gender`, `address`) VALUES
('monil31199@gmail.com', 'monutechguru', 'monu', '9173569994', 'Ahmedabad', 'Male', 'Krishnanagar'),
('kartik@gmail.com', 'Kartik', 'dk', '1321312412789', 'Amd', 'Male', 'krishnanagar'),
('smit@gmail.com', 'sonu', 'sonu', '1234567890', 'Ahmedabad', 'Male', 'Paldi');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
