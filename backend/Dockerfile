FROM python:3.12.0-alpine

COPY requirements.txt /api/
RUN pip install --no-cache-dir -r /api/requirements.txt

COPY . /api

WORKDIR /api

CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000" ]