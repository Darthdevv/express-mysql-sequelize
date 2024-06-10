import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';


export const registerUser = async (req, res, next) => {
try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json("please fill all fields");
    }

    const newEmail = email.toLowerCase();

    const emailExists = await User.findOne({ email: newEmail });

    if (emailExists) {
      return res.status(409).json("email already exists");
    }

    if (password.trim().length < 6) {
      return res.status(400).json("Password must be at least 6 characters");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
} catch (error) {
  res.status(500).json(error);
}
}


export const loginUser = async (req, res, next) => {
try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("please fill all fields");
    }

    const newEmail = email.toLowerCase();

    const user = await User.findOne({ email: newEmail });

    if (!user) {
      return res.status(400).json("User not found");
    }

    const comparePasswords = bcrypt.compare(password, user.password);

    if (!comparePasswords) {
      return res.status(400).json("Invalid c");
    }

    const { id, username } = user;

    res.status(200).json({ id, username });
} catch (error) {
  res.status(500).json(error);
}
};


export const logoutUser = async (req, res, next) => {
  try {
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};