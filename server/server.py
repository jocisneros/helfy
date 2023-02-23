from flask import Flask, request
import json
from connection import getUserById, getWorkoutInfo

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/r1")
def hello2():
    return "Hello World! 2"

@app.route("/user", methods=['GET'])
def sendUserbyId():
    args = request.args
    userId = args["id"]
    userInfo = getUserById(userId)
    jsonUserInfo = json.dumps(userInfo)

    return jsonUserInfo

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

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8888, debug=True)
