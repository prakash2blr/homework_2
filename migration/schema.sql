DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE `emp_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100),
  `email` VARCHAR(100),
  `job_title` VARCHAR(100),
  `employee_code` VARCHAR(10),
  `phone` VARCHAR(100),
  `insert_datetime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);