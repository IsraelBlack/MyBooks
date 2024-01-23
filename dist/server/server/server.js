"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const books_1 = __importDefault(require("./routes/books"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use('/api/v1/books', books_1.default);
server.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.default = server;
