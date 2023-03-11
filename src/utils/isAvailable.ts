import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express"
import { addPerson } from "../controllers/person";
import errorFunc from "./errorFunc";


export const isAvailable = (req: Request, res: Response, next: NextFunction) => {
        const available: boolean = req.body.available;
        if (available === true) {
            next();
        }
        else {
            res
            .header({ 'content-type': "application/json" })
            .status(403)
            .send(`Error: Available function is ${available}`)
            .end()
             errorFunc(res.statusCode)
        }
}
