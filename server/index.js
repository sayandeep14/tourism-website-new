const express = require("express");
const cors = require("cors");
const path = require("path")
require("dotenv").config({ path: "./secrets.env" });
const awsKey = process.env.AWS_ACCESS_KEY_ID;
const awsSAKey = process.env.AWS_SECRET_ACCESS_KEY;
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Express App
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// AWS Config
AWS.config.update({
  region: "ap-south-1",
  accessKeyId: awsKey,
  secretAccessKey: awsSAKey,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const USER_TABLE = "Users";

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const params = {
    TableName: "contactMessages",
    Item: {
      id: uuidv4(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    },
  };

  try {
    await dynamodb.put(params).promise();
    console.log("Contact form submitted:", { name, email, message }); // 🖨️ log it!
    res.status(200).json({ message: "Message saved to DynamoDB!" });
  } catch (err) {
    console.error("DynamoDB Error:", err);
    res.status(500).json({ error: "Failed to save message." });
  }
});

app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if user already exists
  const existingUser = await dynamodb
    .get({
      TableName: USER_TABLE,
      Key: { email },
    })
    .promise();

  if (existingUser.Item) {
    return res.status(400).json({ error: "User already exists." });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Save new user
  const params = {
    TableName: USER_TABLE,
    Item: {
      email,
      name,
      passwordHash: hashedPassword,
      createdAt: new Date().toISOString(),
    },
  };

  try {
    await dynamodb.put(params).promise();
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  // Fetch user from DB
  const result = await dynamodb
    .get({
      TableName: USER_TABLE,
      Key: { email },
    })
    .promise();

  const user = result.Item;

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Sign JWT
  const token = jwt.sign(
    { email: user.email, name: user.name },
    "your_jwt_secret", // replace with env in production
    { expiresIn: "2h" }
  );

  res.status(200).json({ token, name: user.name, email: user.email });
});

// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.get("/", (req, res) => {
  res.send("Server works!");
});

app.listen(PORT, () => {
  console.log(`Server running`);
});
