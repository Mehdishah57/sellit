
import { User, validateUser } from '../../models/user';
import { genSalt, hash } from 'bcrypt';
import handleError from './../../handleError';

const signup = handleError(async(req,res) => {
  const { error } = validateUser(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  const {name, email, password, phone} = req.body;
  const user = await User.findOne({email});
  if(user) return res.status(400).send("Email in use");
  const newUser = new User({
    name, email, password, phone
  });
  const salt = await genSalt(10);
  const HASHED_PASS = await hash(password,salt);
  newUser.password = HASHED_PASS;
  await newUser.save();
  res.status(200).send("success");
});

export default signup;