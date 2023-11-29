from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv, find_dotenv
import os
from models import Bibit, Lahan, Pestisida, Pupuk
import pymongo

client = pymongo.MongoClient(os.environ.get("DATABASE_URL"))
database = client["eFarm"]
bibitCollection = database["Bibit"]
lahanCollection = database["Lahan"]
pupukCollection = database["Pupuk"]
pestisidaCollection = database["Pestisida"]

load_dotenv(find_dotenv())

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


async def read_lahan():
    lahan = []
    for data in lahanCollection.find({},{"_id" : 0}):
        lahan.append(data)
    return lahan


async def read_bibit():
    bibit : Bibit = []
    for data in bibitCollection.find({},{"_id" : 0}):
        bibit.append(data)
    return bibit


async def read_pupuk():
    pupuk = []
    for data in pupukCollection.find({},{"_id" : 0}):
        pupuk.append(data)
    return pupuk


async def read_pestisida():
    pestisida = []
    for data in pestisidaCollection.find({},{"_id" : 0}):
        pestisida.append(data)
    return pestisida


# async def create_bibit(bibit):
#     doc = bibit
#     await bibitCollection.insert_one(dict(doc))
#     return doc


async def update_lahan(x, y, nama):
    lahanCollection.update_one(
        {'$and': [{'x': int(x)}, {'y': int(y)}]}, {"$set": {"plant": {"nama": nama}, "isPlanted" : True }}
    )

    bibitCollection.update_one(
        {"nama": nama}, {"$inc": {"jumlah": -1}}
    )
    document = lahanCollection.find_one({'$and': [{'x': int(x)}, {'y': int(y)}]},{"_id" : 0})
    return document


# root
@app.get("/")
async def read_root():
    return "Database connected"


# READ DATA


# READ LAHAN
@app.get("/lahan")
async def get_lahan():
    response = await read_lahan()
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


# READ BIBIT
@app.get("/bibit")
async def get_bibit():
    response = await read_bibit()
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


# @app.get("/bibit/{nama}")
# async def get_bibit_by_name(nama):
#     response = await read_bibit_by_name(nama)
#     if response:
#         return response
#     raise HTTPException(400, "Something went wrong")


# READ PUPUK
@app.get("/pupuk")
async def get_pupuk():
    response = await read_pupuk()
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


# READ PESTISIDA
@app.get("/pestisida")
async def get_pestisida():
    response = await read_pestisida()
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


# UPDATE DATA


# UPDATE LAHAN
@app.put("/lahan/{x}/{y}/{bibit}")
async def put_lahan(x, y, bibit):
    response = await update_lahan(x, y, bibit)
    if response:
        return f"Berhasil menanam {bibit}"
    raise HTTPException(404, f"There is no lahan with the location x : {x} and y : {y}")


# CREATE DATA

# CREATE NEW BIBIT
# @app.post("/bibit")
# async def post_bibit(bibit : Bibit):
#     response = await create_bibit(bibit)
#     if response:
#         return response
#     raise HTTPException(400, "Something went wrong")
