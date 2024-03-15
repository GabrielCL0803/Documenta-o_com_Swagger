# Projeto sem Banco de dados

## Instalação de Bibliotecas Digitais
* express,mysql2,knex,nodemon
* colocando server.js dentro de src

# Instalação de arquivo para Biblioteca remota
* src,server.js,controllers,database,middleware,routes

# Inserção de arquivos na pasta controllers
* BooksController.js
* UserController.js

# Inserção de arquivos na pasta database e criação da pasta knex em  database
* knex, migrations e index

# Inserção de arquivos na pasta middleware
* CheckBookExist.js
* CheckUserExist.js

# Inserção de arquivos na pasta routes
* book.routes.js
* user.routes.js
* index.js

# Inserção de dados em arquivos index e configuração da porta de entrada
* linha de comandos em todos os index.js
* porta de entrada em server.js 

# Criação do Banco de Dados e configuração de portas
* nome do banco de dados
* promise para compartilhar arquivos com banco

# Criação de tabelas no Banco de Dados
* Usando VS Code
* tabela createBooks.js e createUsers.js

# Inserção de dados as tabelas do Banco de Dados
* tabela de createUsers.js recebendo idUser,nome,email,telefone,created_at,book_id
* tabela de createBooks.js recebendo idBook,author,title,description,numberOfPages,isAvaible

# Inserção e criação de dados e comandos no arquivo UserController.js e BooksController.js
* UserController.js recebendo createUser,listUser,listUserById,updateUser e deleteUser
* BooksController.js recebendo createBook,listBook,listBookById e deleteBook