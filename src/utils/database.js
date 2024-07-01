import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

 

  try {
    await mongoose.connect("mongodb+srv://admin:h3axjWtoJfifN9lW@cluster0.trovmqm.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}