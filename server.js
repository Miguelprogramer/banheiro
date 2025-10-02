const express = require('express');
const cors = require('cors');
const path = require('path');
//impprtar swagger
const swaggerDocs = require("./swagger.js");  //importante

const usuariosRoutes = require("./routes/usuariosRoutes.js");


const app = express();
app.use(cors());
app.use(express.json());

//rotas 
app.use("/usuarios", usuariosRoutes);

//frontend public
app.use(express.static(path.join(__dirname, "public")))


//gerar a interface do usuário swagger
swaggerDocs(app);

//abrir o servidor
const port = 3005

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Documentação da API em http://localhost:${port}/api-docs`);

})

swaggerDocs(app);

