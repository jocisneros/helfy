USE personaldb;

# users (id, name, height-inches, weight-pounds, gender, experience)
# example user
INSERT INTO users VALUES('abc0', 'Example User', 75, 190, 'male', 0);

# example users
INSERT INTO users VALUES('abc1', 'Jimmy Neutron', 75, 145, 'male', 0);
INSERT INTO users VALUES('abc2', 'Johnny Bravo', 74, 185, 'male', 0);
INSERT INTO users VALUES('abc3', 'Peter Griffin', 79, 175, 'male', 0);
INSERT INTO users VALUES('abc4', 'Velma Dinkley', 63, 140, 'female', 0);
INSERT INTO users VALUES('abc5', 'Jane Doe', 67, 125, 'female', 0);

# additional users, not given workouts

INSERT INTO users VALUES('abc6', 'Fred Jones', 76, 180, 'male', 1);
INSERT INTO users VALUES('abc7', 'Ned Flanders', 75, 175, 'male', 1);
INSERT INTO users VALUES('abc8', 'The Potato', 51, 95, 'other', 2);
INSERT INTO users VALUES('abc9', 'Shaggy Rogers', 78, 185, 'male', 2);

# workout_history (usersID, workoutDate, workoutType)
INSERT INTO workout_history VALUES (1, 'abc1', '2023-01-01', 7)
INSERT INTO workout_history VALUES (2, 'abc2', '2023-01-02', 7)
INSERT INTO workout_history VALUES (3, 'abc3', '2023-01-03', 7)
INSERT INTO workout_history VALUES (4, 'abc4', '2023-01-04', 7)
INSERT INTO workout_history VALUES (5, 'abc5', '2023-01-05', 7)


# exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, lengthOfTime, exerciseName)
# for examples: choose 6 beginner exercises and add 4 of the 6 to each workout

#bicep

#chest

#Quads

#Traps

#triceps

#shoulders

#lats

##
#hamstrings
-- '372','Machine Hamstring Curl'
-- '374','Kettlebell Deadlift'
-- '377','Kettlebell Staggered Deadlift'
-- '378','Hamstrings Stretch Variation Four'
-- '379','Hamstrings Stretch Variation Three'
-- '380','Hamstrings Stretch Variation Two'


#glutes

#forearms

#calves

#abs

#lower back

#Traps (mid-back)

#obliques


