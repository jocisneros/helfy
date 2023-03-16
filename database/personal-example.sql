USE personaldb;

# users (id, name, height-inches, weight-pounds, gender, experience)
# example user
INSERT INTO users (id, height, weight, gender, experience) VALUES ('abc0', 75, 190, 'male', 0);

# example users
INSERT INTO users (id, height, weight, gender, experience) VALUES('abc1', 75, 145, 'male', 0);
INSERT INTO users (id, height, weight, gender, experience) VALUES('abc2', 74, 185, 'male', 0);
INSERT INTO users (id, height, weight, gender, experience) VALUES('abc3', 79, 175, 'male', 0);
INSERT INTO users (id, height, weight, gender, experience) VALUES('abc4', 63, 140, 'female', 0);
INSERT INTO users (id, height, weight, gender, experience) VALUES('abc5', 67, 125, 'female', 0);

# additional users, not given workouts

INSERT INTO users (id, height, weight, gender, experience) VALUES('abc6', 76, 180, 'male', 1);
INSERT INTO users (id, height, weight, gender, experience) VALUES('abc7', 75, 175, 'male', 1);
INSERT INTO users (id, height, weight, gender, experience) VALUES('abc8', 51, 95, 'other', 2);
INSERT INTO users (id, height, weight, gender, experience) VALUES('abc9', 78, 185, 'male', 2);

# workout_history (usersID, workoutDate, workoutType)
INSERT INTO workout_history (id, usersID, workoutDate, workoutType) VALUES (1, 'abc1', '2023-01-01', 7);
INSERT INTO workout_history (id, usersID, workoutDate, workoutType) VALUES (2, 'abc2', '2023-01-02', 7);
INSERT INTO workout_history (id, usersID, workoutDate, workoutType) VALUES (3, 'abc3', '2023-01-03', 7);
INSERT INTO workout_history (id, usersID, workoutDate, workoutType) VALUES (4, 'abc4', '2023-01-04', 7);
INSERT INTO workout_history (id, usersID, workoutDate, workoutType) VALUES (5, 'abc5', '2023-01-05', 7);

# exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, lengthOfTime, exerciseName, rating);
# for examples: choose 6 beginner exercises and add 4 of the 6 to each workout;

#bicep;
-- '1','Barbell Curl'
-- '2','Dumbbell Curl'
-- '3','Dumbbell Hammer Curl'
-- '4','Kettlebell Goblet Curl'
-- '7','Kettlebell Single Arm Curl'
-- '8','Biceps Stretch Variation Five'

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 1, 1, 3, 8, 30, 'Barbell Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 2, 1, 3, 8, 10, 'Dumbbell Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 3, 1, 3, 8, 10, 'Dumbbell Hammer Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 4, 1, 3, 8, 25, 'Kettlebell Goblet Curl', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 1, 2, 3, 8, 45, 'Barbell Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 2, 2, 3, 8, 15, 'Dumbbell Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 3, 2, 3, 8, 15, 'Dumbbell Hammer Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 4, 2, 3, 8, 40, 'Kettlebell Goblet Curl', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 1, 3, 3, 8, 40, 'Barbell Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 2, 3, 3, 8, 15, 'Dumbbell Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 7, 3, 3, 8, 15, 'Kettlebell Single Arm Curl', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 8, 3, 3, 8, 0, 'Biceps Stretch Variation Five', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 3, 4, 3, 8, 10, 'Dumbbell Hammer Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 4, 4, 3, 8, 5, 'Kettlebell Goblet Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 7, 4, 3, 8, 5, 'Kettlebell Single Arm Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 8, 4, 3, 8, 0, 'Biceps Stretch Variation Five', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 1, 5, 3, 8, 15, 'Barbell Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 2, 5, 3, 8, 5, 'Dumbbell Curl', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 7, 5, 3, 8, 5, 'Kettlebell Single Arm Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 8, 5, 3, 8, 0, 'Biceps Stretch Variation Five', 0);


#chest;
-- '64','Dumbbell Incline Bench Press'
-- '65','Dumbbell Incline Chest Flys'
-- '66','Dumbbell Bench Press'
-- '68','Kettlebell Chest Press'
-- '69','Kettlebell Single Arm Chest Fly'
-- '70','Kettlebell Single Arm Press'

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 64, 1, 3, 8, 35, 'Dumbbell Incline Bench Press', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 65, 1, 3, 8, 10, 'Dumbbell Incline Chest Flys', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 66, 1, 3, 8, 30, 'Dumbbell Bench Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 68, 1, 3, 8, 30, 'Kettlebell Chest Press', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 64, 2, 3, 8, 50, 'Dumbbell Incline Bench Press', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 65, 2, 3, 8, 20, 'Dumbbell Incline Chest Flys', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 66, 2, 3, 8, 40, 'Dumbbell Bench Press', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 68, 2, 3, 8, 40, 'Kettlebell Chest Press', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 64, 3, 3, 8, 45, 'Dumbbell Incline Bench Press', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 65, 3, 3, 8, 15, 'Dumbbell Incline Chest Flys', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 69, 3, 3, 8, 10, 'Kettlebell Single Arm Chest Fly', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 70, 3, 3, 8, 35, 'Kettlebell Single Arm Press', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 66, 4, 3, 8, 10, 'Dumbbell Bench Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 68, 4, 3, 8, 10, 'Kettlebell Chest Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 69, 4, 3, 8, 5, 'Kettlebell Single Arm Chest Fly', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 70, 4, 3, 8, 10, 'Kettlebell Single Arm Press', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 64, 5, 3, 8, 10, 'Dumbbell Incline Bench Press', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 65, 5, 3, 8, 5, 'Dumbbell Incline Chest Flys', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 69, 5, 3, 8, 5, 'Kettlebell Single Arm Chest Fly', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 70, 5, 3, 8, 10, 'Kettlebell Single Arm Press', 0);

#Quads;
-- '119','Dumbbell Goblet Squat'
-- '120','Bulgarian Split Squat'
-- '121','Kettlebell Step Up'
-- '122','Kettlebell Goblet Squat'
-- '123','Kettlebell Heels Up Goblet Squat'
-- '124','Kettlebell Reverse Lunge'

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 119, 1, 3, 8, , 'Dumbbell Goblet Squat', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 120, 1, 3, 8, , 'Bulgarian Split Squat', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 121, 1, 3, 8, , 'Kettlebell Step Up', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 122, 1, 3, 8, , 'Kettlebell Goblet Squat', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 119, 2, 3, 8, , 'Dumbbell Goblet Squat', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 120, 2, 3, 8, , 'Bulgarian Split Squat', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 121, 2, 3, 8, , 'Kettlebell Step Up', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 122, 2, 3, 8, , 'Kettlebell Goblet Squat', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 119, 3, 3, 8, , 'Dumbbell Goblet Squat', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 120, 3, 3, 8, , 'Bulgarian Split Squat', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 123, 3, 3, 8, , 'Kettlebell Heels Up Goblet Squat', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 124, 3, 3, 8, , 'Kettlebell Reverse Lunge', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 121, 4, 3, 8, , 'Kettlebell Step Up', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 122, 4, 3, 8, , 'Kettlebell Goblet Squat', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 123, 4, 3, 8, , 'Kettlebell Heels Up Goblet Squat', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 124, 4, 3, 8, , 'Kettlebell Reverse Lunge', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 119, 5, 3, 8, , 'Dumbbell Goblet Squat', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 120, 5, 3, 8, , 'Bulgarian Split Squat', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 123, 5, 3, 8, , 'Kettlebell Heels Up Goblet Squat', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 124, 5, 3, 8, , 'Kettlebell Reverse Lunge', 0);

#Traps;
-- '216','Dumbbell Seated Shrug'
-- '217','Smith Machine Standing Shrugs'
-- '218','Kettlebell Shrug'
-- '219','Kettlebell Upright Row'
-- '221','Traps Stretch Variation Three'
-- '222','Traps Stretch Variation Two'

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 216, 1, 3, 8, , 'Dumbbell Seated Shrug', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 217, 1, 3, 8, , 'Smith Machine Standing Shrugs', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 218, 1, 3, 8, , 'Kettlebell Shrug', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 219, 1, 3, 8, , 'Kettlebell Upright Row', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 216, 2, 3, 8, , 'Dumbbell Seated Shrug', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 217, 2, 3, 8, , 'Smith Machine Standing Shrugs', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 218, 2, 3, 8, , 'Kettlebell Shrug', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 219, 2, 3, 8, , 'Kettlebell Upright Row', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 216, 3, 3, 8, , 'Dumbbell Seated Shrug', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 217, 3, 3, 8, , 'Smith Machine Standing Shrugs', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 221, 3, 3, 8, , 'Traps Stretch Variation Three', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 222, 3, 3, 8, , 'Traps Stretch Variation Two', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 218, 4, 3, 8, , 'Kettlebell Shrug', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 219, 4, 3, 8, , 'Kettlebell Upright Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 221, 4, 3, 8, , 'Traps Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 222, 4, 3, 8, , 'Traps Stretch Variation Two', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 216, 5, 3, 8, , 'Dumbbell Seated Shrug', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 217, 5, 3, 8, , 'Smith Machine Standing Shrugs', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 221, 5, 3, 8, , 'Traps Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 222, 5, 3, 8, , 'Traps Stretch Variation Two', 0);

#triceps;
-- '246','Machine Cable V Bar Push Downs'
-- '247','Bench Dips'
-- '250','Kettlebell Standing Tricep Extension'
-- '253','Triceps Stretch Variation Three'
-- '254','Triceps Stretch Variation Two'
-- '255','Triceps Stretch Variation One'

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 246, 1, 3, 8, , 'Machine Cable V Bar Push Downs', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 247, 1, 3, 8, , 'Bench Dips', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 250, 1, 3, 8, , 'Kettlebell Standing Tricep Extension', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 253, 1, 3, 8, , 'Triceps Stretch Variation Three', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 246, 2, 3, 8, , 'Machine Cable V Bar Push Downs', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 247, 2, 3, 8, , 'Bench Dips', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 250, 2, 3, 8, , 'Kettlebell Standing Tricep Extension', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 253, 2, 3, 8, , 'Triceps Stretch Variation Three', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 246, 3, 3, 8, , 'Machine Cable V Bar Push Downs', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 247, 3, 3, 8, , 'Bench Dips', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 254, 3, 3, 8, , 'Triceps Stretch Variation Two', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 255, 3, 3, 8, , 'Triceps Stretch Variation One', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 250, 4, 3, 8, , 'Kettlebell Standing Tricep Extension', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 253, 4, 3, 8, , 'Triceps Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 254, 4, 3, 8, , 'Triceps Stretch Variation Two', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 255, 4, 3, 8, , 'Triceps Stretch Variation One', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 246, 5, 3, 8, , 'Machine Cable V Bar Push Downs', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 247, 5, 3, 8, , 'Bench Dips', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 254, 5, 3, 8, , 'Triceps Stretch Variation Two', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 255, 5, 3, 8, , 'Triceps Stretch Variation One', 0);

#shoulders;
-- '292','Dumbbell Lateral Raise'
-- '295','Dumbbell Seated Overhead Press'
-- '296','Dumbbell Front Raise'
-- '298','Kettlebell Rear Delt Row'
-- '299','Kettlebell Front Raise'
-- '302','Kettlebell Single Arm Lateral Raise'

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 292, 1, 3, 8, , 'Dumbbell Lateral Raise', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 295, 1, 3, 8, , 'Dumbbell Seated Overhead Press', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 296, 1, 3, 8, , 'Dumbbell Front Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 298, 1, 3, 8, , 'Kettlebell Rear Delt Row', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 292, 2, 3, 8, , 'Dumbbell Lateral Raise', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 295, 2, 3, 8, , 'Dumbbell Seated Overhead Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 296, 2, 3, 8, , 'Dumbbell Front Raise', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 298, 2, 3, 8, , 'Kettlebell Rear Delt Row', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 292, 3, 3, 8, , 'Dumbbell Lateral Raise', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 295, 3, 3, 8, , 'Dumbbell Seated Overhead Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 299, 3, 3, 8, , 'Kettlebell Front Raise', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 302, 3, 3, 8, , 'Kettlebell Single Arm Lateral Raise', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 296, 4, 3, 8, , 'Dumbbell Front Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 298, 4, 3, 8, , 'Kettlebell Rear Delt Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 299, 4, 3, 8, , 'Kettlebell Front Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 302, 4, 3, 8, , 'Kettlebell Single Arm Lateral Raise', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 292, 5, 3, 8, , 'Dumbbell Lateral Raise', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 295, 5, 3, 8, , 'Dumbbell Seated Overhead Press', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 299, 5, 3, 8, , 'Kettlebell Front Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 302, 5, 3, 8, , 'Kettlebell Single Arm Lateral Raise', 0);

#lats;
-- '343','Machine Pulldown'
-- '344','Machine Seated Cable Row'
-- '348','Kettlebell Row'
-- '350','Kettlebell Single Arm Row'
-- '352','Lats Stretch Variation Three'
-- '353','Lats Stretch Variation Two'

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 343, 1, 3, 8, , 'Machine Pulldown', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 344, 1, 3, 8, , 'Machine Seated Cable Row', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 348, 1, 3, 8, , 'Kettlebell Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 350, 1, 3, 8, , 'Kettlebell Single Arm Row', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 343, 2, 3, 8, , 'Machine Pulldown', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 344, 2, 3, 8, , 'Machine Seated Cable Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 348, 2, 3, 8, , 'Kettlebell Row', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 350, 2, 3, 8, , 'Kettlebell Single Arm Row', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 343, 3, 3, 8, , 'Machine Pulldown', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 344, 3, 3, 8, , 'Machine Seated Cable Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 352, 3, 3, 8, , 'Lats Stretch Variation Three', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 353, 3, 3, 8, , 'Lats Stretch Variation Two', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 348, 4, 3, 8, , 'Kettlebell Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 350, 4, 3, 8, , 'Kettlebell Single Arm Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 352, 4, 3, 8, , 'Lats Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 353, 4, 3, 8, , 'Lats Stretch Variation Two', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 343, 5, 3, 8, , 'Machine Pulldown', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 344, 5, 3, 8, , 'Machine Seated Cable Row', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 352, 5, 3, 8, , 'Lats Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 353, 5, 3, 8, , 'Lats Stretch Variation Two', 0);

##
#hamstrings;
-- '372','Machine Hamstring Curl';
-- '374','Kettlebell Deadlift';
-- '377','Kettlebell Staggered Deadlift';
-- '378','Hamstrings Stretch Variation Four';
-- '379','Hamstrings Stretch Variation Three';
-- '380','Hamstrings Stretch Variation Two';
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 372, 1, 3, 8, 50, 'Machine Hamstring Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 374, 1, 3, 8, 65, 'Kettlebell Deadlift', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 377, 1, 3, 8, 55, 'Kettlebell Staggered Deadlift', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 378, 1, 3, 8, 0, 'Hamstrings Stretch Variation Four', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 372, 2, 3, 8, 70, 'Machine Hamstring Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 374, 2, 3, 8, 75, 'Kettlebell Deadlift', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 377, 2, 3, 8, 65, 'Kettlebell Staggered Deadlift', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 378, 2, 3, 8, 0, 'Hamstrings Stretch Variation Three', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 372, 3, 3, 8, 65, 'Machine Hamstring Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 374, 3, 3, 8, 65, 'Kettlebell Deadlift', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 377, 3, 3, 8, 60, 'Kettlebell Staggered Deadlift', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 380, 3, 3, 8, 0, 'Hamstrings Stretch Variation Two', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 372, 4, 3, 8, 35, 'Machine Hamstring Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 378, 4, 3, 8, 0, 'Hamstrings Stretch Variation Four', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 379, 4, 3, 8, 0, 'Hamstrings Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 380, 4, 3, 8, 0, 'Hamstrings Stretch Variation Two', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 374, 5, 3, 8, 40, 'Kettlebell Deadlift', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 378, 5, 3, 8, 0, 'Hamstrings Stretch Variation Four', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 379, 5, 3, 8, 0, 'Hamstrings Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating)values('abc5', 380, 5, 3, 8, 0, 'Hamstrings Stretch Variation Two', 0);


#glutes;
-- '417','Glute Bridge';
-- '419','Single Leg Glute Bridge';
-- '420','Kettlebell Glute Bridge';
-- '422','Kettlebell Hip Thrust';
-- '424','Glutes Stretch Variation Three';
-- '425','Glutes Stretch Variation Two';
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 417, 1, 3, 8, 0, 'Glute Bridge', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 419, 1, 3, 8, 0, 'Single Leg Glute Bridge', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 420, 1, 3, 8, 60, 'Kettlebell Glute Bridge', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 422, 1, 3, 8, 100, 'Kettlebell Hip Thrust', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 417, 2, 3, 8, 0, 'Glute Bridge', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 420, 2, 3, 8, 65, 'Kettlebell Glute Bridge', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 419, 2, 3, 8, 0, 'Single Leg Glute Bridge', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 424, 2, 3, 8, 0, 'Glutes Stretch Variation Three', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 417, 3, 3, 8, 0, 'Glute Bridge', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 419, 3, 3, 8, 0, 'Single Leg Glute Bridge', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 420, 3, 3, 8, 75, 'Kettlebell Glute Bridge', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 425, 3, 3, 8, 0, 'Glutes Stretch Variation Two', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 417, 4, 3, 8, 35, 'Glute Bridge', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 419, 4, 3, 8, 0, 'Single Leg Glute Bridge', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 425, 4, 3, 8, 0, 'Glutes Stretch Variation Two', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 424, 4, 3, 8, 0, 'Glutes Stretch Variation Three', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 419, 5, 3, 8, 0, 'Single Leg Glute Bridge', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 422, 5, 3, 8, 45, 'Kettlebell Hip Thrust', 0);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 417, 5, 3, 8, 0, 'Glute Bridge', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 425, 5, 3, 8, 0, 'Glutes Stretch Variation Two', 0);


#forearms;
-- '457','Dumbbell Wrist Curl';
-- '458','Barbell Wrist Curl';
-- '459','Kettlebell Farmers Carry';
-- '460','Kettlebell Wrist Extension';
-- '461','Kettlebell Wrist Curl';
-- '462','Forearms Stretch Variation Four';
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 457, 1, 3, 8, 20, 'Dumbbell Wrist Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 458, 1, 3, 8, 40, 'Barbell Wrist Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 459, 1, 3, 8, 75, 'Kettlebell Farmers Carry', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 460, 1, 3, 8, 40, 'Kettlebell Wrist Extension', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 457, 2, 3, 8, 25, 'Dumbbell Wrist Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 458, 2, 3, 8, 45, 'Barbell Wrist Curl', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 459, 2, 3, 8, 80, 'Kettlebell Farmers Carry', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 461, 2, 3, 8, 35, 'Kettlebell Wrist Curl', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 457, 3, 3, 8, 35, 'Dumbbell Wrist Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 458, 3, 3, 8, 55, 'Barbell Wrist Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 459, 3, 3, 8, 85, 'Kettlebell Farmers Carry', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 462, 3, 3, 8, 0, 'Forearms Stretch Variation Four', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 458, 4, 3, 8, 25, 'Barbell Wrist Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 460, 4, 3, 8, 25, 'Kettlebell Wrist Extension', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 461, 4, 3, 8, 15, 'Kettlebell Wrist Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 462, 4, 3, 8, 0, 'Forearms Stretch Variation Four', 2);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 459, 5, 3, 8, 60, 'Kettlebell Farmers Carry', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 460, 5, 3, 8, 20, 'Kettlebell Wrist Extension', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 461, 5, 3, 8, 15, 'Kettlebell Wrist Curl', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 462, 5, 3, 8, 0, 'Forearms Stretch Variation Four', 1);

#calves;
-- '471','Machine Standing Calf Raises';
-- '472','Machine Seated Calf Raises';
-- '473','Kettlebell Single Leg Calf Raise';
-- '474','Kettlebell Calf Raise';
-- '475','Kettlebell Seated Calf Raise';
-- '476','Calves Stretch Variation Three';
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 471, 1, 3, 8, 75, 'Machine Standing Calf Raises', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 472, 1, 3, 8, 65, 'Machine Seated Calf Raises', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 473, 1, 3, 8, 55, 'Kettlebell Single Leg Calf Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 474, 1, 3, 8, 95, 'Kettlebell Calf Raise', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 471, 2, 3, 8, 85, 'Machine Standing Calf Raises', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 472, 2, 3, 8, 65, 'Machine Seated Calf Raises', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 473, 2, 3, 8, 70, 'Kettlebell Single Leg Calf Raise', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 475, 2, 3, 8, 85, 'Kettlebell Seated Calf Raise', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 471, 3, 3, 8, 80, 'Machine Standing Calf Raises', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 472, 3, 3, 8, 75, 'Machine Seated Calf Raises', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 473, 3, 3, 8, 75, 'Kettlebell Single Leg Calf Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 476, 3, 3, 8, 0, 'Calves Stretch Variation Three', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 471, 4, 3, 8, 35, 'Machine Standing Calf Raises', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 473, 4, 3, 8, 20, 'Kettlebell Single Leg Calf Raise', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 475, 4, 3, 8, 20, 'Kettlebell Seated Calf Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 476, 4, 3, 8, 0, 'Calves Stretch Variation Three', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 472, 5, 3, 8, 40, 'Machine Seated Calf Raises', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 474, 5, 3, 8, 25, 'Kettlebell Calf Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 475, 5, 3, 8, 25, 'Kettlebell Seated Calf Raise', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 476, 5, 3, 8, 0, 'Calves Stretch Variation Three', 1);

#abs;

-- '491','Crunches';
-- '492','Laying Leg Raises';
-- '494','Kettlebell Situp';
-- '495','Abdominals Stretch Variation Four';
-- '496','Abdominals Stretch Variation Three';
-- '497','Abdominals Stretch Variation Two';
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 491, 1, 3, 8, 0, 'Crunches', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 492, 1, 3, 8, 0, 'Laying Leg Raises', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 449, 1, 3, 8, 35, 'Kettlebell Situp', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 495, 1, 3, 8, 0, 'Abdominals Stretch Variation Four', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 491, 2, 3, 8, 0, 'Crunches', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 492, 2, 3, 8, 0, 'Laying Leg Raises', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 494, 2, 3, 8, 40, 'Kettlebell Situp', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 496, 2, 3, 8, 0, 'Abdominals Stretch Variation Three', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 491, 3, 3, 8, 0, 'Crunches', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 492, 3, 3, 8, 0, 'Laying Leg Raises', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 494, 3, 3, 8, 45, 'Kettlebell Situp', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 497, 3, 3, 8, 0, 'Abdominals Stretch Variation Two', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 491, 4, 3, 8, 0, 'Crunches', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 494, 4, 3, 8, 20, 'Kettlebell Situp', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 496, 4, 3, 8, 0, 'Abdominals Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 497, 4, 3, 8, 0, 'Abdominals Stretch Variation Two', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 492, 5, 3, 8, 0, 'Laying Leg Raises', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 495, 5, 3, 8, 0, 'Abdominals Stretch Variation Four', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 496, 5, 3, 8, 0, 'Abdominals Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 497, 5, 3, 8, 0, 'Abdominals Stretch Variation Two', 1);


#lower back;
-- '531','Lower back Stretch Variation Four';
-- '532','Lower back Stretch Variation Three';
-- '533','Lower back Stretch Variation Two';
-- '534','Lower back Stretch Variation One';
-- '535','Supermans';
-- '374','Kettlebell Deadlift';
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 374, 1, 3, 8, 75, 'Kettlebell Deadlift', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 535, 1, 3, 8, 0, 'Supermans', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 534, 1, 3, 8, 0, 'Lower back Stretch Variation One', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 533, 1, 3, 8, 0, 'Lower back Stretch Variation Two', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 374, 2, 3, 8, 85, 'Kettlebell Deadlift', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 535, 2, 3, 8, 0, 'Supermans', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 534, 2, 3, 8, 0, 'Lower back Stretch Variation One', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 532, 2, 3, 8, 0, 'Lower back Stretch Variation Three', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 374, 3, 3, 8, 80, 'Kettlebell Deadlift', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 535, 3, 3, 8, 075, 'Supermans', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 534, 3, 3, 8, 0, 'Lower back Stretch Variation One', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 531, 3, 3, 8, 0, 'Lower back Stretch Variation Four', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 374, 4, 3, 8, 35, 'Kettlebell Deadlift', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 535, 4, 3, 8, 0, 'Supermans', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 532, 4, 3, 8, 0, 'Lower back Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 531, 4, 3, 8, 0, 'Lower back Stretch Variation Four', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 534, 5, 3, 8, 0, 'Lower back Stretch Variation One', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 533, 5, 3, 8, 0, 'Lower back Stretch Variation Two', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 532, 5, 3, 8, 0, 'Lower back Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 531, 5, 3, 8, 0, 'Lower back Stretch Variation Four', 1);

#Traps (mid-back);
-- '538','Traps mid back Stretch Variation Two';
-- '539','Traps mid back Stretch Variation One';
-- '236','Cable Silverback Shrug';
-- '355','Inverted Row';
-- '242','Dumbbell Silverback Shrug';
-- '344','Machine Seated Cable Row';
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 344, 1, 3, 8, 75, 'Machine Seated Cable Row', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 242, 1, 3, 8, 65, 'Dumbbell Silverback Shrug', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 236, 1, 3, 8, 55, 'Cable Silverback Shrug', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 539, 1, 3, 8, 0, 'Traps mid back Stretch Variation One', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 344, 2, 3, 8, 85, 'Machine Seated Cable Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 242, 2, 3, 8, 65, 'Dumbbell Silverback Shrug', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 236, 2, 3, 8, 70, 'Cable Silverback Shrug', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 538, 2, 3, 8, 0, 'Traps mid back Stretch Variation Two', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 344, 3, 3, 8, 80, 'Machine Seated Cable Row', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 242, 3, 3, 8, 75, 'Dumbbell Silverback Shrug', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 236, 3, 3, 8, 75, 'Cable Silverback Shrug', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 355, 3, 3, 8, 45, 'Inverted Row', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 344, 4, 3, 8, 35, 'Machine Seated Cable Row', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 242, 4, 3, 8, 35, 'Dumbbell Silverback Shrug', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 538, 4, 3, 8, 0, 'Traps mid back Stretch Variation Two', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 355, 4, 3, 8, 30, 'Inverted Row', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 236, 5, 3, 8, 40, 'Cable Silverback Shrug', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 539, 5, 3, 8, 0, 'Traps mid back Stretch Variation One', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 538, 5, 3, 8, 0, 'Traps mid back Stretch Variation Two', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 355, 5, 3, 8, 45, 'Inverted Row', 1);

#obliques;
-- '542','Kettlebell Wood Chopper';
-- '524','Kettlebell Russian Twist';
-- '545','Band Pallof Press';
-- '546','Cable Pallof Press';
-- '496','Abdominals Stretch Variation Three';
-- '497','Abdominals Stretch Variation Two';
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 542, 1, 3, 8, 40, 'Kettlebell Wood Chopper', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 524, 1, 3, 8, 35, 'Kettlebell Russian Twist', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 545, 1, 3, 8, 20, 'Band Pallof Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc1', 546, 1, 3, 8, 30, 'Cable Pallof Press', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 542, 2, 3, 8, 50, 'Kettlebell Wood Chopper', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 524, 2, 3, 8, 40, 'Kettlebell Russian Twist', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 545, 2, 3, 8, 35, 'Band Pallof Press', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc2', 496, 2, 3, 8, 0, 'Abdominals Stretch Variation Three', 1);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 542, 3, 3, 8, 45, 'Kettlebell Wood Chopper', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 524, 3, 3, 8, 40, 'Kettlebell Russian Twist', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 545, 3, 3, 8, 40, 'Band Pallof Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc3', 497, 3, 3, 8, 0, 'Abdominals Stretch Variation Two', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 542, 4, 3, 8, 25, 'Kettlebell Wood Chopper', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 524, 4, 3, 8, 20, 'Kettlebell Russian Twist', 2);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 496, 4, 3, 8, 0, 'Abdominals Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc4', 497, 4, 3, 8, 0, 'Abdominals Stretch Variation Two', 0);

INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 545, 5, 3, 8, 15, 'Band Pallof Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 546, 5, 3, 8, 15, 'Cable Pallof Press', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 496, 5, 3, 8, 0, 'Abdominals Stretch Variation Three', 1);
INSERT INTO exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, exerciseName, rating) values('abc5', 497, 5, 3, 8, 0, 'Abdominals Stretch Variation Two', 1);