const TextRepository = require('../repositories/TextRepository');

class TextService {
    constructor() {
        this.textRepository = new TextRepository();
    }

    async getAllTexts() {
        return await this.textRepository.getAll();
    }

    async getTextById(id) {
        return await this.textRepository.getById(id);
    }

    async createText(textData) {
        return await this.textRepository.create(textData);
    }

    async updateText(id, textData) {
        return await this.textRepository.update(id, textData);
    }

    async deleteText(id) {
        return await this.textRepository.delete(id);
    }

    async getWordCount(content) {
        return this.textRepository.getWordCount(content);
    }
    
    async getCharacterCount(content) {
        return this.textRepository.getCharacterCount(content);
    }
    
    async getSentenceCount(content) {
        return this.textRepository.getSentenceCount(content);
    }
    
    async getParagraphCount(content) {
        return this.textRepository.getParagraphCount(content);
    }
    
    async getLongestWords(content) {
        return this.textRepository.getLongestWords(content);
    }
}

module.exports = TextService;
