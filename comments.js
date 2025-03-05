// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    }
);






