require("dotenv").config();
const express = require("express");
const knex = require('./conexao')


const app = express();


app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const stacks = await knex ('stacks')
    return res.json(stacks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({mensagem: 'Erro interno'})
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor em pé na porta ${port}`);
});
