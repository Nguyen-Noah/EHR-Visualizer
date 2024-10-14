import { Router } from "express";
import {getPatients, getPatientByID} from "../db_functions/patientHelper.js";

const patientsRouter = Router();

patientsRouter.get("/", async (req, res) => {
    const patients = await getPatients();
    res.status(200).json(patients);
});

patientsRouter.get("/:patient_id", async (req, res) =>{
    const id = req.params.patient_id;
    const patient = await getPatientByID(id);
    res.status(200).json(patient);
});

patientsRouter.post("/search", async (req, res) =>{
    try {
        const page = req.query.page === undefined ? 1 : parseInt(req.query.page);
        const amount = req.query.amount === undefined ? 100 : parseInt(req.query.amount);

        const searchQuery = req.body;
        const patients = await getPatients(page, amount, searchQuery);
        res.sendStatus(200).json(patients);

    } catch (error) {
        res.sendStatus(400).json({
            error: error.message
        });
    }
});



export {patientsRouter};