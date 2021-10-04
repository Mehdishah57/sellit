import { Schema, model } from "mongoose";

const countrySchema = new Schema({
  name: { type: String, required: true },
  cities: [String]
});

const Country = model("Country", countrySchema);

export {
  Country
}