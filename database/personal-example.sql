USE personaldb;

# users (id, name, height-inches, weight-pounds, gender, experience)
INSERT INTO users VALUES('abc0', 'Jane Doe', 65, 150, 'female', 0);
INSERT INTO users VALUES('abc1', 'Jimmy Neutron', 75, 145, 'male',1);
INSERT INTO users VALUES('abc2', 'Johnny Bravo', 74, 215, 'male', 2);
INSERT INTO users VALUES('abc3', 'Peter Griffin', 79, 205, 'male', 0);
INSERT INTO users VALUES('abc4', 'Velma Dinkley', 63, 140, 'female', 0);
INSERT INTO users VALUES('abc5', 'Shaggy Rogers', 78, 185, 'male', 2);
INSERT INTO users VALUES('abc6', 'Fred Jones', 76, 180, 'male', 1);
INSERT INTO users VALUES('abc7', 'Daphne Blake', 65, 130, 'female', 0);
INSERT INTO users VALUES('abc6', 'Ned Flanders', 75, 175, 'male', 1);
INSERT INTO users VALUES('abc7', 'Marge Simpson', 56, 125, 'female', 0);
INSERT INTO users VALUES('abc8', 'Big Chungus', 80, 250, 'other', 0);
INSERT INTO users VALUES('abc9', 'The Potato', 51, 95, 'other', 2);

# workout_history (id, usersID, workoutDate, workoutType)
INSERT INTO workout_history VALUES (1, 'abc0', '2023-01-01', 7)
INSERT INTO workout_history VALUES (2, 'abc0', '2023-01-02', 7)

INSERT INTO workout_history VALUES (3, 'abc1', '2023-01-02', 7)
INSERT INTO workout_history VALUES (4, 'abc1', '2023-01-03', 7)

INSERT INTO workout_history VALUES (5, 'abc2', '2023-01-01', 7)
INSERT INTO workout_history VALUES (6, 'abc2', '2023-01-02', 7)

INSERT INTO workout_history VALUES (7, 'abc3', '2023-01-02', 7)
INSERT INTO workout_history VALUES (8, 'abc3', '2023-01-03', 7)

INSERT INTO workout_history VALUES (9, 'abc4', '2023-01-01', 7)
INSERT INTO workout_history VALUES (10, 'abc4', '2023-01-02', 7)

INSERT INTO workout_history VALUES (11, 'abc5', '2023-01-02', 7)
INSERT INTO workout_history VALUES (12, 'abc5', '2023-01-03', 7)

INSERT INTO workout_history VALUES (13, 'abc6', '2023-01-01', 7)
INSERT INTO workout_history VALUES (14, 'abc6', '2023-01-02', 7)

INSERT INTO workout_history VALUES (15, 'abc7', '2023-01-02', 7)
INSERT INTO workout_history VALUES (16, 'abc7', '2023-01-03', 7)

INSERT INTO workout_history VALUES (17, 'abc8', '2023-01-01', 7)
INSERT INTO workout_history VALUES (18, 'abc8', '2023-01-02', 7)

INSERT INTO workout_history VALUES (19, 'abc9', '2023-01-02', 7)
INSERT INTO workout_history VALUES (20, 'abc9', '2023-01-03', 7)


# exercise_history (id, usersID, exerciseID, workoutID, sets, reps, weight, lengthOfTime, exerciseName)

#bicep

#chest

#Quads

#Traps

#triceps

#shoulders

#lats

#hamstrings

#glutes

#forearms

#calves

#abs

#lower back

#Traps (mid-back)

#obliques


