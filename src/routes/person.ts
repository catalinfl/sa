import express from "express"
import { addPerson, getPeople, getPerson } from "../controllers/person";
import { isAvailable } from "../utils/isAvailable";



const router = express.Router();
router.get('/person/:id', getPerson)
router.get('/people', getPeople)
router.post('/person', isAvailable, addPerson)


export default router;