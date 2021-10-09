"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getEnvVars = function () {
    var _a = process.env, jwtPrivateKey = _a.jwtPrivateKey, CLIENT_ID = _a.CLIENT_ID, CLIENT_SECRET = _a.CLIENT_SECRET, REDIRECT_URI = _a.REDIRECT_URI, REFRESH_TOKEN = _a.REFRESH_TOKEN, CORS_ORIGIN = _a.CORS_ORIGIN, MONGO_SERVER = _a.MONGO_SERVER;
    if (!jwtPrivateKey || !CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN || !CORS_ORIGIN || !REDIRECT_URI || !MONGO_SERVER) {
        throw new Error("Enviornment Varriables Not Set");
    }
};
exports.default = getEnvVars;
