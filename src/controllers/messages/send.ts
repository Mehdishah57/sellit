import { Request, Response } from "express";
import handleError from "../../handleError";
import { Message } from "../../models/message";

interface MyRequest extends Request{
    body: {
        email?: string;
        productId?: string;
        productOwner?: string;
        productOwnerEmail?: string;
        message: string
    }
}

const send = handleError(async(req: MyRequest,res)=>{
    const { email, productOwner, productId, productOwnerEmail, message: userMessage } = req.body;
    if(!email || !productId || !productOwner || !productOwnerEmail )
        return res.status(400).send("Insufficient Details Provided");
    let message = await Message.findOne({ $or: [
        { user1: email, user2: productOwnerEmail },
        { user2: email, user1: productOwnerEmail }
    ]})
    if(!message) return await createNewMessage(req,res);
    message.messages?.push(userMessage);
    await message.save();
    res.status(200).send("Success");
})

async function createNewMessage(req: MyRequest,res: Response) {
    const { email, productOwner, productId, productOwnerEmail, message: userMessage } = req.body;
    const message = new Message({
        user1: email,
        user2: productOwnerEmail,
        productId, productOwner,
        messages: [userMessage]
    })
    await message.save();
    res.status(200).send("Success new Message")
}

export default send;