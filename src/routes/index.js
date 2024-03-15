const {Router} = require("express")
const userRoutes = require("./user.routes")
const bookRoutes = require("./book.routes")
const loanRoutes = require("./loans.routes")

const routes = Router()

routes.use("/", userRoutes)
routes.use("/", bookRoutes)
routes.use("/loan", loanRoutes)

module.exports = routes