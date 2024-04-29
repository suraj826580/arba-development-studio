import bcrypt from "bcrypt";
import User from "../../models/userModel/userModel.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, userName, email, password, avatar } = req.body;

    // Check if all required fields are present
    if (!fullName || !userName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Check if user with provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    // Hash the password
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).send("Error hashing password");
      }
      // Create a new user with the hashed password
      const user = new User({
        fullName,
        userName,
        email,
        password: hash,
        avatar,
      });
      // Save the user to the database
      const result = await user.save();
      res.status(200).send({ message: "Registration Successful", result });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error", { message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect Password" });
    }

    const token = jwt.sign({ userId: user._id }, "arba", {
      expiresIn: "1d",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const data = req.body;
    const _id = req.body.userId;

    // Check if user exists
    const userData = await User.findById(_id);

    if (!userData) {
      return res.status(404).send({ message: "User not found" });
    }

    // Extract user ID from request body (if provided) and remove it from newData
    const { _id: id, ...newData } = data;

    // Update the user's profile
    const result = await User.findByIdAndUpdate(_id, newData, {
      new: true,
    });

    if (result) {
      res.status(200).send({ message: "Profile Updated Successfully" });
    } else {
      return res.status(500).send({ message: "Something went wrong" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const changePassword = async (req, res) => {
  try {
    const userId = req.body.userId;
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user exists
    const userData = await User.findById(userId);

    if (!userData) {
      return res.status(404).send({ message: "User not found" });
    }

    // Compare old password with password in database
    const oldDbPassword = userData.password;
    const isOldPasswordCorrect = bcrypt.compareSync(oldPassword, oldDbPassword);
    if (!isOldPasswordCorrect) {
      return res.status(401).send({ message: "Incorrect Old Password" });
    }

    // Hash the new password
    const hash = bcrypt.hashSync(newPassword, 10);
    if (!hash) {
      return res.status(500).send({ message: "Error hashing new password" });
    }

    // Update the user's password
    const result = await User.findByIdAndUpdate(
      userId,
      { password: hash },
      { new: true }
    );
    if (!result) {
      return res.status(500).send({ message: "Failed to update password" });
    }

    res.status(200).send({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById({ _id: userId });
    res.status(200).send({ message: "User Get Successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
