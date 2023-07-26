//? DB Functions

import connection from './connection'
import { Book } from '../../models/types'

const db = connection

//pull everything from our DB
export function getAllBooks(): Promise<Book[]> {
  return db('books').select('id', 'title', 'author', 'cover', 'rating')
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

//Update Existing item
