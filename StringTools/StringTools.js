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
     * @param {string} sentence a sentence that might contain the word
     * @param {string} word a word that might be contained in the sentence
     * Trailing spaces are removed from the word
     */
    ext.contains = function(sentence, word) {
        return sentence.toString().split(' ').includes(word.toString().replace(/^\s+|\s+$/gm, ''));
    }

    /**
     * Returns the index of a word in the sentence
     * Returns -1 if the word doesn't appear in the sentence
     * @param {string} sentence a sentence that might contain the word
     * @param {string} word a word we want to know the index of
     * Trailing spaces are removed from the word
     * Index begins at 1 and not at 0 (easier for the kids)
     */
    ext.find = function(word, sentence) {
        return sentence.toString().split(' ').includes(word.toString().replace(/^\s+|\s+$/gm, '')) ? sentence.toString().split(' ').indexOf(word.toString().replace(/^\s+|\s+$/gm, '')) + 1 : -1;
    }

    /**
     * Returns the index of a char in the string
     * Returns -1 if the char doesn't appear in the string
     * @param {char} char a char we want to know the index of
     * @param {string} string a string that might contain the char
     * Index begins at 1 and not at 0 (easier for the kids)
     */
    ext.findChar = function(char, string) {
        return string.toString().indexOf(char) > -1 ? string.toString().indexOf(char) + 1 : -1;
    }

    /**
     * Format the text depending on the format parameter
     * Text can be all lowercase, all uppercase or with the first letter uppercase
     * @param {string} text the text to format
     * @param {string} format the selected format
     */
    ext.format = function(text, format) {
        switch(format) {
            case 'all lowercase':
                return text.toString().toLowerCase();
            case 'all uppercase':
                return text.toString().toUpperCase();
            case '1st letter uppercase':
                return text.slice(0,1).toUpperCase() + text.slice(1);
            default:
                return text;
        }
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b','sentence %s contains word %s','contains', 'I love Scratch', 'love'],
            ['r', 'index of word %s in the sentence %s', 'find' ,'a', 'a b c d e f'],
            ['r', 'index of char %s in the string %s', 'find' ,'h', 'woohoo!'],
            ['r', 'format %s %s.formatFomat', 'format', 'hello', '1st letter uppercase']
        ],
        menus:{
            formatFomat:['all lowercase', 'all uppercase', '1st letter uppercase']
        },
        displayName: 'Advanced String Operators'
    };
    
    // Register the extension
    ScratchExtensions.register('Advanced String Operators', descriptor, ext);
})({});