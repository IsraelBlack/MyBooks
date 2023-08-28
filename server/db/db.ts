//? DB Functions

import connection from './connection'
import { Book, BookData } from '../../models/types'

const db = connection

//pull everything from our DB
export function getAllBooks(): Promise<Book[]> {
  return db('books').select(
    'id',
    'title',
    'author',
    'cover',
    'rating',
    'opinion',
  )
}

//Select All Info of One book
export function getOneBook(id: number): Promise<Book[]> {
  return db('books')
    .select(
      'id',
      'title',
      'author',
      'cover',
      'rating',
      'summary',
      'genre',
      'opinion',
    )
    .where({ id })
}

//Delete Item via ID
export function deleteBook(id: number): Promise<number> {
  return db('books').delete().where({ id })
}

//create New Item
export function addBook(book: BookData): Promise<Book[]> {
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
    ])
}

//Update Existing item
export function updateBook(id: number, newRating: number) {
  return db('books').where({ id }).update({ rating: newRating })
}
