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
        return string.toString().indexOf(char.toString()) > -1 ? string.toString().indexOf(char.toString()) + 1 : -1;
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
            case '1st uppercase':
                return text.toString().slice(0,1).toUpperCase() + text.toString().slice(1);
            case '1st uppercase, others lowercase':
                return text.toString().slice(0,1).toUpperCase() + text.toString().toLowerCase().slice(1);
            default:
                return text.toString();
        }
    }

    /**
     * Joins multiple strings together with a joiner character or string inbetween
     * @param {string} str1 first string
     * @param {string} str2 second string
     * @param {string} str3 third string
     * @param {string} joiner the joining string or charactrer
     */
    ext.join = function(str1, str2, str3, joiner) {
        var str = [];
        if (str1.toString().length > 0) { str.push(str1.toString()) }
        if (str2.toString().length > 0) { str.push(str2.toString()) }
        if (str3.toString().length > 0) { str.push(str3.toString()) }
        return str.join(joiner.toString());
    }

    /**
     * Returns the reversed string of the input string
     * @param {string} string 
     */
    ext.reverse = function(string) {
        return string.toString().split('').reverse().join('');
    } 

    /**
     * Returns a substring of the provided string
     * @param {string} string a string
     * @param {number} start the index of the first letter to include into the substring
     * @param {number} end the index of the last letter to include into the substring
     * If no start number is provided, start will be set at char 0 (1 for the kids)
     * If no end number is provided, substring will be extracted to the end of the provided string
     */
    ext.substring = function(string, start, end) {
        var strStart = start;
        var strEnd = end;
        if (strStart.toString().length = 0) { strStart = 0; }
        if (strEnd.toString().length = 0) { strEnd = string.toString().length - 1; }
        return string.toString().substring(Number.parseInt(strStart) - 1, Number.parseInt(strEnd));
    }

    /**
     * Removes whitespaces at the beginning, at the end or both of a give string
     * @param {string} string the given string
     * @param {string} format the trimming parameter
    */
    ext.trim = function(string, format) {
        switch(format) {
            case 'at the beginning':
                return string.toString().trimStart();
            case 'at the end':
            return string.toString().trimEnd();
            case 'both':
                return string.toString().trim();
            default:
                return string.toString();
        }
    }

    /**
     * Replaces all occurences of a substring inside a string by another string
     * @param {*} string the given string
     * @param {*} before what has to be replaced
     * @param {*} after the replacement tring
     */
    ext.replace = function(string, option, before, after) {
        return string.toString().replace(before.toString(), after.toString());
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b','%s contains word %s','contains', 'I love Scratch', 'love'],
            ['r', 'index of word %s in the sentence %s', 'find' ,'will', 'What will you create ?'],
            ['r', 'index of character %s in the word %s', 'findChar' ,'h', 'Woohoo!'],
            ['r', 'format %s with %m.formatFomat', 'format', 'hello', '1st uppercase'],
            ['r', 'join %s %s %s with %s', 'join', 'Hello', 'world', '!', ' '],
            ['r', 'reverse %s', 'reverse','Hello there'],
            ['r', '%s from letter %n to %n', 'substring', 'Sun is shining', '5', '10'],
            ['r', 'removes spaces %m.trimFormat of %s', 'at the beginning', '      hmmmmm...'],
            ['r', 'replace %m %s in %s by %s', 'all', 'a', 'Abracadabra', 'O']
        ],
        menus:{
            formatFomat:['all lowercase', 'all uppercase', '1st uppercase', '1st uppercase, others lowercase'],
            trimFormat:['at the beginning', 'at the end', 'both'],
            replaceOption:['all', 'first', 'last', '%n']
        },
        displayName: 'Advanced String Operators'
    };
    
    // Register the extension
    ScratchExtensions.register('Advanced String Operators', descriptor, ext);
})({});