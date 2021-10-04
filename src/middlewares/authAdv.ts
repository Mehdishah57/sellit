import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../models/user";

const authAdv = async(req: Request, res: Response, next: NextFunction) => {
  const secureId = req.header("clientIdentity");
  if(!secureId) return res.status(403).send("You have no rights to Request");
  const user = await User.findById((req as any).user._id);
  if(!user) return res.status(403).send("You have no rights to Request");
  const correctSecureId = await bcrypt.compare(secureId, user.clientIdentity);
  if(!correctSecureId) return res.status(403).send("You have no rights to Request");
  next();
}

export default authAdv;