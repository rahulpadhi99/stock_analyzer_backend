import express from "express";
import {
  addWatchlist,
  deleteWatchlist,
  getAllWatchlist,
} from "../controllers/watchlist.js";
const router = express.Router();

router.get("/", getAllWatchlist);
router.post("/add-watchlist", addWatchlist);
router.delete("/", deleteWatchlist);

export default router;
