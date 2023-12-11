import sequelize from "../db-pg.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    phone: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    role: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    status: {
        type: DataTypes.ENUM("active", "inactive")
        // allowNull defaults to true
    },
    createdAt: {
        type: DataTypes.DATE
        // allowNull defaults to true
    },
    updatedAt: {
        type: DataTypes.DATE
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

export default User;