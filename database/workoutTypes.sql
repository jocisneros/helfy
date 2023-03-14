INSERT INTO workout_types (name) VALUES ('push'); # 1
INSERT INTO workout_types (name) VALUES ('pull'); # 2
INSERT INTO workout_types (name) VALUES ('legs'); # 3
INSERT INTO workout_types (name) VALUES ('chest/back'); # 4
INSERT INTO workout_types (name) VALUES ('arms'); # 5
INSERT INTO workout_types (name) VALUES ('upper body'); # 6
INSERT INTO workout_types (name) VALUES ('full body'); # 7
INSERT INTO workout_types (name) VALUES ('abs'); # 8
INSERT INTO workout_types (name) VALUES ('none'); # 9



-- '1','Biceps'
-- '2','Chest'
-- '3','Quads'
-- '4','Traps'
-- '5','Triceps'
-- '6','Shoulders'
-- '7','Lats'
-- '8','Hamstrings'
-- '9','Glutes'
-- '10','Forearms'
-- '11','Calves'
-- '12','Abdominals'
-- '13','Lower back'
-- '14','Traps (mid-back)'
-- '15','Obliques'



# Push
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (2, 1); # Chest
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (5, 1); # Triceps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (6, 1); # Shoulders

# Pull
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (1, 2); # Biceps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (4, 2); # Traps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (7, 2); # Lats
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (10, 2); # Forearms
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (13, 2); # Lower back
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (14, 2); # Traps (mid-back)

# Legs
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (3, 3); # Quads
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (8, 3); # Hamstrings
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (9, 3); # Glutes
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (11, 3); # Calves

# Chest/Back
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (2, 4); # Chest
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (4, 4); # Traps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (7, 4); # Lats
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (13, 4); # Lower back
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (14, 4); # Traps (mid-back)

# arms
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (1, 5); # Biceps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (5, 5); # Triceps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (6, 5); # Shoulders
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (10, 5); # Forearms

# upper-body
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (2, 6); # Chest
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (5, 6); # Triceps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (6, 6); # Shoulders
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (1, 6); # Biceps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (4, 6); # Traps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (7, 6); # Lats
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (10, 6); # Forearms
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (13, 6); # Lower back
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (14, 6); # Traps (mid-back)
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (12, 6); # abdominals
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (15, 6); # obliques

# full-body 
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (2, 7); # Chest
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (5, 7); # Triceps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (6, 7); # Shoulders
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (1, 7); # Biceps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (4, 7); # Traps
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (7, 7); # Lats
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (10, 7); # Forearms
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (13, 7); # Lower back
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (14, 7); # Traps (mid-back)
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (12, 7); # abdominals
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (15, 7); # obliques
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (3, 7); # Quads
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (8, 7); # Hamstrings
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (9, 7); # Glutes
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (11, 7); # Calves

# abs
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (12, 8); # abdominals
INSERT INTO muscles_in_workout_types (muscleID, workoutTypeID) VALUES (15, 8); # obliques


