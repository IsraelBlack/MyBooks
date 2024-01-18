import { useAppSelector } from '../../hooks/hooks'
import { selectAllBooks } from './bookSlice'

const BooksList = () => {
  const books = useAppSelector(selectAllBooks)

  // const renderedBooks = books.map(
  //   (books: { id: number; title: string; author: string; summary: string }) => (
  //     <article key={books.id}>
  //       <h2>Test For Display</h2>
  //       <h3>{books.title}</h3>
  //       <h4>{books.author}</h4>
  //       <p>{books.summary.substring(0, 100)}</p>
  //     </article>
  //   ),
  // )

  const renderedBooks = books.map(
    (book: { id: number; title: string; content: string }) => (
      <article key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.content.substring(0, 100)}</p>
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
