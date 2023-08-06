import { Book} from '../../models/types'
import * as action from '../actions/books'
import { useAppDispatch } from '../hooks/hooks'
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
          src={`../../images/${book.cover}.jpg`}
          alt={`${book.title} cover`}
        />
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Rating: {book.rating}</p>
        <p>Opinion: {book.opinion}</p>
        <button onClick={() => handleDelete(book.id)}>Delete</button>
      </div>
    </>
  )
}
