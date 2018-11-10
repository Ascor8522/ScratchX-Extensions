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
     * Returns whether a sentence contains a word.
     * @param {string} sentence A sentence that might contain the word.
     * @param {string} word A word that might be contained in the sentence.
     * @param {boolean} matchCase If the the case match is enabled.
     * Trailing spaces are removed from the word.
     */
    ext.contains = function (sentence, word, matchCase) {
        if (!sentence) sentence = "";
        if (!word || word == "") return false;
        return sentence.toString().split(" ").includes(word.toString().replace(/^\s+|\s+$/gm, ""));
    }

    /**
     * Returns the index of a word in the sentence.
     * Returns -1 if the word doesn't appear in the sentence.
     * @param {string} index The first or last word.
     * @param {string} sentence A sentence that might contain the word.
     * @param {string} word A word we want to know the index of.
     * @param {boolean} matchCase If the the case match is enabled.
     * Trailing spaces are removed from the word.
     * Index begins at 1 and not at 0 (easier for the kids).
     */
    ext.find = function (index, word, sentence, matchCase) {
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
     * Returns the index of a char in the string.
     * Returns -1 if the char doesn't appear in the string.
     * @param {string} index The first or last char
     * @param {char} char A char we want to know the index of.
     * @param {string} string A string that might contain the char.
     * @param {boolean} matchCase If the the case match is enabled.
     * Index begins at 1 and not at 0 (easier for the kids).
     */
    ext.findChar = function (index, char, string, matchCase) {
        if (!char || char == "") return -1;
        if (!string || string == "") return -1;
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
     * Format the text depending on the format parameter.
     * Text can be all lowercase, all uppercase or with the first letter uppercase.
     * @param {string} text The text to format.
     * @param {string} format The selected format.
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
     * Joins multiple strings together with a joiner character or string inbetween.
     * @param {string} str1 First string.
     * @param {string} str2 Second string.
     * @param {string} str3 Third string.
     * @param {string} joiner The joining string or charactrer.
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
     * Returns the reversed string of the input string.
     * @param {string} string the string to reverse.
     */
    ext.reverse = function (string) {
        if (!string) string = "";
        return string.toString().split("").reverse().join("");
    }

    /**
     * Returns a substring of the provided string.
     * @param {string} string A string.
     * @param {number} start The index of the first letter to include into the substring.
     * @param {number} end The index of the last letter to include into the substring.
     * If no start number is provided, start will be set at char 0 (1 for the kids).
     * If no end number is provided, substring will be extracted to the end of the provided string.
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
     * Removes whitespaces at the beginning, at the end or both of a give string.
     * @param {string} string The given string.
     * @param {string} format The trimming parameter.
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
     * Replaces all occurences of a substring inside a string by another string.
     * @param {string} option Which occurence to replace.
     * @param {string} before What has to be replaced.
     * @param {string} string The given string.
     * @param {string} after The replacement tring.
     * @param {boolean} matchCase If the the case match is enabled.
     */
    ext.replace = function (option, before, string, after, matchCase) {
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
     * Replaces all occurences of a substring inside a string by another string.
     * @param {number} place The option of what to replace.
     * @param {string} before What has to be replaced.
     * @param {string} string The given string.
     * @param {string} after The replacement tring.
     * @param {boolean} matchCase If the the case match is enabled.
     */
    ext.replacePlace = function (place, before, string, after, matchCase) {
        if (!place) place = 0;
        if (!string) string = "";
        if (!before) before = "";
        if (!after) after = "";
        var regex = new RegExp(before.toString(), "g");
        var counter = 0;
        return string.replace(regex, function (match, i, original) {
            counter++;
            return (counter === Number.parseInt(place)) ? after.toString() : match;
        });
    }

    /**
     * Split a string every char/string and report it joined all together with spaces.
     * (like for lists in Scratch).
     * @param {string} string The base string.
     * @param {string} char Where to split in the string.
     * @param {boolean} matchCase If the the case match is enabled.
     */
    ext.split = function (string, char, matchCase) {
        if (!string) string = "";
        if (!char) char = "";
        return string.split(char).join(" ");
    }

    /**
     * Repeats a string n times.
     * Every occurence is separated by a joiner.
     * @param {string} string The string to repeat.
     * @param {number} times How many times to repeat the string.
     * @param {string} joiner The string that join the repeats.
     */
    ext.repeat = function (string, times, joiner) {
        if (!string) string = "";
        if (!times) times = 0;
        if (!joiner) joiner = "";
        var buffer = "";
        for (var i = 1; i < Number.parseInt(times); i++) {
            buffer = buffer + string.toString() + joiner.toString();
        }
        buffer = buffer + string.toString();
        return buffer.toString();
    }

    /**
     * Returns true whether a string starts with a certain pattern.
     * @param {string} string The string that might start with the pattern.
     * @param {string} pattern The pattern the string might start with.
     * @param {boolean} matchCase If the the case match is enabled.
     */
    ext.startsWith = function (string, pattern, matchCase) {
        if (!string) string = "";
        if (!pattern || pattern == "") return false;
        return string.toString().startsWith(pattern.toString());
    }

    /**
     * Returns true whether a string ends with a certain pattern.
     * @param {string} string The string that might end with the pattern.
     * @param {string} pattern The pattern the string might end with.
     * @param {boolean} matchCase If the the case match is enabled.
     */
    ext.endsWith = function (string, pattern, matchCase) {
        if (!string) string = "";
        if (!pattern || pattern == "") return false;
        return string.toString().endsWith(pattern.toString());
    }

    /**
     * Returns true whether the first string is equal to the second string (case sensitive).
     * @param {string} string1 The first string.
     * @param {string} string2 The second string.
     * @param {boolean} matchCase If the the case match is enabled.
     */
    ext.equals = function (string1, string2, matchCase) {
        if (!string1) string1 = "";
        if (!string2) string2 = "";
        return (string1 === string2);
    }

    /**
     * Converts a character or a string into a list of codes used for by the selected encoding system.
     * @param {string} encoding 
     * @param {string} char 
     */
    ext.charToCode = function (encoding, char) {
        if(!char) return "";
        var answer = [];
        for(var thischar of char.toString().split("")) {
            switch(encoding) {
                case "ASCII":
                    answer.push(thischar.charAt(0));
                    break;
                case "Unicode":
                case "UTF-8":
    
            }
        }
        return answer.join(" ").toString();
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ["b",
                "%s contains word %s (match case %m.letterCase)",
                "contains",
                "I love Scratch", "love"],
            ["r",
                "index of %m.findIndex word %s in the sentence %s (match case %m.letterCase)",
                "find",
                "first", "will", "What will you create ?"],
            ["r",
                "index of %m.findCharIndex character %s in the word %s (match case %m.letterCase)",
                "findChar",
                "first", "h", "Woohoo!"],
            ["r",
                "format %s with %m.formatFomat",
                "format",
                "hello", "all uppercase"],
            ["r",
                "join %s %s %s with %s",
                "join",
                "Hello", "world", "!", "_"],
            ["r",
                "reverse %s",
                "reverse",
                "Hello there"],
            ["r",
                "%s from letter %n to %n",
                "substring",
                "Sun is shining", "5", "10"],
            ["r",
                "removes spaces %m.trimFormat of %s",
                "trim",
                "at the beginning", "      hmmmmm..."],
            ["r",
                "replace %m.replaceOption %s in %s by %s (match case %m.letterCase)",
                "replace",
                "all", "a", "Abracadabra", "o"],
            ["r",
                "replace the %n th %s in %s by %s (match case %m.letterCase)",
                "replacePlace",
                "3", "very", "What a very very very beautifull day!", "not"],
            ["r",
                "split %s every %s (match case %m.letterCase)",
                "split",
                "Banana", "a"],
            ["r",
                "repeat %s %n times separated by %s",
                "repeat",
                "Hello", "3", "-"],
            ["b",
                "%s begins with %s (match case %m.letterCase)",
                "startsWith",
                "Scratchatastic", "Scratch"],
            ["b",
                "%s ends with %s (match case %m.letterCase)",
                "endsWith",
                "Is this a question?", "?"],
            ["b",
                "%s = %s (match case %m.letterCase)",
                "equals",
                "This sentence", "this sentence"],
            ["r",
                "%m.charToCodeEncoding code of %s",
                "charToCode",
                "ASCII", "S"]
        ],
        menus: {
            letterCase: ["yes", "no"],
            
            findIndex: ["first", "last"],
            findCharIndex: ["first", "last"],
            formatFomat: ["all uppercase", "all lowercase", "1st uppercase", "1st uppercase, others lowercase"],
            trimFormat: ["at the beginning", "at the end", "both"],
            replaceOption: ["all", "first", "last"],
            charToCodeEncoding:["ASCII", "Unicode", "UTF-8", "UTF-16", "UTF-32", "ISO-8859", "ISO-8859-1 (Latin1)", ""]
        },
        displayName: "Advanced String Operators"
    };

    // Register the extension
    ScratchExtensions.register("Advanced String Operators", descriptor, ext);
})({});