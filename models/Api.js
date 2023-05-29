import mongoose from "mongoose";


const ApiSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    national: {
        type:String,
        required:true
    },
})
export default mongoose.model("Api", ApiSchema)