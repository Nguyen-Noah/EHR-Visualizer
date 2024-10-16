import { loadAllJsonObjects } from "./utils/EHRParser.js";
import dotenv from "dotenv"

dotenv.config({path: "./.env"});
loadAllJsonObjects("C:\\Users\\ajdec\\Downloads\\synthea_sample_data_fhir_r4_sep2019\\fhir");