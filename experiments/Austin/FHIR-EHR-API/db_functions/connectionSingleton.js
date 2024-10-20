import { MongoClient } from "mongodb";


let client;
const DataBaseSingleton = {
    init: async function(){
        if(!client){

            client = await MongoClient.connect(process.env.MONGO_DB, {maxPoolSize: 10});

            client.on("connectionCreated", ()=>{
                console.log("connected to database");
            })
            client.on("error", (error) =>{
                console.error(error.message);
            });
            
            client.on("timeout", ()=>{
                console.error("Mongodb connection timeout.");
            });

            client.on("connectionPoolClosed", ()=>{
                console.log("database connection pool closed.")
            });
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
