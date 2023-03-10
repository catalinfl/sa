import mongoose from "mongoose"

type PersonType = {
    fname: string,
    lname: string,
    age: number,
    comments: Array<string>,
    available: boolean
}

const personSchema = new mongoose.Schema<PersonType>({
    fname: { type: String, required: true },
    lname: { type: String, required: true},
    age: { type: Number, required: true},
    comments: { type: [String], required: true },
    available: { type: Boolean, requred: true }
})


export const Person = mongoose.model("Person", personSchema)