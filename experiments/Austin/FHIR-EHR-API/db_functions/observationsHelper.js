import {DataBaseSingleton} from "./connectionSingleton.js"


async function getObservationByID(observationID){
    let observation = null;
    let connection = null;

    try {
        
        const connection = await DataBaseSingleton.init();
        const db = connection.db("dev");

        const observationsCollection = db.collection("Observations");
        observation = observationsCollection.findOne({id: observationID});

    } 
    catch (error) {
        console.error(`ERROR: ${error.message}`);
    } 
    finally {
        return observation;
    }
}

async function getObservations(page=1, amount=100, filter={}){
    let observations = {};
    let connection = null;

    try {
        const connection = await DataBaseSingleton.init();
        const db = connection.db("dev");

        const observationsCollection = db.collection("Observations");
        observations = observationsCollection.find(filter, {
            limit: amount,
            skip: ((page -1) * amount)

        }).toArray();
    } 
    catch (error) {
        console.error(`ERROR: ${error.message}`)
    } 
    finally {
        return observations;
    }
}

export {getObservationByID, getObservations}
/*
example usage
results = queryObservations(patientID, {
    subject: patientID,
    category: "vital-signs",
    type: "Body Weight"
})

returns 
[
    {
        date: date,
        value: 68
        unit: kg
    },

]
*/