import mongoose, { version } from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    avatar: { type: String, required: false, trim: true },
  },
  {
    versionKety: false,
  }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
