import jwt from 'jsonwebtoken';

const socketAuth = async(socket:any, next:any) => {
  const cookie = socket.request.headers.cookie;
  if(!cookie) return next(new Error("Not allowed"));
  const token = cookie.substring(10);
    try {
        const user = jwt.verify(token , process.env.jwtPrivateKey!);
        next();
    } catch (error) {
        next(new Error("Invalid Token"));
    }
}

export default socketAuth;