"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageSockets = function (io) {
    io.on("connect", function (socket) {
        console.log("connected");
    });
};
exports.default = MessageSockets;
