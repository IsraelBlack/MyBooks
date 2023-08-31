import { ChangeEvent, useState, FormEvent } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { BookData } from '../../models/types'
import * as actions from '../actions/books'
import { Button } from '@mui/material'

export default function UpdateForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({} as BookData)

  //todo create handleChange
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.name, evt.target.value)
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  //todo create handleSubmit
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log('Submit', formData)
    dispatch(actions.addBookThunk(formData))
    setFormData({} as BookData)
  }
  
  //todo create form
  return (
    <form>
      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        name="rating"
        onChange={handleChange}
        value={formData.rating ?? 0}
      />
    </form>
  )
}
