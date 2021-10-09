"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var mongoose_1 = require("mongoose");
var countrySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    cities: [String]
});
var Country = mongoose_1.model("Country", countrySchema);
exports.Country = Country;
