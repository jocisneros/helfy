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

def addUserInfo(userId:str, height:str, weight:str, gender:str, experience:str):
    try:
        connection = mysql.connector.connect(**PERSONALDBCONFIG)
        cursor = connection.cursor()

        # insert user
        inserUserQuery = ("INSERT INTO users (id, height, weight, gender, experience) VALUES (%s, %s, %s, %s, %s) AS val"
                        " ON DUPLICATE KEY UPDATE height = val.height, weight = val.weight, gender = val.gender,"
                        " experience = val.experience")
        cursor.execute(inserUserQuery, (userId, height, weight, gender, experience))
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

def getWorkoutInfo(userId: str, date:str):
    exercises = []
    try:
        connection = mysql.connector.connect(**PERSONALDBCONFIG)

        cursor = connection.cursor()
        query = ("SELECT eh.exerciseID, eh.sets, eh.reps, eh.weight, eh.exerciseName, eh.rating FROM workout_history as wh, exercise_history as eh " 
                "WHERE wh.usersID = %s AND eh.usersID = %s AND wh.workoutDate = %s "
                "AND wh.id = eh.workoutID;")
        # query = ("SELECT * FROM users")

        cursor.execute(query, (userId, userId, date))
        # cursor.execute(query)
        
        for (eid, sets, reps, weight, name, rating) in cursor:

            exerciseInfo = {}
            exerciseInfo["id"] = eid
            exerciseInfo["sets"] = sets
            exerciseInfo["reps"] = reps
            exerciseInfo["weight"] = weight
            exerciseInfo["name"] = name
            exerciseInfo["rating"] = rating

            exercises.append(exerciseInfo)

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Username/Password Error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database Error")
        else:
            print(err)
    else:
        connection.close()
    
    return exercises

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
        for exerciseInfo in exercises:
            exerciseQuery = ("INSERT INTO exercise_history (usersID, exerciseID, workoutID, "
                            "sets, reps, weight, exerciseName, rating) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)")
            cursor.execute(exerciseQuery, (userId, exerciseInfo['id'], workoutId, exerciseInfo['sets'], exerciseInfo['reps'], 
                            exerciseInfo['weight'], exerciseInfo['exerciseName'], exerciseInfo['rating'] ))
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

def getExercisesByWorkoutType(userId:str, workoutType:str):

    try:
        connection = mysql.connector.connect(**EXERCISEDBCONFIG)
        cursor = connection.cursor()
        
        # Query?
        # workout Type -> workoutId -> muscle ID -> exerciseID -> Exercise INFO
        #                                   v
        #                               Muscle Info

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

if __name__ == "__main__":
    workoutInfo = getWorkoutInfo(1, "2023-01-01")
    print(workoutInfo)