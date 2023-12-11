import User from "../database/models/user-model";
import db from "../database/db";
import e from "express";

export default class UserService {
    constructor() {
        this.db = db;
    }

    async getAll() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async getById(id) {
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async create(user) {
        try {
            const newUser = await User.create(user);
            return newUser;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async update(user) {
        try {
            const updatedUser = await User.update(user, {
                where: {
                    id: user.id,
                },
            });
            return updatedUser;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async delete(id) {
        try {
            const deletedUser = await User.destroy({
                where: {
                    id: id,
                },
            });
            return deletedUser;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

