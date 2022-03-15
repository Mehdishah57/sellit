import { Router } from "express";
import send from "../controllers/messages/send";
import auth from "../middlewares/auth";
import authAdv from "../middlewares/authAdv";

const message = Router();

// message.use(auth, authAdv);

message.get("/send",send);

export default message;