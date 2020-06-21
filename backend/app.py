from flask import Flask
import requests
import json
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello World"

@app.route("/users")
def getUsers():
    try:
        query = """query MyQuery {
            club_clubs {
                clubHead
                description
                established
                id
                name
            }
        }"""
        url = 'https://svr-events.herokuapp.com/v1/graphql'
        r = requests.post(url, headers={"x-hasura-admin-secret":"events", "content-type":"application/json"}, json={'query': query})
        print(r.status_code)
        print(r.text)
        return r.text
    except Exception as e:
        print(e)
        return "Error"

if __name__ == "__main__":
    app.run(debug=True)