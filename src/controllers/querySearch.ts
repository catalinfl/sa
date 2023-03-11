import express, { Request, Response } from "express"
import { Person } from "../models/Person";


export const getQuery = async (req: Request, res: Response) => {
    const searchedId = req.query.id
    const age = req.query.age
    const fname = req.query.fname;
    try {
        const getQuery = await Person.findById({ _id: searchedId, age: age, fname: fname })
        return res
                .cookie("search", getQuery)
                .status(200)
                .json(getQuery)
    }
    catch(err) {
        res
            .status(403)
            .header({"content-type": "text/plain"})
            .json(err)
    }
}