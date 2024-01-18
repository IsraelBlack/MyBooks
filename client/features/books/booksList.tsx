import { Key } from 'react'
import { useAppSelector } from '../../hooks/hooks'

const BooksList = () => {
  const books = useAppSelector((state) => state.books)

  const renderedBooks = books.map(
    (books: { id: number; title: string; author: string; summary: string }) => (
      <article key={books.id}>
        <h3>{books.title}</h3>
        <h4>{books.author}</h4>
        <p>{books.summary.substring(0, 100)}</p>
      </article>
    ),
  )
}

export default BooksList