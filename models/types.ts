//? MODELS

export interface BookData {
  cover: string
  title: string
  author: string
  rating: number
  summary: string
  genre: string
  opinion: string
}

export interface BookSummary {
  id: string
  title: string
  author: string
  summary: string
}

export interface Book extends BookData {
  id: string
}
