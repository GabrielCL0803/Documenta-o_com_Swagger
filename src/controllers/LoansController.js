const knex = require("../database/knex")

class LoansController{


    async borrowBooks(req, res){
        const {user_id, book_id} = req.params

        const book = await knex("books").where({idBook: book_id}).first()
        const user = await knex("users").where({idUser: user_id}).first()

        if(!book){
            return res.status(400).json("Livro não encontrado!")
        }

        if(!user){
            return res.status(400).json("Usuário não encontrado!")
        }

        await knex("loans").insert({user_id, book_id})
        await knex("books").where({idBook: book_id}).update({isAvailable: false})

        return res.status(200).json("Empréstimo realizado com sucesso!")
    }

    async listBorrowedBook(req, res) {
        const {user_id} = req.params

        const loans = await knex("loans")
        .where({user_id})
        .innerJoin("books", "books.idBook", "loans.book_id")
        .select("books.author", "books.title", "books.category", "books.pages") 

        return res.status(200).json(loans)
    }

    async totalBorrowedBooks(req, res) {
       const {user_id} = req.params

       const [total] = await knex("loans").where({user_id}).count({books: "book_id"})
       
       return res.status(200).json(total)
    }


    async returnBorrowedBooks(req,res){
        const {user_id, book_id} = req.params

        const book = await knex("books").where({idBook: book_id}).first()
        const user = await knex("users").where({idUser: user_id}).first()

        if(!book){
            return res.status(400).json("Livro não encontrado!")
        }

        if(!user){
            return res.status(400).json("Usuário não encontrado!")
        }

        const [loan] = await knex("loans").where({user_id})
        const bookId = loan.book_id

        if(bookId == book_id){
            await knex("books").where({idBook: book_id}).update({isAvailable: true})
            return res.status(200).json("Livro devolvido com sucesso!")
        }

        return res.status(200).json("Operação não realizada!")
    }

}

module.exports = LoansController