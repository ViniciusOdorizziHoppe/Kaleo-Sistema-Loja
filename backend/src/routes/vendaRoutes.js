const express = require("express");
const router = express.Router();

let vendas = [];

router.post("/", (req, res) => {
  const { itens } = req.body;

  let total = 0;

  itens.forEach(item => {
    total += item.preco * item.quantidade;
  });

  vendas.push({
    data: new Date(),
    total
  });

  res.json({ mensagem: "Venda salva", total });
});

module.exports = router;