import handleError from './../../handleError';
import { User, genUserIdentifier } from '../../models/user';

const refresh = handleError(async(req,res) => {
  const user = await User.findById((req as any).user._id).select(['-password']);
  if(!user) return res.status(500).send("");
  const {ultraHash, hash} = await genUserIdentifier((req as any).token);
  user.clientIdentity = ultraHash;
  await user.save();
  const { _id, name, email, picture } = user;
  res.status(200).send({_id, name, email, picture, clientIdentity:hash});
})

export default refresh;