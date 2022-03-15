import { getModelForClass, Prop, Ref } from "@typegoose/typegoose";
import { Products } from "./product";
import { UserClass } from "./user";

class Messages {
    @Prop({ required: true, type: String })
    public user1!: string

    @Prop({ required: true, type: String  })
    public user2!: string

    @Prop({ type: String })
    public messages!: string[]

    @Prop({ ref: Products })
    public productId!: Ref<Products>

    @Prop({ ref: UserClass })
    public productOwner!: Ref<UserClass>
}

const Message = getModelForClass(Messages, { schemaOptions: { collection: "messages" } });

export {
    Message
}