import request from "superagent";
// todo import {} from '../../models/types'

const booksURL = '/api/v1/books'

export async function fetchBooks() {
  const res = await request.get(booksURL)
  return res.body
}

export async function remove(id: number) {
  await request.delete(`${booksURL}/${id}`)
}