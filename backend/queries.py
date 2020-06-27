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
            id
            name
            startTime
            venue
        }
    }"""
    return getDataFromHasura(query)


def getDataFromHasura(query):
    try:
        url = 'https://svr-events.herokuapp.com/v1/graphql'
        r = requests.post(url, headers={"x-hasura-admin-secret":"events", "content-type":"application/json"}, json={'query': query})
        print(r.status_code)
        print(r.text)
        return r.text
    except Exception as e:
        print(e)
        return "Error"
