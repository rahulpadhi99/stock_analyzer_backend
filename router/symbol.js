import express from "express";
import {
  addSymbols,
  removeSymbols,
  updateSymbolNotes,
} from "../controllers/symbol.js";

const router = express.Router();

router.post("/add-symbols", addSymbols);
router.put("/", removeSymbols);
router.put("/notes", updateSymbolNotes);

export default router;
