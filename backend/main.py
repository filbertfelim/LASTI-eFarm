from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv, find_dotenv
import os
import motor.motor_asyncio
from models import Bibit, Lahan, Pestisida, Pupuk

load_dotenv(find_dotenv())

app = FastAPI()
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ.get("DATABASE_URL"))
database = client["eFarm"]
bibitCollection = database["Bibit"]
lahanCollection = database["Lahan"]
pupukCollection = database["Pupuk"]
pestisidaCollection = database["Pestisida"]

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
    cursor = lahanCollection.find()
    async for document in cursor:
        lahan.append(Lahan(**document))
    return lahan

async def read_bibit():
    bibit = []
    cursor = bibitCollection.find()
    async for document in cursor:
        bibit.append(Bibit(**document))
    return bibit

async def read_pupuk():
    pupuk = []
    cursor = pupukCollection.find()
    async for document in cursor:
        pupuk.append(Pupuk(**document))
    return pupuk

async def read_pestisida():
    pestisida = []
    cursor = pestisidaCollection.find()
    async for document in cursor:
        pestisida.append(Pestisida(**document))
    return pestisida

async def create_bibit(bibit):
    doc = bibit
    await bibitCollection.insert_one(dict(doc))
    return doc

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



# CREATE DATA

# CREATE NEW BIBIT
# @app.post("/bibit")
# async def post_bibit(bibit : Bibit):
#     response = await create_bibit(bibit)
#     if response:
#         return response
#     raise HTTPException(400, "Something went wrong")
