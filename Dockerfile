# base image 
FROM python:3.8

# setup environment variable
ENV DockerHome=/home/app/webapp

# set work Directory
RUN mkdir -p ${DockerHome}

# set work directory.
WORKDIR ${DockerHome}

# set environment variables  
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1 

RUN pip install --upgrade pip

COPY requirements.txt requirements.txt

COPY . ${DockerHome}

RUN pip install -r requirements.txt
