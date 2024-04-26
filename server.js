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

app.get('/proposal', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'proposal.html'));
});

app.get('/masterclass', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'masterclass.html'));
});

app.get('/viewall', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'viewall.html'));
});

app.get('/explore', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'explore.html'));
});

app.get('/communityhub', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'communityhub.html'));
});

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/favorites', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'favorites.html'));
});

app.get('/viewall2', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'viewall2.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
