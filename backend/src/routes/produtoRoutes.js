const express = require("express");
const router = express.Router();

let produtos = [
  { id: 1, nome: "Camiseta", preco: 20 },
  { id: 2, nome: "Conjunto", preco: 50 },
  { id: 3, nome: "Tênis", preco: 100 },
  { id: 4, nome: "Cueca", preco: 10 }
];

router.get("/", (req, res) => {
  res.json(produtos);
});

router.post("/", (req, res) => {
  const { nome, preco } = req.body;

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco
  };

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

module.exports = router;