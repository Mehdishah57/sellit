import { Product } from "../../models/product";
import handleError from "./../../handleError";

const activate = handleError(async(req,res)=>{
  const { id } = req.params;
  if(!id) return res.status(400).send("Bad Request");
  try {
    await Product.updateOne({_id:id},{active:true})
    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send("Bad Request");
  }
});

export default activate;