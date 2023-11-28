from datetime import date
from pydantic import BaseModel, Field

class Lahan(BaseModel):
    x: int = Field(...)
    y: int = Field(...)
    lastFertilized: date
    isPlanted: bool = False
    motionLevel: str = Field(...)
    humidityLevel: int = Field(...)
    plant : dict

class Pupuk(BaseModel):
    jumlah: int = Field(gt=0)
    jenis: str = Field(min_length=1)

class Pestisida(BaseModel):
    jumlah: int = Field(gt=0)

class Bibit(BaseModel):
    nama: str = Field(min_length=1)
    jumlah: int = Field(gt=0)