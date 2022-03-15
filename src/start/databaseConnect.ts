import{ connect } from "mongoose"

const connectToDatabase = async() => {
    try {
        await connect(`${process.env.MONGO_SERVER}`)
        console.log("Connected with Database")
    } catch (error) {
        console.error("Unable to Connect to Database",error);
        process.exit(-1);
    }
}

export default connectToDatabase;