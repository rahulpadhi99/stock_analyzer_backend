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
        type: String,
        required: true,
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
