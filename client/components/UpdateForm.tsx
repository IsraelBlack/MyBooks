import { ChangeEvent, useState, FormEvent } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { BookData } from '../../models/types'
import * as actions from '../actions/books'
import { Button } from '@mui/material'

export default function UpdateForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({} as BookData)

  //todo create handleChange
  //todo create handleSubmit

  //todo create form 
}