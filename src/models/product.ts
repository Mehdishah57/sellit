import mongoose from "mongoose";
import Joi from "joi";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 5,
    maxLength: 50, 
    required: true,
    index:true
  },
  country:{
    type: String,
    required: true
  },
  price: {
    type: Number, 
    min: 1,
    max: 1000000000,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  mainCategory: {
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  description: {
    type: String,
    minLength: 10, 
    maxLength: 1000, 
    required: true,
    index:true
  },
  active: {
    type: Boolean,
    default: true
  },
  picture:{
    image1: {
      url: String,
      id: String
    },
    image2: {
      url: String,
      id: String
    },
    image3: {
      url: String,
      id: String
    },
    image4: {
      url: String,
      id: String
    },
    image5: {
      url: String,
      id: String
    },
    image6: {
      url: String,
      id: String
    }
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Product = mongoose.model("Product", productSchema);

const validateProduct = (product: any) => {
  const imageSchema = Joi.object({
    name: Joi.string(),
    data: Joi.binary(),
    size: Joi.number().max(2000000),
    encoding: Joi.string(),
    tempFilePath: Joi.string().allow(null, ''),
    truncated: Joi.boolean(),
    mimetype: Joi.string(),
    md5: Joi.string(),
    mv: Joi.function()
  })
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    price: Joi.number().min(1).max(1000000000).required(),
    mainCategory: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().min(10).max(1000).required(),
    picture: Joi.object({
      image1: imageSchema.required(),
      image2: imageSchema,
      image3: imageSchema,
      image4: imageSchema,
      image5: imageSchema,
      image6: imageSchema
    }),
    city: Joi.string().required(),
    country: Joi.string().required(),
    owner: Joi.string().required()
  });
  return schema.validate(product);
}

export {
  Product, validateProduct
}