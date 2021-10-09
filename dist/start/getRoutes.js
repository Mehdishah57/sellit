"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var user_1 = __importDefault(require("../routes/user"));
var product_1 = __importDefault(require("../routes/product"));
var category_1 = __importDefault(require("../routes/category"));
var country_1 = __importDefault(require("../routes/country"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var getRoutes = function (app) {
    app.use(express_1.default.json());
    app.use(express_fileupload_1.default());
    app.use(cors_1.default({
        origin: "http://192.168.18.4:3000",
        credentials: true, optionsSuccessStatus: 200
    }));
    app.use(cookie_parser_1.default());
    app.use("/api/user", user_1.default);
    app.use("/api/product", product_1.default);
    app.use("/api/category", category_1.default);
    app.use("/api/country", country_1.default);
};
exports.default = getRoutes;
