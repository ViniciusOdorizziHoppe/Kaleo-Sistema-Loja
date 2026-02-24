const express = require("express");
const router = express.Router();

router.get("/mensal", async (req, res) => {
  try {
    // Aqui depois vamos puxar do banco
    res.json({
      totalHoje: 1500,
      lucroHoje: 420,
      crescimentoMensal: 12
    });
  } catch (error) {
    res.status(500).json({ error: "Erro no dashboard" });
  }
});

module.exports = router;