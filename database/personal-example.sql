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


# exercise_history (usersID, exerciseID, workoutID, sets, reps, weight, lengthOfTime, exerciseName, rating)
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
INSERT INTO exercise_history values('abc1', 372, 1, 3, 8, 50, 0, 'Machine Hamstring Curl', 2)
INSERT INTO exercise_history values('abc1', 374, 1, 3, 8, 65, 0, 'Kettlebell Deadlift', 2)
INSERT INTO exercise_history values('abc1', 377, 1, 3, 8, 55, 0, 'Kettlebell Staggered Deadlift', 1)
INSERT INTO exercise_history values('abc1', 378, 1, 3, 8, 0, 0, 'Hamstrings Stretch Variation Four', 0)

INSERT INTO exercise_history values('abc2', 372, 2, 3, 8, 70, 0, 'Machine Hamstring Curl', 2)
INSERT INTO exercise_history values('abc2', 374, 2, 3, 8, 75, 0, 'Kettlebell Deadlift', 1)
INSERT INTO exercise_history values('abc2', 377, 2, 3, 8, 65, 0, 'Kettlebell Staggered Deadlift', 2)
INSERT INTO exercise_history values('abc2', 378, 2, 3, 8, 0, 0, 'Hamstrings Stretch Variation Three', 0)

INSERT INTO exercise_history values('abc3', 372, 3, 3, 8, 65, 0, 'Machine Hamstring Curl', 2)
INSERT INTO exercise_history values('abc3', 374, 3, 3, 8, 65, 0, 'Kettlebell Deadlift', 1)
INSERT INTO exercise_history values('abc3', 377, 3, 3, 8, 60, 0, 'Kettlebell Staggered Deadlift', 0)
INSERT INTO exercise_history values('abc3', 380, 3, 3, 8, 0, 0, 'Hamstrings Stretch Variation Two', 1)

INSERT INTO exercise_history values('abc4', 372, 4, 3, 8, 35, 0, 'Machine Hamstring Curl', 1)
INSERT INTO exercise_history values('abc4', 378, 4, 3, 8, 0, 0, 'Hamstrings Stretch Variation Four', 1)
INSERT INTO exercise_history values('abc4', 379, 4, 3, 8, 0, 0, 'Hamstrings Stretch Variation Three', 1)
INSERT INTO exercise_history values('abc4', 380, 4, 3, 8, 0, 0, 'Hamstrings Stretch Variation Two', 2)

INSERT INTO exercise_history values('abc5', 374, 5, 3, 8, 40, 0, 'Kettlebell Deadlift', 2)
INSERT INTO exercise_history values('abc5', 378, 5, 3, 8, 0, 0, 'Hamstrings Stretch Variation Four', 0)
INSERT INTO exercise_history values('abc5', 379, 5, 3, 8, 0, 0, 'Hamstrings Stretch Variation Three', 1)
INSERT INTO exercise_history values('abc5', 380, 5, 3, 8, 0, 0, 'Hamstrings Stretch Variation Two', 0)


#glutes
-- '417','Glute Bridge'
-- '419','Single Leg Glute Bridge'
-- '420','Kettlebell Glute Bridge'
-- '422','Kettlebell Hip Thrust'
-- '424','Glutes Stretch Variation Three'
-- '425','Glutes Stretch Variation Two'
INSERT INTO exercise_history values('abc1', 417, 1, 3, 8, 0, 0, 'Glute Bridge', 2)
INSERT INTO exercise_history values('abc1', 419, 1, 3, 8, 0, 0, 'Single Leg Glute Bridge', 2)
INSERT INTO exercise_history values('abc1', 420, 1, 3, 8, 60, 0, 'Kettlebell Glute Bridge', 1)
INSERT INTO exercise_history values('abc1', 422, 1, 3, 8, 100, 0, 'Kettlebell Hip Thrust', 1)

INSERT INTO exercise_history values('abc2', 417, 2, 3, 8, 0, 0, 'Glute Bridge', 2)
INSERT INTO exercise_history values('abc2', 420, 2, 3, 8, 65, 0, 'Kettlebell Glute Bridge', 1)
INSERT INTO exercise_history values('abc2', 419, 2, 3, 8, 0, 0, 'Single Leg Glute Bridge', 1)
INSERT INTO exercise_history values('abc2', 424, 2, 3, 8, 0, 0, 'Glutes Stretch Variation Three', 1)

INSERT INTO exercise_history values('abc3', 417, 3, 3, 8, 0, 0, 'Glute Bridge', 1)
INSERT INTO exercise_history values('abc3', 419, 3, 3, 8, 0, 0, 'Single Leg Glute Bridge', 2)
INSERT INTO exercise_history values('abc3', 420, 3, 3, 8, 75, 0, 'Kettlebell Glute Bridge', 1)
INSERT INTO exercise_history values('abc3', 425, 3, 3, 8, 0, 0, 'Glutes Stretch Variation Two', 0)

INSERT INTO exercise_history values('abc4', 417, 4, 3, 8, 35, 0, 'Glute Bridge', 2)
INSERT INTO exercise_history values('abc4', 419, 4, 3, 8, 0, 0, 'Single Leg Glute Bridge', 0)
INSERT INTO exercise_history values('abc4', 425, 4, 3, 8, 0, 0, 'Glutes Stretch Variation Two', 1)
INSERT INTO exercise_history values('abc4', 424, 4, 3, 8, 0, 0, 'Glutes Stretch Variation Three', 2)

INSERT INTO exercise_history values('abc5', 419, 5, 3, 8, 0, 0, 'Single Leg Glute Bridge', 2)
INSERT INTO exercise_history values('abc5', 422, 5, 3, 8, 45, 0, 'Kettlebell Hip Thrust', 0)
INSERT INTO exercise_history values('abc5', 417, 5, 3, 8, 0, 0, 'Glute Bridge', 1)
INSERT INTO exercise_history values('abc5', 425, 5, 3, 8, 0, 0, 'Glutes Stretch Variation Two', 0)


#forearms
-- '457','Dumbbell Wrist Curl'
-- '458','Barbell Wrist Curl'
-- '459','Kettlebell Farmers Carry'
-- '460','Kettlebell Wrist Extension'
-- '461','Kettlebell Wrist Curl'
-- '462','Forearms Stretch Variation Four'
INSERT INTO exercise_history values('abc1', 457, 1, 3, 8, 20, 0, 'Dumbbell Wrist Curl', 1)
INSERT INTO exercise_history values('abc1', 458, 1, 3, 8, 40, 0, 'Barbell Wrist Curl', 2)
INSERT INTO exercise_history values('abc1', 459, 1, 3, 8, 75, 0, 'Kettlebell Farmers Carry', 1)
INSERT INTO exercise_history values('abc1', 460, 1, 3, 8, 40, 0, 'Kettlebell Wrist Extension', 1)

INSERT INTO exercise_history values('abc2', 457, 2, 3, 8, 25, 0, 'Dumbbell Wrist Curl', 2)
INSERT INTO exercise_history values('abc2', 458, 2, 3, 8, 45, 0, 'Barbell Wrist Curl', 2)
INSERT INTO exercise_history values('abc2', 459, 2, 3, 8, 80, 0, 'Kettlebell Farmers Carry', 1)
INSERT INTO exercise_history values('abc2', 461, 2, 3, 8, 35, 0, 'Kettlebell Wrist Curl', 0)

INSERT INTO exercise_history values('abc3', 457, 3, 3, 8, 35, 0, 'Dumbbell Wrist Curl', 1)
INSERT INTO exercise_history values('abc3', 458, 3, 3, 8, 55, 0, 'Barbell Wrist Curl', 1)
INSERT INTO exercise_history values('abc3', 459, 3, 3, 8, 85, 0, 'Kettlebell Farmers Carry', 2)
INSERT INTO exercise_history values('abc3', 462, 3, 3, 8, 0, 0, 'Forearms Stretch Variation Four', 0)

INSERT INTO exercise_history values('abc4', 458, 4, 3, 8, 25, 0, 'Barbell Wrist Curl', 1)
INSERT INTO exercise_history values('abc4', 460, 4, 3, 8, 25, 0, 'Kettlebell Wrist Extension', 1)
INSERT INTO exercise_history values('abc4', 461, 4, 3, 8, 15, 0, 'Kettlebell Wrist Curl', 1)
INSERT INTO exercise_history values('abc4', 462, 4, 3, 8, 0, 0, 'Forearms Stretch Variation Four', 2)

INSERT INTO exercise_history values('abc5', 459, 5, 3, 8, 60, 0, 'Kettlebell Farmers Carry', 1)
INSERT INTO exercise_history values('abc5', 460, 5, 3, 8, 20, 0, 'Kettlebell Wrist Extension', 2)
INSERT INTO exercise_history values('abc5', 461, 5, 3, 8, 15, 0, 'Kettlebell Wrist Curl', 1)
INSERT INTO exercise_history values('abc5', 462, 5, 3, 8, 0, 0, 'Forearms Stretch Variation Four', 1)

#calves
-- '471','Machine Standing Calf Raises'
-- '472','Machine Seated Calf Raises'
-- '473','Kettlebell Single Leg Calf Raise'
-- '474','Kettlebell Calf Raise'
-- '475','Kettlebell Seated Calf Raise'
-- '476','Calves Stretch Variation Three'
INSERT INTO exercise_history values('abc1', 471, 1, 3, 8, 75, 0, 'Machine Standing Calf Raises', 2)
INSERT INTO exercise_history values('abc1', 472, 1, 3, 8, 65, 0, 'Machine Seated Calf Raises', 2)
INSERT INTO exercise_history values('abc1', 473, 1, 3, 8, 55, 0, 'Kettlebell Single Leg Calf Raise', 1)
INSERT INTO exercise_history values('abc1', 474, 1, 3, 8, 95, 0, 'Kettlebell Calf Raise', 1)

INSERT INTO exercise_history values('abc2', 471, 1, 3, 8, 85, 0, 'Machine Standing Calf Raises', 1)
INSERT INTO exercise_history values('abc2', 472, 1, 3, 8, 65, 0, 'Machine Seated Calf Raises', 1)
INSERT INTO exercise_history values('abc2', 473, 1, 3, 8, 70, 0, 'Kettlebell Single Leg Calf Raise', 2)
INSERT INTO exercise_history values('abc2', 475, 1, 3, 8, 85, 0, 'Kettlebell Seated Calf Raise', 1)

INSERT INTO exercise_history values('abc3', 471, 1, 3, 8, 80, 0, 'Machine Standing Calf Raises', 2)
INSERT INTO exercise_history values('abc3', 472, 1, 3, 8, 75, 0, 'Machine Seated Calf Raises', 1)
INSERT INTO exercise_history values('abc3', 473, 1, 3, 8, 75, 0, 'Kettlebell Single Leg Calf Raise', 1)
INSERT INTO exercise_history values('abc3', 476, 1, 3, 8, 0, 0, 'Calves Stretch Variation Three', 0)

INSERT INTO exercise_history values('abc4', 471, 1, 3, 8, 35, 0, 'Machine Standing Calf Raises', 1)
INSERT INTO exercise_history values('abc4', 473, 1, 3, 8, 0, 0, 'Kettlebell Single Leg Calf Raise', 2)
INSERT INTO exercise_history values('abc4', 475, 1, 3, 8, 0, 0, 'Kettlebell Seated Calf Raise', 1)
INSERT INTO exercise_history values('abc4', 476, 1, 3, 8, 0, 0, 'Calves Stretch Variation Three', 0)

INSERT INTO exercise_history values('abc5', 472, 1, 3, 8, 40, 0, 'Machine Seated Calf Raises', 1)
INSERT INTO exercise_history values('abc5', 474, 1, 3, 8, 0, 0, 'Kettlebell Calf Raise', 1)
INSERT INTO exercise_history values('abc5', 475, 1, 3, 8, 0, 0, 'Kettlebell Seated Calf Raise', 1)
INSERT INTO exercise_history values('abc5', 476, 1, 3, 8, 0, 0, 'Calves Stretch Variation Three', 1)

#abs
-- '491','Crunches'
-- '492','Laying Leg Raises'
-- '494','Kettlebell Situp'
-- '495','Abdominals Stretch Variation Four'
-- '496','Abdominals Stretch Variation Three'
-- '497','Abdominals Stretch Variation Two'



#lower back
-- '531','Lower back Stretch Variation Four'
-- '532','Lower back Stretch Variation Three'
-- '533','Lower back Stretch Variation Two'
-- '534','Lower back Stretch Variation One'
-- '535','Supermans'
-- '374','Kettlebell Deadlift'


#Traps (mid-back)
-- '538','Traps mid back Stretch Variation Two'
-- '539','Traps mid back Stretch Variation One'
-- '236','Cable Silverback Shrug'
-- '242','Dumbbell Silverback Shrug'
-- '242','Dumbbell Silverback Shrug'
-- '344','Machine Seated Cable Row'

#obliques
-- '542','Kettlebell Wood Chopper'
-- '524','Kettlebell Russian Twist'
-- '545','Band Pallof Press'
-- '546','Cable Pallof Press'
-- '496','Abdominals Stretch Variation Three'
-- '497','Abdominals Stretch Variation Two'



