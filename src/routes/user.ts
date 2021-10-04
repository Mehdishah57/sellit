import { Router } from "express";
import login from "../controllers/users/login";
import signup from "../controllers/users/signup";
import logout from './../controllers/users/logout';
import auth from "../middlewares/auth";
import refresh from './../controllers/users/refresh';
import authAdv from './../middlewares/authAdv';
import addImage from './../controllers/users/addImage';
import getAds from './../controllers/users/getAds';

const router = Router();

router.get("/getUserAds/:id", auth, authAdv, getAds);
router.post("/login" , login);
router.post("/signup" , signup);
router.post("/logout" ,auth, logout);
router.post("/refresh" ,auth, refresh);
router.patch("/userImage", auth, authAdv, addImage);

export default router;