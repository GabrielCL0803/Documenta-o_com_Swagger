const express = require("express");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./swagger.json")
const app = express();

const PORT = 3333

app.use(express.json());
app.use(routes)
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next)=> {
    console.error(err.stack);
    res.status(500).send("Algo deu errado!")
})
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT} portanto, está tudo OK(200).`);
})