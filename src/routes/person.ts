import express from "express"
import { addPerson, getPeople, getPerson } from "../controllers/person";



const router = express.Router();
router.get('/person/:id', getPerson)
router.get('/people', getPeople)
router.post('/person', addPerson)


export default router;