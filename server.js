const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

// config dotenv file
dotenv.config();

// database call
connectDb();


// rest object
const app = express();

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Hello From Server</h1>");
});

// port
const PORT = 8080 || process.env.PORT;

// listen
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
