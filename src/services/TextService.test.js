const TextService = require('./TextService');

const textService = new TextService();
const exampleText = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";

describe('TextService', () => {
    test('getWordCount should return the correct word count', async () => {
        await expect(textService.getWordCount(exampleText)).resolves.toBe(16);
    });

    test('getCharacterCount should return the correct character count', async () => {
        await expect(textService.getCharacterCount(exampleText)).resolves.toBe(60);  // Without spaces
    });

    test('getSentenceCount should return the correct sentence count', async () => {
        await expect(textService.getSentenceCount(exampleText)).resolves.toBe(2);
    });

    test('getParagraphCount should return the correct paragraph count', async () => {
        await expect(textService.getParagraphCount(exampleText)).resolves.toBe(1);
    });

    test('getLongestWords should return the longest words in paragraphs', async () => {
        await expect(textService.getLongestWords(exampleText)).resolves.toEqual(["quick", "brown", "jumps", "slept"]);
    });
});
