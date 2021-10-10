import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Express } from 'express-serve-static-core';
import user from "../routes/user";
import product from "../routes/product";
import category from "../routes/category";
import country from "../routes/country";
import fileUpload from "express-fileupload";
import setHeaders from '../middlewares/setHeaders';

const getRoutes = (app: Express) => {
    app.use(express.json());
    app.use(fileUpload());
    app.use(cors({
        origin: process.env.CORS_ORIGIN, 
        credentials:true,optionsSuccessStatus: 200 
    }));
    app.use(cookieParser());
    app.use(setHeaders);
    app.use("/api/user" , user);
    app.use("/api/product", product);
    app.use("/api/category", category)
    app.use("/api/country", country);
}

export default getRoutes;