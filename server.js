const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080; // Change if needed

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/masterclass', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'masterclass.html'));
});

app.get('/explore', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'explore.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
