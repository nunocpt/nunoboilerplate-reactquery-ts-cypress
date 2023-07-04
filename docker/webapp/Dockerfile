FROM node:alpine
EXPOSE 3000

RUN mkdir webapp
ADD ./webapp ./webapp
WORKDIR ./webapp

RUN npm install
CMD npm start
