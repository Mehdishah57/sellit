import { Product } from '../../models/product';
import handleError from './../../handleError';

const update = handleError(async(req,res) => {
  const { id } = req.params;
  await Product.updateOne({
    _id: id,
    owner: (req as any).user._id
  },{ $set: req.body });
  res.status(200).send("Successfully Updated");
});

export default update;