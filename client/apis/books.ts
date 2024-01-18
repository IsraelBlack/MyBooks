import request from 'superagent'
import { BookData } from '../../models/types'

const booksURL = 'api/v1/books'
const req = request

export async function fetchBooks() {
  const res = await request.get(booksURL)
  return res.body
}

export async function fetchOneBook(id: number) {
  const res = await request.get(`${booksURL}/${id}`)
  console.log(res)
  return res.body
}

export async function remove(id: number) {
  await req.delete(`${booksURL}/${id}`)
}

export async function postBook(book: BookData) {
  const res = await request.post(booksURL).send(book)
  return res.body
}

export async function updateRating(id: number, newRating: number) {
  await req.patch(`${booksURL}/${id}`).send({rating: newRating})
  
}
