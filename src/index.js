"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a.PORT) !== null && _b !== void 0 ? _b : 300;
app.get('/', (req, res) => {
    res.send('⚡️ Express + TypeScript Server - Status 200.');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
