import { Book } from '../../models/types'
import * as action from '../actions/books'
import { useAppDispatch } from '../hooks/hooks'
import { Typography, Button } from '@mui/material'

interface Props {
  book: Book
}

export default function BookSummary({ book }: Props) {
  //const [showForm, setShowForm] = useState(false)
  //const [formData, setFormData] = useState(0)
  //todo when made, add update book thunk
  const dispatch = useAppDispatch()

  const handleDelete = (id: number) => {
    dispatch(action.delBookThunk(id))
  }
  return (
    <>
      <div className="book-title">
        <img
          id="image"
          src={`../../images/${book.cover}`}
          alt={`${book.title} cover`}
        />
        <Typography variant="h2">{book.title} </Typography>
        <Typography variant="body1">Author: {book.author}</Typography>
        <Typography variant="body1">Rating: {book.rating}</Typography>
        <Typography variant="body1">Opinion: {book.opinion}</Typography>
        //todo Add update button
        <Button variant="contained" onClick={() => handleDelete(book.id)}>
          Delete
        </Button>
      </div>
    </>
  )
}
