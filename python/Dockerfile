#Deriving the latest base image
FROM python:latest

# Any working directory can be chosen as per choice like '/' or '/home' etc
WORKDIR /scripts

#to COPY the remote file at working directory in container
COPY rpcauth.py ./
# Now the structure looks like this '/scripts/test.py'

#CMD instruction should be used to run the software
#contained by your image, along with any arguments.

CMD [ "python"]