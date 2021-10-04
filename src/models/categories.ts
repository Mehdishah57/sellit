import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {type: String, required:true},
  subCategories: {type: Array}
});

const Category = mongoose.model("Category", categorySchema);

export {
  Category
}