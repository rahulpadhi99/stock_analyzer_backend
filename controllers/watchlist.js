import Watchlist from "../models/watchlist.js";

export const addWatchlist = (req, res, next) => {
  const name = req?.body?.name;
  const userId = req?.body?.userId;

  Watchlist.findOne({ name: name, creator: userId })
    .then((watchlist) => {
      if (watchlist) {
        res
          .status(204)
          .json({ message: "Watchlist with this name already exists" });
      } else {
        const watchlist = new Watchlist({
          name: name,
          symbols: [],
          creator: userId,
        });
        return watchlist.save().then(() => {
          res.status(200).json({ message: "watchlist added successfully" });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllWatchlist = (req, res, next) => {
  const userId = req?.query?.userId;

  Watchlist.find({ creator: userId })
    .then((watchlists) => {
      return res.status(200).json(watchlists);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteWatchlist = (req, res, next) => {
  const watchlistId = req?.query?.watchlistId;

  Watchlist.findByIdAndDelete({ _id: watchlistId })
    .then((response) => {
      return res
        .status(200)
        .json({ message: "Watchlist deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
