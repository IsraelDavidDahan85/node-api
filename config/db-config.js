import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    DB: process.env.DB_NAME,
};

export default dbConfig;