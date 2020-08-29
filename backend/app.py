from flask import Flask,request
import pandas as pd
from flask_cors import CORS
from queries import getClubs, getEvents, insertUser

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Hello World"

@app.route("/clubs")
def getClubsController():
    return getClubs()

@app.route("/events")
def getEventsController():
    print('asdfsdf')
    return getEvents()

@app.route("/insertUser" , methods=['POST'])
def insertUserController():
    print("asdfasd")
    obj = request.get_json(force=True)
    return insertUser(obj)

if __name__ == "__main__":
    app.run(debug=True)