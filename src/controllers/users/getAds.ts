import { Product } from '../../models/product';
import { User } from '../../models/user';
import handleError from './../../handleError';

const getAds = handleError(async(req,res) => {
  const { id } = req.params;
  const user = await User.findOne({_id: id});
  if(!user) return res.status(404).send("Invalid User Id");
  const products = await Product.find({owner: id});
  if(!products) return res.status(200).send("Post some Ads");
  return res.status(200).send(products);
});

export default getAds;