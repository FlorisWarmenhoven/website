const express = require('express');
const path = require('path');
const port = process.env.PORT || 3035;
const app = express();
const compression = require('compression');

app.use(compression());

const publicPath = express.static(path.join(__dirname, '..', 'client', 'dist'));

// File path to index.html in client dist folder
const indexPath = path.join(__dirname, '..', 'client', 'dist/index.html');

app.use(compression());

// Serve static files from client dist folder
app.use(publicPath);

app.all('/*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(port, () => console.log('Server running on ', port));
