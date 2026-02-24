const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
    [email, senha],
    (err, results) => {
      if (results.length > 0) {
        res.json({
          id: results[0].id,
          nome: results[0].nome,
          tipo: results[0].tipo
        });
      } else {
        res.status(401).json({ erro: "Credenciais inválidas" });
      }
    }
  );
});

module.exports = router;