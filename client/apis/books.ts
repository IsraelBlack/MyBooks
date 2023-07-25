import request from "superagent";
// todo import {} from '../../models/types'

const booksURL = '/api/v1/books'

export async function fetchBooks() {
  const res = await request.get(booksURL)
  return res.body
}