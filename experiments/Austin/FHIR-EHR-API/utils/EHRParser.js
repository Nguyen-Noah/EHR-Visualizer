import {DataBaseSingleton} from "../db_functions/connectionSingleton.js"
import fs from "node:fs"
import path from "node:path"

let client;
async function loadJson(directory, jsonFile){
    const file = fs.readFileSync(path.join(directory, jsonFile), {encoding: "utf8"});
    const jsonObject = JSON.parse(file);
    try {
        await parseJsonObject(jsonObject);
    } catch (error) {
        console.log("error parsing json file.")
    }
    
}

async function parseJsonObject(jsonObject){
    try {
        const entries = jsonObject.entry;

        // Insert entries into their respective collections
        for (const entry of entries) {
            if (!entry.resource || !entry.resource.resourceType) {
                console.error("Invalid entry found, skipping...");
                continue;
            }
            const resourceType = entry.resource.resourceType;
            const collection = client.collection(resourceType + "s");

            const existingResource = await collection.findOne({ id: entry.resource.id });
            if (existingResource) {
                console.log(`Duplicate resource found: ${entry.resource.id}. Skipping insertion.`);
                continue; 
            }
            // Insert into the collection
            await collection.insertOne(entry.resource, {forceServerObjectId: false});
        }
        console.log("Data successfully inserted.");
    } catch (error) {
        console.error("Error inserting data into MongoDB:", error);
    } 
}

async function loadAllJsonObjects(directory){
      client = await DataBaseSingleton.init();
    const dirs = fs.readdirSync(directory, {encoding: "utf8"});
    for (const dirent of dirs){
        try {
            await loadJson(directory, dirent);
        } catch (error) {
            console.log(`error trying to load ${dirent}`);
            console.log(error.message)
        }
        
    }
    console.log("all json files have been parsed.")
    await DataBaseSingleton.close();
}

export {loadAllJsonObjects};