const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');

/**
 * Middleware captures requests for static files and sends them to the client
 */
app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => {
    console.log('App is listening on port', PORT);
});