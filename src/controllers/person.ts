import express, { Request, Response} from "express"
import { Person } from "../models/Person"

export const getPerson = async (req: Request, res: Response) => {
    try {
        const getPerson = await Person.findById({ _id: req.params.id })
        res.status(200).json(getPerson)
    }
    catch(err) {
        res.status(400).json(err)
    }
}

export const getPeople = async (req: Request, res: Response) => {
    try {
        const getPeople = await Person.find();
        res.status(200).json(getPeople)
    }
    catch(err) {
        res.status(400).json(err);
    }
}

export const addPerson = async (req: Request, res: Response) => {
    const newPerson = new Person(req.body);
    try {
        const saved = await newPerson.save();
        res.status(200).json(saved);
    }
    catch(err) {
        res.status(404).json(err);
    }
}