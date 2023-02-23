USE exercisedb;
# Muscle Groups
INSERT INTO muscle_groups VALUES(1, 'Chest');
INSERT INTO muscle_groups VALUES(2, 'Biceps');
INSERT INTO muscle_groups VALUES(3, 'Triceps');
INSERT INTO muscle_groups VALUES(4, 'Forearms');
INSERT INTO muscle_groups VALUES(5, 'Shoulders');
INSERT INTO muscle_groups VALUES(6, 'Traps');
INSERT INTO muscle_groups VALUES(7, 'Abdominals');
INSERT INTO muscle_groups VALUES(8, 'Obliques');
INSERT INTO muscle_groups VALUES(9, 'Lats');
INSERT INTO muscle_groups VALUES(10, 'Lower Back');
INSERT INTO muscle_groups VALUES(11, 'Glutes');
INSERT INTO muscle_groups VALUES(12, 'Quads');
INSERT INTO muscle_groups VALUES(13, 'Hamstrings');
INSERT INTO muscle_groups VALUES(14, 'Calves');

# Exercises
INSERT INTO exercises VALUES(1, 'Barbell Bench Press', 1, 'Lay flat on the bench with your feet on the ground. With straight arms unrack the bar. Lower the bar to your mid chest. Raise the bar until you have locked your elbows.', ''); # Bench Press
INSERT INTO exercises VALUES(2, 'Dumbbell Bicep Curl', 0, 'Stand up straight with a dumbbell in each hand at arm''s length. Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder. Lower to original position and repeat with opposite arm', ''); # Dumbbell Bicep Curl
INSERT INTO exercises VALUES(3, 'Cable Push Down', 0, 'You can use any attachment for this. The cable should be set all the way at the top of the machine. Make sure to keep your upper arm glued at your side. Extend your elbows until you feel your triceps contract.', ''); # Cable Push Down
INSERT INTO exercises VALUES(4, 'Dumbbell Wrist Curl', 0, 'Grip the dumbbell with your palm facing upwards with your forearm rested against the bench. Slowly curl your wrist upwards in a semicircular motion. Return to starting position and repeat.', ''); # Dumbell Wrist Curl
INSERT INTO exercises VALUES(5, 'Dumbbell Seated Overhead Press', 0, 'Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward. Raise the dumbbells upwards and pause at the contracted position. Lower the weights back to starting position.', ''); # Dumbbell Seated Overhead Press
INSERT INTO exercises VALUES(6, 'Dumbbell Shrug', 0, 'Stand tall with two dumbbells. Pull your shoulder blades up. Give a one second squeeze at the top.', ''); # Dumbbell Shrug
INSERT INTO exercises VALUES(7, 'Crunches', 0, 'Lay flat on your back with your knees bent and your feet flat on the ground, about a foot from your lower back. Place your fingertips on your temples with your palms facing out. Draw your belly into the base of your spine to engage the muscles, then raise your head and shoulders off the floor. Return to starting position and repeat.', ''); # Crunches
INSERT INTO exercises VALUES(8, 'Dumbbell Russian Twist', 1, 'Sit on the floor and flex your knees and hips to a 90 degree angle. Your feet should be hovering off the ground (If that''s too hard start with heels on the floor). Rotate your upper spine to engage your obliques.', ''); # Dumbbell Russian Twists
INSERT INTO exercises VALUES(9, 'Machine Pulldown', 0, 'Grip the bar with the palms facing forward, your hands need to be spaced out at a distance wider than shoulder width. As you have both arms extended in front of you holding the bar, bring your torso back around 30 degrees while sticking your chest out. Pull the bar down to about chin level or a little lower in a smooth movement whilst squeezing the shoulder blades together. After a second of squeezing, slowly raise the bar back to the starting position when your arms are fully extended.', ''); # Machine Pulldowns
INSERT INTO exercises VALUES(10, 'Barbell Deadlift', 2, 'Stand with your mid-foot under the bar and grip the bar with your hands, about a shoulder width apart. Bend your knees, then lift the bar by straightening your back. It is important to keep your back straight. Stand to your full height and hold. Lower the bar to the floor by bending your knees and keeping your back straight.', ''); # Barbell Deadlift
INSERT INTO exercises VALUES(11, 'Barbell Squat', 2, 'Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest. Grip the bar across your shoulders and support it on your upper back. Unwrack the bar by straightening your legs, and take a step back. Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees. Raise the bar back to starting position, lift with your legs and exhale at the top.', ''); # Barbell Squat
INSERT INTO exercises VALUES(12, 'Machine Leg Extension', 1, 'Sit on the machine with your back against the cushion and adjust the machine you are using so that your knees are at a 90 degree angle at the starting position. Raise the weight by extending your knees outward, then lower your leg to the starting position. Both movements should be done in a slow, controlled motion.', ''); # Machine Leg Extension
INSERT INTO exercises VALUES(13, 'Machine Hamstring Curl', 0, 'Lay down on the machine, placing your legs beneath the padded lever. Position your legs so that the padded lever is below your calve muscles. Support yourself by grabbing the side handles of the machine, and slowly raise the weight with your legs, toes pointed straight. Pause at the apex of the motion, then slowly return to starting position.', ''); # Machine Hamstring Curl
INSERT INTO exercises VALUES(14, 'Machine Standing Calf Raises', 0, 'Adjust the machine in accordance with your height and place your shoulders underneath the padded lever. The balls of your feet should be supporting your weight on the calve block, your heels extending off of it. Extend your heels upwards while keeping your knees stationary, and pause at the contracted position. Slowly return to the starting position. Repeat.', ''); # Machine Standing Calf Raises




# Muscle Groups In Exercises
INSERT INTO muscle_groups_in_exercises VALUES(1, 1, 1); # Barbell Bench Press - Chest Primary
INSERT INTO muscle_groups_in_exercises VALUES(1, 3, 2); # Barbell Bench Press - Triceps Secondary
INSERT INTO muscle_groups_in_exercises VALUES(1, 5, 3); # Barbell Bench Press - Shoulders Tertiary

INSERT INTO muscle_groups_in_exercises VALUES(2, 2, 1); # Dumbbell Bicep Curl - Biceps Primary
INSERT INTO muscle_groups_in_exercises VALUES(2, 4, 2); # Dumbbell Bicep Curl - Forearms Secondary

INSERT INTO muscle_groups_in_exercises VALUES(3, 3, 1); # Cable Push Down - Triceps Primary

INSERT INTO muscle_groups_in_exercises VALUES(4, 4, 1); # Dumbbell Wrist Curl - Forearm Primary

INSERT INTO muscle_groups_in_exercises VALUES(5, 5, 1); # Dumbbell Seated Overhead Press - Shoulders Primary
INSERT INTO muscle_groups_in_exercises VALUES(5, 3, 2); # Dumbbell Seated Overhead Press - Triceps Secondary

INSERT INTO muscle_groups_in_exercises VALUES(6, 6, 1); # Dumbbell Shrug - Traps Primary
INSERT INTO muscle_groups_in_exercises VALUES(6, 4, 2); # Dumbbell Shrug - Forearms Secondary

INSERT INTO muscle_groups_in_exercises VALUES(7, 7, 1); # Crunches - Abdominals Primary
INSERT INTO muscle_groups_in_exercises VALUES(7, 8, 2); # Crunches - Obliques Secondary

INSERT INTO muscle_groups_in_exercises VALUES(8, 8, 1); # Dumbbell Russian Twist - Obliques Primary
INSERT INTO muscle_groups_in_exercises VALUES(8, 7, 2); # Dumbbell Russian Twist - Abdominals Secondary

INSERT INTO muscle_groups_in_exercises VALUES(9, 9, 1); # Machine Pulldown - Lats Primary
INSERT INTO muscle_groups_in_exercises VALUES(9, 2, 2); # Machine Pulldown - Biceps Secondary
INSERT INTO muscle_groups_in_exercises VALUES(9, 4, 3); # Machine Pulldown - Forearms Tertiary

INSERT INTO muscle_groups_in_exercises VALUES(10, 10, 1); # Barbell Deadlift - Lower Back Primary
INSERT INTO muscle_groups_in_exercises VALUES(10, 11, 1); # Barbell Deadlift - Glutes Primary
INSERT INTO muscle_groups_in_exercises VALUES(10, 12, 2); # Barbell Deadlift - Quads Secondary
INSERT INTO muscle_groups_in_exercises VALUES(10, 13, 3); # Barbell Deadlift - Hamstrings Tertiary

INSERT INTO muscle_groups_in_exercises VALUES(11, 11, 1); # Barbell Squat - Glutes Primary
INSERT INTO muscle_groups_in_exercises VALUES(11, 10, 1); # Barbell Squat - Lower Back Primary
INSERT INTO muscle_groups_in_exercises VALUES(11, 12, 1); # Barbell Squat - Quads Primary
INSERT INTO muscle_groups_in_exercises VALUES(11, 14, 2); # Barbell Squat - Calves Secondary

INSERT INTO muscle_groups_in_exercises VALUES(12, 12, 1); # Machine Leg Extension - Quads Primary

INSERT INTO muscle_groups_in_exercises VALUES(13, 13, 1); # Machine Hamstring Curl - Hamstring Primary

INSERT INTO muscle_groups_in_exercises VALUES(14, 14, 1); # Machine Standing Calf Raises - Calves Primary


# Equipment
INSERT INTO equipment VALUES(1, 'Barbell');
INSERT INTO equipment VALUES(2, 'Dumbbell');
INSERT INTO equipment VALUES(3, 'Cable Machine');
INSERT INTO equipment VALUES(4, 'None');
INSERT INTO equipment VALUES(5, 'Leg Extension Machine');
INSERT INTO equipment VALUES(6, 'Hamstring Curl Machine');
INSERT INTO equipment VALUES(7, 'Calf Raise Machine');


# Equipment In Exercises
INSERT INTO equipment_in_exercises VALUES(1, 1); # Barbell Bench Press
INSERT INTO equipment_in_exercises VALUES(2, 2); # Dumbbell Bicep Curl
INSERT INTO equipment_in_exercises VALUES(3, 3); # Cable Push Down
INSERT INTO equipment_in_exercises VALUES(4, 2); # Dumbbell Wrist Curl
INSERT INTO equipment_in_exercises VALUES(5, 2); # Dumbbell Seated Overhead Press
INSERT INTO equipment_in_exercises VALUES(6, 2); # Dumbbell Shrug
INSERT INTO equipment_in_exercises VALUES(7, 4); # Crunches
INSERT INTO equipment_in_exercises VALUES(8, 2); # Dumbbell Russian Twist
INSERT INTO equipment_in_exercises VALUES(9, 3); # Machine Pulldown
INSERT INTO equipment_in_exercises VALUES(10, 1); # Barbell Deadlift
INSERT INTO equipment_in_exercises VALUES(11, 1); # Barbell Squat
INSERT INTO equipment_in_exercises VALUES(12, 5); # Machine Leg Extension
INSERT INTO equipment_in_exercises VALUES(13, 6); # Machine Hamstring Curl
INSERT INTO equipment_in_exercises VALUES(14, 7); # Machine Standing Calf Raises

