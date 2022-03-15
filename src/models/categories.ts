import { getModelForClass, Prop } from '@typegoose/typegoose';
// import mongoose from "mongoose";

class Categories {
  @Prop({ type: String, required: true })
  public name!: string

  @Prop({ type: Array })
  public subCategories?: string[]
}

const Category = getModelForClass(Categories, { schemaOptions: { collection: "categories" } })

// const categorySchema = new mongoose.Schema({
//   name: {type: String, required:true},
//   subCategories: {type: Array}
// });

// const Category = mongoose.model("Category", categorySchema);

export {
  Category
}