import { useState } from 'react'
import { Book } from '../../models/types'
import { useAppSelector } from '../hooks/hooks'
import BookForm from './BookForm'
import BookSummary from './BookSummary'
import { Button, Typography } from '@mui/material'

export default function Books() {
  const [showForm, setShowForm] = useState(false)
  
  const booksArr = useAppSelector((state) => state.books) as Book[]

  return (
    <>
      <Button variant="outlined" onClick={() => setShowForm(!showForm)}>
        Show/Hide form
      </Button>
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
