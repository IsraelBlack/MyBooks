import connection from './connection'
//todo import { } from "../../models/types"

const db = connection

//pull everything from our DB
export function getAllBooks(): Promise<Book[]> {
  return db('books').select('id', 'title', 'author', 'cover', 'rating')
}
