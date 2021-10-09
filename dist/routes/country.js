"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getCountries_1 = __importDefault(require("./../controllers/countries/getCountries"));
var router = express_1.Router();
router.get("/", getCountries_1.default);
exports.default = router;
