from flask import Flask,request
import pandas as pd
from queries import getClubs, getEvents, insertUser, getUser

app = Flask(__name__)

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
    obj = request.get_json(force=True)
    return insertUser(obj)

if __name__ == "__main__":
    app.run(debug=True)