import { Router } from "express";
import {getEncounters, getEncounterByID} from "../db_functions/encountersHelper.js";

const encountersRouter = Router();

export {encountersRouter};