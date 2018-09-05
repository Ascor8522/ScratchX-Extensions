(function (ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function () {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function () {
        if (navigator.onLine) {
            return {
                status: 2,
                msg: "Ready"
            };
        } else {
            return {
                status: 1,
                msg: "Wating for internet connection"
            };
        }
    };

    ext.getUser = function(username, info, callback) {
        if (!navigator.onLine) return "No internet connection";
        if(!username) return "No username provided";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.scratch.mit.edu/users/" + username.toString(), true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var answer = JSON.parse(xhr.responseText);
                    switch (info) {
                        case "id":
                            callback(answer.id.toString());
                            break;
                        case "username":
                            callback(answer.username.toString());
                            break;
                        case "join date":
                            callback(new Date(answer.history.joined.toString().slice(0, -1)).toLocaleDateString());
                            break;
                        case "status":
                            callback(answer.profile.status.toString());
                            break;
                        case "bio":
                            callback(answer.profile.bio.toString());
                            break;
                        case "country":
                            callback(answer.profile.country.toString());
                            break;
                    }
                } else {
                    return "Error :\n" + xhr.error;
                }
            }
        };
        xhr.onerror = function (e) {
        console.error(xhr.statusText);
        };
        xhr.send(null);
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ["R", "get user %s %m.getUser", "getUser", "mres", "id"]
        ],
        menus: {
            "getUser":["id", "username", "join date", "status", "bio", "country"]
        },
        displayName: "ScratchAPI"
    };

    // Register the extension
    ScratchExtensions.register("ScratchAPI", descriptor, ext);
})({});