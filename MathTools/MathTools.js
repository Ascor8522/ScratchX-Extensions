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

    ext.is = function (type, number) {
        switch(type) {
            case "integer":
                return Number.isInteger(number);
            case "float":
                return (number + "").match(/[+-]?([0-9]*[.])?[0-9]+/);
            case "finite":
                return Number.isFinite(number);
            case "NaN":
                return Number.isNaN(number);
            case "bin":
                return (number + "").match(/[0-9]+/);
            case "oct":
                return (number + "").match(/(0o|0O)?[0-7]+/);
            case "dec":
                return (number + "").match(/(\+|\-)?[0-9]+/);
            case "hex":
                return (number + "").match(/(0x|0X)?[0-9a-fA-F]+/);
            default:
                return "Unknown check function";
        }
    }

    ext.cbrt = function (number) {
        return Math.cbrt(number);
    }

    ext.max = function (list) {
        return Math.max(list);
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ["r",
                "%n is %m.is",
                "is",
                "3.5", "integer"],
            ["r",
                "cbrt %n",
                "cbrt",
                "8"],
            ["r",
                "max %n",
                "max",
                ""],
        ],
        menus: {
            is: ["integer", "float", "finite", "NaN", "bin", "oct", "dec", "hex"],
        },
        displayName: "Advanced Math Operators"
    };

    // Register the extension
    ScratchExtensions.register("Advanced Math Operators", descriptor, ext);
})({});