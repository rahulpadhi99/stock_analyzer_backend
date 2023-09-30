import express from "express";
import { addWatchlist, getAllWatchlist } from "../controllers/watchlist.js";
const router = express.Router();

router.get("/", getAllWatchlist);
router.post("/add-watchlist", addWatchlist);

export default router;
