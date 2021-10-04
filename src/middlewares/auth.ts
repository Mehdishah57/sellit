import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


const auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['authtoken'];
    if(!token) return res.status(400).send("No Token provided")
    try {
        const user = jwt.verify(token , process.env.jwtPrivateKey!);
        (req as any).user = user;
        (req as any).token = token;
        next();
    } catch (error) {
        res.status(403).send("Invalid Token");
    }
}

export default auth;