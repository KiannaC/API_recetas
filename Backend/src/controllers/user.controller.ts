import Express  from "express";
import userModel from "../models/user.model";

export const getUsers = async(req:Express.Request, res:Express.Response) => {
    try {
        
        const result = await userModel.find()
        return res.status(200).json({result})

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}
