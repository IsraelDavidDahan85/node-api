import { SubscriptionType } from '../database/index.js';

const getAll = async () => {
    try {
        const subscriptions = await SubscriptionType.findAll();
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
        const subscription = await SubscriptionType.findByPk(id);
        if (subscription) {
            return subscription;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const create = async (newSubscriptionType) => {
    try {
        const subscription = await SubscriptionType.create(newSubscriptionType);
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
        SubscriptionType.set(subscriptionUpdated);
        await SubscriptionType.save();
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
        await SubscriptionType.destroy();
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
