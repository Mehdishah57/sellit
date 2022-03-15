import { Category } from "../../models/categories";
import { Product, validateProduct } from "../../models/product";
import handleError from "./../../handleError";
import uploadImage from './../../upload/image';

const add = handleError(async (req, res) => {
  req.body.picture = req.files;
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const category = await Category.find({
    subCategories: { $in: [req.body.category] },
  });
  if (!category.length) return res.status(400).send("Invalid Category");
  const { title, price, description, owner, category:userCat, mainCategory, country, city } = req.body;
  let picture: any = {};
  const imageKeys = Object.keys(req.body.picture);
  for (let key in imageKeys){
    const picName= req.body.picture[imageKeys[key]].name;
    const picExtension = picName.slice(picName.indexOf("."));
    const completeName = imageKeys[key] + picExtension;
    req.body.picture[imageKeys[key]].name = completeName;
    //@ts-ignore
    const {url, id} = await uploadImage(req.body.picture[imageKeys[key]]);
    if(!url||!id){
      throw new Error("Image Upload Issue")
    }
    
    picture[imageKeys[key]] = {url:url.webContentLink,id};
  }
  const product = new Product({
    title,price,description,owner,category:userCat,picture, mainCategory, country, city
  });
  try {
    await product.save();
    res.status(200).send("Product Saved Successfully");
  } catch (error: any) {
    console.log(error)
    if(error.errors) {
      const keys = Object.keys(error.errors)
      return res.status(500).send(error.errors[keys[0]].message);
    }
    res.status(500).send({message: "Couldn't save Product",error});
  }
});

export default add;
