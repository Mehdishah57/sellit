"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = exports.Product = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var joi_1 = __importDefault(require("joi"));
var productSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: true,
        index: true
    },
    country: {
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
    city: {
        type: String,
        required: true
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 1000,
        required: true,
        index: true
    },
    active: {
        type: Boolean,
        default: true
    },
    picture: {
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
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    }
});
var Product = mongoose_1.default.model("Product", productSchema);
exports.Product = Product;
var validateProduct = function (product) {
    var imageSchema = joi_1.default.object({
        name: joi_1.default.string(),
        data: joi_1.default.binary(),
        size: joi_1.default.number().max(2000000),
        encoding: joi_1.default.string(),
        tempFilePath: joi_1.default.string().allow(null, ''),
        truncated: joi_1.default.boolean(),
        mimetype: joi_1.default.string(),
        md5: joi_1.default.string(),
        mv: joi_1.default.function()
    });
    var schema = joi_1.default.object({
        title: joi_1.default.string().min(5).max(50).required(),
        price: joi_1.default.number().min(1).max(1000000000).required(),
        mainCategory: joi_1.default.string().required(),
        category: joi_1.default.string().required(),
        description: joi_1.default.string().min(10).max(1000).required(),
        picture: joi_1.default.object({
            image1: imageSchema.required(),
            image2: imageSchema,
            image3: imageSchema,
            image4: imageSchema,
            image5: imageSchema,
            image6: imageSchema
        }),
        city: joi_1.default.string().required(),
        country: joi_1.default.string().required(),
        owner: joi_1.default.string().required()
    });
    return schema.validate(product);
};
exports.validateProduct = validateProduct;
