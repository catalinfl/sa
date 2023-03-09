import mongoose from "mongoose"

type PersonType = {
    fname: string,
    lname: string,
    age: number,
    comments: Array<string>
}

const personSchema = new mongoose.Schema<PersonType>({
    fname: { type: String, required: true },
    lname: { type: String, required: true},
    age: { type: Number, required: true},
    comments: { type: [String], required: true }
})


export const Person = mongoose.model("Person", personSchema)