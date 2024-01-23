/* Book Form */

import { SetStateAction, useState } from 'react'

const AddBookForm = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')

  //TODO Look for shorter way to achieve this
  const onTitleChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setTitle(e.target.value)
  const onSummaryChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setSummary(e.target.value)

  //? This is to test long and short text input
  //TODO add all other book items once working!

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
        {/* Book Summary*/}
        <label htmlFor="bookTitle">Book Title: </label>
        <textarea
          id="bookSummary"
          name="bookSummary"
          value={summary}
          onChange={onSummaryChanged}
        />
      </form>
    </section>
  )
}

export default AddBookForm
