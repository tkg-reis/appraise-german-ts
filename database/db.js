"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
mongoose_1["default"].set("strictQuery", true);
mongoose_1["default"].connect(process.env.MONGOURI).then(function () {
    console.log("db connected");
});
