import express from 'express'
import * as db from '../db/db'
//import { getAllBooks } from '../db/db'

const router = express.Router()

//Fetches all books
router.get('/', async (req, res) => {
  try {
    const booksArr = await db.getAllBooks()
    console.log('reading ' + booksArr)
    res.json(booksArr)
  } catch (err) {
    console.error('Routes error: ', err)
  }
})

//Fetch One book by ID
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const oneBook = await db.getOneBook(id)
    res.json(oneBook)
  } catch (err) {
    console.error('Routes error', err)
  }
})

//Deletes Item via ID, sends confirmation
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

//Create New Item, ID is last part of Array
router.post('/', async (req, res)=> {
  const book = req.body
  try {
    const newBook = await db.addBook(book)
    res.json(newBook)
  } catch (err) {
    console.error('Routes error: ', err)
    res.sendStatus(500)
  }
})

//Update Existing Item

export default router
