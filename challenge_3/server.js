const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// const publicDirectory;

app.use(express.static('public'));
// need to use body-parser as middleware
app.use(bodyParser.json());

app.get('/details', (req, res) => {
  res.send('Get request time!');
})

app.post('/details', (req, res) => {
  console.log('post time', req.body)
  res.end();
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})