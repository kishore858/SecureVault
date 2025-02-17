const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { website, email, username, phone, password } = req.body;

    // Check if user already exists for the given website
    const existingUser = await User.findOne({ website, email });

    if (existingUser) {
      return res.status(400).json({ message: "User already signed up for this website. Please log in." });
    }

    // Assign a unique serial number
    const userCount = await User.countDocuments();
    const serialNumber = userCount + 1;

    const newUser = new User({ website, email, username, phone, password, serialNumber, signupDate: new Date() });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error signing up", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { website, email, password } = req.body;

    const user = await User.findOne({ website, email });

    if (!user) {
      return res.status(400).json({ message: "No account found for this website. Please sign up." });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password!" });
    }

    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
