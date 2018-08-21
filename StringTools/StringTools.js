(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.contains = function(sentence, word) {
        var array = sentence.toString().split(' ');
        return array.contains(word.toString());
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b','sentence %s contains word %s','contains', 'I love Scratch', 'love']
        ],
        displayName: 'Advanced String Operators'
    };
    
    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});