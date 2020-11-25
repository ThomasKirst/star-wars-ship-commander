import express from 'express';
import path from 'path';
import { dirname } from './helpers.js';

const __dirname = dirname(import.meta.url);

const app = express();
const port = process.env.PORT || 3001;

// Serve any static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
