import { Router } from "express";
import {getConditions, getConditionByID} from "../db_functions/conditionsHelper.js";

const conditionsRouter = Router();

export {conditionsRouter};