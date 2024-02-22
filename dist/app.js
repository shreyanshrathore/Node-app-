"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const func = (req, res) => {
    res.status(200).json({ message: "hello" });
};
app.get("/", func);
app.listen(4000, () => console.log("app is running on 4000"));
