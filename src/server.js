const path = require('path');
const express = require('express');

const { PORT = 3002 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
