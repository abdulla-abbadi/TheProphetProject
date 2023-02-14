FROM node:alpine
WORKDIR /app
COPY ./prophet/package.json /app 
COPY ./prophet/package-lock.json /app
RUN npm install 
COPY ./prophet/ .
