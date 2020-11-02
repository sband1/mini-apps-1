const express = require('express');
const app = express();
const PORT = 3000;

// const publicDirectory;

app.use(express.static('public'));
// need to use body-parser as middleware

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})