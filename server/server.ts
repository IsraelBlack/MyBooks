import express from 'express'
import path from 'path'

import books from './routes/books'
const server = express()

server.use('/api/v1/books', books)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

export default server
