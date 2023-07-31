import { ChangeEvent, useState, FormEvent } from 'react'
import { BookData } from '../../models/types'

export default function BookForm() {
  // const [formData, setFormData] = useState({} as BookData)lj
  const [formData, setFormData] = useState('')

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
    setFormData(evt.target.value)
  }
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log('Submit', formData)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cover">Cover:</label>
        <input type="text" id="cover" name="cover" onChange={handleChange} />

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} />

        <label htmlFor="author">Author:</label>
        <input
          type="author"
          id="author"
          name="author"
          onChange={handleChange}
        />

        <label htmlFor="rating">Rating:</label>
        <input type="text" id="rating" name="rating" onChange={handleChange} />

        <label htmlFor="summary">Summary:</label>
        <input type="text" id="rating" name="rating" onChange={handleChange} />

        <label htmlFor="genre">Genre:</label>
        <input type="text" id="genre" name="genre" onChange={handleChange} />

        <input type="submit" value={'Submit'} />
      </form>
    </>
  )
}

BookForm
