FROM node:22.10.0-slim

WORKDIR /fhir-rest-server
COPY  package.json package-lock.json ./

RUN npm install
RUN npm install -g nodemon

VOLUME ["/fhir-rest-server"]

CMD ["nodemon", "server.js"]