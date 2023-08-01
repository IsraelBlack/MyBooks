import { Book } from '../../models/types'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import BookForm from './bookForm'
import * as action from '../actions/books'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default function Books() {
  const dispatch = useAppDispatch()
  const booksArr = useAppSelector((state) => state.books) as Book[]

  const handleDelete = (id: number) => {
    dispatch(action.delBookThunk(id))
  }

  return (
    <Router>
      <BookForm />
      <div className="book-container">
        {booksArr.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id}>
            <div key={book.id} className="book-title">
              {book.title}

              <img
                src="" //create image folder and add book images
                alt={`${book.title} Cover`}
              />
              <p>Author: {book.author}</p>
              <p>Rating: {book.rating}</p>
              <p>Genre: {book.genre}</p>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
          </Link>
        ))}
      </div>
    </Router>
  )
}
