import asyncio
import nest_asyncio
import pymongo
import os
from dotenv import load_dotenv, find_dotenv
import random

client = pymongo.MongoClient(
    "mongodb+srv://eFarm:XQG8aeKQdHQciaXw@lasti.22mlqm6.mongodb.net/?retryWrites=true&w=majority"
)
database = client["eFarm"]
bibitCollection = database["Bibit"]
lahanCollection = database["Lahan"]
pupukCollection = database["Pupuk"]
pestisidaCollection = database["Pestisida"]

load_dotenv(find_dotenv())
nest_asyncio.apply()


async def randomize_humidity_level():
    for data in lahanCollection.find({}, {"_id": 0}):
        random_number = random.randint(1, 100)
        lahanCollection.update_one(
            {"$and": [{"x": int(data["x"])}, {"y": int(data["y"])}]},
            {"$set": {"humidityLevel": random_number}},
        )
    print("Humid")


async def randomize_motion_level():
    for data in lahanCollection.find({}, {"_id": 0}):
        random_number = random.randint(1, 100)
        motion = ""
        if random_number >= 50:
            motion = "High"
        else:
            motion = "Low"
        lahanCollection.update_one(
            {"$and": [{"x": int(data["x"])}, {"y": int(data["y"])}]},
            {"$set": {"motionLevel": motion}},
        )
    print("motion")


async def run_periodically(task, interval_seconds):
    while True:
        await task()
        await asyncio.sleep(interval_seconds)  # Convert minutes to seconds)


tasks_with_intervals = [
    (randomize_humidity_level, 14400),  # Run task_one every 3 seconds
    (randomize_motion_level, 14400),  # Run task_two every 5 seconds
]


def init_data():
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    tasks = []
    for task_func, interval in tasks_with_intervals:
        task = loop.create_task(run_periodically(task_func, interval))
        tasks.append(task)
    try:
        loop.run_until_complete(asyncio.gather(*tasks))
    except KeyboardInterrupt:
        pass
    finally:
        for task in tasks:
            task.cancel()
        loop.run_until_complete(asyncio.gather(*tasks))
        loop.close()


init_data()
