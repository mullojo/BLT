# From tutorial node.js Guide: https://nodejs.org/en/docs/guides/nodejs-docker-webapp
# Ref cors configs here: https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/

FROM node:18

ENV POSTMARK_API_KEY=${POSTMARK_API_KEY}

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install app dependencies
RUN npm install \
        cors \
        mongodb \
        postmark

# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080