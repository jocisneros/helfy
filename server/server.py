from flask import Flask, request
import json
from connection import getUserById, getWorkoutInfo, insertWorkout

app = Flask(__name__)

@app.route("/")
def hello():
    return "Helfy API"

@app.route("/user", methods=['GET'])
def sendUserbyId():
    args = request.args
    userId = args["id"]
    userInfo = getUserById(userId)
    jsonUserInfo = json.dumps(userInfo)

    return jsonUserInfo

@app.route("/adduser", methods=['POST'])
def addUser():
    print("REQUEST RECEIEVED")
    args = request.form
    userId = args["id"]
    height = args["height"]
    weight = args["weight"]
    gender = args["gender"]
    experience = args["experience"]
    print(args)

    success = addUserInfo(userId, height, weight, gender, experience)

    if not success:
        return {'success': False}
    return {'success': True}


@app.route("/workouthistory", methods=['GET'])
def getWorkoutInfoByDate():
    args = request.args
    userId = args["id"]
    date = args["date"]
    workoutInfo = getWorkoutInfo(userId, date)
    print(workoutInfo)
    jsonWorkoutInfo = json.dumps(workoutInfo)
    return jsonWorkoutInfo

#  *Format*:
#     {
#    "workoutId":1,
#    "workoutDate":"2023-01-01",
#    "workoutType":1,
#    "exercises":{
#       "1":{
#          "exerciseId":1,
#          "exerciseName":"Bench Press",
#          "exerciseSets":3,
#          "exerciseRepetitions":8,
#          "exerciseWeight":30,
#          "exerciseTime":0
#       },
#       "2":{
#          "exerciseId":2,
#          "exerciseName":"Chest Press",
#          "exerciseSets":3,
#          "exerciseRepetitions":8,
#          "exerciseWeight":30,
#          "exerciseTime":0
#       }
#    }

@app.route("/workoutrec", methods=['GET'])
def getWorkoutRecommendation():
    args = request.args
    userId = args["id"]
    workoutType = args["type"]
    # workoutInfo = getWorkoutInfo(userId, date)
    # print(workoutInfo)
    # jsonWorkoutInfo = json.dumps(workoutInfo)
    # return jsonWorkoutInfo
    return {"ret":"Not Implemented"}

@app.route("/completedworkout", methods=['POST'])
def postCompletedWorkout():
    userId = request.form['id']
   
    completionDate = request.form['date']
    
    workoutType = request.form['type']
    exercises = json.loads(request.form['exercises'])
    
    status = insertWorkout(userId, completionDate, workoutType, exercises)
    return 'success' if status else 'fail'

# *Format for exercises*
#     {
#    "1 (exercise ID)":{
#       "sets":"3",
#       "reps":"8",
#       "weight":"30",
#       "lengthOfTime":"0",
#       "exerciseName":"Bench Press"
#    },
#    "2":{
#       "sets":"4",
#       "reps":"10",
#       "weight":"25",
#       "lengthOfTime":"0",
#       "exerciseName":"Chest Press"
#    }


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8888, debug=True)
