import { Category } from '../../models/categories';
import handleError from './../../handleError';

const getCategories = handleError(async(req,res) => {
  const categories = await Category.find();
  res.status(200).send(categories);
})

export default getCategories;