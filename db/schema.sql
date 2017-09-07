### Schema

CREATE DATABASE meds_db;
USE meds_db;

CREATE TABLE medicineTab
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	dosage varchar(255) NOT NULL,
	taken BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

