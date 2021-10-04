import { Router } from "express";
import delById from "../controllers/products/delById";
import getById from "../controllers/products/getById";
import update from "../controllers/products/update";
import add from './../controllers/products/add';
import auth from './../middlewares/auth';
import authAdv from './../middlewares/authAdv';
import getAds from './../controllers/products/getAds';
import search from './../controllers/products/search';

const router = Router();

//Get Ads Based On Query
router.post("/search", search);

router.get("/getAllAds", getAds);
//Get Ads By Id
router.get("/:id", getById);
//Add new Ads
router.post("/add", auth, authAdv, add);
//Update Ads
router.patch("/:id", auth, authAdv, update);
//Delete Ads By Id
router.delete("/:id", auth, authAdv, delById);

export default router;