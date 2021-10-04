import { NextFunction, Request, Response } from "express";

const handleError = (callback: (req: Request,res: Response) => void) => {
    return async (req: Request,res: Response,next: NextFunction) => {
        try {
            await callback(req,res);
        } catch (error) {
            console.error("An Error has Occured",error)
        }
    }
}

export default handleError;