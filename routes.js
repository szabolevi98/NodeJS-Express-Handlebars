module.exports = (function() {
    var express = require('express');
    var router = express.Router();

    router.get("/:id", function (request, response, next) {
        request.body.id = request.params["id"];
        // Do something ...
    });

    router.post("/someRoute", function (request, response, next) {
        // Do something ...
    });

    // And so on ...

    return router;
})();