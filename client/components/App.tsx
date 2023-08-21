import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import Books from './Books'
import * as bookActions from '../actions/books'
import { Typography } from '@mui/material'

function App() {
  const dispatch = useAppDispatch()

  //Find a way to add getSingle Book to work here (or comp with same name)
  useEffect(() => {
    dispatch(bookActions.getBooks())
  }, [dispatch])
  return (
    <>
      <header className="header">
        <Typography variant="h1">Book List</Typography>
        <Books />
      </header>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
