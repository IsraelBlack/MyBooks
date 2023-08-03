import {Book} from '../../models/types'
import { useAppDispatch } from '../hooks/hooks'
import * as action from '../actions/books'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  book: Book
}

export default function SingleBook({book}: Props) {
  //const [showForm, setShowForm] = useState(false)
  //const [formData, setFormData] = useState(0)
  const dispatch = useAppDispatch()

  const handleDelete = (id: number) => {
    dispatch(action.delBookThunk(id))
  }

  //todo when made, add update book thunk

  return (
    <>
      <div key={book.id} className='book-title'>
        <img src={`../../images/${book.cover}.jpg`}
        alt={`${book.title} cover`}/>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Rating: {book.rating}</p>
        <p>Summary: {book.summary}</p>
        <p>Genre: {book.genre}</p>
        <p>Opinion: {book.opinion}</p>
        <p>   <button onClick={() => handleDelete(book.id)}>Delete</button></p>
        {/* Insert Update Form Here */}
      </div>
    </>
  )
}