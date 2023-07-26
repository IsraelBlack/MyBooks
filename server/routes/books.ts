import express from 'express'
import * as db from '../db/db'
//import { getAllBooks } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const booksArr = await db.getAllBooks()
    console.log('reading ' + booksArr)
    res.json(booksArr)
  } catch (err) {
    console.error('Routes error: ', err)
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteBook(id)
    res.sendStatus(200)
  } catch (err) {
    console.error('Routes error: ', err)
    res.sendStatus(500)
  }
})
export default router
