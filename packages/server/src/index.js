"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
var express_1 = require("express");
var startServer = function () {
    var app = (0, express_1.default)();
    app.get('/', function (req, res) {
        res.send('Hello World');
    });
    var port = process.env.PORT;
    app.listen(port, function () {
        console.log("Example app listening on port ".concat(port));
    });
};
exports.startServer = startServer;
(0, exports.startServer)();
