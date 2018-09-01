(function (ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function () {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function () {
        return {
            status: 2,
            msg: "Ready"
        };
    };

    /**
     * Returns weather a sentence contains a word
     * @param {string} sentence a sentence that might contain the word
     * @param {string} word a word that might be contained in the sentence
     * Trailing spaces are removed from the word
     */
    ext.contains = function (sentence, word) {
        if (!sentence) sentence = "";
        if (!word) return false;
        return sentence.toString().split(" ").includes(word.toString().replace(/^\s+|\s+$/gm, ""));
    }

    /**
     * Returns the index of a word in the sentence
     * Returns -1 if the word doesn't appear in the sentence
     * @param {string} index the first or last word
     * @param {string} sentence a sentence that might contain the word
     * @param {string} word a word we want to know the index of
     * Trailing spaces are removed from the word
     * Index begins at 1 and not at 0 (easier for the kids)
     */
    ext.find = function (index, word, sentence) {
        switch (index) {
            case "first":
                return sentence.toString().split(" ").includes(word.toString().replace(/^\s+|\s+$/gm, "")) ? sentence.toString().split(" ").indexOf(word.toString().replace(/^\s+|\s+$/gm, "")) + 1 : -1;
            case "last":
                return sentence.toString().split(" ").includes(word.toString().replace(/^\s+|\s+$/gm, "")) ? sentence.toString().split(" ").lastIndexOf(word.toString().replace(/^\s+|\s+$/gm, "")) + 1 : -1;
            default:
                return sentence.toString();
        }
    }

    /**
     * Returns the index of a char in the string
     * Returns -1 if the char doesn't appear in the string
     * @param {string} index the first or last char
     * @param {char} char a char we want to know the index of
     * @param {string} string a string that might contain the char
     * Index begins at 1 and not at 0 (easier for the kids)
     */
    /* TODO add aa boolean for case sensitivity */
    ext.findChar = function (index, char, string) {
        if (!char) return -1;
        if (!string) return -1;
        switch (index) {
            case "first":
                return string.toString().indexOf(char.toString()) > -1 ? string.toString().indexOf(char.toString()) + 1 : -1;
            case "last":
                return string.toString().indexOf(char.toString()) > -1 ? string.toString().lastIndexOf(char.toString()) + 1 : -1;
            default:
                return string.toString();
        }
    }

    /**
     * Format the text depending on the format parameter
     * Text can be all lowercase, all uppercase or with the first letter uppercase
     * @param {string} text the text to format
     * @param {string} format the selected format
     */
    ext.format = function (text, format) {
        if (!text) return "";
        switch (format) {
            case "all lowercase":
                return text.toString().toLowerCase();
            case "all uppercase":
                return text.toString().toUpperCase();
            case "1st uppercase":
                return text.toString().slice(0, 1).toUpperCase() + text.toString().slice(1);
            case "1st uppercase, others lowercase":
                return text.toString().slice(0, 1).toUpperCase() + text.toString().toLowerCase().slice(1);
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
    ext.join = function (str1, str2, str3, joiner) {
        if (!str1) str1 = "";
        if (!str2) str2 = "";
        if (!str3) str3 = "";
        if (!joiner) joiner = "";
        var str = [];
        if (str1.toString().length > 0) {
            str.push(str1.toString())
        }
        if (str2.toString().length > 0) {
            str.push(str2.toString())
        }
        if (str3.toString().length > 0) {
            str.push(str3.toString())
        }
        return str.join(joiner.toString());
    }

    /**
     * Returns the reversed string of the input string
     * @param {string} string the string to reverse
     */
    ext.reverse = function (string) {
        if (!string) string = "";
        return string.toString().split("").reverse().join("");
    }

    /**
     * Returns a substring of the provided string
     * @param {string} string a string
     * @param {number} start the index of the first letter to include into the substring
     * @param {number} end the index of the last letter to include into the substring
     * If no start number is provided, start will be set at char 0 (1 for the kids)
     * If no end number is provided, substring will be extracted to the end of the provided string
     */
    ext.substring = function (string, start, end) {
        if (!string) string = "";
        if (!start) start = 0;
        if (!end) end = 0;
        var strStart = start;
        var strEnd = end;
        if (strStart.toString().length = 0) {
            strStart = 0;
        }
        if (strEnd.toString().length = 0) {
            strEnd = string.toString().length - 1;
        }
        return string.toString().substring(Number.parseInt(strStart) - 1, Number.parseInt(strEnd));
    }

    /**
     * Removes whitespaces at the beginning, at the end or both of a give string
     * @param {string} string the given string
     * @param {string} format the trimming parameter
     */
    ext.trim = function (format, string) {
        if (!string) string = "";
        switch (format) {
            case "at the beginning":
                return string.toString().trimStart();
            case "at the end":
                return string.toString().trimEnd();
            case "both":
                return string.toString().trim();
            default:
                return string.toString();
        }
    }

    /**
     * Replaces all occurences of a substring inside a string by another string
     * @param {string} option which occurence to replace
     * @param {string} before what has to be replaced
     * @param {string} string the given string
     * @param {string} after the replacement tring
     */
    ext.replace = function (option, before, string, after) {
        if (!string) string = "";
        if (!before) before = "";
        if (!after) after = "";
        switch (option) {
            case "all":
                return string.toString().split(before.toString()).join(after.toString());
            case "first":
                return string.toString().replace(before.toString(), after.toString());
            case "last":

            default:
                return string.toString();
        }
    }

    /**
     * Replaces all occurences of a substring inside a string by another string
     * @param {number} place the option of what to replace
     * @param {string} before what has to be replaced
     * @param {string} string the given string
     * @param {string} after the replacement tring
     */
    ext.replacePlace = function (place, before, string, after) {
        if (!place) place = 0;
        if (!string) string = "";
        if (!before) before = "";
        if (!after) after = "";
        var regex = new RegExp(before, "g");
        var counter = 0;
        return string.replace(regex, function (match, i, original) {
            counter++;
            return (counter === place) ? after : match;
        });
    }

    /**
     * Split a string every char/string and report it joined all together with spaces
     * (like for lists in Scratch)
     * @param {string} string the base string
     * @param {string} char where to split in the string
     */
    ext.split = function(string, char) {
        if(!string) string = "";
        if(!char) char = "";
        return string.split(char).join(" ");
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ["b", "%s contains word %s", "contains", "I love Scratch", "love"],
            ["r", "index of %m.findIndex word %s in the sentence %s", "find", "first", "will", "What will you create ?"],
            ["r", "index of %m.findCharIndex character %s in the word %s", "findChar", "first", "h", "Woohoo!"],
            ["r", "format %s with %m.formatFomat", "format", "hello", "all uppercase"],
            ["r", "join %s %s %s with %s", "join", "Hello", "world", "!", "_"],
            ["r", "reverse %s", "reverse", "Hello there"],
            ["r", "%s from letter %n to %n", "substring", "Sun is shining", "5", "10"],
            ["r", "removes spaces %m.trimFormat of %s", "trim", "at the beginning", "      hmmmmm..."],
            ["r", "replace %m.replaceOption %s in %s by %s", "replace", "all", "a", "Abracadabra", "o"],
            ["r", "replace the %n nd %s in %s by %s", "replacePlace", "3", "very", "What a very very very beautifull day!", "not"]
        ],
        menus: {
            findIndex: ["first", "last"],
            findCharIndex: ["first", "last"],
            formatFomat: ["all uppercase", "all lowercase", "1st uppercase", "1st uppercase, others lowercase"],
            trimFormat: ["at the beginning", "at the end", "both"],
            replaceOption: ["all", "first", "last"]
        },
        displayName: "Advanced String Operators"
    };

    // Register the extension
    ScratchExtensions.register("Advanced String Operators", descriptor, ext);
})({});