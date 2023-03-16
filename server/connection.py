import mysql.connector
from mysql.connector import errorcode
from configs import PERSONALDBCONFIG, EXERCISEDBCONFIG
from datetime import date

def getUserById(userId: str):
    user = None
    try:
        connection = mysql.connector.connect(**PERSONALDBCONFIG)

        cursor = connection.cursor()
        query = ("SELECT * FROM users WHERE id = %s")

        cursor.execute(query, (userId,))
        
        for (userId, height, weight, gender, experience) in cursor:
            user = {}
            user["userid"] = userId
            user["height"] = height
            user["weight"] = weight
            user["gender"] = gender
            user["experience"] = experience

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Username/Password Error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database Error")
        else:
            print(err)
    else:
        connection.close()
    
    return user

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

        cursor.execute(query, (userId, userId, date))
        
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

        connectionExercise =  mysql.connector.connect(**EXERCISEDBCONFIG)
        cursorExercise = connectionExercise.cursor()

        workoutTypeIdQuery = ("SELECT wt.id FROM workout_types AS wt WHERE wt.name = %s;")
        workoutTypeName = (workoutType.lower(), )
        cursorExercise.execute(workoutTypeIdQuery, workoutTypeName)
        workoutTypeId = cursorExercise.fetchone()

        # insert workout
        workoutQuery = ("INSERT INTO workout_history (usersID, workoutDate, workoutType) VALUES (%s, %s, %s)")
        cursor.execute(workoutQuery, (userId, date, workoutTypeId[0]))
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

def getExercisesByWorkoutType(workoutType:str):
    exercises = {}
    try:
        connection = mysql.connector.connect(**EXERCISEDBCONFIG)
        cursor = connection.cursor()
        
        query = ("SELECT e.id, e.name, e.difficulty, e.tips, e.link, me.muscleID FROM workout_types as w, "
                "muscles_in_workout_types as mw, muscle_groups_in_exercises as me, exercises as e "
                "WHERE e.id = me.exerciseID AND me.muscleID = mw.muscleID AND mw.workoutTypeID = w.id AND w.name = %s;")
        
        cursor.execute(query, (workoutType.lower(),))

        for (eid, name, difficulty, tips, link, muscle) in cursor:
            if eid not in exercises.keys():
                exercises[eid] = {'name':name,'difficulty':difficulty, 'tips':tips, 'link':link, 'muscles':[muscle] }
            else:
                exercises[eid]['muscles'].append(muscle)


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

    return exercises

def getExerciseHistoryByExerciseIds(exerciseIds):

    exercisesHistory = []
    try:
        connection = mysql.connector.connect(**PERSONALDBCONFIG)
        cursor = connection.cursor()
        
        format_strings = ','.join(['%s'] * len(exerciseIds))
        query = ("SELECT eh.usersID, eh.exerciseID, eh.rating, u.height, u.weight, u.gender, u.experience "
                 "FROM exercise_history as eh , users as u "
                 "WHERE eh.exerciseID IN (%s) AND eh.usersID = u.id")


        
        cursor.execute(query % format_strings, tuple(exerciseIds))

        for (uid, eid, rating, height, weight, gender, experience) in cursor: #
            ehInfo = {}
            ehInfo['userId'] = uid
            ehInfo['exerciseId'] = eid
            ehInfo['rating'] = rating
            ehInfo['height'] = height
            ehInfo['weight'] = weight
            ehInfo['gender'] = gender
            ehInfo['experience'] = experience

            exercisesHistory.append(ehInfo)

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

    return exercisesHistory
