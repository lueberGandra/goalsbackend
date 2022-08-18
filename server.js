const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./src/middlewares/errorMiddleware");
const connectDB = require("./src/config/db")
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./src/routes/goalRoutes"));
app.use("/api/users", require("./src/routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
