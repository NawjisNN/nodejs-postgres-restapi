const TextService = require('../services/TextService');

class TextController {
    constructor() {
        this.textService = new TextService();
    }

    async getAllTexts(req, res) {
        try {
            const texts = await this.textService.getAllTexts();
            res.json(texts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getTextById(req, res) {
        try {
            const text = await this.textService.getTextById(req.params.id);
            res.json(text);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async createText(req, res) {
        try {
            const text = await this.textService.createText(req.body);
            res.json(text);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateText(req, res) {
        try {
            const result = await this.textService.updateText(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteText(req, res) {
        try {
            const result = await this.textService.deleteText(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getWordCount(req, res) {
        try {
            const count = await this.textService.getWordCount(req.body.content);
            res.json({ wordCount: count });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getCharacterCount(req, res) {
        try {
            const count = await this.textService.getCharacterCount(req.body.content);
            res.json({ characterCount: count });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getSentenceCount(req, res) {
        try {
            const count = await this.textService.getSentenceCount(req.body.content);
            res.json({ sentenceCount: count });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getParagraphCount(req, res) {
        try {
            const count = await this.textService.getParagraphCount(req.body.content);
            res.json({ paragraphCount: count });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getLongestWords(req, res) {
        try {
            const longestWords = await this.textService.getLongestWords(req.body.content);
            res.json({ longestWords });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = TextController;
