import { Router } from "express";
import getCategories from './../controllers/categories/getCategories';

const router = Router();

router.get("/", getCategories);

export default router;