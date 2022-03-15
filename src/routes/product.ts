import { Router } from "express";
import delById from "../controllers/products/delById";
import getById from "../controllers/products/getById";
import update from "../controllers/products/update";
import add from './../controllers/products/add';
import auth from './../middlewares/auth';
import authAdv from './../middlewares/authAdv';
import getAds from './../controllers/products/getAds';
import search from './../controllers/products/search';
import activate from './../controllers/products/activate';
import deactivate from './../controllers/products/deactivate';

const router = Router();

//Get Ads Based On Query
router.post("/search", search);

router.get("/getAllAds", getAds);
//Get Ads By Id
router.get("/:id", getById);
//Add new Ads
router.post("/add",  add);
//Update Ads
router.patch("/:id", auth, authAdv, update);
//activate Ad
router.put("/activate/:id", auth, authAdv, activate);
//deactivate Ad
router.put("/deactivate/:id", auth, authAdv, deactivate);
//Delete Ads By Id
router.delete("/:id", auth, authAdv, delById);

export default router;