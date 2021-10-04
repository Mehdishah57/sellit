import { Router } from "express";
import getCountries from './../controllers/countries/getCountries';

const router = Router();

router.get("/", getCountries);

export default router;