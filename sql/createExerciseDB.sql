CREATE DATABASE IF NOT EXISTS exercisedb;
USE exercisedb;

CREATE TABLE IF NOT EXISTS exercises (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    difficulty INT NOT NULL,
    tips VARCHAR(300) NOT NULL,
    link VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS muscle_groups (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS muscle_groups_in_exercises (
	exerciseID INT NOT NULL,
    muscleID INT NOT NULL,
	intensity INT NOT NULL,
	FOREIGN KEY (exerciseID) REFERENCES exercises(id),
    FOREIGN KEY (muscleID) REFERENCES muscle_groups(id)
);

CREATE TABLE IF NOT EXISTS equipment (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS equipment_in_exercises (
	exerciseID INT NOT NULL,
	equipmentID INT NOT NULL,
	FOREIGN KEY (exerciseID) REFERENCES exercises(id),
    FOREIGN KEY (equipmentID) REFERENCES equipment(id)
);
