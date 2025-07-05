const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register Route
router.post("/register", async (req, res) => {
  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [
        { username: req.body.username },
        { email: req.body.email }
      ]
    });

    if (existingUser) {
      return res.status(400).json({ message: "Username or email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save user
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);

  } catch (err) {
    res.status(500).json(err);
  }
});


//Login
router.post("/login", async (req, res) => {
  try {
    // Find user by username
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json("User not found");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials");  

    const {password, ...others} = user._doc; // Exclude password from response
    
    res.status(200).json(others);
  } catch(err) {    
        res.status(500).json({ message: "Wrong credentials" });
    } 
});

module.exports = router;