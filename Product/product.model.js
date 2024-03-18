import mongoose from "mongoose";
import { ProductCategory } from "../constants/general.constant.js";
import { string } from "yup";

// set rule for product
const productSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    Brand: {
      type: String,
      required: true,
      trim: true,
      max: 30,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    category: {
      type: String,
      required: true,
      enum: ProductCategory,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    image: {
      type: String,
      required: true,
      default: null,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);
// create table for product
const Product = mongoose.model("Product", productSchema);

export default Product;
