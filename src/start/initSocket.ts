import { Server } from "socket.io";

const initSocket = (server: any) => {
  return new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN,
      methods: ["GET", "POST"],
      credentials: true
    }
  });
}

export default initSocket;