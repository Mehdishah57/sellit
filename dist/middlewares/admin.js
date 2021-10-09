"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin = function (req, res, next) {
    if (req.user.isAdmin)
        return next();
    res.status(403).send("Access Forbidden");
};
exports.default = admin;
