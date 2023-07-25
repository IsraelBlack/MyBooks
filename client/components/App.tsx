import { useEffect } from "react"
import { useAppDispatch } from "../hooks/hooks"
import * as bookActions from '../actions/books'

function App() {
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(bookActions.getBooks())
  }, [dispatch])
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
