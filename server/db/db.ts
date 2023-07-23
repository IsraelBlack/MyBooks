import connection from "./connection";
//todo import { } from "../../models/types"

const db = connection

//pull everything from our DB
export function getAllBooks() {
  return db('books').select('*')
}
