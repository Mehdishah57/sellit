import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_SERVER}`,{useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex:true});
        console.log("Connected With Database");
    } catch (error) {
        console.error("Unable to Connect to Database",error);
        process.exit(-1);
    }
}

export default connectToDatabase;