FROM node:22.10.0-slim

WORKDIR /fhir-rest-server
COPY  db_functions/* routes/* utils/* package.json script.js server.js /fhir-rest-server/

RUN npm install
RUN npm install -g nodemon

EXPOSE $SERVER_PORT 

VOLUME ["/fhir-rest-server"]

CMD ["nodemon", "server.js"]