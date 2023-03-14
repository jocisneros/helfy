# method to create recommendation
from connection import getExercisesByWorkoutType

# def recommend(userWorkouts, exercisedb)

def get_workout_rec(userId, day) -> list:
    exerciseDict = getExercisesByWorkoutType(day)
    return convertToList(exerciseDict)

def convertToList(eDict:dict):
    exerciseList = []
    for (e, i) in eDict.items():
        exerciseInfo = {}
        exerciseInfo['id'] = e
        exerciseInfo['name'] = i['name']
        exerciseInfo['difficulty'] = i['difficulty']
        exerciseInfo['tips'] = i['tips']
        exerciseInfo['link'] = i['link']
        exerciseList.append(exerciseInfo)
    return exerciseList



def get_muscle_dict(exercises) -> list:
    pass

def sort_muscles(exercises) -> dict:
    pass

def calc_personal_rating(exercises) -> dict:
    pass

def calc_collaborative_rating(exercises) -> dict:
    pass

def select_workouts(exercise_dict) -> list:
    pass


# features:
# user info:
# day (muscle groups)
# included workouts

# factor in difficulty

# user similarity (0-1) 1 being same, 0 being completely different
# gender, experiance, heigth, weight,

# personal ratings scored from 0-1

# others ratings will be multiplied by similarity score


# Steps:
# retrieve user workout history for past week

# get exercises related to current day
# - get all exercises in muscle groups
#       - query exercise db to get exercise ids 
# - rate using previous experiance, if none, check others ratings
#       - query exercise history filter by exercise id 
# - greedy selection of exercises to cover all muscle groups
# - return list (or top n of list)

# how to select sets and reps?

# pick max of previous and 3x8

# how to select weight?

# pick max of previous +5 or starting?

# collaborative filtering

# pick lowest

# else start 10?





# get exercises unrelated to current day
# - remove already worked muscles in past week
# - get exercises
# - rate based on input

# - rate remaining based on past postings of difficulty