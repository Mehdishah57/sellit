"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var initSocket = function (server) {
    return new socket_io_1.Server(server, {
        cors: {
            origin: process.env.CORS_ORIGIN,
            methods: ["GET", "POST"],
            credentials: true
        }
    });
};
exports.default = initSocket;
