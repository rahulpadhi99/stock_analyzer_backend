import express from "express";
import {
  addSymbols,
  getSymbolList,
  removeSymbols,
  updateSymbolNotes,
} from "../controllers/symbol.js";

const router = express.Router();

router.get("/symbol-list", getSymbolList);
router.post("/add-symbols", addSymbols);
router.put("/", removeSymbols);
router.put("/notes", updateSymbolNotes);

export default router;
