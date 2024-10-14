import { MongoClient } from "mongodb";


let client;
const DataBaseSingleton = {
    init: async function(){
        if(!client){

            client = await MongoClient.connect(process.env.MONGO_DB, {maxPoolSize: 10});     
        }
        return client;
    },

    close: async function(){
        if(client){
            await client.close();
            client = null;
        }
    }
};


export {DataBaseSingleton};
