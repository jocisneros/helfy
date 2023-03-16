# method to create recommendation
from connection import getExercisesByWorkoutType, getExerciseHistoryByExerciseIds, getUserById
from scipy.spatial.distance import cosine
from numpy import average
from configs import RATING_MAX, RATING_MIN, RATING_DEFAUT, GENDER_DICT, SIMILIARITY_CUTOFF, SIMILARITY_WEIGHTS, RECOMMENDATION_LIMIT



def getWorkoutRec(userId, day) -> list:
    userInfo = getUserById(userId)
    exercises = getExercisesByWorkoutType(day)
    exercisesHistory = getExerciseHistoryByExerciseIds(exercises.keys())

    similarity = getCosineSimilarity(userInfo,exercisesHistory)
    exerciseOrdered = orderExercises(exercisesHistory, exercises, userInfo, similarity)

    if len(exerciseOrdered) > RECOMMENDATION_LIMIT:
        exerciseOrdered = exerciseOrdered[:RECOMMENDATION_LIMIT]

    return exerciseOrdered

def orderExercises(exercisesHistory, exercises, userInfo, similarity):
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

    for e, i in ratingsDict.items():
        weightedRating = average(i['vals'], weights=i['weights'])
        ratings[e] = weightedRating

    for e in exercises.keys():
        if e not in ratings:
            ratings[e] = normalizeRating(RATING_DEFAUT)
    return ratings

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

    userVector = [GENDER_DICT[user['gender'].lower()], user['experience']/2, scaledWeight, scaledHeight]
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

            ehVector = [GENDER_DICT[eh['gender'].lower()], eh['experience'], scaledWeight, scaledHeight]
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

# if __name__ == "__main__":
#     recs = getWorkoutRec('abc1', 'pull')
#     print(recs)
#     print(len(recs))
