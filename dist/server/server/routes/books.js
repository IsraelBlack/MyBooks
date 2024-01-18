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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db = __importStar(require("../db/db"));
//import { getAllBooks } from '../db/db'
const router = express_1.default.Router();
//Fetches all books
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booksArr = yield db.getAllBooks();
        console.log('reading ' + booksArr);
        res.json(booksArr);
    }
    catch (err) {
        console.error('Routes error: ', err);
    }
}));
//Fetch One book by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const oneBook = yield db.getOneBook(id);
        console.log('One book');
        res.json(oneBook[0]);
        console.log(oneBook[0]);
    }
    catch (err) {
        console.error('Routes error', err);
    }
}));
//Deletes Item via ID, sends confirmation
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        yield db.deleteBook(id);
        res.sendStatus(200);
    }
    catch (err) {
        console.error('Routes error: ', err);
        res.sendStatus(500);
    }
}));
//Create New Item, ID is last part of Array
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = req.body;
    try {
        const newBook = yield db.addBook(book);
        res.json(newBook[0]);
    }
    catch (err) {
        console.error('Routes error: ', err);
        res.sendStatus(500);
    }
}));
//Update Existing Item
exports.default = router;
