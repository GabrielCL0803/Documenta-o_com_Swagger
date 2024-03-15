const {Router} = require("express")
const LoansController = require("../controllers/LoansController")

const loanRoutes = Router()
const loanController = new LoansController()

loanRoutes.post("/:user_id/:book_id", loanController.borrowBooks)
loanRoutes.get("/:user_id", loanController.listBorrowedBook)
loanRoutes.get("/total/:user_id", loanController.totalBorrowedBooks)
loanRoutes.put("/devo/:user_id/:book_id", loanController.returnBorrowedBooks)

module.exports = loanRoutes