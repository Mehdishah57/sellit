import { Server } from "socket.io";

const initSocket = (server: any) => {
  return new Server(server, {
    cors: {
      origin: "http://192.168.18.4:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
  });
}

export default initSocket;