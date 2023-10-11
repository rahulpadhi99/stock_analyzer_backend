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
        symbol: { type: String, required: true },
        company: { type: String },
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
