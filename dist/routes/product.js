"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var delById_1 = __importDefault(require("../controllers/products/delById"));
var getById_1 = __importDefault(require("../controllers/products/getById"));
var update_1 = __importDefault(require("../controllers/products/update"));
var add_1 = __importDefault(require("./../controllers/products/add"));
var auth_1 = __importDefault(require("./../middlewares/auth"));
var authAdv_1 = __importDefault(require("./../middlewares/authAdv"));
var getAds_1 = __importDefault(require("./../controllers/products/getAds"));
var search_1 = __importDefault(require("./../controllers/products/search"));
var activate_1 = __importDefault(require("./../controllers/products/activate"));
var deactivate_1 = __importDefault(require("./../controllers/products/deactivate"));
var router = express_1.Router();
//Get Ads Based On Query
router.post("/search", search_1.default);
router.get("/getAllAds", getAds_1.default);
//Get Ads By Id
router.get("/:id", getById_1.default);
//Add new Ads
router.post("/add", auth_1.default, authAdv_1.default, add_1.default);
//Update Ads
router.patch("/:id", auth_1.default, authAdv_1.default, update_1.default);
//activate Ad
router.put("/activate/:id", auth_1.default, authAdv_1.default, activate_1.default);
//deactivate Ad
router.put("/deactivate/:id", auth_1.default, authAdv_1.default, deactivate_1.default);
//Delete Ads By Id
router.delete("/:id", auth_1.default, authAdv_1.default, delById_1.default);
exports.default = router;
