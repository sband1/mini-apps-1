const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const publicDir = path.join(__dirname, '/client/dist')
app.use(express.static(publicDir));

app.listen(PORT, ()=> {
  console.log(`Sever up and running on ${PORT}`);
})



