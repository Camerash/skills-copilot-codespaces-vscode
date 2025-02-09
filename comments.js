// Create web server
// 1. Load express module
const express = require('express');
// 2. Create an Express application
const app = express();
// 3. Define a route
app.get('/comments', (req, res) => {
  // 4. Send a response
  res.send('This is the comments page');
});
// 5. Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// 6. Go to http://localhost:3000/comments