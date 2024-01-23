import { useAppSelector } from '../../hooks/hooks'
import { selectAllBooks } from './bookSlice'

const BooksList = () => {
  const books = useAppSelector(selectAllBooks)

  const renderedBooks = books.map(
    (book: { id: number; title: string; author: string; summary: string }) => (
      <article key={book.id}>
        <h2>Test For Display</h2>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <p>{book.summary.substring(0, 100)}</p>
      </article>
    ),
  )

  return (
    <section>
      <h2>Books</h2>
      {renderedBooks}
    </section>
  )
}

export default BooksList
