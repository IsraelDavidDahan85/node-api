import { sequelize } from "../index.js";
import { DataTypes } from "sequelize";
import User from "./user-model.js";
import SubscriptionType from "./subscription-type-model.js";

const Subscription = sequelize.define("Subscription", {
    // Model attributes are defined here
    // subscriptionId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subscriptionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE
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

Subscription.belongsTo(User, { as: "user", foreignKey: "userId" });
Subscription.belongsTo(SubscriptionType, { as: "subscriptionType", foreignKey: "subscriptionTypeId" });
export default Subscription;