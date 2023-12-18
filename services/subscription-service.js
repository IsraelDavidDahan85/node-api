import { Subscription } from "../database/index.js";
import { SubscriptionType } from "../database/index.js";
import { User } from "../database/index.js";

const getAll = async () => {
    try {
        const subscriptions = await Subscription.findAll({
            include: [
                {
                    model: SubscriptionType,
                    as: "subscriptionType",
                    attributes: ["id", "name", "description", "price"]
                },
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "firstName", "lastName", "email", "address", "phone"]
                }
            ]
        });
        if (subscriptions.length > 0) {
        return subscriptions;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const subscription = await Subscription.findByPk(id);
        if (subscription) {
        return subscription;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const create = async (newSubscription) => {
    try {
        newSubscription.startDate = newSubscription.startDate ? new Date(newSubscription.startDate) : new Date();
        const subscription = await Subscription.create(newSubscription);
        if (subscription) {
        return subscription;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const update = async (id, subscriptionUpdated) => {
    try {
        const subscription = await getById(id);
        if (!subscription) {
        return null;
        }
        Subscription.set(subscriptionUpdated);
        await Subscription.save();
        return subscription;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const subscription = await getById(id);

        if (!subscription) {
        return null;
        }
        await subscription.destroy();
        return subscription;
    } catch (error) {
        throw new Error(error);
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    deleteById
}