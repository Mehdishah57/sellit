"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var categories_1 = require("../../models/categories");
var product_1 = require("../../models/product");
var handleError_1 = __importDefault(require("./../../handleError"));
var image_1 = __importDefault(require("./../../upload/image"));
var add = handleError_1.default(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, category, _a, title, price, description, owner, userCat, mainCategory, country, city, picture, imageKeys, _b, _c, _i, key, _d, url, id, product, error_1, keys;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                req.body.picture = req.files;
                error = product_1.validateProduct(req.body).error;
                if (error)
                    return [2 /*return*/, res.status(400).send(error.details[0].message)];
                return [4 /*yield*/, categories_1.Category.find({
                        subCategories: { $in: [req.body.category] },
                    })];
            case 1:
                category = _e.sent();
                if (!category.length)
                    return [2 /*return*/, res.status(400).send("Invalid Category")];
                _a = req.body, title = _a.title, price = _a.price, description = _a.description, owner = _a.owner, userCat = _a.category, mainCategory = _a.mainCategory, country = _a.country, city = _a.city;
                picture = {};
                imageKeys = Object.keys(req.body.picture);
                _b = [];
                for (_c in imageKeys)
                    _b.push(_c);
                _i = 0;
                _e.label = 2;
            case 2:
                if (!(_i < _b.length)) return [3 /*break*/, 5];
                key = _b[_i];
                return [4 /*yield*/, image_1.default(req.body.picture[imageKeys[key]])
                    //@ts-ignore
                    // picture.push({[imageKeys[key]]:{url:url.webContentLink,id}});
                    //@ts-ignore
                ];
            case 3:
                _d = _e.sent(), url = _d.url, id = _d.id;
                //@ts-ignore
                // picture.push({[imageKeys[key]]:{url:url.webContentLink,id}});
                //@ts-ignore
                picture[imageKeys[key]] = { url: url.webContentLink, id: id };
                _e.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                product = new product_1.Product({
                    title: title,
                    price: price,
                    description: description,
                    owner: owner,
                    category: userCat,
                    picture: picture,
                    mainCategory: mainCategory,
                    country: country,
                    city: city
                });
                _e.label = 6;
            case 6:
                _e.trys.push([6, 8, , 9]);
                return [4 /*yield*/, product.save()];
            case 7:
                _e.sent();
                res.status(200).send("Product Saved Successfully");
                return [3 /*break*/, 9];
            case 8:
                error_1 = _e.sent();
                console.log(error_1);
                if (error_1.errors) {
                    keys = Object.keys(error_1.errors);
                    return [2 /*return*/, res.status(500).send(error_1.errors[keys[0]].message)];
                }
                res.status(500).send("Couldn't save Product" + error_1);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
exports.default = add;
