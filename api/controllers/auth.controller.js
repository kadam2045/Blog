import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"; // if we write bcrypt only then it will give error in deplyment
export const signup = async (req, res) => {
  //   console.log("req", req.body);  instead of consoleing we can save in database
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(900).json({message: "all field is requird"});
  }

  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  console.log("newuser", newUser);
  try {
    await newUser.save();
    res.json("Signup Sucesss");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
