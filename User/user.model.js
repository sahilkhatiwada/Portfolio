import mongoose from "mongoose";
import { GenderOptions, UserRoles } from "../constants/general.constant.js";
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 55,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 55,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      maxlength: 55,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: false,
      enum: GenderOptions,
      default: null,
    },
    dob: {
      type: Date,
      required: false,
      default: null,
    },
    role: {
      type: String,
      enum: UserRoles,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// create table for user
export const User = mongoose.model("User", userSchema);
