import { Product } from '../../models/product';
import handleError from './../../handleError';

const delById = handleError(async(req,res) => {
  const { id } = req.params;
  const { deletedCount } = await Product.deleteOne({
    _id: id,
    owner: (req as any).user._id
  });
  if(!deletedCount) return res.status(400).send("Bad Request");
  res.status(200).send("Product Deleted");
});

export default delById;