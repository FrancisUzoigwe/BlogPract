import mongoose from "mongoose";
import { iAuthorData } from "../config/interfaces";

const AuthorModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      toLowercase: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },

    articles: [
      {
        type: mongoose.Types.ObjectId,
        ref: "articles",
      },
    ],

    friends: {
      type: Array<String>,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iAuthorData>("authors", AuthorModel)
