"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var login_1 = __importDefault(require("../controllers/users/login"));
var signup_1 = __importDefault(require("../controllers/users/signup"));
var logout_1 = __importDefault(require("./../controllers/users/logout"));
var auth_1 = __importDefault(require("../middlewares/auth"));
var refresh_1 = __importDefault(require("./../controllers/users/refresh"));
var authAdv_1 = __importDefault(require("./../middlewares/authAdv"));
var addImage_1 = __importDefault(require("./../controllers/users/addImage"));
var getAds_1 = __importDefault(require("./../controllers/users/getAds"));
var router = express_1.Router();
router.get("/getUserAds/:id", auth_1.default, authAdv_1.default, getAds_1.default);
router.post("/login", login_1.default);
router.post("/signup", signup_1.default);
router.post("/logout", auth_1.default, logout_1.default);
router.post("/refresh", auth_1.default, refresh_1.default);
router.patch("/userImage", auth_1.default, authAdv_1.default, addImage_1.default);
exports.default = router;
