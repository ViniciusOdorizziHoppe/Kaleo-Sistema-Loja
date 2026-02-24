const db = require("../config/db");

exports.mensal = (req, res) => {
  db.query(`
    SELECT DAY(data) as dia, SUM(valor_total) as total
    FROM vendas
    WHERE MONTH(data) = MONTH(CURRENT_DATE())
    GROUP BY DAY(data)
  `, (err, results) => {

    let dias = [];
    let valores = [];

    results.forEach(r => {
      dias.push(r.dia);
      valores.push(r.total);
    });

    res.json({
      dias,
      valores,
      totalHoje: valores[valores.length - 1] || 0,
      lucroHoje: 0,
      percentual: 12
    });
  });
};