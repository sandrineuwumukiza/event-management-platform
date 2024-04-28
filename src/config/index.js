import dotenv from "dotenv";
dotenv.config();

const Configs = {
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING = 'mongodb+srv://uwasandrine99:sandrine99h@cluster0.keyhhwn.mongodb.net/Event-Management-System',
    PORT: process.env.PORT = 3000,
}

export default Configs;