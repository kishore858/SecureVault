const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const authRoutes = require("./routes/authRoutes");
//const fileRoutes = require("./routes/fileRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Default Route to Fix "Cannot GET /"
app.get("/", (req, res) => {
    res.send("SecureVault Backend is Running! 🚀");
});

// Routes
//app.use("/api/files", fileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/auth", require("./routes/authRoutes"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










