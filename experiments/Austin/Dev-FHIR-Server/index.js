const {initialize, loggers, constants } = require("@bluehalo/node-fhir-server-core");
const {VERSIONS} = constants;
const dotenv = require("dotenv");

dotenv.config();

let config = {
    profiles: {
        patient: {
            service: "./services/patient/patient.service.js",
            metadata: "./services/patient/patient.metadata.js",
            versions: [VERSIONS['4_0_0']]
        },
        observation: {
            service: "./services/observation/observation.service.js",
            metadata: "./services/observation/observation.metadata.js",
            versions: [VERSIONS['4_0_0']]
        }
    }
};

let server = initialize(config);
let logger = loggers.get('default');

server.listen(8080, ()=>{
    logger.info('Starting the FHIR Dev Server at localhost:8080');
});