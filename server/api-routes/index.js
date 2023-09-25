"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var germanWords_1 = __importDefault(require("./germanWords"));
var router = express_1["default"].Router();
router.use("/germanWords", germanWords_1["default"]);
exports["default"] = router;
