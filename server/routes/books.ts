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
    console.log('Routes error: ' + err)
  }
})

export default router
