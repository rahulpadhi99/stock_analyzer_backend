import mongoose from "mongoose";
const Schema = mongoose.Schema;

const watchlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    symbols: [
      {
        Code: { type: String, required: true },
        Name: { type: String, required: true },
        Country: { type: String, required: true },
        Exchange: { type: String, required: true },
        Currency: { type: String, required: true },
        Type: { type: String, required: true },
        Isin: { type: String, required: true },
        note: { type: String },
      },
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Watchlist", watchlistSchema);
