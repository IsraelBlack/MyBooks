import { Book} from '../../models/types'

interface Props {
  book: Book
}

export default function BookSummary({ book }: Props) {
  //const [showForm, setShowForm] = useState(false)
  //const [formData, setFormData] = useState(0)
  //todo when made, add update book thunk

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
        <p>Summary: {book.summary}</p>
        <p>Genre: {book.genre}</p>
        <p>Opinion: {book.opinion}</p>
        {/* Insert Update Form Here */}
      </div>
    </>
  )
}
