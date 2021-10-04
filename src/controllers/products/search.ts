import { Product } from '../../models/product';
import handleError from './../../handleError';

const search = handleError(async(req,res) => {
  const {search: searchString} = req.body;
  if(!searchString) return res.status(400).send("Please Search For Something");
  const titleMatches = await Product.find({
    $text:{$search: searchString}
  })
  res.send(titleMatches)
});

export default search;