const UserRepository = require('../repositories/UserRepository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers() {
        return await this.userRepository.getAll();
    }

    async getUserById(id) {
        return await this.userRepository.getById(id);
    }

    async createUser(userData) {
        return await this.userRepository.create(userData);
    }

    async updateUser(id, userData) {
        return await this.userRepository.update(id, userData);
    }

    async deleteUser(id) {
        return await this.userRepository.delete(id);
    }
}

module.exports = UserService;
