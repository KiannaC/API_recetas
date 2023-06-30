import mongoose, { Schema, version } from "mongoose";

const User = new Schema({
    nombre:{type: String, required: true},
    apellido:{type: String, required: true},
    correo:{type: String, required: true},
    contra:{type: String, required: true}
},
{
    timestamps: true,
    versionKey : false
})


export default mongoose.model("user", User)