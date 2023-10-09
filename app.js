import express from "express";
import authRoutes from "./router/auth.js";
import watchlistRoutes from "./router/watchlist.js";
import symbolRoutes from "./router/symbol.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const DATABASE_URL = process.env.MONGODB_CONNECT_URL;
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);
app.use("/watchlist", watchlistRoutes);
app.use("/symbols", symbolRoutes);

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
