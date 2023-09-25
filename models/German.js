"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var mongoose_1 = __importStar(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var germanSchema = new Schema({
    word: {
        type: String,
        required: true,
        maxLength: 70
    },
    points: {
        type: Number,
        required: true,
        "default": 0,
        max: 100,
        min: 0,
        validate: function (val) {
            if (val < 0 || val > 100) {
                throw new Error('Points must be between 0 and 100');
            }
        }
    }
}, {
    timestamps: true
});
var German = (0, mongoose_1.model)("German", germanSchema);
exports["default"] = German;
