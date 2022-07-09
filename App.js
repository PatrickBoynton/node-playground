const express = require("express");
const dotenv = require("dotenv");
const todos = require("./routes/todos");
const sequelize = require("./utils/database");
const {Todo} = require("./models/todo");

dotenv.config();

const app = express();

sequelize.sync();

app.use(express.json())

app.use("/api/todos", todos)


app.listen(process.env.PORT, () => console.log(`Now listening on ${process.env.PORT}`));