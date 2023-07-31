import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import Books from './Books'
import * as bookActions from '../actions/books'

function App() {
  const dispatch = useAppDispatch()

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
