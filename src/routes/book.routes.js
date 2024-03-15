const {Router} = require("express")
const BooksController = require("../controllers/BooksController")
const checkBookExist = require("../middlewares/CheckBookExist")

const bookRoutes = Router()
const bookController = new BooksController()

bookRoutes.post("/books", bookController.createBook)
bookRoutes.get("/books", bookController.listBook)
bookRoutes.get("/books/:idBook",checkBookExist, bookController.listBookById)
bookRoutes.delete("/books/:idBook",checkBookExist, bookController.deleteBook)

module.exports = bookRoutes