import socketAuth from './../middlewares/socketAuth';
import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

const MessageSockets = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>) => {
  io.on("connect" , socket => {
    
  })
}

export default MessageSockets;