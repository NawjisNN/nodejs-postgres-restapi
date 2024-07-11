const User = require('../models/UserModel');

class UserRepository {
    async getAll() {
        return await User.findAll();
    }

    async getById(id) {
        return await User.findByPk(id);
    }

    async create(userData) {
        return await User.create(userData);
    }

    async update(id, userData) {
        return await User.update(userData, { where: { id } });
    }

    async delete(id) {
        return await User.destroy({ where: { id } });
    }
}

module.exports = UserRepository;
