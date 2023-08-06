import { useState } from 'react'
import { Book } from '../../models/types'
import { useAppSelector } from '../hooks/hooks'
import BookForm from './bookForm'
import BookSummary from './BookSummary'

export default function Books() {
  const [showForm, setShowForm] = useState(false)
  const booksArr = useAppSelector((state) => state.books) as Book[]

  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>Add Book</button>
      {showForm ? (
        <BookForm />
      ) : (
        <div className="book-container">
          {booksArr.map((book) => (
            <BookSummary key={book.id} book={book} />
          ))}
        </div>
      )}
    </>
  )
}
