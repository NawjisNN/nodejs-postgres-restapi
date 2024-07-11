const Text = require('../models/TextModel');

class TextRepository {
    async getAll() {
        return await Text.findAll();
    }

    async getById(id) {
        return await Text.findByPk(id);
    }

    async create(textData) {
        return await Text.create(textData);
    }

    async update(id, textData) {
        return await Text.update(textData, { where: { id } });
    }

    async delete(id) {
        return await Text.destroy({ where: { id } });
    }

    async getWordCount(content) {
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(1);
        return content.split(/\s+/).filter(word => word).length;
    }
    
    async getCharacterCount(content) {
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(1);
        return content.replace(/\s+/g, '').length;
    }
    
    async getSentenceCount(content) {
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(1);
        return content.split(/[.!?]+\s*/).filter(sentence => sentence).length;
    }
    
    async getParagraphCount(content) {
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(1);
        return content.split(/\n\n+/).filter(paragraph => paragraph).length;
    }
    
    async getLongestWords(content) {
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(1);
        // Step 1: Split the content into paragraphs
        const paragraphs = content.split(/\n\n+/).filter(paragraph => paragraph);

        // Step 2: Process each paragraph to find the longest words
        const longestWordsPerParagraph = paragraphs.map(paragraph => {
        const words = paragraph.split(/\s+/).filter(word => word);
        const maxLength = Math.max(...words.map(word => word.length));
        return words.filter(word => word.length === maxLength);
        });

        // Step 3: Flatten the result to get a single array of longest words
        return longestWordsPerParagraph.flat();
    }
}

module.exports = TextRepository;
