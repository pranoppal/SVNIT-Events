from flask import Flask
import pandas as pd
from queries import getClubs, getEvents

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello World"

@app.route("/clubs")
def getClubsController():
    return getClubs()

@app.route("/events")
def getEventsController():
    return getEvents()

if __name__ == "__main__":
    app.run(debug=True)