/* Book Form */

import { SetStateAction, useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { nanoid } from '@reduxjs/toolkit'

import { bookAdded } from './bookSlice'
import { Book, BookSummary } from '../../../models/types'

const AddBookForm = () => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [summary, setSummary] = useState('')

  //TODO Look for shorter way to achieve this
  const onTitleChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setTitle(e.target.value)
  const onAuthorChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setAuthor(e.target.value)
  const onSummaryChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setSummary(e.target.value)

  //? This is to test long and short text input
  //TODO add all other book items once working!
  //TODO Add Save logic
  const onSaveBookClicked = () => {
    if (title && summary) {
      dispatch(
        bookAdded({
          id: nanoid(),
          title,
          author,
          summary,
        } as BookSummary), // Explicitly specify the type of the payload
      )
      setTitle('')
      setAuthor('')
      setSummary('')
    }
  }

  return (
    <section>
      <h2>Add a Book!</h2>
      <form>
        {/* Book Title */}
        <label htmlFor="bookTitle">Book Title: </label>
        <input
          type="text"
          id="bookTitle"
          name="bookTitle"
          value={title}
          onChange={onTitleChanged}
        />
        {/* Book Author */}
        <label htmlFor="bookTitle">Book Author: </label>
        <input
          type="text"
          id="bookAuthor"
          name="bookAuthor"
          value={author}
          onChange={onAuthorChanged}
        />
        {/* Book Summary*/}
        <label htmlFor="bookTitle">Book Summary: </label>
        <textarea
          id="bookSummary"
          name="bookSummary"
          value={summary}
          onChange={onSummaryChanged}
        />
        <button type="button" onClick={onSaveBookClicked}>
          Save Book
        </button>
      </form>
    </section>
  )
}

export default AddBookForm
