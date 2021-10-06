import { Product } from "../../models/product";
import handleError from "./../../handleError";

const deactivate = handleError(async(req,res)=>{
  const { id } = req.params;
  if(!id) return res.status(400).send("Bad Request");
  try {
    await Product.updateOne({_id:id},{active:false})
    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send("Bad Request");
  }
});

export default deactivate;