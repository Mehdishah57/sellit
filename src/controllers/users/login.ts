import { User, genToken, genUserIdentifier } from '../../models/user';
import { compare } from 'bcrypt';
import handleError from './../../handleError';

enum Errors { EMAILPASS = "Incorrect Email or Password" }

const login = handleError(async(req,res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).send(Errors.EMAILPASS);
    const user = await User.findOne({email});
    if(!user) return res.status(404).send(Errors.EMAILPASS);
    const correctPass = await compare(password, user.password);
    if(!correctPass) return res.status(404).send(Errors.EMAILPASS);
    const token = genToken(user);
    const {ultraHash, hash} = await genUserIdentifier(token);
    user.clientIdentity = ultraHash;
    await user.save();
    const { _id, name, picture } = user;
    res.cookie('authtoken',token, {maxAge:2505600000, httpOnly: true});
    res.status(200).send({_id, name, email, picture,clientIdentity: hash});
});

export default login;