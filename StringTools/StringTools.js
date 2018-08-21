(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    /**
     * Returns weather a sentence contains a word
     * @param {string} sentence a sentence
     * @param {string} word a word
     * Trailing spaces are removed from the word
     */
    ext.contains = function(sentence, word) {
        return sentence.toString().split(' ').includes(word.toString().replace(/^\s+|\s+$/gm, ''));
    }

    /**
     * Returns the index of a word in the sentence
     * Returns -1 if the word doesn't appear in the sentence
     * @param {string} sentence 
     * @param {string} string 
     * Trailing spaces are removed from the word
     * Index begins at 1 and not at 0 (easier for the kids)
     */
    ext.find = function(word, sentence) {
        var array = sentence.toString().split(' ');
        if(array.includes(word.toString().replace(/^\s+|\s+$/gm, ''))) {
            return array.indexOf(word.toString().replace(/^\s+|\s+$/gm, '')) + 1;
        } else {
            return -1;
        }
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b','sentence %s contains word %s','contains', 'I love Scratch', 'love'],
            ['r', 'index of word %s in the sentence %s', 'a', 'a b c d e f']
        ],
        displayName: 'Advanced String Operators'
    };
    
    // Register the extension
    ScratchExtensions.register('Advanced String Operators', descriptor, ext);
})({});