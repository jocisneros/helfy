CREATE DATABASE IF NOT EXISTS personaldb;
USE personaldb;

CREATE TABLE IF NOT EXISTS users (
	id VARCHAR(100) NOT NULL,
    height INT NOT NULL,
    weight INT NOT NULL,
    gender VARCHAR(100) NOT NULL,
	experience INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS workout_history (
	id INT NOT NULL AUTO_INCREMENT,
	usersID VARCHAR(100) NOT NULL,
    workoutDate DATE NOT NULL,
	workoutType INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (usersID) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS exercise_history (
	id INT NOT NULL AUTO_INCREMENT,
	usersID VARCHAR(100) NOT NULL,
	exerciseID INT NOT NULL,
    workoutID INT NOT NULL,
	sets INT NOT NULL,
	reps INT NOT NULL,
	weight INT NOT NULL,
    exerciseName VARCHAR(100) NOT NULL,
	rating INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (usersID) REFERENCES users(id),
	FOREIGN KEY (workoutID) REFERENCES workout_history(id)
);