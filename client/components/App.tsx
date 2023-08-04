import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import Books from './Books'
import * as bookActions from '../actions/books'
import SingleBook from './singleBook'

function App() {
  const dispatch = useAppDispatch()

  //Find a way to add getSingle Book to work here (or comp with same name)
  useEffect(() => {
    dispatch(bookActions.getBooks())
  }, [dispatch])
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
        <Books />
      </header>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
