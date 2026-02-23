require("dotenv").config();

const express = require("express");
const cors = require("cors");

const produtoRoutes = require("./routes/produtoRoutes");
const vendaRoutes = require("./routes/vendaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", produtoRoutes);
app.use("/vendas", vendaRoutes);

module.exports = app;