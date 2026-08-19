import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: true,
      required: [true, "password is required"],
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema); // store as users in database
