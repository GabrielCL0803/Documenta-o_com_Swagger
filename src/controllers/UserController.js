const knex = require("../database/knex")

class UserController{
    async createUser(req,res){
        const {name,email,telefone,created_at} = req.body
        
        const user = await knex("users").insert({name, email, telefone, created_at})
        return res.status(201).json("Usuário cadastrado com sucesso")
    }

    async listUser(req,res){
        const users = await knex("users")
        
        return res.status(200).json(users)
    }

    async listUserById(req,res){
        const {user_id} = req.params

        const [user] = await knex("users").where({idUser:user_id})

        return res.status(200).json(user)
    }


    async updateUser(req,res){
        const {user_id} = req.params
        const {name, email, telefone} = req.body

        await knex("users").where({idUser:user_id}).update({name,email,telefone})

        return res.status(200).json("Usuário atualizado com sucesso!")
    }

    async deleteUser(req,res){
        const {user_id} = req.params

        await knex("users").where({idUser:user_id}).delete()

        return res.status(200).json("Registro deletado com sucesso!")
    }

}
module.exports = UserController