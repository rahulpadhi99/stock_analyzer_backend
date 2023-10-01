import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import Watchlist from "../models/watchlist.js";

export const addSymbols = (req, res, next) => {
  const userId = req?.body?.userId;
  const watchlistId = req?.body?.watchlistId;
  const symbols = req?.body?.symbols;

  Watchlist.findOne({ _id: watchlistId, creator: userId })
    .then((watchlist) => {
      if (!watchlist) {
        res.status(203).json({ message: "Watchlist does not exists" });
      } else {
        let exisitingSymbols = watchlist.symbols;
        let updatedSymbols = [...exisitingSymbols, symbols];
        watchlist.symbols = updatedSymbols;
        return watchlist.save().then(() => {
          res.status(200).json({ message: "symbols added successfully" });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeSymbols = (req, res, next) => {
  const userId = req?.body?.userId;
  const watchlistId = req?.body?.watchlistId;
  const symbolsIds = req?.body?.symbolsIds;

  Watchlist.findOne({ _id: watchlistId, creator: userId })
    .then((watchlist) => {
      if (!watchlist) {
        res.status(203).json({ message: "Watchlist does not exists" });
      } else {
        let exisitingSymbols = watchlist.symbols;
        let updatedSymbols = exisitingSymbols?.filter(
          (symbol) => !symbolsIds.includes(symbol?._id.toString())
        );
        watchlist.symbols = updatedSymbols;
        return watchlist.save().then(() => {
          res.status(200).json({ message: "symbols deleted successfully" });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateSymbolNotes = (req, res, next) => {
  const userId = req?.body?.userId;
  const watchlistId = req?.body?.watchlistId;
  const symbolId = req?.body?.symbolId;
  const note = req?.body?.note;

  Watchlist.findOne({ _id: watchlistId, creator: userId })
    .then((watchlist) => {
      if (!watchlist) {
        res.status(203).json({ message: "Watchlist does not exists" });
      } else {
        let exisitingSymbols = watchlist.symbols;
        let selectedSymbolIndex = exisitingSymbols?.findIndex(
          (symbol) => symbol?._id.toString() === symbolId
        );
        exisitingSymbols[selectedSymbolIndex].note = note;
        watchlist.symbols = exisitingSymbols;
        return watchlist.save().then(() => {
          res.status(200).json({ message: "notes updated successfully" });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};