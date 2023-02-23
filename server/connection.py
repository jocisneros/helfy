import mysql.connector
from mysql.connector import errorcode
from configs import PERSONALDBCONFIG, EXERCISEDBCONFIG
from datetime import date

def getUserById(userId: str):
    users = []
    try:
        connection = mysql.connector.connect(**PERSONALDBCONFIG)

        cursor = connection.cursor()
        query = ("SELECT * FROM users WHERE id = %s")
        # query = ("SELECT * FROM users")

        cursor.execute(query, (userId,))
        # cursor.execute(query)
        
        for (userId, name, height, weight, gender) in cursor:
            user = {}
            user["userid"] = userId
            user["name"] = name
            user["height"] = height
            user["weight"] = weight
            user["gender"] = gender
            users.append(user)

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Username/Password Error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database Error")
        else:
            print(err)
    else:
        connection.close()
    
    return users

def getWorkoutInfo(userId: str, date:str):
    workoutInfo = {}
    exercises = {}
    try:
        connection = mysql.connector.connect(**PERSONALDBCONFIG)

        cursor = connection.cursor()
        query = ("SELECT * FROM workout_history as wh, exercise_history as eh " 
                "WHERE wh.usersID = %s AND eh.usersID = %s AND wh.workoutDate = %s "
                "AND wh.id = eh.workoutID;")
        # query = ("SELECT * FROM users")

        cursor.execute(query, (userId, userId, date))
        # cursor.execute(query)
        
        for (wid, uid, d, workoutType, eid, uid2, exerciseId, wid2, sets, reps, weight, time, exerciseName) in cursor:
            workoutInfo["workoutId"] = wid
            workoutInfo["workoutDate"] = d.strftime("%Y-%m-%d")
            workoutInfo["workoutType"] = workoutType

            exerciseInfo = {}
            exerciseInfo["exerciseId"] = exerciseId
            exerciseInfo["exerciseName"] = exerciseName
            exerciseInfo["exerciseSets"] = sets
            exerciseInfo["exerciseRepetitions"] = reps
            exerciseInfo["exerciseWeight"] = weight
            exerciseInfo["exerciseTime"] = time

            exercises[eid] = exerciseInfo

        workoutInfo["exercises"] = exercises

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Username/Password Error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database Error")
        else:
            print(err)
    else:
        connection.close()
    
    return workoutInfo

def insertWorkout(userId: str, date:str, workoutType:str, exercises:dict):
    
    try:
        connection = mysql.connector.connect(**PERSONALDBCONFIG)
        cursor = connection.cursor()

        # insert workout
        workoutQuery = ("INSERT INTO workout_history (usersID, workoutDate, workoutType) VALUES (%s, %s, %s)")
        cursor.execute(workoutQuery, (userId, date, workoutType))
        connection.commit()

        workoutId = cursor.lastrowid

        # insert each exercise
        for exerciseID, exerciseInfo in exercises.items():
            exerciseQuery = ("INSERT INTO exercise_history (usersID, exerciseID, workoutID, "
                            "sets, reps, weight, lengthOfTime, exerciseName) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)")
            cursor.execute(exerciseQuery, (userId, exerciseID, workoutId, exerciseInfo['sets'], exerciseInfo['reps'], 
                            exerciseInfo['weight'],  exerciseInfo['lengthOfTime'], exerciseInfo['exerciseName'] ))
            connection.commit()

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Username/Password Error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database Error")
        else:
            print(err)
        return False
    else:
        connection.close()
    
    return True
            

if __name__ == "__main__":
    workoutInfo = getWorkoutInfo(1, "2023-01-01")
    print(workoutInfo)