CREATE DATABASE IF NOT EXISTS exercisedb;
USE exercisedb;

CREATE TABLE IF NOT EXISTS exercises (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    difficulty INT NOT NULL,
    tips VARCHAR(1200) NOT NULL,
    link VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS muscle_groups (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS workout_types (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS muscles_in_workout_types (
    muscleID INT NOT NULL,
	workoutTypeID INT NOT NULL,
    FOREIGN KEY (muscleID) REFERENCES muscle_groups(id),
	FOREIGN KEY (workoutTypeID) REFERENCES workout_types(id)
);

CREATE TABLE IF NOT EXISTS muscle_groups_in_exercises (
	exerciseID INT NOT NULL,
    muscleID INT NOT NULL,
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

