from flask import Flask
import pymongo

app = Flask(__name__)


@app.route("/", methods=["GET"])
def hello_world():
    # Experimente descomentar para você responder com o arquivo html
    # return render_template("hello_world.html")

    client = pymongo.MongoClient("db", 27017)
    db = client["customersdb"]
    customers = db["customers"]

    customers_list = [
        {"name": "Bia", "address": "Apple st 652"},
        {"name": "Matheus", "address": "Mountain 21"},
        {"name": "Johnny", "address": "Valley 345"},
        {"name": "Iago", "address": "Ocean blvd 2"},
        {"name": "Arlen", "address": "Green Grass 1"},
        {"name": "Carlos", "address": "Sky st 331"},
        {"name": "Tiago", "address": "One way 98"},
        {"name": "Ana", "address": "Yellow Garden 2"},
        {"name": "Leonardo", "address": "Park Lane 38"},
        {"name": "Flavio", "address": "Central st 954"},
        {"name": "Joao", "address": "Main Road 989"},
        {"name": "Renatin", "address": "Sideway 1633"},
    ]

    inserteds = customers.insert_many(customers_list)

    print(inserteds.inserted_ids)

    names = ""

    for person in customers.find():
        names = f"{names}, {person['name']}"

    return f"<html><body><p>{names}</p></body></html>"
