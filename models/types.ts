//? MODELS

export interface BookData {
  title: string
  author: string
  cover: string
  rating: number
  summary: string
  genre: string
  opinion: string
}

export interface Book extends BookData {
  id: number
}

export type Action =
  | { type: 'SET_BOOKS'; payload: Book[] }
  | { type: 'DEL_BOOK'; payload: number }
  | { type: 'ADD_BOOK'; payload: Book }

