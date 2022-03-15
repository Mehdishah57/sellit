import { Prop, getModelForClass } from "@typegoose/typegoose";

class Countries {
  @Prop({ type: String, required: true })
  public name!: string

  @Prop({ type: Array })
  public cities!: any[]
}

const Country = getModelForClass(Countries, { schemaOptions: { collection: "countries" } });

// const countrySchema = new Schema({
//   name: { type: String, required: true },
//   cities: [String]
// });

// const Country = model("Country", countrySchema);

export {
  Country
}