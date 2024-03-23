const express = require("express");
const app = express();

// Middleware to log request method and URL
app.use(function(req, res, next) {
  console.log("Request Method: " + req.method + ", URL: " + req.url);
  next();
});

// Route to handle GET requests to /users/:userId/articles/:articleId
app.get("/users/:userId/articles/:articleId", function(req, res) {
  const userId = req.params.userId;
  const articleId = req.params.articleId;
  const message = "UserId: " + userId + ", ArticleId: " + articleId;
  console.log(message); // Log message to console
  res.send(message); // Send response
});

// Route to handle GET requests to /profile with query parameters
app.get("/profile", function(req, res) {
  const name = req.query.name;
  const age = req.query.age;
  console.log("Name:", name, "Age:", age); // Log query parameters to console
  res.send("Query parameters extracted");
});

// Route to handle GET requests to /profile/:userName/:country
app.get("/profile/:userName/:country", function(req, res) {
  const userName = req.params.userName;
  const country = req.params.country;
  console.log("UserName:", userName, "Country:", country); // Log parameters to console
  res.send("Profile Page");
});

// Route to handle POST requests to /
app.post("/", function(req, res) {
  res.send("Post request to dhanush");
});

// Route to handle PUT requests to /
app.put("/", function(req, res) {
  res.send("Put request to dhanush");
});

// Route to handle GET requests to /search with query parameters
app.get("/search", function(req, res) {
  const name = req.query.name;
  const age = req.query.age;
  
  // Check if both name and age parameters are present
  if (name && age) {
    res.send(`Searching for ${name}, age ${age}`);
  } else {
    res.send("Invalid parameters. Please provide both name and age.");
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
  console.log("Server running on port " + PORT);
});
