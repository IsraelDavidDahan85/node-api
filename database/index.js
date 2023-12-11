import sequelize from "./db-pg.js";
import userModels from "./models/user-model.js";

//connect to db and sync models
const syncModels = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export { syncModels, userModels };