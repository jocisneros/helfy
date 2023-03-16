# method to create recommendation
from connection import getExercisesByWorkoutType, getExerciseHistoryByExerciseIds, getUserById
from scipy.spatial.distance import cosine
from numpy import average

###


###

# FIX FOR WWIGHTED AVERAGE

###


###
RATING_MAX = 3
RATING_MIN = -2
RATING_DEFAUT = 0
GENDER_DICT = {'male' : 1, 'female' : 0, 'other' : 0.5}
SIMILIARITY_CUTOFF = 0.4
# [gender, experiance, weight, height]
SIMILARITY_WEIGHTS = [1,1,1,1]





# def recommend(userWorkouts, exercisedb)

def getWorkoutRec(userId, day) -> list:
    userInfo = getUserById(userId)
    exercises = getExercisesByWorkoutType(day)
    exercisesHistory = getExerciseHistoryByExerciseIds(exercises.keys())

    similarity = getCosineSimilarity(userInfo,exercisesHistory)
    exerciseOrdered = orderExercises(exercisesHistory, exercises, userInfo, similarity)


    return exerciseOrdered

# def convertToList(eDict:dict):
#     exerciseList = []
#     for (e, i) in eDict.items():
#         exerciseInfo = {}
#         exerciseInfo['id'] = e
#         exerciseInfo['name'] = i['name']
#         exerciseInfo['difficulty'] = i['difficulty']
#         exerciseInfo['tips'] = i['tips']
#         exerciseInfo['link'] = i['link']
#         exerciseList.append(exerciseInfo)
#     return exerciseList



def orderExercises(exercisesHistory, exercises, userInfo, similarity):
    # 2 parts: sort by adjusted ranking and order by difficulty
    doableExercises = []
    advancedExercises = []
    userExperiance = userInfo['experience']

    exerciseRatings = isolateRatings(exercisesHistory, exercises, similarity)

    sortedRatings = sorted(list(exerciseRatings.items()), key=lambda d: d[1], reverse = True) 

    for e, _ in sortedRatings:
        exerciseInfo = {}
        exerciseInfo['id'] = e
        exerciseInfo['name'] = exercises[e]['name']
        exerciseInfo['difficulty'] = exercises[e]['difficulty']
        exerciseInfo['tips'] = exercises[e]['tips']
        exerciseInfo['link'] = exercises[e]['link']

        if exercises[e]['difficulty'] <= userExperiance:
            doableExercises.append(exerciseInfo)
        else:
            advancedExercises.append(exerciseInfo)
       
    doableExercises.extend(advancedExercises)
    return doableExercises

#
#
#
###

##
##
# FIX TO CALC WEIGHTED AVERAGE OF RATINGS BASED ON SIMILARITY
# CHANGE multiple to some type of weigthed average function, do not adjust before
# min max normlization the similarities to get weights
# assign cutoff potential (similarity > 75 percent?)
# change max to list of ratings maybe?
def isolateRatings(exercisesHistory, exercises, similarity):
    ratingsDict = {}

    for eh in exercisesHistory:
        if similarity[eh['userId']] >= SIMILIARITY_CUTOFF:
            if eh['exerciseId'] in ratingsDict:
                ratingsDict[eh['exerciseId']]['vals'].append(normalizeRating(eh['rating']))
                ratingsDict[eh['exerciseId']]['weights'].append(similarity[eh['userId']])
            else:
                ratingsDict[eh['exerciseId']] = {}
                ratingsDict[eh['exerciseId']]['vals'] = [normalizeRating(eh['rating'])]
                ratingsDict[eh['exerciseId']]['weights'] = [similarity[eh['userId']]]

    ratings = {}
    print(ratingsDict)

    for e, i in ratingsDict.items():
        weightedRating = average(i['vals'], weights=i['weights'])
        ratings[e] = weightedRating

    for e in exercises.keys():
        if e not in ratings:
            ratings[e] = normalizeRating(RATING_DEFAUT)

    print(ratings)


    # for eh in exercisesHistory:
    #     if eh['exerciseId'] in ratings:
    #         ratings[eh['exerciseId']] = max(eh['adjustedRating'], ratings[eh['exerciseId']])
    #     else:
    #         ratings[eh['exerciseId']] = eh['adjustedRating']
    #     addedExercises.add(eh['exerciseId'])
    # for e in exercises.keys():
    #     if e not in addedExercises:
    #         ratings[e] = normalizeRating(RATING_DEFAUT)
    return ratings





# {'userId': 'abc5', 'exerciseId': 546, 'rating': 1, 'height': 67, 'weight': 125, 'gender': 'female', 'experience': 0}
def getCosineSimilarity(user, exerciseHisory) -> dict:
    wMin, wMax, hMin, hMax = minMaxHeightWeight(user, exerciseHisory)
    similarity = {}

    scaledWeight = None
    scaledHeight = None

    if wMax - wMin == 0:
        scaledWeight = 1
    else:
        scaledWeight = (user['weight'] - wMin)/(wMax - wMin)

    if hMax - hMin == 0:
        scaledHeight = 1
    else:
        scaledHeight = (user['height'] - hMin)/(hMax - hMin)

    userVector = [GENDER_DICT[user['gender']], user['experience']/2, scaledWeight, scaledHeight]
    for eh in exerciseHisory:
        if eh['userId'] not in similarity.keys():
            if wMax - wMin == 0:
                scaledWeight = 1
            else:
                scaledWeight = (eh['weight'] - wMin)/(wMax - wMin)
            if hMax - hMin == 0:
                scaledHeight = 1
            else:
                scaledHeight = (eh['height'] - hMin)/(hMax - hMin)

            ehVector = [GENDER_DICT[eh['gender']], eh['experience'], scaledWeight, scaledHeight]
            # print(ehVector)
            similarity[eh['userId']] = 1 - cosine(userVector, ehVector, SIMILARITY_WEIGHTS)

        eh['adjustedRating'] = normalizeRating(eh['rating']) * similarity[eh['userId']]

    return similarity


def minMaxHeightWeight(user, ehs):
    wMin = user['weight']
    wMax = user['weight']
    hMin = user['height']
    hMax = user['height']
    for eh in ehs:
        wMin = min(wMin, eh['weight'])
        wMax = max(wMax, eh['weight'])
        hMin = min(hMin, eh['height'])
        hMax = max(hMax, eh['height'])
    return (wMin, wMax, hMin, hMax)

def normalizeRating(rating):
    return (rating - RATING_MIN)/(RATING_MAX - RATING_MIN)
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

if __name__ == "__main__":
    recs = getWorkoutRec('abc1', 'pull')
    print(len(recs))
