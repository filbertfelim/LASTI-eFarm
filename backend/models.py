from datetime import date
from pydantic import BaseModel, Field
import uuid


class Lahan(BaseModel):
    id: int = Field(default_factory=uuid.uuid4, alias="_id")
    x: int = Field(...)
    y: int = Field(...)
    lastFertilized: date
    isPlanted: bool = False
    motionLevel: int = Field(...)
    humidityLevel: int = Field(...)


class Pupuk(BaseModel):
    id: int = Field(default_factory=uuid.uuid4, alias="_id")
    jumlah: int = Field(gt=0)
    jenis: str = Field(min_length=1)


class Pestisida(BaseModel):
    id: int = Field(default_factory=uuid.uuid4, alias="_id")
    jumlah: int = Field(gt=0)


class Bibit(BaseModel):
    id: int = Field(default_factory=uuid.uuid4, alias="_id")
    nama: str = Field(min_length=1)
    jumlah: int = Field(gt=0)
