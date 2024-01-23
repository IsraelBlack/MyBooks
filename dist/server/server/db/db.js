"use strict";
//? DB Functions
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = exports.deleteBook = exports.getOneBook = exports.getAllBooks = void 0;
const connection_1 = __importDefault(require("./connection"));
const db = connection_1.default;
//pull everything from our DB
function getAllBooks() {
    return db('books').select('id', 'title', 'author', 'cover', 'rating', 'opinion');
}
exports.getAllBooks = getAllBooks;
//Select All Info of One book
function getOneBook(id) {
    return db('books')
        .select('id', 'title', 'author', 'cover', 'rating', 'summary', 'genre', 'opinion')
        .where({ id });
}
exports.getOneBook = getOneBook;
//Delete Item via ID
function deleteBook(id) {
    return db('books').delete().where({ id });
}
exports.deleteBook = deleteBook;
//create New Item
function addBook(book) {
    return db('books')
        .insert(book)
        .returning([
        'id',
        'title',
        'author',
        'cover',
        'rating',
        'summary',
        'genre',
        'opinion',
    ]);
}
exports.addBook = addBook;
//Update Existing item
