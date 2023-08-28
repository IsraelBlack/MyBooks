import { ChangeEvent, useState, FormEvent } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { BookData } from '../../models/types'
import * as actions from '../actions/books'
import { Button } from '@mui/material'

export default function BookForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({} as BookData)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.name, evt.target.value)
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log('Submit', formData)
    dispatch(actions.addBookThunk(formData))
    setFormData({} as BookData)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="add-form">
        <label htmlFor="cover">Cover:</label>
        <input type="file" id="cover" name="cover" onChange={handleChange} />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={formData.title ?? ''}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          onChange={handleChange}
          value={formData.author ?? ''}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          onChange={handleChange}
          value={formData.rating ?? 0}
        />

        <label htmlFor="summary">Summary:</label>
        <input
          type="text"
          id="summary"
          name="summary"
          onChange={handleChange}
          value={formData.summary ?? ''}
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          onChange={handleChange}
          value={formData.genre ?? ''}
        />

        <Button type="submit" value={'Submit'}>
          Submit
        </Button>
      </form>
    </>
  )
}

BookForm
