"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var express_1 = __importDefault(require("express"));
require("../database/db");
var index_1 = __importDefault(require("./api-routes/index"));
var app = (0, express_1["default"])();
var port = process.env.PORT || 8080;
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.use("/api", express_1["default"].json());
app.use("/api", index_1["default"]);
app.listen(port, function () {
    console.log("server is running on port ".concat(port));
});
