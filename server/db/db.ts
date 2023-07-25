//? DB Functions

import connection from './connection'
import { Book } from "../../models/types"

const db = connection

//pull everything from our DB
export function getAllBooks(): Promise<Book[]> {
  return db('books').select('id', 'title', 'author', 'cover', 'rating'
  )
}
