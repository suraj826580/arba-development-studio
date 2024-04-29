import { Schema, model } from "mongoose";

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "userModel", // Reference to the User model
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const categoryModel = model("category", categorySchema);

export default categoryModel;
