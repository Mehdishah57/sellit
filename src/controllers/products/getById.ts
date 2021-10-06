import handleError from './../../handleError';
import { Product } from '../../models/product';

const getById = handleError(async(req,res) => {
  const { id } = req.params;
  if(!id) return res.status(400).send("No Id Sent");
  Product.findOne({_id:id, active:true}).populate("owner","name email picture phone")
    .then( (product: any) => res.status(200).send(product))
    .catch( () => res.status(404).send("No Product Found"));
})

export default getById;