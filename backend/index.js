const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

// CORS middleware (if your frontend is on a different domain)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

let startups = []; 

// Read data from JSON file on server startup
fs.readFile('startup_funding.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    startups = JSON.parse(data);
    console.log('JSON file successfully loaded.');
});

// Endpoint to get all startups
app.get('/startups', (req, res) => {
    res.json(startups);
});

// Endpoint to get startup details by ID
app.get('/startup/:id', (req, res) => {
    const startupId = req.params.id;
    const startup = startups.find((s) => s.SNo === parseInt(startupId)); // Assuming SNo is the unique identifier
    if (startup) {
        res.json(startup);
    } else {
        res.status(404).json({ message: 'Startup not found' });
    }
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
