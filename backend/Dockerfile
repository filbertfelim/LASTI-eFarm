FROM python:3.12-slim

WORKDIR /app
# Install system dependencies
RUN apt-get update \
    && apt-get install -y build-essential \
    && apt-get install -y libffi-dev libssl-dev

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "127.0.0.1", "--port", "8000"]