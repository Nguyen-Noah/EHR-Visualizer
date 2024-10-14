# FHIR EHR Rest API

## Description:
This is a demo rest api that provides endpoints for FHIR patient data. The underlying database is mongodb. This was created for linking up my mock FHIR patient data to Grafana, a visualizations front-end which is database agnostic. The goal is to display key patient data in a way that is easily visualizable.

## Endpoints:
### Patients
`GET host:8080/patients/`  
**Gets All Patient documents**

`GET host:8080/patients/:patient_id`  
**Gets the specified patient with the id**

`POST host:8080/patients/search`  
**Gets a list of patients matching the values in the object that was sent.**

## Setup
1. Install docker and setup a docker container for mongodb.
2. Download the mock FHIR R4 patient data from https://synthetichealth.github.io/
3. Open and modify the script.js file to point to the unzipped file of the mock data.
4. configure a .env file matching the dotenv.txt model.
5. npm install && npm run load-database to load and parse the FHIR data into your mongodb database.
6. node ./server.js to start basic rest server.
 