"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getEnvVars = function () {
    var jwtPrivateKey = process.env.jwtPrivateKey;
    if (!jwtPrivateKey) {
        throw new Error("Enviornment Varriables Not Set");
    }
};
exports.default = getEnvVars;
