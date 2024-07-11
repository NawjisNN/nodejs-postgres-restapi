const express = require('express');
const TextController = require('../controllers/TextController');

class TextRoutes {
    constructor() {
        this.router = express.Router();
        this.textController = new TextController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', (req, res) => this.textController.getAllTexts(req, res));
        this.router.get('/:id', (req, res) => this.textController.getTextById(req, res));
        this.router.post('/', (req, res) => this.textController.createText(req, res));
        this.router.put('/:id', (req, res) => this.textController.updateText(req, res));
        this.router.delete('/:id', (req, res) => this.textController.deleteText(req, res));
        this.router.post('/word-count', (req, res) => this.textController.getWordCount(req, res));
        this.router.post('/character-count', (req, res) => this.textController.getCharacterCount(req, res));
        this.router.post('/sentence-count', (req, res) => this.textController.getSentenceCount(req, res));
        this.router.post('/paragraph-count', (req, res) => this.textController.getParagraphCount(req, res));
        this.router.post('/longest-words', (req, res) => this.textController.getLongestWords(req, res));
    }
}

module.exports = new TextRoutes().router;
