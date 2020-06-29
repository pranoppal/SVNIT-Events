import requests
import json

def getClubs():
    query = """query MyQuery {
        club_clubs {
            clubHead
            description
            established
            id
            name
        }
    }"""
    return getDataFromHasura(query)

def getEvents():
    query = """query MyQuery {
            event_events {
                club
                id
                name
                startTime
                venue
            }
        }"""
    return getDataFromHasura(query)

def insertUser(obj):
    query = """
        mutation MyMutation($name: String, $token: String) {
            insert_user_users(objects: {name: $name, token: $token}) {
                returning {
                id
                name
                }
            }
        }
    """
    return postDataIntoHasura(query,obj)

url = 'https://svr-events.herokuapp.com/v1/graphql'

def getDataFromHasura(query):
    try:
        r = requests.post(url, headers={"x-hasura-admin-secret":"events", "content-type":"application/json"}, json={'query': query})
        return r.text
    except Exception as e:
        return e

def postDataIntoHasura(query, data):
    try:
        r = requests.post(url, headers={"x-hasura-admin-secret":"events", "content-type":"application/json"}, json={'query': query, 'variables':data})
        return r.text
    except Exception as e:
        return e