import { Product } from "../../models/product";
import handleError from './../../handleError';

const getAds = handleError(async(req, res) => {
  const pageSize = parseInt((req.query.pageSize as string));
  const pageNumber = parseInt((req.query.pageNumber as string));
  if(typeof pageSize !== 'number' || typeof pageNumber !== 'number')
    return res.status(400).send("PageSize and PagNumber Must be Numbers");
  if(!pageSize || !pageNumber) {
    const products = await Product.find().limit(20);
    return res.status(200).send(products);
  }
  const product = await Product.find({active: true}).skip(pageSize*(pageNumber-1)).limit(pageSize).populate("owner", "name email phone");
  res.status(200).send(product);
});

export default getAds;