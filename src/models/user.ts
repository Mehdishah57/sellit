import { Schema, model } from "mongoose";
import Jwt from "jsonwebtoken";
import joi from "joi";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required:true},
  password: {type: String, maxLength:2048, required: true},
  phone: {type: String, required: true},
  picture: {
    url: { type: String },
    id: { type: String }
  },
  clientIdentity: {type: String}
});

const User = model('User', userSchema);

const genToken = (user: any) => {
  const token = Jwt.sign({_id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin, picture: user.picture}, process.env.jwtPrivateKey!, {expiresIn: "24h"});
  return token;
}

const genUserIdentifier = async(token: string) => {
    const secret = token + Date.now().toString();
    const hash = crypto.createHash('sha256').update(secret).digest('hex');
    const salt = await bcrypt.genSalt(10);
    const ultraHash = await bcrypt.hash(hash,salt);
    return {ultraHash, hash};
}

const validateUser = (user: any) => {
  const schema = joi.object({
    name: joi.string().min(5).max(50).required(),
    email: joi.string().email().max(145).min(5).required(),
    password: joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,30}$/).required().messages({"string.pattern.base":"Password Must Contain Uppercase, Lowercase Letters and Numbers"}),
    phone: joi.string().min(11).max(11).required(),
    clientIdentity: joi.string()
  });
  return schema.validate(user);
}

export {
  User, validateUser, genToken, genUserIdentifier
}