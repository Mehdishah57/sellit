import express from 'express';
import dotenv from "dotenv";
import getRoutes from './start/getRoutes';
import connectToDatabase from './start/databaseConnect';
import getEnvVars from './start/getEnvVars';
import http from "http";
import initSocket from './start/initSocket';
import MessageSockets from './messages/message';
import socketAuth from './middlewares/socketAuth';

const app = express();

dotenv.config();
getEnvVars();
connectToDatabase();
getRoutes(app);


const PORT = process.env.PORT || 3600;
const server = http.createServer(app).listen({port: PORT, host:"192.168.18.4"},()=>console.log("Server Started"));

const io = initSocket(server);
io.use(socketAuth);
MessageSockets(io);

export {
  io
}

