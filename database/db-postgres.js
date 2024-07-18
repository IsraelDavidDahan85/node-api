import { Sequelize } from "sequelize";
import dbConfig from "../config/db-config.js";

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    {
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        database: dbConfig.DB,
        dialect: "postgres",
    }
);

export default sequelize;