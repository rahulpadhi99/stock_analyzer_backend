import express from "express";
import authRoutes from "./router/auth.js";
import watchlistRoutes from "./router/watchlist.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import axios from "axios";
const app = express();

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

mongoose
  .connect(
    "mongodb+srv://dbStockAnalyzer:Nxgk2oAvV56cG0PG@cluster0.ccumejj.mongodb.net/stockDB?retryWrites=true"
  )
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
