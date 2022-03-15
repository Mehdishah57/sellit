import { Product } from '../../models/product';
import handleError from './../../handleError';

const search = handleError(async(req,res) => {
  const {search: searchString, pageNumber, pageSize, ...rest} = req.body;
  if(!pageNumber || !pageSize) return res.status(400).send("Page Number and Size Missing");
  if(!searchString) 
    return res.send(await Product.find({...rest}).limit(pageSize).skip(pageSize*(pageNumber-1)).populate("owner", "name email phone"));
  const titleMatches = await Product.find({
    ...rest,
    $text:{$search: searchString}
  }).limit(pageSize).skip(pageSize*(pageNumber-1)).populate("owner", "name email phone")
  res.send(titleMatches)
});

export default search;