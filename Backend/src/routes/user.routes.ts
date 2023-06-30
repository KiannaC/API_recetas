import { Router } from "express";
import controllers from "../controllers";

const router = Router()

router.get("/getAll", controllers.User.getUsers)




export default router