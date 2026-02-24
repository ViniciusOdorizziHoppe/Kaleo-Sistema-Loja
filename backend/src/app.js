require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const produtoRoutes = require("./routes/produtoRoutes");
const vendaRoutes = require("./routes/vendaRoutes");

const app = express();

app.use(cors());
app.use(express.json());
const frontendPath = path.resolve(__dirname, "../../frontend");
app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});
const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/dashboard", dashboardRoutes);

app.use("/produtos", produtoRoutes);
app.use("/vendas", vendaRoutes);
console.log("Frontend servindo de:", frontendPath);
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

module.exports = app;