import { NextFunction, Request, Response } from "express";

const admin = (req: Request,res: Response,next: NextFunction) => {
    if((req as any).user.isAdmin) return next();
    res.status(403).send("Access Forbidden");
}

export default admin;