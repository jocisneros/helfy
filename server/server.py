from flask import Flask, request
import json
from connection import getUserById

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

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8888, debug=True)
