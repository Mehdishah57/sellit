// import { Request } from "express";
// import handleError from "../../handleError";
// import { Message } from "../../models/message";

// interface Req extends Request{
//     body: {
//         email: string;
//         productId: string;
//         productOwner: string;
//         productOwnerEmail: string
//     }
// }

// const messages = handleError(async(req: Req,res)=>{
//     const { email,productOwnerEmail } = req.body;
//     let message = await Message.find().or([
//         { user1: email, user2: productOwnerEmail },
//         { user1: productOwnerEmail, user2: email }
//     ]).populate("productOwner", "name picture").populate("productId","title picture.image1");
//     if(!message) return res.status(200).send({ notFound: true });
//     res.status(200).send(message);
// });

// export default messages;