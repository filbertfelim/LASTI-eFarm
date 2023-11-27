from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv, find_dotenv
import os
import motor.motor_asyncio
from models import Bibit

load_dotenv(find_dotenv())

app = FastAPI()
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ.get("DATABASE_URL"))
database = client["eFarm"]
bibitCollection = database["Bibit"]

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


async def create_bibit(bibit):
    doc = bibit
    await bibitCollection.insert_one(dict(doc))
    return doc


@app.get("/")
async def read_root():
    return "Database connected"


@app.post("/bibit", response_model=Bibit)
async def post_bibit(bibit: Bibit):
    response = await create_bibit(bibit)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")
