from flask import Flask, request
import json
from connection import getUserById, getWorkoutInfo, insertWorkout, addUserInfo
from recommender import getWorkoutRec

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
    args = request.form
    userId = args["id"]
    height = args["height"]
    weight = args["weight"]
    sex = args["sex"]
    experienceLevel = args["experienceLevel"]
    print(args)

    success = addUserInfo(userId, height, weight, sex, experienceLevel)

    if not success:
        return {'success': False}
    
    return {'success': True}


@app.route("/workouthistory", methods=['GET'])
def getWorkoutInfoByDate():
    args = request.argsgit 
    userId = args["id"]
    date = args["date"]
    workoutInfo = getWorkoutInfo(userId, date)
    # print(workoutInfo)
    jsonWorkoutInfo = json.dumps(workoutInfo)
    return jsonWorkoutInfo

@app.route("/workoutrec", methods=['GET'])
def getWorkoutRecommendation():
    args = request.args
    userId = args["id"]
    workoutType = args["type"]
    exercises = getWorkoutRec(userId, workoutType)
    return json.dumps(exercises)

@app.route("/completedworkout", methods=['POST'])
def postCompletedWorkout():
    userId = request.form['id']
   
    date = request.form['date']
    
    workoutType = request.form['type']
    exercises = json.loads(request.form['exercises'])
    
    success = insertWorkout(userId, date, workoutType, exercises)
    if not success:
        return {'success': False}
    
    return {'success': True}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888, debug=True)
