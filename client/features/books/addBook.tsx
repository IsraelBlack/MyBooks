import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

function addBookForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (e: {
    target: { value: React.SetStateAction<string> }
  }) => setTitle(e.target.value)
  const onContentChanged = (e: {
    target: { value: React.SetStateAction<string> }
  }) => setContent(e.target.value)

  const  onSaveBookClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title, 
          content
        })
      )
      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a new book</h2>
      <form>
        <label htmlFor="bookTitle">Book Title:</label>
        <input
          type="text"
          id="bookTitle"
          name="bookTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea 
        id="postContent"
        name='postContent'
        value={content}
        onChange={onContentChanged} />
        <button type='button'>Save Post</button>
      </form>
    </section>
  )
}

export default addPostForm
