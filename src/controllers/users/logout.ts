import { User } from '../../models/user';
import handleError from './../../handleError';

const logout = handleError(async(req, res) => {
  const user = await User.findById((req as any).user._id);
  if(!user) return res.status(404).send("Bad Request");
  user.clientIdentity = "";
  await user.save();
  res.clearCookie("authtoken");
  res.status(200).send("Success");
});

export default logout;