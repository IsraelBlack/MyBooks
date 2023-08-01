import { Book } from '../../models/types'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'

interface Props {
  book: Book
}

export default function SingleBook() {
  const { id } = useParams()
  const booksArr = useAppSelector((state) => state.books as Book[])
  return (
    <>
      {/*todo add update form*/}

      <div className="oneBook-container">
        {
          //booksArr
        }
      </div>
    </>
  )
}
