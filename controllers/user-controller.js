import userService from '../services/user-service';

export default class UserController {
    static async getAll(req, res) {
        try {
            const users = await userService.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getById(req, res) {
        try {
            const user = await userService.getById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async create(req, res) {
        try {
            const user = await userService.create(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const user = await userService.update(req.params.id, req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const user = await userService.delete(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
